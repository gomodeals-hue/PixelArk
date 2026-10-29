const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const emailService = require('./services/emailService');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_DIR = path.join(__dirname, 'data');
const LEADS_FILE = path.join(DATA_DIR, 'leads.json');

// Ensure data directory and leads store exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(LEADS_FILE)) {
  fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2), 'utf-8');
}

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend files
app.use(express.static(path.join(__dirname)));

// Helper: Read leads
function getLeads() {
  try {
    const data = fs.readFileSync(LEADS_FILE, 'utf-8');
    return JSON.parse(data || '[]');
  } catch (err) {
    console.error('Error reading leads file:', err);
    return [];
  }
}

// Helper: Save leads
function saveLeads(leads) {
  try {
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error saving leads file:', err);
    return false;
  }
}

// ==========================================
// API ENDPOINTS
// ==========================================

// 1. Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    app: 'Pixlark Marketing Backend',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// 2. Submit Contact Inquiry / Lead & Trigger Emails
app.post(['/api/contact', '/api/leads'], async (req, res) => {
  try {
    const { fullName, email, phone, website, services, message } = req.body;

    // Validation
    if (!fullName || typeof fullName !== 'string' || !fullName.trim()) {
      return res.status(400).json({
        success: false,
        error: 'Full Name is required.'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(String(email).trim())) {
      return res.status(400).json({
        success: false,
        error: 'A valid business email address is required.'
      });
    }

    // Normalize services array
    let selectedServices = [];
    if (Array.isArray(services)) {
      selectedServices = services;
    } else if (typeof services === 'string' && services.trim()) {
      selectedServices = [services.trim()];
    }

    const newLead = {
      id: 'lead_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : '',
      website: website ? website.trim() : '',
      services: selectedServices,
      message: message ? message.trim() : '',
      status: 'NEW', // NEW | CONTACTED | QUALIFIED | CLOSED
      ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress || '',
      createdAt: new Date().toISOString(),
      formattedDate: new Date().toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short'
      })
    };

    const leads = getLeads();
    leads.unshift(newLead); // Put newest lead first

    if (saveLeads(leads)) {
      console.log(`[LEAD INTAKE] New lead recorded: ${newLead.fullName} (${newLead.email})`);

      // Asynchronously trigger emails in the background
      emailService.sendInquiryEmails(newLead).then(result => {
        console.log(`[EMAIL DISPATCH] Lead ${newLead.id} - Admin Alert: ${result.adminSent}, Client Confirmation: ${result.clientSent}`);
      }).catch(err => {
        console.error(`[EMAIL DISPATCH ERROR] Lead ${newLead.id}:`, err);
      });

      return res.status(201).json({
        success: true,
        message: 'Thank you! Your inquiry has been successfully received.',
        leadId: newLead.id
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Failed to record your inquiry. Please try again or email us directly.'
      });
    }
  } catch (err) {
    console.error('Server error during lead submission:', err);
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred.'
    });
  }
});

// 3. Test Email Dispatcher Endpoint
app.post('/api/test-email', async (req, res) => {
  try {
    const targetEmail = req.body.to || process.env.EMAIL_TO || 'contact@pixlarkmarketing.com';
    const sampleLead = {
      id: 'test_' + Date.now(),
      fullName: 'Test Prospect',
      email: targetEmail,
      phone: '+91 98765 43210',
      website: 'https://pixlarkmarketing.com',
      services: ['Digital Marketing', 'Lead Generation', 'Video Editing'],
      message: 'This is a test notification from Pixlark Marketing Backend email engine.',
      formattedDate: new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })
    };

    const result = await emailService.sendAdminNotification(sampleLead);
    if (result.success) {
      return res.json({
        success: true,
        message: `Test email successfully dispatched to ${targetEmail}`,
        messageId: result.messageId
      });
    } else {
      return res.status(500).json({
        success: false,
        error: result.error || 'Failed to send test email'
      });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 4. Get All Leads
app.get('/api/leads', (req, res) => {
  const leads = getLeads();
  res.json({
    success: true,
    total: leads.length,
    leads: leads
  });
});

// 5. Update Lead Status
app.patch('/api/leads/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const validStatuses = ['NEW', 'CONTACTED', 'QUALIFIED', 'CLOSED'];
  if (!status || !validStatuses.includes(status)) {
    return res.status(400).json({
      success: false,
      error: `Invalid status. Must be one of: ${validStatuses.join(', ')}`
    });
  }

  const leads = getLeads();
  const index = leads.findIndex(l => l.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      error: 'Lead not found.'
    });
  }

  leads[index].status = status;
  leads[index].updatedAt = new Date().toISOString();

  if (saveLeads(leads)) {
    res.json({
      success: true,
      message: `Lead status updated to ${status}`,
      lead: leads[index]
    });
  } else {
    res.status(500).json({
      success: false,
      error: 'Could not update lead.'
    });
  }
});

// 6. Delete a Lead
app.delete('/api/leads/:id', (req, res) => {
  const { id } = req.params;
  let leads = getLeads();
  const initialCount = leads.length;
  leads = leads.filter(l => l.id !== id);

  if (leads.length === initialCount) {
    return res.status(404).json({
      success: false,
      error: 'Lead not found.'
    });
  }

  if (saveLeads(leads)) {
    res.json({
      success: true,
      message: 'Lead removed successfully.'
    });
  } else {
    res.status(500).json({
      success: false,
      error: 'Could not delete lead.'
    });
  }
});

// ==========================================
// 7. BUSINESS SUITE AUTH & CAMPAIGNS API
// ==========================================

// Mock Auth Login
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ success: false, error: 'Email and password required.' });
  }

  const user = {
    name: email.includes('novastore') ? 'Sarah Jenkins' : (email.includes('director') ? 'Alex Rivera' : email.split('@')[0]),
    email: email,
    role: email.includes('director') ? 'Agency Director' : 'Business Owner',
    accountName: email.includes('novastore') ? 'NovaStore E-commerce' : 'Pixlark Master Portfolio',
    token: 'pixlark_jwt_' + Date.now()
  };

  res.json({ success: true, user });
});

// Mock Auth Signup
app.post('/api/auth/signup', (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ success: false, error: 'Email and password required.' });
  }

  const user = {
    name: name || email.split('@')[0],
    email: email,
    role: 'Business Owner',
    accountName: name ? `${name}'s Brand` : 'My Growth Business',
    token: 'pixlark_jwt_' + Date.now()
  };

  res.json({ success: true, user });
});

// Start Server
app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🚀 Pixlark Marketing Backend running on port ${PORT}`);
  console.log(`📧 Email Engine: Ready`);
  console.log(`🔗 Local URL: http://localhost:${PORT}`);
  console.log(`💼 Client Business Suite: http://localhost:${PORT}/dashboard.html`);
  console.log(`🔐 Sign In Portal: http://localhost:${PORT}/auth.html`);
  console.log(`====================================================`);
});
