/**
 * PIXLARK BUSINESS SUITE — REAL-TIME REACTIVE CLIENT ENGINE
 * Meta Business Suite Fullscreen Studio, Connected Social Channels & Ad Assets Hub
 */

// ==========================================
// 1. STORAGE KEYS & DICTIONARIES
// ==========================================
const STORAGE_KEYS = {
  ACCOUNTS: 'pixlark_suite_accounts',
  ACTIVE_ACC: 'pixlark_suite_active_account',
  CAMPAIGNS: 'pixlark_suite_campaigns',
  POSTS: 'pixlark_suite_posts',
  THREADS: 'pixlark_suite_threads',
  LEADS: 'pixlark_leads',
  SETTINGS: 'pixlark_suite_settings',
  SOCIAL_ASSETS: 'pixlark_suite_social_assets',
  STREAM_ACTIVE: 'pixlark_suite_stream_active',
  AUTH_USER: 'pixlark_auth_user',
  CURRENCY: 'pixlark_suite_currency',
  LANGUAGE: 'pixlark_language'
};

const CURRENCY_CONFIG = {
  'USD': { symbol: '$', label: 'USD ($)', code: 'USD' },
  'EUR': { symbol: '€', label: 'EUR (€)', code: 'EUR' },
  'GBP': { symbol: '£', label: 'GBP (£)', code: 'GBP' },
  'INR': { symbol: '₹', label: 'INR (₹)', code: 'INR' },
  'CAD': { symbol: '$', label: 'CAD ($)', code: 'CAD' },
  'AUD': { symbol: '$', label: 'AUD ($)', code: 'AUD' },
  'AED': { symbol: 'AED ', label: 'AED (AED)', code: 'AED' },
  'JPY': { symbol: '¥', label: 'JPY (¥)', code: 'JPY' }
};

const TRANSLATIONS = {
  en: {
    suite_badge: "Client Operations",
    nav_heading_growth: "Growth & Performance",
    tab_overview: "Overview",
    tab_ads: "Ads Manager",
    tab_planner: "Planner & Content",
    nav_heading_crm: "Communication & CRM",
    tab_inbox: "Unified Inbox",
    tab_leads: "Lead Center",
    nav_heading_analytics: "Analytics & Operations",
    tab_insights: "Insights & ROAS",
    tab_settings: "Settings & Tracking",
    title_overview: "Business Overview & KPIs",
    btn_lead: "+ Lead",
    btn_create_campaign: "Create Campaign",
    btn_website: "Website",
    kpi_spend: "Total Ad Spend",
    kpi_revenue: "Attributed Revenue",
    kpi_attributed_return: "Direct attributed return",
    kpi_roas: "Blended ROAS",
    kpi_target_roas: "Target: 3.50x+",
    kpi_leads: "Inbound Leads",
    chart_title: "Performance Trajectory (Ad Spend vs Attributed Revenue)",
    chart_live_stream: "Live Account Stream",
    growth_engine_title: "Growth Operations Engine",
    active_campaigns_title: "Active Live Campaigns",
    btn_new_campaign: "+ New Campaign",
    btn_full_ads_manager: "Full Ads Manager →",
    th_status: "Status",
    th_campaign_name: "Campaign Name & Network",
    th_daily_budget: "Daily Budget",
    th_spend: "Spend",
    th_revenue: "Revenue",
    th_roas: "ROAS",
    th_ctr: "CTR",
    th_cpm: "CPM",
    th_conversions: "Conversions",
    th_actions: "Actions",
    empty_campaigns_title: "No campaigns launched yet",
    empty_campaigns_desc: "Create your first ad campaign across Meta, Google, or TikTok to start tracking live performance.",
    btn_create_first_campaign: "Create First Campaign",
    recent_leads_title: "Recent Inbound CRM Leads",
    btn_add_lead: "+ Add Lead",
    btn_open_lead_center: "Open Lead Center →",
    th_lead_contact: "Lead Name & Contact",
    th_service: "Service Area",
    th_budget: "Estimated Budget",
    th_stage: "Stage",
    th_received: "Received",
    th_action: "Action",
    empty_leads_title: "No CRM leads recorded yet",
    empty_leads_desc: "Inbound inquiries from the public website, contact forms, and chats will automatically appear here in real time.",
    btn_record_lead: "+ Record Inbound Lead",
    ads_manager_title: "Campaign Operations & Budget Allocator",
    btn_pause_all: "Pause All",
    btn_resume_all: "Resume All",
    filter_all_networks: "All Networks",
    empty_filter_title: "No campaigns match your filter",
    empty_filter_desc: "Launch a new ad campaign or switch your network filter to see active items.",
    planner_title: "Multi-Platform Content Calendar",
    btn_schedule_post: "Schedule Post",
    inbox_title: "Messages & Inquiries",
    empty_inbox_title: "No active conversations",
    empty_inbox_desc: "Client inquiries and website chat interactions will populate here.",
    btn_start_chat: "+ Start Conversation",
    btn_simulate_reply: "Simulate Reply",
    btn_tag_lead: "Tag Lead",
    btn_send: "Send",
    leads_crm_title: "Incoming Leads Pipeline & CRM",
    btn_export_csv: "Export CSV",
    filter_all_leads: "All Leads",
    filter_new: "New",
    filter_in_review: "In Review",
    filter_contacted: "Contacted",
    filter_proposal: "Proposal Sent",
    filter_won: "Deals Won",
    th_lead_email: "Lead Name & Email",
    th_phone: "Phone / WhatsApp",
    th_crm_stage: "CRM Pipeline Stage",
    th_date_received: "Date Received",
    empty_leads_stage_title: "No leads in this pipeline view",
    empty_leads_stage_desc: "New inquiries submitted across the site will automatically populate here in real-time.",
    insights_device_title: "Device & Traffic Allocation",
    insights_network_title: "Network Revenue & Spend Distribution",
    insights_diagnostics_title: "Live Performance Diagnostics",
    settings_title: "Business Account & Pixel Health",
    settings_desc: "Manage your business profile, Meta Pixel ID, Conversions API (CAPI) tokens, and automated lead alerts.",
    label_business_name: "Business Account Name",
    label_ad_account_id: "Ad Account ID",
    label_meta_pixel_id: "Meta Pixel ID",
    label_capi_token: "Conversions API (CAPI) Access Token",
    label_currency: "Currency & Symbol",
    label_notify_email: "Alert Email Notification",
    btn_save_settings: "Save Settings",
    data_management_title: "Data Storage & Diagnostics",
    data_management_desc: "Manage your persistent browser storage, backup configurations, or purge all data to clean state.",
    btn_export_backup: "Export JSON Backup",
    btn_purge_data: "Purge All Data (Start Clean)"
  },
  es: {
    suite_badge: "Operaciones de Clientes",
    nav_heading_growth: "Crecimiento y Rendimiento",
    tab_overview: "Resumen",
    tab_ads: "Administrador de Anuncios",
    tab_planner: "Planificador de Contenido",
    nav_heading_crm: "Comunicación y CRM",
    tab_inbox: "Bandeja Unificada",
    tab_leads: "Centro de Clientes",
    nav_heading_analytics: "Analítica y Operaciones",
    tab_insights: "Informes y ROAS",
    tab_settings: "Ajustes y Seguimiento",
    title_overview: "Resumen Empresarial y KPIs",
    btn_lead: "+ Prospecto",
    btn_create_campaign: "Crear Campaña",
    btn_website: "Sitio Web",
    kpi_spend: "Gasto Total en Anuncios",
    kpi_revenue: "Ingresos Atribuidos",
    kpi_attributed_return: "Retorno directo atribuido",
    kpi_roas: "ROAS Combinado",
    kpi_target_roas: "Meta: 3.50x+",
    kpi_leads: "Prospectos Entrantes",
    chart_title: "Trayectoria de Rendimiento (Gasto vs Ingresos)",
    chart_live_stream: "Flujo de Cuenta en Vivo",
    growth_engine_title: "Motor de Operaciones de Crecimiento",
    active_campaigns_title: "Campañas Activas en Vivo",
    btn_new_campaign: "+ Nueva Campaña",
    btn_full_ads_manager: "Administrador Completo →",
    th_status: "Estado",
    th_campaign_name: "Nombre de Campaña y Red",
    th_daily_budget: "Presupuesto Diario",
    th_spend: "Gasto",
    th_revenue: "Ingresos",
    th_roas: "ROAS",
    th_ctr: "CTR",
    th_cpm: "CPM",
    th_conversions: "Conversiones",
    th_actions: "Acciones",
    btn_save_settings: "Guardar Ajustes"
  }
};

const suiteState = {
  activeTab: 'overview',
  activeAccount: null,
  accounts: [],
  campaigns: [],
  posts: [],
  threads: [],
  leads: [],
  socialAssets: [],
  settings: {},
  
  // Currency & Language
  currency: 'USD',
  language: 'en',

  // Active UI filters
  activeThreadId: null,
  activeInboxFilter: 'all',
  activeLeadFilter: 'all',
  activeCampaignFilter: 'all',
  campaignSearchQuery: '',
  leadSearchQuery: '',

  // Studio State
  studioCurrentStep: 'campaign',
  studioObjective: 'sales',
  
  // Real-time Engine
  streamActive: true,
  liveTimer: null
};

// ==========================================
// 2. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initStorage();
  initAuthSession();
  initNavigationTabs();
  initCurrencyAndLanguage();
  initLiveStreamEngine();
  initCrossTabSync();
  renderAllViews();
});

