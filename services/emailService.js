const nodemailer = require('nodemailer');
require('dotenv').config();

let transporter = null;
let isUsingTestAccount = false;

/**
 * Initialize or get Nodemailer transporter
 */
async function getTransporter() {
  if (transporter) return transporter;

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (host && user && pass) {
    // Custom configured SMTP (Gmail, SendGrid, Zoho, etc.)
    transporter = nodemailer.createTransport({
      host: host,
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: user,
        pass: pass
      }
    });
    isUsingTestAccount = false;
    console.log(`[EMAIL] Initialized production SMTP transporter (${host})`);
  } else {
    // Dev / Test account fallback (Ethereal or JSON logging)
    try {
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass
        }
      });
      isUsingTestAccount = true;
      console.log(`[EMAIL] Initialized development Ethereal SMTP test account (${testAccount.user})`);
    } catch (err) {
      console.warn('[EMAIL] Could not connect to Ethereal, falling back to console preview logger:', err.message);
      transporter = {
        sendMail: async (mailOptions) => {
          console.log('\n--- [EMAIL DISPATCH PREVIEW] ---');
          console.log(`To: ${mailOptions.to}`);
          console.log(`Subject: ${mailOptions.subject}`);
          console.log('--------------------------------');
          return { messageId: 'mock_' + Date.now() };
        }
      };
      isUsingTestAccount = true;
    }
  }

  return transporter;
}

/**
 * 1. Send Internal Lead Alert to Pixlark Marketing Team
 */