function initStorage() {
  try {
    // 1. Currency & Language
    const savedCurr = localStorage.getItem(STORAGE_KEYS.CURRENCY);
    if (savedCurr && CURRENCY_CONFIG[savedCurr]) {
      suiteState.currency = savedCurr;
    }

    const savedLang = localStorage.getItem(STORAGE_KEYS.LANGUAGE);
    if (savedLang && TRANSLATIONS[savedLang]) {
      suiteState.language = savedLang;
    }

    // 2. Accounts
    const savedAccounts = localStorage.getItem(STORAGE_KEYS.ACCOUNTS);
    if (savedAccounts) {
      suiteState.accounts = JSON.parse(savedAccounts);
    } else {
      suiteState.accounts = [
        {
          id: 'acc_' + Date.now(),
          name: 'My Growth Agency',
          role: 'Business Owner',
          adAccounts: 'act_7829104',
          pixelStatus: 'Active (100% Match)',
          currency: suiteState.currency,
          pixelId: 'pix_8849201948',
          capiToken: 'capi_live_token_77192',
          notifyEmail: 'contact@pixlarkmarketing.com'
        }
      ];
      saveToStorage(STORAGE_KEYS.ACCOUNTS, suiteState.accounts);
    }

    let activeAccId = localStorage.getItem(STORAGE_KEYS.ACTIVE_ACC);
    if (!activeAccId || !suiteState.accounts.find(a => a.id === activeAccId)) {
      activeAccId = suiteState.accounts[0].id;
      localStorage.setItem(STORAGE_KEYS.ACTIVE_ACC, activeAccId);
    }
    suiteState.activeAccount = suiteState.accounts.find(a => a.id === activeAccId);

    // 3. Campaigns, Posts, Threads, Leads
    const savedCampaigns = localStorage.getItem(STORAGE_KEYS.CAMPAIGNS);
    suiteState.campaigns = savedCampaigns ? JSON.parse(savedCampaigns) : [];

    const savedPosts = localStorage.getItem(STORAGE_KEYS.POSTS);
    suiteState.posts = savedPosts ? JSON.parse(savedPosts) : [];

    const savedThreads = localStorage.getItem(STORAGE_KEYS.THREADS);
    suiteState.threads = savedThreads ? JSON.parse(savedThreads) : [];
    if (suiteState.threads.length > 0) {
      suiteState.activeThreadId = suiteState.threads[0].id;
    }

    const savedLeads = localStorage.getItem(STORAGE_KEYS.LEADS);
    suiteState.leads = savedLeads ? JSON.parse(savedLeads) : [];

    // 4. Social & Ad Channel Assets
    const savedAssets = localStorage.getItem(STORAGE_KEYS.SOCIAL_ASSETS);
    suiteState.socialAssets = savedAssets ? JSON.parse(savedAssets) : [
      { id: 'soc_ig_1', platform: 'instagram', name: 'Instagram Business Profile', handle: '@pixlark.growth', status: 'connected', verified: true, date: 'Live Synced' },
      { id: 'soc_fb_1', platform: 'meta', name: 'Pixlark Marketing Official', handle: 'Page ID: 109283749102', status: 'connected', verified: true, date: 'Live Synced' },
      { id: 'soc_wa_1', platform: 'whatsapp', name: 'WhatsApp Growth Hotline', handle: '+1 (415) 890-2391', status: 'connected', verified: true, date: 'Live Synced' },
      { id: 'soc_gg_1', platform: 'google', name: 'Google Ads Account', handle: 'Customer ID: 619-820-4102', status: 'connected', verified: true, date: 'Live Synced' },
      { id: 'soc_tt_1', platform: 'tiktok', name: 'TikTok Ads Manager', handle: 'Advertiser ID: 719283401', status: 'connected', verified: true, date: 'Live Synced' }
    ];
    saveToStorage(STORAGE_KEYS.SOCIAL_ASSETS, suiteState.socialAssets);

    const savedSettings = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    suiteState.settings = savedSettings ? JSON.parse(savedSettings) : {
      currency: suiteState.currency,
      autoReplyEnabled: true
    };

    const savedStream = localStorage.getItem(STORAGE_KEYS.STREAM_ACTIVE);
    suiteState.streamActive = savedStream !== null ? savedStream === 'true' : true;

  } catch (err) {
    console.error('Error reading localStorage in Pixlark Suite:', err);
  }
}

function saveToStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save to localStorage:', e);
  }
}

// User Auth Session Header
function initAuthSession() {
  let user = null;
  try {
    const storedUser = localStorage.getItem(STORAGE_KEYS.AUTH_USER);
    if (storedUser) user = JSON.parse(storedUser);
  } catch (e) {}

  if (!user) {
    user = {
      name: 'Client User',
      email: 'client@pixlark.com',
      role: 'Business Owner'
    };
  }

  const userNameEl = document.getElementById('suiteUserName');
  const userRoleEl = document.getElementById('suiteUserRole');
  const userAvatarEl = document.getElementById('suiteUserAvatar');

  if (userNameEl) userNameEl.textContent = user.name;
  if (userRoleEl) userRoleEl.textContent = user.role || 'Business Owner';
  if (userAvatarEl) userAvatarEl.textContent = (user.name || 'U').charAt(0).toUpperCase();

  updateAccountHeaderUI();
}

function updateAccountHeaderUI() {
  if (!suiteState.activeAccount) return;
  const nameEl = document.getElementById('activeAccountName');
  const avatarEl = document.getElementById('activeAccountAvatar');
  if (nameEl) nameEl.textContent = suiteState.activeAccount.name;
  if (avatarEl) avatarEl.textContent = suiteState.activeAccount.name.charAt(0).toUpperCase();
}

function handleSuiteLogout() {
  if (typeof firebaseSignOutUser === 'function') {
    firebaseSignOutUser();
  } else {
    try {
      localStorage.removeItem(STORAGE_KEYS.AUTH_USER);
    } catch (e) {}
    window.location.href = 'auth.html';
  }
}
window.handleSuiteLogout = handleSuiteLogout;

// ==========================================
// 3. CURRENCY & LANGUAGE ENGINE
// ==========================================
function initCurrencyAndLanguage() {
  const currSelect = document.getElementById('globalCurrencySelect');
  if (currSelect) currSelect.value = suiteState.currency;

  const langSelect = document.getElementById('globalLanguageSelect');
  if (langSelect) langSelect.value = suiteState.language;

  applyLanguage();
  updateCurrencySymbols();
}

function changeSuiteCurrency(currCode) {
  if (!CURRENCY_CONFIG[currCode]) return;
  suiteState.currency = currCode;
  localStorage.setItem(STORAGE_KEYS.CURRENCY, currCode);

  const currSelect = document.getElementById('globalCurrencySelect');
  if (currSelect) currSelect.value = currCode;

  const settingCurr = document.getElementById('settingCurrency');
  if (settingCurr) settingCurr.value = currCode;

  if (suiteState.activeAccount) {
    suiteState.activeAccount.currency = currCode;
    saveToStorage(STORAGE_KEYS.ACCOUNTS, suiteState.accounts);
  }

  updateCurrencySymbols();
  renderAllViews();
  showToast(`Currency changed to ${CURRENCY_CONFIG[currCode].label}`);
}
window.changeSuiteCurrency = changeSuiteCurrency;

function updateCurrencySymbols() {
  const sym = getCurrencySymbol();
  document.querySelectorAll('.suite-curr-symbol').forEach(el => {
    el.textContent = sym;
  });
}

function getCurrencySymbol() {
  return CURRENCY_CONFIG[suiteState.currency]?.symbol || '$';
}

function formatMoney(amount) {
  const sym = getCurrencySymbol();
  const num = typeof amount === 'number' ? amount : parseFloat(amount) || 0;
  return `${sym}${num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function changeSuiteLanguage(langCode) {
  if (!TRANSLATIONS[langCode]) langCode = 'en';
  suiteState.language = langCode;
  localStorage.setItem(STORAGE_KEYS.LANGUAGE, langCode);

  const langSelect = document.getElementById('globalLanguageSelect');
  if (langSelect) langSelect.value = langCode;

  applyLanguage();
  showToast(`Language switched to ${langCode.toUpperCase()}`);
}
window.changeSuiteLanguage = changeSuiteLanguage;

function applyLanguage() {
  const dict = TRANSLATIONS[suiteState.language] || TRANSLATIONS.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    } else if (TRANSLATIONS.en[key]) {
      el.textContent = TRANSLATIONS.en[key];
    }
  });

  if (suiteState.language === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
  }
}

// ==========================================
// 4. NAVIGATION & TABS
// ==========================================
function initNavigationTabs() {
  const navLinks = document.querySelectorAll('.suite-nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const tabId = link.getAttribute('data-tab');
      if (!tabId) return;
      switchTab(tabId);
    });
  });
}

function switchTab(tabId) {
  suiteState.activeTab = tabId;

  document.querySelectorAll('.suite-nav-link').forEach(link => {
    if (link.getAttribute('data-tab') === tabId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  document.querySelectorAll('.suite-tab-pane').forEach(pane => {
    pane.classList.remove('active');
  });

  const activePane = document.getElementById(`tab_${tabId}`);
  if (activePane) {
    activePane.classList.add('active');
  }

  const titleMap = {
    'overview': 'Business Overview & KPIs',
    'ads': 'Ads Manager & Campaign Operations',
    'planner': 'Content Planner & Schedule',
    'inbox': 'Unified Omnichannel Inbox',
    'leads': 'Lead Center & Customer CRM',
    'insights': 'Insights & Conversion Diagnostics',
    'settings': 'Settings & Tracking Configurations'
  };

  const pageTitleEl = document.getElementById('suitePageTitle');
  if (pageTitleEl) {
    pageTitleEl.textContent = titleMap[tabId] || 'Business Suite';
  }

  if (tabId === 'overview') renderOverview();
  if (tabId === 'ads') renderAdsManager();
  if (tabId === 'planner') renderPlanner();
  if (tabId === 'inbox') { renderInboxThreads(); renderActiveChat(); }
  if (tabId === 'leads') renderLeads();
  if (tabId === 'insights') renderInsights();
  if (tabId === 'settings') { renderSettingsForm(); renderConnectedSocialAssets(); }
}
window.switchTab = switchTab;

// ==========================================
// 5. METRICS & OVERVIEW ENGINE
// ==========================================
function calculateMetrics() {
  let totalSpend = 0;
  let totalRevenue = 0;
  let totalImpressions = 0;
  let totalClicks = 0;
  let totalConversions = 0;
  let activeCampaigns = 0;

  suiteState.campaigns.forEach(c => {
    totalSpend += (c.spend || 0);
    totalRevenue += (c.revenue || 0);
    totalImpressions += (c.impressions || 0);
    totalClicks += (c.clicks || 0);
    totalConversions += (c.leadsOrOrders || 0);
    if (c.status === 'active') activeCampaigns++;
  });

  const roas = totalSpend > 0 ? (totalRevenue / totalSpend) : 0;
  const leadsCount = suiteState.leads.length;
  const avgCpa = leadsCount > 0 && totalSpend > 0 ? (totalSpend / leadsCount) : (totalConversions > 0 ? totalSpend / totalConversions : 0);

  return {
    totalSpend,
    totalRevenue,
    roas,
    totalImpressions,
    totalClicks,
    totalConversions,
    leadsCount,
    activeCampaigns,
    avgCpa
  };
}

function renderOverview() {
  const m = calculateMetrics();

  const spendEl = document.getElementById('kpiTotalSpend');
  const revEl = document.getElementById('kpiTotalRevenue');
  const roasEl = document.getElementById('kpiRoas');
  const leadsEl = document.getElementById('kpiLeadsCount');
  const activeCountEl = document.getElementById('kpiActiveCampaignsCount');
  const cpaTextEl = document.getElementById('kpiCpaText');

  if (spendEl) spendEl.textContent = formatMoney(m.totalSpend);
  if (revEl) revEl.textContent = formatMoney(m.totalRevenue);
  if (roasEl) roasEl.textContent = `${m.roas.toFixed(2)}x`;
  if (leadsEl) leadsEl.textContent = m.leadsCount.toString();
  if (activeCountEl) activeCountEl.textContent = `${m.activeCampaigns} active campaign${m.activeCampaigns === 1 ? '' : 's'}`;
  if (cpaTextEl) cpaTextEl.textContent = m.avgCpa > 0 ? `Average CPA: ${formatMoney(m.avgCpa)}` : `Recorded Inbound Pipeline`;

  const badgeAds = document.getElementById('navBadgeAds');
  if (badgeAds) badgeAds.textContent = `${m.activeCampaigns} Live`;

  const badgeLeads = document.getElementById('navBadgeLeads');
  if (badgeLeads) {
    badgeLeads.style.display = m.leadsCount > 0 ? 'inline-block' : 'none';
    badgeLeads.textContent = m.leadsCount.toString();
  }

  const unreadCount = suiteState.threads.filter(t => t.unread).length;
  const badgeInbox = document.getElementById('navBadgeInbox');
  if (badgeInbox) {
    badgeInbox.style.display = unreadCount > 0 ? 'inline-block' : 'none';
    badgeInbox.textContent = `${unreadCount} New`;
  }

  updateTopbarConnectedCount();
  renderOverviewChart(m);
  renderGrowthRecommendations(m);
  renderOverviewCampaignsTable();
  renderOverviewRecentLeadsTable();
}

function updateTopbarConnectedCount() {
  const countEl = document.getElementById('topbarConnectedCount');
  if (!countEl) return;
  const connected = suiteState.socialAssets.filter(a => a.status === 'connected').length;
  countEl.textContent = `${connected} Asset${connected === 1 ? '' : 's'} Connected`;
}

function renderOverviewChart(m) {
  const container = document.getElementById('overviewChartContainer');
  if (!container) return;

  if (suiteState.campaigns.length === 0) {
    container.innerHTML = `
      <div class="suite-empty-state" style="padding:32px 10px;">
        <div class="suite-empty-icon" style="width:44px; height:44px; font-size:1.2rem;"><i class="fa-solid fa-chart-line"></i></div>
        <div class="suite-empty-title" style="font-size:0.95rem;">No performance data stream yet</div>
        <div class="suite-empty-desc" style="font-size:0.8rem; margin-bottom:12px;">Launch advertising campaigns in the Studio to generate live performance trajectory graphs.</div>
        <button class="btn-suite-primary" onclick="openCreateCampaignStudio()" style="font-size:0.8rem; padding:6px 14px;">+ Create First Campaign</button>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div style="height:210px; width:100%; position:relative; display:flex; align-items:flex-end;">
      <svg viewBox="0 0 600 180" style="width:100%; height:100%; overflow:visible;">
        <defs>
          <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#10B981" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#10B981" stop-opacity="0.0"/>
          </linearGradient>
          <linearGradient id="spendGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#0052FF" stop-opacity="0.25"/>
            <stop offset="100%" stop-color="#0052FF" stop-opacity="0.0"/>
          </linearGradient>
        </defs>
        <line x1="0" y1="40" x2="600" y2="40" stroke="#F1F5F9" stroke-width="1"/>
        <line x1="0" y1="90" x2="600" y2="90" stroke="#F1F5F9" stroke-width="1"/>
        <line x1="0" y1="140" x2="600" y2="140" stroke="#F1F5F9" stroke-width="1"/>

        <path d="M 0 160 Q 150 120, 300 70 T 600 25 L 600 180 L 0 180 Z" fill="url(#revenueGrad)" />
        <path d="M 0 160 Q 150 120, 300 70 T 600 25" fill="none" stroke="#10B981" stroke-width="3" />

        <path d="M 0 170 Q 150 145, 300 115 T 600 85 L 600 180 L 0 180 Z" fill="url(#spendGrad)" />
        <path d="M 0 170 Q 150 145, 300 115 T 600 85" fill="none" stroke="#0052FF" stroke-width="2.5" stroke-dasharray="4,4" />
      </svg>
    </div>
    
    <div style="display:flex; justify-content:center; gap:28px; margin-top:14px; font-size:0.8rem; font-weight:700;">
      <div style="display:flex; align-items:center; gap:6px;">
        <span style="width:12px; height:12px; border-radius:3px; background:#10B981; display:inline-block;"></span>
        <span>Attributed Revenue (${formatMoney(m.totalRevenue)})</span>
      </div>
      <div style="display:flex; align-items:center; gap:6px;">
        <span style="width:12px; height:12px; border-radius:3px; background:#0052FF; display:inline-block;"></span>
        <span>Ad Spend (${formatMoney(m.totalSpend)})</span>
      </div>
    </div>
  `;
}

function renderGrowthRecommendations(m) {
  const container = document.getElementById('overviewRecommendationsContainer');
  if (!container) return;

  const recs = [];

  if (suiteState.campaigns.length === 0) {
    recs.push({
      type: 'primary',
      title: 'Initialize Paid Media Operations',
      desc: 'No active advertising campaigns. Use the Meta Ads Manager Studio to launch high-converting paid funnels.'
    });
  } else {
    const topCamp = [...suiteState.campaigns].sort((a, b) => (b.roas || 0) - (a.roas || 0))[0];
    if (topCamp && topCamp.roas >= 3.0) {
      recs.push({
        type: 'success',
        title: `Scale High ROAS (${topCamp.roas.toFixed(2)}x): ${topCamp.name}`,
        desc: `This campaign is outperforming benchmarks. Scaling daily budget is projected to accelerate revenue.`
      });
    } else {
      recs.push({
        type: 'primary',
        title: 'Campaign Optimization Alert',
        desc: 'Creative testing and CAPI server match optimization active across all ad sets.'
      });
    }
  }

  const unreadThreads = suiteState.threads.filter(t => t.unread);
  if (unreadThreads.length > 0) {
    recs.push({
      type: 'warning',
      title: `${unreadThreads.length} Pending Inbound Message${unreadThreads.length === 1 ? '' : 's'}`,
      desc: `Prospect ${unreadThreads[0].sender} sent an inquiry via ${unreadThreads[0].channel.toUpperCase()}. Respond promptly to close the deal.`
    });
  } else {
    recs.push({
      type: 'success',
      title: 'Tracking & Pixel Health: 100% Active',
      desc: 'Conversions API (CAPI) and client-side pixel events matching with optimal Event Match Quality.'
    });
  }

  container.innerHTML = recs.map(r => `
    <div style="background:var(--suite-bg); border-radius:8px; padding:12px; border-left:3px solid ${r.type === 'success' ? 'var(--suite-success)' : (r.type === 'warning' ? 'var(--suite-warning)' : 'var(--suite-primary)')};">
      <div style="font-weight:700; font-size:0.82rem; margin-bottom:2px; color:var(--suite-text-dark);">${r.title}</div>
      <div style="font-size:0.75rem; color:var(--suite-text-secondary); line-height:1.4;">${r.desc}</div>
    </div>
  `).join('');
}

function renderOverviewCampaignsTable() {
  const tbody = document.getElementById('overviewCampaignsTableBody');
  const emptyEl = document.getElementById('overviewCampaignsEmpty');
  if (!tbody) return;

  if (suiteState.campaigns.length === 0) {
    tbody.innerHTML = '';
    if (emptyEl) emptyEl.style.display = 'block';
    return;
  }

  if (emptyEl) emptyEl.style.display = 'none';

  tbody.innerHTML = suiteState.campaigns.slice(0, 5).map(cmp => `
    <tr>
      <td>
        <label class="switch-toggle">
          <input type="checkbox" ${cmp.status === 'active' ? 'checked' : ''} onchange="toggleCampaignStatus('${cmp.id}', this.checked)">
          <span class="switch-slider"></span>
        </label>
      </td>
      <td>
        <div style="font-weight:700; color:var(--suite-text-dark); margin-bottom:2px;">${cmp.name}</div>
        <div style="display:flex; gap:6px; align-items:center;">
          <span class="platform-pill ${cmp.platform}">
            <i class="fa-brands ${cmp.platform === 'meta' ? 'fa-meta' : (cmp.platform === 'google' ? 'fa-google' : (cmp.platform === 'linkedin' ? 'fa-linkedin' : 'fa-tiktok'))}"></i>
            ${cmp.platform.toUpperCase()}
          </span>
          <span class="badge-status ${cmp.status}">${cmp.status.toUpperCase()}</span>
        </div>
      </td>
      <td><strong>${formatMoney(cmp.dailyBudget || 0)}</strong> / day</td>
      <td><strong>${formatMoney(cmp.spend || 0)}</strong></td>
      <td><strong style="color:var(--suite-success);">${formatMoney(cmp.revenue || 0)}</strong></td>
      <td>
        <span style="font-weight:800; color:${cmp.roas >= 3 ? 'var(--suite-success)' : 'var(--suite-primary)'};">
          ${(cmp.roas || 0) > 0 ? (cmp.roas || 0).toFixed(2) + 'x' : '—'}
        </span>
      </td>
      <td>${cmp.ctr || '0.00%'}</td>
      <td><strong>${cmp.leadsOrOrders || 0}</strong></td>
      <td>
        <button class="btn-icon-action" onclick="openEditBudgetModal('${cmp.id}')" title="Edit Budget">
          <i class="fa-solid fa-pen"></i>
        </button>
      </td>
    </tr>
  `).join('');
}

function renderOverviewRecentLeadsTable() {
  const tbody = document.getElementById('overviewRecentLeadsBody');
  const emptyEl = document.getElementById('overviewLeadsEmpty');
  if (!tbody) return;

  if (suiteState.leads.length === 0) {
    tbody.innerHTML = '';
    if (emptyEl) emptyEl.style.display = 'block';
    return;
  }

  if (emptyEl) emptyEl.style.display = 'none';

  tbody.innerHTML = suiteState.leads.slice(0, 4).map(l => `
    <tr>
      <td>
        <div style="font-weight:700; color:var(--suite-text-dark);">${l.name}</div>
        <div style="font-size:0.75rem; color:var(--suite-text-muted);">${l.email}</div>
      </td>
      <td><span class="platform-pill">${l.service}</span></td>
      <td><strong>${l.budget}</strong></td>
      <td><span class="badge-status ${l.stage}">${formatStageLabel(l.stage)}</span></td>
      <td><span style="font-size:0.75rem; color:var(--suite-text-muted);">${l.date}</span></td>
      <td>
        <button class="btn-suite-secondary" style="font-size:0.72rem; padding:4px 8px;" onclick="switchTab('leads')">
          View &rarr;
        </button>
      </td>
    </tr>
  `).join('');
}

function formatStageLabel(stage) {
  const map = {
    'new': 'NEW INQUIRY',
    'in_review': 'IN REVIEW',
    'contacted': 'CONTACTED',
    'proposal': 'PROPOSAL SENT',
    'won': 'DEAL WON',
    'lost': 'LOST'
  };
  return map[stage] || stage.toUpperCase();
}

// ==========================================
// 6. CONNECTED SOCIAL CHANNELS & ASSETS HUB
// ==========================================
function renderConnectedSocialAssets() {
  const grid = document.getElementById('connectedSocialAssetsGrid');
  if (!grid) return;

  const iconMap = {
    'instagram': { icon: 'fa-instagram', class: 'instagram', label: 'Instagram Business' },
    'meta': { icon: 'fa-facebook', class: 'meta', label: 'Facebook Business Page' },
    'whatsapp': { icon: 'fa-whatsapp', class: 'whatsapp', label: 'WhatsApp Business API' },
    'google': { icon: 'fa-google', class: 'google', label: 'Google Ads Account' },
    'tiktok': { icon: 'fa-tiktok', class: 'tiktok', label: 'TikTok Ads Manager' }
  };

  grid.innerHTML = suiteState.socialAssets.map(asset => {
    const info = iconMap[asset.platform] || iconMap.meta;
    const isConn = asset.status === 'connected';

    return `
      <div class="social-asset-card">
        <div>
          <div class="social-asset-top">
            <div class="social-asset-icon ${info.class}">
              <i class="fa-brands ${info.icon}"></i>
            </div>
            <span class="social-status-tag ${isConn ? 'connected' : 'disconnected'}">
              <span style="width:6px; height:6px; border-radius:50%; background:${isConn ? '#10B981' : '#94A3B8'}; display:inline-block;"></span>
              ${isConn ? 'Active / Connected' : 'Disconnected'}
            </span>
          </div>

          <div class="social-asset-name">${asset.name}</div>
          <div class="social-asset-handle">${asset.handle}</div>
        </div>

        <div class="social-asset-actions">
          <button type="button" class="btn-suite-secondary" style="font-size:0.75rem; padding:5px 10px; flex:1;" onclick="toggleSocialAssetStatus('${asset.id}')">
            ${isConn ? 'Disconnect' : 'Connect'}
          </button>
          <button type="button" class="btn-icon-action danger" onclick="deleteSocialAsset('${asset.id}')" title="Remove Asset">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function openConnectAssetModal() {
  const modal = document.getElementById('connectAssetModal');
  if (modal) modal.classList.add('active');
}
window.openConnectAssetModal = openConnectAssetModal;

function closeConnectAssetModal() {
  const modal = document.getElementById('connectAssetModal');
  if (modal) modal.classList.remove('active');
}
window.closeConnectAssetModal = closeConnectAssetModal;

function updateAssetFormFields(type) {
  const nameLabel = document.getElementById('assetNameLabel');
  const nameInput = document.getElementById('assetNameInput');
  const handleLabel = document.getElementById('assetHandleLabel');
  const handleInput = document.getElementById('assetHandleInput');

  if (type === 'instagram') {
    if (nameLabel) nameLabel.textContent = 'Instagram Profile Name *';
    if (nameInput) nameInput.placeholder = 'e.g. Apex Growth Studio';
    if (handleLabel) handleLabel.textContent = 'Instagram Handle (@handle) *';
    if (handleInput) handleInput.placeholder = 'e.g. @apex.growth';
  } else if (type === 'meta') {
    if (nameLabel) nameLabel.textContent = 'Facebook Page Name *';
    if (nameInput) nameInput.placeholder = 'e.g. Apex Apparel Official';
    if (handleLabel) handleLabel.textContent = 'Facebook Page ID or URL *';
    if (handleInput) handleInput.placeholder = 'e.g. 1098237482910';
  } else if (type === 'whatsapp') {
    if (nameLabel) nameLabel.textContent = 'WhatsApp Display Name *';
    if (nameInput) nameInput.placeholder = 'e.g. Pixlark VIP Concierge';
    if (handleLabel) handleLabel.textContent = 'Business Phone Number *';
    if (handleInput) handleInput.placeholder = 'e.g. +1 (415) 800-2918';
  } else if (type === 'google') {
    if (nameLabel) nameLabel.textContent = 'Google Ads Account Name *';
    if (nameInput) nameInput.placeholder = 'e.g. E-comm Search Scale';
    if (handleLabel) handleLabel.textContent = 'Google Customer ID (XXX-XXX-XXXX) *';
    if (handleInput) handleInput.placeholder = 'e.g. 410-293-8491';
  } else if (type === 'tiktok') {
    if (nameLabel) nameLabel.textContent = 'TikTok Advertiser Name *';
    if (nameInput) nameInput.placeholder = 'e.g. TikTok Spark Channel';
    if (handleLabel) handleLabel.textContent = 'TikTok Advertiser ID *';
    if (handleInput) handleInput.placeholder = 'e.g. 719283401928';
  }
}
window.updateAssetFormFields = updateAssetFormFields;

function handleSaveSocialAsset(e) {
  e.preventDefault();
  const type = document.getElementById('assetTypeSelect').value;
  const name = document.getElementById('assetNameInput').value.trim();
  const handle = document.getElementById('assetHandleInput').value.trim();

  if (!name || !handle) return;

  const newAsset = {
    id: 'soc_' + Date.now(),
    platform: type,
    name: name,
    handle: handle,
    status: 'connected',
    verified: true,
    date: 'Connected Just Now'
  };

  suiteState.socialAssets.push(newAsset);
  saveToStorage(STORAGE_KEYS.SOCIAL_ASSETS, suiteState.socialAssets);
  closeConnectAssetModal();
  renderConnectedSocialAssets();
  updateTopbarConnectedCount();
  populateStudioSocialSelectors();
  showToast(`Successfully linked ${newAsset.name} (${newAsset.handle})!`);
  document.getElementById('connectAssetForm').reset();
}
window.handleSaveSocialAsset = handleSaveSocialAsset;

function toggleSocialAssetStatus(id) {
  const asset = suiteState.socialAssets.find(a => a.id === id);
  if (asset) {
    asset.status = asset.status === 'connected' ? 'disconnected' : 'connected';
    saveToStorage(STORAGE_KEYS.SOCIAL_ASSETS, suiteState.socialAssets);
    renderConnectedSocialAssets();
    updateTopbarConnectedCount();
    populateStudioSocialSelectors();
    showToast(`${asset.name} is now ${asset.status.toUpperCase()}`);
  }
}
window.toggleSocialAssetStatus = toggleSocialAssetStatus;

function deleteSocialAsset(id) {
  const asset = suiteState.socialAssets.find(a => a.id === id);
  if (!asset) return;
  if (confirm(`Remove asset ${asset.name}?`)) {
    suiteState.socialAssets = suiteState.socialAssets.filter(a => a.id !== id);
    saveToStorage(STORAGE_KEYS.SOCIAL_ASSETS, suiteState.socialAssets);
    renderConnectedSocialAssets();
    updateTopbarConnectedCount();
    populateStudioSocialSelectors();
    showToast(`Removed asset ${asset.name}`);
  }
}
window.deleteSocialAsset = deleteSocialAsset;

// ==========================================
// 7. FULL-WINDOW META ADS MANAGER STUDIO
// ==========================================
function openCreateCampaignStudio() {
  const studio = document.getElementById('createCampaignStudio');
  if (!studio) return;

  suiteState.studioCurrentStep = 'campaign';
  switchStudioStep('campaign');
  populateStudioSocialSelectors();
  updateStudioLivePreview();
  studio.classList.add('active');
}
window.openCreateCampaignStudio = openCreateCampaignStudio;

function closeCreateCampaignStudio() {
  const studio = document.getElementById('createCampaignStudio');
  if (studio) studio.classList.remove('active');
}
window.closeCreateCampaignStudio = closeCreateCampaignStudio;

function switchStudioStep(step) {
  suiteState.studioCurrentStep = step;

  const stepMapping = {
    'campaign': { btnId: 'treeStepCampaign', paneId: 'studioPaneCampaign', label: 'Campaign Level Settings' },
    'adset': { btnId: 'treeStepAdSet', paneId: 'studioPaneAdSet', label: 'Ad Set & Placements' },
    'ad': { btnId: 'treeStepAd', paneId: 'studioPaneAd', label: 'Ad Creative & Copy' }
  };

  document.querySelectorAll('.studio-tree-step').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.studio-step-pane').forEach(pane => pane.classList.remove('active'));

  const current = stepMapping[step] || stepMapping.campaign;
  const activeBtn = document.getElementById(current.btnId);
  const activePane = document.getElementById(current.paneId);

  if (activeBtn) activeBtn.classList.add('active');
  if (activePane) activePane.classList.add('active');

  const breadcrumb = document.getElementById('studioBreadcrumbName');
  if (breadcrumb) {
    breadcrumb.textContent = current.label;
  }
}
window.switchStudioStep = switchStudioStep;

function selectStudioObjective(objKey, element) {
  suiteState.studioObjective = objKey;
  document.querySelectorAll('.studio-objective-option').forEach(el => el.classList.remove('selected'));
  if (element) element.classList.add('selected');
}
window.selectStudioObjective = selectStudioObjective;

function populateStudioSocialSelectors() {
  const fbSelect = document.getElementById('studioAdFbPage');
  const igSelect = document.getElementById('studioAdIgAccount');
  if (!fbSelect || !igSelect) return;

  const fbAssets = suiteState.socialAssets.filter(a => a.platform === 'meta' && a.status === 'connected');
  const igAssets = suiteState.socialAssets.filter(a => a.platform === 'instagram' && a.status === 'connected');

  if (fbAssets.length > 0) {
    fbSelect.innerHTML = fbAssets.map(a => `<option value="${a.name}">${a.name} (${a.handle})</option>`).join('');
  } else {
    fbSelect.innerHTML = `<option value="Pixlark Marketing Official">Pixlark Marketing Official</option>`;
  }

  if (igAssets.length > 0) {
    igSelect.innerHTML = igAssets.map(a => `<option value="${a.handle}">${a.handle} (${a.name})</option>`).join('');
  } else {
    igSelect.innerHTML = `<option value="@pixlark.growth">@pixlark.growth</option>`;
  }
}

function updateStudioLivePreview() {
  const fbSelect = document.getElementById('studioAdFbPage');
  const igSelect = document.getElementById('studioAdIgAccount');
  const copyInput = document.getElementById('studioAdCopy');
  const headlineInput = document.getElementById('studioAdHeadline');
  const ctaSelect = document.getElementById('studioAdCta');
  const urlInput = document.getElementById('studioAdUrl');

  const brandName = fbSelect?.value || suiteState.activeAccount?.name || 'Pixlark Marketing';
  const igHandle = igSelect?.value || '@pixlark.growth';
  const copy = copyInput?.value || 'Discover high-performance customer acquisition.';
  const headline = headlineInput?.value || 'Scale Your Inbound Pipeline';
  const cta = ctaSelect?.value || 'Learn More';
  const url = urlInput?.value || 'https://pixlarkmarketing.com';

  const prevBrand = document.getElementById('prevAdBrandName');
  const prevIg = document.getElementById('prevAdIgHandle');
  const prevAvatar = document.getElementById('prevAdAvatar');
  const prevCopy = document.getElementById('prevAdCopy');
  const prevHeadline = document.getElementById('prevAdHeadline');
  const prevBannerHeadline = document.getElementById('prevAdBannerHeadline');
  const prevCta = document.getElementById('prevAdCtaBtn');
  const prevDomain = document.getElementById('prevAdDomain');

  if (prevBrand) prevBrand.textContent = brandName;
  if (prevIg) prevIg.textContent = igHandle;
  if (prevAvatar) prevAvatar.textContent = brandName.charAt(0).toUpperCase();
  if (prevCopy) prevCopy.textContent = copy;
  if (prevHeadline) prevHeadline.textContent = headline;
  if (prevBannerHeadline) prevBannerHeadline.textContent = headline.length > 28 ? headline.substring(0, 28) + '...' : headline;
  if (prevCta) prevCta.textContent = cta;

  if (prevDomain) {
    try {
      const parsed = new URL(url);
      prevDomain.textContent = parsed.hostname.toUpperCase();
    } catch (e) {
      prevDomain.textContent = 'PIXLARKMARKETING.COM';
    }
  }
}
window.updateStudioLivePreview = updateStudioLivePreview;

function handleStudioPublishCampaign() {
  const name = document.getElementById('studioCmpName')?.value.trim() || 'New Meta Conversion Campaign';
  const platform = document.getElementById('studioCmpPlatform')?.value || 'meta';
  const budget = parseFloat(document.getElementById('studioCmpBudget')?.value) || 150;
  const copy = document.getElementById('studioAdCopy')?.value || '';
  const headline = document.getElementById('studioAdHeadline')?.value || '';
  const cta = document.getElementById('studioAdCta')?.value || 'Learn More';
  const url = document.getElementById('studioAdUrl')?.value || 'https://pixlarkmarketing.com';

  const newCmp = {
    id: 'cmp_' + Date.now(),
    name: name,
    platform: platform,
    status: 'active',
    dailyBudget: budget,
    objective: suiteState.studioObjective || 'sales',
    adCopy: copy,
    adHeadline: headline,
    adCta: cta,
    adUrl: url,
    spend: 0.00,
    revenue: 0.00,
    roas: 0.00,
    impressions: 0,
    clicks: 0,
    cpm: platform === 'tiktok' ? 6.50 : (platform === 'google' ? 22.00 : (platform === 'linkedin' ? 32.00 : 12.50)),
    ctr: '0.00%',
    leadsOrOrders: 0,
    createdAt: new Date().toISOString()
  };

  suiteState.campaigns.unshift(newCmp);
  saveToStorage(STORAGE_KEYS.CAMPAIGNS, suiteState.campaigns);
  closeCreateCampaignStudio();
  renderOverview();
  renderAdsManager();
  showToast(`🚀 Successfully published & launched campaign: ${name}`);
}
window.handleStudioPublishCampaign = handleStudioPublishCampaign;

// ==========================================
// 8. ADS MANAGER TABLE VIEW
// ==========================================
function renderAdsManager() {
  const tbody = document.getElementById('adsManagerTableBody');
  const emptyEl = document.getElementById('adsManagerEmpty');
  if (!tbody) return;

  let filtered = suiteState.campaigns;

  if (suiteState.activeCampaignFilter !== 'all') {
    filtered = filtered.filter(c => c.platform === suiteState.activeCampaignFilter);
  }

  if (suiteState.campaignSearchQuery) {
    const q = suiteState.campaignSearchQuery.toLowerCase();
    filtered = filtered.filter(c => c.name.toLowerCase().includes(q) || (c.objective || '').toLowerCase().includes(q));
  }

  if (filtered.length === 0) {
    tbody.innerHTML = '';
    if (emptyEl) emptyEl.style.display = 'block';
    return;
  }

  if (emptyEl) emptyEl.style.display = 'none';

  tbody.innerHTML = filtered.map(cmp => `
    <tr>
      <td>
        <label class="switch-toggle">
          <input type="checkbox" ${cmp.status === 'active' ? 'checked' : ''} onchange="toggleCampaignStatus('${cmp.id}', this.checked)">
          <span class="switch-slider"></span>
        </label>
      </td>
      <td>
        <div style="font-weight:700; color:var(--suite-text-dark); margin-bottom:2px;">${cmp.name}</div>
        <div style="display:flex; gap:6px; align-items:center;">
          <span class="platform-pill ${cmp.platform}">
            <i class="fa-brands ${cmp.platform === 'meta' ? 'fa-meta' : (cmp.platform === 'google' ? 'fa-google' : (cmp.platform === 'linkedin' ? 'fa-linkedin' : 'fa-tiktok'))}"></i>
            ${cmp.platform.toUpperCase()}
          </span>
          <span class="badge-status ${cmp.status}">${cmp.status.toUpperCase()}</span>
        </div>
      </td>
      <td>
        <strong>${formatMoney(cmp.dailyBudget || 0)}</strong> / day
      </td>
      <td><strong>${formatMoney(cmp.spend || 0)}</strong></td>
      <td><strong style="color:var(--suite-success);">${formatMoney(cmp.revenue || 0)}</strong></td>
      <td>
        <span style="font-weight:800; color:${cmp.roas >= 3 ? 'var(--suite-success)' : 'var(--suite-primary)'};">
          ${(cmp.roas || 0) > 0 ? (cmp.roas || 0).toFixed(2) + 'x' : '—'}
        </span>
      </td>
      <td>${formatMoney(cmp.cpm || 12.0)}</td>
      <td>${cmp.ctr || '0.00%'}</td>
      <td><strong>${cmp.leadsOrOrders || 0}</strong></td>
      <td>
        <div style="display:flex; gap:6px;">
          <button class="btn-icon-action" onclick="openEditBudgetModal('${cmp.id}')" title="Adjust Budget">
            <i class="fa-solid fa-sliders"></i>
          </button>
          <button class="btn-icon-action danger" onclick="deleteCampaign('${cmp.id}')" title="Delete Campaign">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

function handleAdsSearch(query) {
  suiteState.campaignSearchQuery = query.trim();
  renderAdsManager();
}
window.handleAdsSearch = handleAdsSearch;

function filterCampaignsPlatform(platform, btn) {
  suiteState.activeCampaignFilter = platform;
  if (btn && btn.parentElement) {
    btn.parentElement.querySelectorAll('.suite-filter-pill').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
  }
  renderAdsManager();
}
window.filterCampaignsPlatform = filterCampaignsPlatform;

function toggleCampaignStatus(id, isActive) {
  const cmp = suiteState.campaigns.find(c => c.id === id);
  if (cmp) {
    cmp.status = isActive ? 'active' : 'paused';
    saveToStorage(STORAGE_KEYS.CAMPAIGNS, suiteState.campaigns);
    showToast(`Campaign '${cmp.name}' is now ${cmp.status.toUpperCase()}`);
    renderOverview();
    renderAdsManager();
  }
}
window.toggleCampaignStatus = toggleCampaignStatus;

function pauseAllCampaigns() {
  suiteState.campaigns.forEach(c => c.status = 'paused');
  saveToStorage(STORAGE_KEYS.CAMPAIGNS, suiteState.campaigns);
  showToast('All active campaigns paused');
  renderOverview();
  renderAdsManager();
}
window.pauseAllCampaigns = pauseAllCampaigns;

function resumeAllCampaigns() {
  suiteState.campaigns.forEach(c => c.status = 'active');
  saveToStorage(STORAGE_KEYS.CAMPAIGNS, suiteState.campaigns);
  showToast('All campaigns activated');
  renderOverview();
  renderAdsManager();
}
window.resumeAllCampaigns = resumeAllCampaigns;

function deleteCampaign(id) {
  const cmp = suiteState.campaigns.find(c => c.id === id);
  if (!cmp) return;
  if (confirm(`Are you sure you want to delete campaign "${cmp.name}"?`)) {
    suiteState.campaigns = suiteState.campaigns.filter(c => c.id !== id);
    saveToStorage(STORAGE_KEYS.CAMPAIGNS, suiteState.campaigns);
    showToast(`Deleted campaign: ${cmp.name}`);
    renderOverview();
    renderAdsManager();
  }
}
window.deleteCampaign = deleteCampaign;

// Edit Budget Modal
function openEditBudgetModal(id) {
  const cmp = suiteState.campaigns.find(c => c.id === id);
  if (!cmp) return;
  const modal = document.getElementById('editBudgetModal');
  const idInput = document.getElementById('editBudgetCmpId');
  const nameEl = document.getElementById('editBudgetCmpName');
  const budgetInput = document.getElementById('editBudgetInput');

  if (idInput) idInput.value = cmp.id;
  if (nameEl) nameEl.textContent = cmp.name;
  if (budgetInput) budgetInput.value = cmp.dailyBudget;
  if (modal) modal.classList.add('active');
}
window.openEditBudgetModal = openEditBudgetModal;

function closeEditBudgetModal() {
  const modal = document.getElementById('editBudgetModal');
  if (modal) modal.classList.remove('active');
}
window.closeEditBudgetModal = closeEditBudgetModal;

function handleSaveCampaignBudget(e) {
  e.preventDefault();
  const id = document.getElementById('editBudgetCmpId').value;
  const budget = parseFloat(document.getElementById('editBudgetInput').value);

  const cmp = suiteState.campaigns.find(c => c.id === id);
  if (cmp && budget > 0) {
    cmp.dailyBudget = budget;
    saveToStorage(STORAGE_KEYS.CAMPAIGNS, suiteState.campaigns);
    closeEditBudgetModal();
    renderOverview();
    renderAdsManager();
    showToast(`Updated daily budget for '${cmp.name}' to ${formatMoney(budget)}/day`);
  }
}
window.handleSaveCampaignBudget = handleSaveCampaignBudget;

// ==========================================
// 9. CONTENT PLANNER
// ==========================================
function renderPlanner() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const container = document.getElementById('plannerGridContainer');
  if (!container) return;

  container.innerHTML = days.map(day => {
    const dayPosts = suiteState.posts.filter(p => p.day === day);
    return `
      <div class="planner-day-col">
        <div class="planner-day-header">${day}</div>
        ${dayPosts.map(p => `
          <div class="planner-post-card">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
              <span class="platform-pill ${p.platform}" style="font-size:0.65rem; padding:1px 6px;">
                <i class="fa-brands ${p.platform === 'meta' ? 'fa-meta' : (p.platform === 'google' ? 'fa-google' : (p.platform === 'linkedin' ? 'fa-linkedin' : 'fa-tiktok'))}"></i>
              </span>
              <span class="post-time-tag">${p.time}</span>
            </div>
            <div style="font-weight:700; color:var(--suite-text-dark); line-height:1.25; margin-bottom:4px;">${p.title}</div>
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span style="font-size:0.65rem; color:${p.status === 'Published' ? 'var(--suite-success)' : 'var(--suite-primary)'}; font-weight:700;">
                &bull; ${p.status}
              </span>
              <button onclick="deletePost('${p.id}')" class="btn-icon-action danger" style="padding:2px 5px; font-size:0.65rem;" title="Delete Post">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        `).join('')}
        <button class="btn-suite-secondary" style="width:100%; margin-top:auto; font-size:0.72rem; padding:4px; justify-content:center;" onclick="openScheduleModalForDay('${day}')">
          + Add Post
        </button>
      </div>
    `;
  }).join('');
}

function openSchedulePostModal() {
  const modal = document.getElementById('schedulePostModal');
  if (modal) modal.classList.add('active');
}
window.openSchedulePostModal = openSchedulePostModal;

function openScheduleModalForDay(day) {
  const selectDay = document.getElementById('postDaySelect');
  if (selectDay) selectDay.value = day;
  openSchedulePostModal();
}
window.openScheduleModalForDay = openScheduleModalForDay;

function closeScheduleModal() {
  const modal = document.getElementById('schedulePostModal');
  if (modal) modal.classList.remove('active');
}
window.closeScheduleModal = closeScheduleModal;

function handleSchedulePostSubmit(e) {
  e.preventDefault();
  const text = document.getElementById('postCaptionInput').value.trim();
  const platform = document.getElementById('postPlatformSelect').value;
  const day = document.getElementById('postDaySelect').value;
  const time = document.getElementById('postTimeInput').value || '10:30 AM';
  const status = document.getElementById('postStatusSelect').value || 'Scheduled';

  if (!text) return;

  const newPost = {
    id: 'post_' + Date.now(),
    day: day,
    platform: platform,
    title: text.length > 42 ? text.substring(0, 42) + '...' : text,
    caption: text,
    time: time,
    status: status,
    createdAt: new Date().toISOString()
  };

  suiteState.posts.push(newPost);
  saveToStorage(STORAGE_KEYS.POSTS, suiteState.posts);
  closeScheduleModal();
  renderPlanner();
  showToast(`Post scheduled for ${platform.toUpperCase()} on ${day} at ${time}`);
  document.getElementById('schedulePostForm').reset();
}
window.handleSchedulePostSubmit = handleSchedulePostSubmit;

function deletePost(id) {
  suiteState.posts = suiteState.posts.filter(p => p.id !== id);
  saveToStorage(STORAGE_KEYS.POSTS, suiteState.posts);
  renderPlanner();
  showToast('Post removed from calendar');
}
window.deletePost = deletePost;

// ==========================================
// 10. UNIFIED OMNICHANNEL INBOX
// ==========================================
function filterInbox(channel) {
  suiteState.activeInboxFilter = channel;
  document.querySelectorAll('.inbox-filter-btn').forEach(btn => {
    if (btn.getAttribute('data-channel') === channel) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  renderInboxThreads();
}
window.filterInbox = filterInbox;

function renderInboxThreads() {
  const listEl = document.getElementById('inboxThreadsList');
  const emptyEl = document.getElementById('inboxThreadsEmpty');
  if (!listEl) return;

  const filtered = suiteState.threads.filter(t => {
    if (suiteState.activeInboxFilter === 'all') return true;
    return t.channel === suiteState.activeInboxFilter;
  });

  if (filtered.length === 0) {
    listEl.innerHTML = '';
    if (emptyEl) emptyEl.style.display = 'block';
    return;
  }

  if (emptyEl) emptyEl.style.display = 'none';

  listEl.innerHTML = filtered.map(t => {
    const channelIcon = t.channel === 'instagram' ? 'fa-instagram' : (t.channel === 'whatsapp' ? 'fa-whatsapp' : (t.channel === 'messenger' ? 'fa-facebook-messenger' : 'fa-globe'));
    const channelColor = t.channel === 'instagram' ? '#E1306C' : (t.channel === 'whatsapp' ? '#25D366' : (t.channel === 'messenger' ? '#0084FF' : '#0052FF'));

    return `
      <li class="inbox-thread-item ${t.id === suiteState.activeThreadId ? 'active' : ''}" onclick="selectInboxThread('${t.id}')">
        <div class="thread-avatar">
          ${(t.sender || 'U').charAt(0).toUpperCase()}
          <div class="thread-channel-icon" style="color:${channelColor};">
            <i class="fa-brands ${channelIcon}"></i>
          </div>
        </div>
        <div class="thread-body">
          <div class="thread-name-row">
            <span class="thread-sender-name">${t.sender}</span>
            <span class="thread-timestamp">${t.timestamp || 'Just now'}</span>
          </div>
          <div class="thread-snippet">${t.lastMessage || 'New conversation'}</div>
        </div>
      </li>
    `;
  }).join('');
}

function selectInboxThread(threadId) {
  suiteState.activeThreadId = threadId;
  const thread = suiteState.threads.find(t => t.id === threadId);
  if (thread) {
    thread.unread = false;
    saveToStorage(STORAGE_KEYS.THREADS, suiteState.threads);
  }
  renderInboxThreads();
  renderActiveChat();
  renderOverview();
}
window.selectInboxThread = selectInboxThread;

function renderActiveChat() {
  const chatArea = document.getElementById('chatMessagesContainer');
  const chatHeaderName = document.getElementById('chatActiveUserName');
  const chatHeaderChannel = document.getElementById('chatActiveChannel');
  const chatHeaderAvatar = document.getElementById('chatHeaderAvatar');
  if (!chatArea) return;

  const thread = suiteState.threads.find(t => t.id === suiteState.activeThreadId);
  if (!thread) {
    if (chatHeaderName) chatHeaderName.textContent = 'No conversation selected';
    if (chatHeaderChannel) chatHeaderChannel.textContent = '—';
    chatArea.innerHTML = `
      <div class="suite-empty-state" style="padding:48px 20px;">
        <div class="suite-empty-icon"><i class="fa-solid fa-inbox"></i></div>
        <div class="suite-empty-title">Select a conversation</div>
        <div class="suite-empty-desc">Choose a thread from the left or start a new conversation to begin chatting.</div>
        <button class="btn-suite-primary" onclick="openNewThreadModal()">+ Start Conversation</button>
      </div>
    `;
    return;
  }

  if (chatHeaderName) chatHeaderName.textContent = thread.sender;
  if (chatHeaderAvatar) chatHeaderAvatar.textContent = (thread.sender || 'U').charAt(0).toUpperCase();
  if (chatHeaderChannel) {
    chatHeaderChannel.innerHTML = `<i class="fa-brands fa-${thread.channel === 'web' ? 'globe' : thread.channel}"></i> ${thread.channel.toUpperCase()}`;
  }

  chatArea.innerHTML = (thread.messages || []).map(m => `
    <div class="chat-msg ${m.incoming ? 'incoming' : 'outgoing'}">
      <div>${m.text}</div>
      <div style="font-size:0.65rem; opacity:0.7; text-align:${m.incoming ? 'left' : 'right'}; margin-top:4px;">${m.time || ''}</div>
    </div>
  `).join('');

  chatArea.scrollTop = chatArea.scrollHeight;
}

function sendChatMessage(e) {
  if (e && e.preventDefault) e.preventDefault();
  const input = document.getElementById('chatTextInput');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;

  const thread = suiteState.threads.find(t => t.id === suiteState.activeThreadId);
  if (!thread) return;

  const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  if (!thread.messages) thread.messages = [];

  thread.messages.push({
    sender: 'You',
    text: text,
    time: timeNow,
    incoming: false
  });
  thread.lastMessage = text;
  thread.timestamp = 'Just now';

  saveToStorage(STORAGE_KEYS.THREADS, suiteState.threads);
  input.value = '';
  renderActiveChat();
  renderInboxThreads();
}
window.sendChatMessage = sendChatMessage;

function simulateInboundReply() {
  const thread = suiteState.threads.find(t => t.id === suiteState.activeThreadId);
  if (!thread) {
    showToast('Please select a conversation first');
    return;
  }

  const responses = [
    "Thank you! That sounds like a solid strategy. When can we schedule our onboarding audit call?",
    "We reviewed your proposal and we're ready to proceed with the paid scaling package.",
    "Could you clarify the expected CPA for our commercial search keywords?",
    "Sounds great! Looking forward to seeing the live ROAS results."
  ];
  const replyText = responses[Math.floor(Math.random() * responses.length)];

  if (!thread.messages) thread.messages = [];
  thread.messages.push({
    sender: thread.sender,
    text: replyText,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    incoming: true
  });
  thread.lastMessage = replyText;
  thread.timestamp = 'Just now';

  saveToStorage(STORAGE_KEYS.THREADS, suiteState.threads);
  renderActiveChat();
  renderInboxThreads();
  showToast(`Simulated client reply received from ${thread.sender}`);
}
window.simulateInboundReply = simulateInboundReply;

function tagCurrentThread() {
  const thread = suiteState.threads.find(t => t.id === suiteState.activeThreadId);
  if (!thread) return;
  showToast(`Lead '${thread.sender}' tagged as HIGH PRIORITY`);
}
window.tagCurrentThread = tagCurrentThread;

function deleteCurrentThread() {
  const thread = suiteState.threads.find(t => t.id === suiteState.activeThreadId);
  if (!thread) return;
  if (confirm(`Delete conversation with ${thread.sender}?`)) {
    suiteState.threads = suiteState.threads.filter(t => t.id !== thread.id);
    suiteState.activeThreadId = suiteState.threads.length > 0 ? suiteState.threads[0].id : null;
    saveToStorage(STORAGE_KEYS.THREADS, suiteState.threads);
    renderInboxThreads();
    renderActiveChat();
    renderOverview();
    showToast('Conversation deleted');
  }
}
window.deleteCurrentThread = deleteCurrentThread;

function openNewThreadModal() {
  const modal = document.getElementById('newThreadModal');
  if (modal) modal.classList.add('active');
}
window.openNewThreadModal = openNewThreadModal;

function closeNewThreadModal() {
  const modal = document.getElementById('newThreadModal');
  if (modal) modal.classList.remove('active');
}
window.closeNewThreadModal = closeNewThreadModal;

function handleNewThreadSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('newThreadName').value.trim();
  const channel = document.getElementById('newThreadChannel').value;
  const msg = document.getElementById('newThreadMessage').value.trim();

  if (!name || !msg) return;

  const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const newThread = {
    id: 'th_' + Date.now(),
    sender: name,
    channel: channel,
    lastMessage: msg,
    timestamp: 'Just now',
    unread: false,
    messages: [
      {
        sender: name,
        text: msg,
        time: timeNow,
        incoming: true
      }
    ]
  };

  suiteState.threads.unshift(newThread);
  suiteState.activeThreadId = newThread.id;
  saveToStorage(STORAGE_KEYS.THREADS, suiteState.threads);
  closeNewThreadModal();
  renderInboxThreads();
  renderActiveChat();
  renderOverview();
  showToast(`New conversation started with ${name}`);
  document.getElementById('newThreadForm').reset();
}
window.handleNewThreadSubmit = handleNewThreadSubmit;

// ==========================================
// 11. LEAD CENTER (CRM PIPELINE)
// ==========================================
function renderLeads() {
  const tbody = document.getElementById('leadsTableBody');
  const emptyEl = document.getElementById('leadsEmptyState');
  if (!tbody) return;

  let filtered = suiteState.leads;

  if (suiteState.activeLeadFilter !== 'all') {
    filtered = filtered.filter(l => l.stage === suiteState.activeLeadFilter);
  }

  if (suiteState.leadSearchQuery) {
    const q = suiteState.leadSearchQuery.toLowerCase();
    filtered = filtered.filter(l => 
      l.name.toLowerCase().includes(q) || 
      l.email.toLowerCase().includes(q) || 
      (l.phone || '').toLowerCase().includes(q) || 
      (l.service || '').toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    tbody.innerHTML = '';
    if (emptyEl) emptyEl.style.display = 'block';
    return;
  }

  if (emptyEl) emptyEl.style.display = 'none';

  tbody.innerHTML = filtered.map(l => `
    <tr>
      <td>
        <div style="font-weight:700; color:var(--suite-text-dark);">${l.name}</div>
        <div style="font-size:0.75rem; color:var(--suite-text-muted);">${l.email}</div>
      </td>
      <td>${l.phone || '—'}</td>
      <td><span class="platform-pill">${l.service}</span></td>
      <td><strong>${l.budget}</strong></td>
      <td>
        <select onchange="updateLeadStage('${l.id}', this.value)" style="padding:4px 8px; border-radius:6px; border:1px solid var(--suite-border); font-size:0.78rem; font-weight:700; background:#FFFFFF; color:var(--suite-text-dark);">
          <option value="new" ${l.stage === 'new' ? 'selected' : ''}>New Inquiry</option>
          <option value="in_review" ${l.stage === 'in_review' ? 'selected' : ''}>In Review</option>
          <option value="contacted" ${l.stage === 'contacted' ? 'selected' : ''}>Contacted</option>
          <option value="proposal" ${l.stage === 'proposal' ? 'selected' : ''}>Proposal Sent</option>
          <option value="won" ${l.stage === 'won' ? 'selected' : ''}>Deal Won</option>
          <option value="lost" ${l.stage === 'lost' ? 'selected' : ''}>Lost</option>
        </select>
      </td>
      <td><span style="font-size:0.75rem; color:var(--suite-text-muted);">${l.date}</span></td>
      <td>
        <button class="btn-icon-action danger" onclick="deleteLead('${l.id}')" title="Delete Lead">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </td>
    </tr>
  `).join('');
}

function handleLeadsSearch(query) {
  suiteState.leadSearchQuery = query.trim();
  renderLeads();
}
window.handleLeadsSearch = handleLeadsSearch;

function filterLeadsByStage(stage, btn) {
  suiteState.activeLeadFilter = stage;
  if (btn && btn.parentElement) {
    btn.parentElement.querySelectorAll('.suite-filter-pill').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
  }
  renderLeads();
}
window.filterLeadsByStage = filterLeadsByStage;

function updateLeadStage(id, newStage) {
  const lead = suiteState.leads.find(l => l.id === id);
  if (lead) {
    lead.stage = newStage;
    saveToStorage(STORAGE_KEYS.LEADS, suiteState.leads);
    showToast(`Lead '${lead.name}' moved to: ${newStage.toUpperCase()}`);
    renderLeads();
    renderOverview();
  }
}
window.updateLeadStage = updateLeadStage;

function deleteLead(id) {
  const lead = suiteState.leads.find(l => l.id === id);
  if (!lead) return;
  if (confirm(`Remove lead "${lead.name}"?`)) {
    suiteState.leads = suiteState.leads.filter(l => l.id !== id);
    saveToStorage(STORAGE_KEYS.LEADS, suiteState.leads);
    showToast(`Lead ${lead.name} deleted`);
    renderLeads();
    renderOverview();
  }
}
window.deleteLead = deleteLead;

function exportLeadsCSV() {
  if (suiteState.leads.length === 0) {
    showToast('No leads to export');
    return;
  }

  let csv = 'Name,Email,Phone,Service,Budget,Stage,Date,Notes\n';
  suiteState.leads.forEach(l => {
    csv += `"${l.name}","${l.email}","${l.phone || ''}","${l.service}","${l.budget}","${l.stage}","${l.date}","${(l.notes || '').replace(/"/g, '""')}"\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `Pixlark_CRM_Leads_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast('Leads exported successfully as CSV!');
}
window.exportLeadsCSV = exportLeadsCSV;