async function sendAdminNotification(lead) {
  try {
    const transport = await getTransporter();
    const adminEmail = process.env.EMAIL_TO || 'contact@pixlarkmarketing.com';
    const fromAddress = process.env.EMAIL_FROM || '"Pixlark Lead Engine" <contact@pixlarkmarketing.com>';

    const servicesList = (lead.services && lead.services.length)
      ? lead.services.map(s => `<span style="background:#e0f2fe; color:#0369a1; padding:4px 10px; border-radius:4px; font-size:12px; font-weight:bold; display:inline-block; margin:2px;">${s}</span>`).join(' ')
      : '<em>No specific service selected</em>';

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px; color: #0f172a; }
          .email-card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden; }
          .header { background: #0f172a; padding: 24px; text-align: center; }
          .header h1 { margin: 0; font-size: 22px; color: #00A6F4; letter-spacing: -0.5px; }
          .header p { margin: 4px 0 0 0; font-size: 12px; color: #FF6200; text-transform: uppercase; letter-spacing: 1px; font-weight: bold; }
          .content { padding: 28px; }
          .badge-row { margin-bottom: 20px; }
          .new-badge { background: #fee2e2; color: #dc2626; padding: 4px 10px; border-radius: 4px; font-size: 11px; font-weight: bold; text-transform: uppercase; }
          .lead-table { width: 100%; border-collapse: collapse; margin-top: 16px; margin-bottom: 20px; }
          .lead-table td { padding: 10px 12px; border-bottom: 1px solid #f1f5f9; font-size: 14px; }
          .lead-table td.label { font-weight: 600; color: #64748b; width: 140px; }
          .message-box { background: #f8fafc; border-left: 4px solid #00A6F4; padding: 14px; border-radius: 4px; font-size: 14px; color: #334155; margin-top: 8px; }
          .cta-btn { display: inline-block; background: #FF6200; color: #ffffff !important; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 14px; margin-top: 16px; }
          .footer { background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 16px; text-align: center; font-size: 12px; color: #94a3b8; }
        </style>
      </head>
      <body>
        <div class="email-card">
          <div class="header">
            <h1>Pixlark Marketing</h1>
            <p>New Client Growth Inquiry</p>
          </div>
          <div class="content">
            <div class="badge-row">
              <span class="new-badge">⚡ High Priority Lead</span>
              <span style="float: right; font-size: 12px; color: #64748b;">${lead.formattedDate || new Date().toLocaleString()}</span>
            </div>

            <p style="font-size: 15px; line-height: 1.5;">
              You have received a new consultation inquiry from <strong>${lead.fullName}</strong>.
            </p>

            <table class="lead-table">
              <tr>
                <td class="label">Full Name:</td>
                <td><strong>${lead.fullName}</strong></td>
              </tr>
              <tr>
                <td class="label">Business Email:</td>
                <td><a href="mailto:${lead.email}" style="color:#00A6F4; text-decoration:none; font-weight:600;">${lead.email}</a></td>
              </tr>
              <tr>
                <td class="label">Phone / WhatsApp:</td>
                <td>${lead.phone ? `<a href="tel:${lead.phone}" style="color:#0f172a; text-decoration:none;">${lead.phone}</a>` : '<em>Not provided</em>'}</td>
              </tr>
              <tr>
                <td class="label">Website / Brand:</td>
                <td>${lead.website ? `<a href="${lead.website}" target="_blank" style="color:#00A6F4;">${lead.website}</a>` : '<em>Not provided</em>'}</td>
              </tr>
              <tr>
                <td class="label">Target Services:</td>
                <td>${servicesList}</td>
              </tr>
              <tr>
                <td class="label">Lead ID:</td>
                <td><code>${lead.id}</code></td>
              </tr>
            </table>

            <h4 style="margin: 20px 0 8px 0; font-size: 14px; text-transform: uppercase; color: #475569;">Prospect Message / Scaling Goals:</h4>
            <div class="message-box">
              ${lead.message ? lead.message.replace(/\n/g, '<br>') : '<em>No additional notes provided.</em>'}
            </div>

            <div style="text-align: center; margin-top: 24px;">
              <a href="mailto:${lead.email}?subject=Pixlark%20Marketing%20-%20Discovery%20Strategy%20Follow-up" class="cta-btn">
                Reply to ${lead.fullName} Direct
              </a>
            </div>
          </div>
          <div class="footer">
            Pixlark Marketing Lead Intake Engine &bull; Helping Brands Scale with Creative Marketing
          </div>
        </div>
      </body>
      </html>
    `;

    const info = await transport.sendMail({
      from: fromAddress,
      to: adminEmail,
      subject: `🚨 New Lead: ${lead.fullName} - Pixlark Marketing Inquiry`,
      text: `New Lead from ${lead.fullName} (${lead.email}). Services: ${(lead.services || []).join(', ')}. Message: ${lead.message}`,
      html: htmlContent
    });

    console.log(`[EMAIL] Admin notification sent (Message ID: ${info.messageId})`);
    if (isUsingTestAccount && nodemailer.getTestMessageUrl) {
      const previewUrl = nodemailer.getTestMessageUrl(info);
      if (previewUrl) console.log(`[EMAIL PREVIEW (Admin)]: ${previewUrl}`);
    }

    return { success: true, messageId: info.messageId };
  } catch (err) {
    console.error('[EMAIL ERROR] Failed to send admin notification:', err);
    return { success: false, error: err.message };
  }
}

/**
 * 2. Send Autoresponder Confirmation to the Prospect
 */
async function sendClientConfirmation(lead) {
  try {
    const transport = await getTransporter();
    const fromAddress = process.env.EMAIL_FROM || '"Pixlark Marketing" <contact@pixlarkmarketing.com>';

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px; color: #0f172a; }
          .email-card { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden; }
          .header { background: #0f172a; padding: 28px 24px; text-align: center; }
          .header h1 { margin: 0; font-size: 24px; color: #00A6F4; font-weight: 800; }
          .header p { margin: 6px 0 0 0; font-size: 13px; color: #cbd5e1; }
          .content { padding: 32px 28px; line-height: 1.7; font-size: 15px; color: #334155; }
          .callout { background: #f0fdf4; border-left: 4px solid #22c55e; padding: 16px; border-radius: 4px; margin: 20px 0; font-size: 14px; color: #166534; }
          .steps-list { margin: 18px 0; padding-left: 20px; }
          .steps-list li { margin-bottom: 8px; }
          .founder-signoff { border-top: 1px solid #f1f5f9; padding-top: 20px; margin-top: 24px; }
          .footer { background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 20px; text-align: center; font-size: 12px; color: #94a3b8; }
          .social-links a { color: #00A6F4; text-decoration: none; margin: 0 8px; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="email-card">
          <div class="header">
            <h1>Pixlark Marketing</h1>
            <p>Helping Brands Scale with Creative Marketing</p>
          </div>
          <div class="content">
            <h3 style="margin-top:0; color:#0f172a; font-size:18px;">Hi ${lead.fullName},</h3>
            <p>
              Thank you for reaching out to <strong>Pixlark Marketing</strong>! We have received your inquiry and project details.
            </p>

            <div class="callout">
              <strong>✓ Confirmation:</strong> Your inquiry (Reference: <code>${lead.id}</code>) has been routed to our senior marketing strategists.
            </div>

            <h4 style="color:#0f172a; margin-bottom:8px;">What Happens Next:</h4>
            <ol class="steps-list">
              <li><strong>Funnel & Market Review:</strong> Our team will review your target goals and existing brand touchpoints.</li>
              <li><strong>Tailored Growth Strategy:</strong> We formulate a high-impact roadmap specific to your milestones.</li>
              <li><strong>Direct Response:</strong> A senior specialist will reach out within <strong>4 business hours</strong> to discuss the next steps.</li>
            </ol>

            <p>
              In the meantime, feel free to explore our case studies or connect with us directly on LinkedIn.
            </p>

            <div class="founder-signoff">
              <strong>Team Pixlark Marketing</strong><br>
              <span style="font-size:13px; color:#64748b;">Digital Ads, Social Media &amp; Performance Growth Specialists</span><br>
              <span style="font-size:13px; color:#00A6F4;">contact@pixlarkmarketing.com</span>
            </div>
          </div>
          <div class="footer">
            <div class="social-links" style="margin-bottom:8px;">
              <a href="https://in.linkedin.com/in/pixlark-marketing" target="_blank">LinkedIn Profile</a> &bull;
              <a href="mailto:contact@pixlarkmarketing.com">Email Us</a>
            </div>
            &copy; ${new Date().getFullYear()} Pixlark Marketing. All rights reserved.
          </div>
        </div>
      </body>
      </html>
    `;

    const info = await transport.sendMail({
      from: fromAddress,
      to: lead.email,
      subject: `Thank you for contacting Pixlark Marketing - We've received your request`,
      text: `Hi ${lead.fullName},\n\nThank you for contacting Pixlark Marketing! We have received your inquiry and our senior team will get back to you within 4 business hours.\n\nBest regards,\nTeam Pixlark Marketing`,
      html: htmlContent
    });

    console.log(`[EMAIL] Client confirmation sent to ${lead.email} (Message ID: ${info.messageId})`);
    if (isUsingTestAccount && nodemailer.getTestMessageUrl) {
      const previewUrl = nodemailer.getTestMessageUrl(info);
      if (previewUrl) console.log(`[EMAIL PREVIEW (Client)]: ${previewUrl}`);
    }

    return { success: true, messageId: info.messageId };
  } catch (err) {
    console.error('[EMAIL ERROR] Failed to send client confirmation:', err);
    return { success: false, error: err.message };
  }
}

/**
 * 3. Unified Dispatcher for Lead Intake
 */
async function sendInquiryEmails(lead) {
  // Run concurrently
  const [adminResult, clientResult] = await Promise.allSettled([
    sendAdminNotification(lead),
    sendClientConfirmation(lead)
  ]);

  return {
    adminSent: adminResult.status === 'fulfilled' && adminResult.value.success,
    clientSent: clientResult.status === 'fulfilled' && clientResult.value.success
  };
}

module.exports = {
  getTransporter,
  sendAdminNotification,
  sendClientConfirmation,
  sendInquiryEmails
};