function openAddLeadModal() {
  const modal = document.getElementById('addLeadModal');
  if (modal) modal.classList.add('active');
}
window.openAddLeadModal = openAddLeadModal;

function closeAddLeadModal() {
  const modal = document.getElementById('addLeadModal');
  if (modal) modal.classList.remove('active');
}
window.closeAddLeadModal = closeAddLeadModal;

function handleAddLeadSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('newLeadName').value.trim();
  const email = document.getElementById('newLeadEmail').value.trim();
  const phone = document.getElementById('newLeadPhone').value.trim();
  const service = document.getElementById('newLeadService').value;
  const budget = document.getElementById('newLeadBudget').value;
  const stage = document.getElementById('newLeadStage').value || 'new';
  const notes = document.getElementById('newLeadNotes').value.trim();

  if (!name || !email) return;

  const newLead = {
    id: 'ld_' + Date.now(),
    name: name,
    email: email,
    phone: phone,
    service: service,
    budget: budget,
    stage: stage,
    notes: notes,
    date: 'Today, ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    createdAt: new Date().toISOString()
  };

  suiteState.leads.unshift(newLead);
  saveToStorage(STORAGE_KEYS.LEADS, suiteState.leads);
  closeAddLeadModal();
  renderLeads();
  renderOverview();
  showToast(`Recorded new inbound lead: ${name}`);
  document.getElementById('addLeadForm').reset();
}
window.handleAddLeadSubmit = handleAddLeadSubmit;

// ==========================================
// 12. INSIGHTS & DIAGNOSTICS
// ==========================================
function renderInsights() {
  const deviceContainer = document.getElementById('insightsDeviceBreakdown');
  const channelContainer = document.getElementById('insightsChannelDistribution');
  const perfContainer = document.getElementById('insightsPerformanceSummary');
  const m = calculateMetrics();

  if (deviceContainer) {
    deviceContainer.innerHTML = `
      <div style="margin-bottom:14px;">
        <div style="display:flex; justify-content:space-between; font-size:0.8rem; font-weight:700; margin-bottom:4px;">
          <span>Mobile Devices (iOS & Android)</span>
          <span>76.2%</span>
        </div>
        <div style="height:8px; background:#E2E8F0; border-radius:4px; overflow:hidden;">
          <div style="width:76.2%; height:100%; background:#0052FF;"></div>
        </div>
      </div>
      <div style="margin-bottom:14px;">
        <div style="display:flex; justify-content:space-between; font-size:0.8rem; font-weight:700; margin-bottom:4px;">
          <span>Desktop Browsers</span>
          <span>20.8%</span>
        </div>
        <div style="height:8px; background:#E2E8F0; border-radius:4px; overflow:hidden;">
          <div style="width:20.8%; height:100%; background:#10B981;"></div>
        </div>
      </div>
      <div>
        <div style="display:flex; justify-content:space-between; font-size:0.8rem; font-weight:700; margin-bottom:4px;">
          <span>Tablet & Other</span>
          <span>3.0%</span>
        </div>
        <div style="height:8px; background:#E2E8F0; border-radius:4px; overflow:hidden;">
          <div style="width:3%; height:100%; background:#F59E0B;"></div>
        </div>
      </div>
    `;
  }

  if (channelContainer) {
    if (suiteState.campaigns.length === 0) {
      channelContainer.innerHTML = `<div class="suite-empty-state" style="padding:20px 0;"><div class="suite-empty-title" style="font-size:0.9rem;">No campaign networks active</div><div class="suite-empty-desc" style="font-size:0.75rem;">Launch campaigns in Meta Ads Studio to populate network distribution.</div></div>`;
    } else {
      const channelSpend = {};
      suiteState.campaigns.forEach(c => {
        channelSpend[c.platform] = (channelSpend[c.platform] || 0) + (c.revenue || c.spend || 0);
      });

      const total = Object.values(channelSpend).reduce((a, b) => a + b, 0) || 1;

      channelContainer.innerHTML = Object.keys(channelSpend).map(plat => {
        const amt = channelSpend[plat];
        const pct = ((amt / total) * 100).toFixed(1);
        const icon = plat === 'meta' ? 'fa-meta' : (plat === 'google' ? 'fa-google' : (plat === 'linkedin' ? 'fa-linkedin' : 'fa-tiktok'));
        const color = plat === 'meta' ? '#0052FF' : (plat === 'google' ? '#EA4335' : (plat === 'linkedin' ? '#0A66C2' : '#000'));
        return `
          <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid var(--suite-border-subtle);">
            <span><i class="fa-brands ${icon}" style="color:${color};"></i> ${plat.toUpperCase()} Campaigns</span>
            <strong>${formatMoney(amt)} (${pct}%)</strong>
          </div>
        `;
      }).join('');
    }
  }

  if (perfContainer) {
    perfContainer.innerHTML = `
      <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:16px;">
        <div style="background:var(--suite-bg); border-radius:8px; padding:16px;">
          <div style="font-size:0.75rem; font-weight:700; color:var(--suite-text-muted);">TOTAL IMPRESSIONS</div>
          <div style="font-size:1.3rem; font-weight:800; color:var(--suite-text-dark); margin:4px 0;">${m.totalImpressions.toLocaleString()}</div>
          <div style="font-size:0.75rem; color:var(--suite-text-secondary);">Across all connected ad accounts</div>
        </div>
        <div style="background:var(--suite-bg); border-radius:8px; padding:16px;">
          <div style="font-size:0.75rem; font-weight:700; color:var(--suite-text-muted);">TOTAL CLICKS & ENGAGEMENTS</div>
          <div style="font-size:1.3rem; font-weight:800; color:var(--suite-primary); margin:4px 0;">${m.totalClicks.toLocaleString()}</div>
          <div style="font-size:0.75rem; color:var(--suite-text-secondary);">Avg CTR: ${(m.totalImpressions > 0 ? ((m.totalClicks / m.totalImpressions) * 100).toFixed(2) : '0.00')}%</div>
        </div>
        <div style="background:var(--suite-bg); border-radius:8px; padding:16px;">
          <div style="font-size:0.75rem; font-weight:700; color:var(--suite-text-muted);">BLENDED ROAS PERFORMANCE</div>
          <div style="font-size:1.3rem; font-weight:800; color:var(--suite-success); margin:4px 0;">${m.roas.toFixed(2)}x</div>
          <div style="font-size:0.75rem; color:var(--suite-text-secondary);">${m.roas >= 3.5 ? 'Exceeding Growth Target' : 'Pacing to Baseline'}</div>
        </div>
      </div>
    `;
  }
}

// ==========================================
// 13. SETTINGS & WORKSPACES
// ==========================================
function renderSettingsForm() {
  const acc = suiteState.activeAccount;
  if (!acc) return;

  const nameInput = document.getElementById('settingAccountName');
  const adAccInput = document.getElementById('settingAdAccountId');
  const pixelInput = document.getElementById('settingPixelId');
  const capiInput = document.getElementById('settingCapiToken');
  const currInput = document.getElementById('settingCurrency');
  const notifyInput = document.getElementById('settingNotifyEmail');

  if (nameInput) nameInput.value = acc.name || '';
  if (adAccInput) adAccInput.value = acc.adAccounts || '';
  if (pixelInput) pixelInput.value = acc.pixelId || '';
  if (capiInput) capiInput.value = acc.capiToken || '';
  if (currInput) currInput.value = suiteState.currency;
  if (notifyInput) notifyInput.value = acc.notifyEmail || '';
}

function handleSaveSettings(e) {
  e.preventDefault();
  const acc = suiteState.activeAccount;
  if (!acc) return;

  acc.name = document.getElementById('settingAccountName').value.trim();
  acc.adAccounts = document.getElementById('settingAdAccountId').value.trim();
  acc.pixelId = document.getElementById('settingPixelId').value.trim();
  acc.capiToken = document.getElementById('settingCapiToken').value.trim();
  acc.currency = document.getElementById('settingCurrency').value;
  acc.notifyEmail = document.getElementById('settingNotifyEmail').value.trim();

  suiteState.currency = acc.currency;
  localStorage.setItem(STORAGE_KEYS.CURRENCY, acc.currency);

  saveToStorage(STORAGE_KEYS.ACCOUNTS, suiteState.accounts);
  updateAccountHeaderUI();
  updateCurrencySymbols();
  renderAllViews();
  showToast('Settings saved successfully!');
}
window.handleSaveSettings = handleSaveSettings;

function openAccountSwitcherModal() {
  const modal = document.getElementById('accountSwitcherModal');
  const list = document.getElementById('accountsListContainer');
  if (!modal || !list) return;

  list.innerHTML = suiteState.accounts.map(acc => `
    <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 14px; background:${acc.id === suiteState.activeAccount.id ? '#EFF6FF' : '#F8FAFC'}; border:1px solid ${acc.id === suiteState.activeAccount.id ? 'var(--suite-primary)' : 'var(--suite-border)'}; border-radius:8px; cursor:pointer;" onclick="switchAccount('${acc.id}')">
      <div style="display:flex; align-items:center; gap:10px;">
        <div class="suite-account-avatar">${(acc.name || 'P').charAt(0).toUpperCase()}</div>
        <div>
          <div style="font-weight:700; font-size:0.88rem; color:var(--suite-text-dark);">${acc.name}</div>
          <div style="font-size:0.72rem; color:var(--suite-text-muted);">${acc.role || 'Business Owner'} &bull; ${acc.currency || 'USD'}</div>
        </div>
      </div>
      ${acc.id === suiteState.activeAccount.id ? '<span style="color:var(--suite-primary); font-weight:800; font-size:0.8rem;">● ACTIVE</span>' : '<button class="btn-suite-secondary" style="font-size:0.72rem; padding:3px 8px;">Select</button>'}
    </div>
  `).join('');

  modal.classList.add('active');
}
window.openAccountSwitcherModal = openAccountSwitcherModal;

function closeAccountSwitcherModal() {
  const modal = document.getElementById('accountSwitcherModal');
  if (modal) modal.classList.remove('active');
}
window.closeAccountSwitcherModal = closeAccountSwitcherModal;

function switchAccount(accId) {
  const target = suiteState.accounts.find(a => a.id === accId);
  if (target) {
    suiteState.activeAccount = target;
    localStorage.setItem(STORAGE_KEYS.ACTIVE_ACC, target.id);
    closeAccountSwitcherModal();
    updateAccountHeaderUI();
    renderAllViews();
    showToast(`Switched active workspace to: ${target.name}`);
  }
}
window.switchAccount = switchAccount;

function handleCreateNewAccount(e) {
  e.preventDefault();
  const input = document.getElementById('newAccountInputName');
  if (!input) return;
  const name = input.value.trim();
  if (!name) return;

  const newAcc = {
    id: 'acc_' + Date.now(),
    name: name,
    role: 'Business Owner',
    adAccounts: 'act_' + Math.floor(10000000 + Math.random() * 90000000),
    pixelStatus: 'Active (100% Match)',
    currency: suiteState.currency,
    pixelId: 'pix_' + Math.floor(10000000 + Math.random() * 90000000),
    capiToken: 'capi_token_' + Date.now()
  };

  suiteState.accounts.push(newAcc);
  suiteState.activeAccount = newAcc;
  saveToStorage(STORAGE_KEYS.ACCOUNTS, suiteState.accounts);
  localStorage.setItem(STORAGE_KEYS.ACTIVE_ACC, newAcc.id);
  input.value = '';
  closeAccountSwitcherModal();
  updateAccountHeaderUI();
  renderAllViews();
  showToast(`Created & switched to new workspace: ${name}`);
}
window.handleCreateNewAccount = handleCreateNewAccount;

function confirmPurgeAllData() {
  if (confirm("Are you sure you want to purge all campaigns, leads, posts, and messages? This will reset the Suite to a completely clean fresh state.")) {
    suiteState.campaigns = [];
    suiteState.posts = [];
    suiteState.threads = [];
    suiteState.activeThreadId = null;
    suiteState.leads = [];

    saveToStorage(STORAGE_KEYS.CAMPAIGNS, []);
    saveToStorage(STORAGE_KEYS.POSTS, []);
    saveToStorage(STORAGE_KEYS.THREADS, []);
    saveToStorage(STORAGE_KEYS.LEADS, []);

    renderAllViews();
    showToast('All data purged. Suite reset to clean fresh state.');
  }
}
window.confirmPurgeAllData = confirmPurgeAllData;

function exportDataBackupJSON() {
  const backup = {
    exportedAt: new Date().toISOString(),
    currency: suiteState.currency,
    language: suiteState.language,
    accounts: suiteState.accounts,
    campaigns: suiteState.campaigns,
    posts: suiteState.posts,
    threads: suiteState.threads,
    leads: suiteState.leads,
    socialAssets: suiteState.socialAssets,
    settings: suiteState.settings
  };

  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `Pixlark_Suite_Backup_${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast('Suite data backup exported as JSON file');
}
window.exportDataBackupJSON = exportDataBackupJSON;

// ==========================================
// 14. REAL-TIME LIVE SIMULATION ENGINE
// ==========================================
function initLiveStreamEngine() {
  if (suiteState.liveTimer) clearInterval(suiteState.liveTimer);

  suiteState.liveTimer = setInterval(() => {
    if (!suiteState.streamActive) return;

    const activeCamps = suiteState.campaigns.filter(c => c.status === 'active');
    if (activeCamps.length === 0) return;

    let updated = false;

    activeCamps.forEach(c => {
      const budgetFactor = (c.dailyBudget || 100) / 100;
      const addImp = Math.floor((Math.random() * 4 + 1) * budgetFactor);
      const addClicks = Math.random() > 0.7 ? 1 : 0;
      const addSpend = (Math.random() * 0.15 * budgetFactor);
      
      c.impressions = (c.impressions || 0) + addImp;
      c.clicks = (c.clicks || 0) + addClicks;
      c.spend = (c.spend || 0) + addSpend;

      if (Math.random() > 0.85) {
        const addRev = (Math.random() * 2.8 * budgetFactor);
        c.revenue = (c.revenue || 0) + addRev;
        if (Math.random() > 0.92) {
          c.leadsOrOrders = (c.leadsOrOrders || 0) + 1;
        }
      }

      c.roas = c.spend > 0 ? (c.revenue / c.spend) : 0;
      c.ctr = c.impressions > 0 ? ((c.clicks / c.impressions) * 100).toFixed(2) + '%' : '0.00%';
      updated = true;
    });

    if (updated) {
      saveToStorage(STORAGE_KEYS.CAMPAIGNS, suiteState.campaigns);
      
      if (suiteState.activeTab === 'overview') {
        const m = calculateMetrics();
        const spendEl = document.getElementById('kpiTotalSpend');
        const revEl = document.getElementById('kpiTotalRevenue');
        const roasEl = document.getElementById('kpiRoas');
        if (spendEl) spendEl.textContent = formatMoney(m.totalSpend);
        if (revEl) revEl.textContent = formatMoney(m.totalRevenue);
        if (roasEl) roasEl.textContent = `${m.roas.toFixed(2)}x`;
      }
    }
  }, 3500);
}

// ==========================================
// 15. CROSS-TAB & EXTERNAL LEAD SYNC
// ==========================================
function initCrossTabSync() {
  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEYS.LEADS || e.key === STORAGE_KEYS.CAMPAIGNS || e.key === STORAGE_KEYS.THREADS || e.key === STORAGE_KEYS.SOCIAL_ASSETS) {
      initStorage();
      renderAllViews();
    }
  });
}

function renderAllViews() {
  renderOverview();
  renderAdsManager();
  renderPlanner();
  renderInboxThreads();
  renderActiveChat();
  renderLeads();
  renderInsights();
  renderSettingsForm();
  renderConnectedSocialAssets();
  updateTopbarConnectedCount();
  updateCurrencySymbols();
}

// Toast Feedback Notification
function showToast(msg) {
  let toast = document.getElementById('suiteToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'suiteToast';
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: #0F172A;
      color: #FFFFFF;
      padding: 12px 18px;
      border-radius: 8px;
      font-size: 0.85rem;
      font-weight: 600;
      box-shadow: 0 10px 25px rgba(0,0,0,0.3);
      border-left: 4px solid #0052FF;
      z-index: 99999;
      opacity: 0;
      transform: translateY(10px);
      transition: all 0.25s ease;
    `;
    document.body.appendChild(toast);
  }

  toast.textContent = msg;
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
  }, 3000);
}
window.showToast = showToast;
