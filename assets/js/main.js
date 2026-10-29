/**
 * PIXLARK MARKETING - CORE CONTROLLER & MULTI-LANGUAGE ENGINE
 */

/* ==========================================================
   1. MULTI-LANGUAGE (i18n) ENGINE & DATA
   ========================================================== */
const pixlarkI18nData = {
  "translations": {
    "en": {
      "nav_home": "Home",
      "nav_services": "Services",
      "nav_why": "Why Choose Us",
      "nav_pricing": "Pricing & Plans",
      "nav_faq": "FAQ",
      "nav_contact": "Contact",
      "nav_hire": "Work With Us &rarr;",
      "nav_admin": "Admin",
      "hero_tag_home": "<i class=\"fa-solid fa-rocket\"></i> Full-Service Digital Marketing Agency",
      "hero_title_home": "Performance marketing for businesses ready to grow.",
      "hero_desc_home": "We plan, launch, and optimize the channels that drive demand: paid search and social, SEO, content, landing pages, lead capture, and reporting. Every recommendation is tied to your goals, audience, and available budget.",
      "hero_cta_proposal": "<span>Request A Proposal &rarr;</span>",
      "hero_cta_services": "<span>Explore Services</span>",
      "hero_partners_label": "Platforms we work with:",
      "showcase_tag": "<i class=\"fa-solid fa-asterisk\"></i> Strategy, Execution, Measurement",
      "showcase_title": "ATTRACT BUYERS.<br>GROW REVENUE.",
      "showcase_desc": "Whether your priority is ecommerce revenue, qualified leads, or stronger local visibility, we connect campaign strategy with the landing pages, tracking, and follow-up needed to measure progress.",
      "showcase_btn": "<span>See Our Complete Process &rarr;</span>",
      "badge_growth_experts": "Growth<br>Experts",
      "cap_stat_text": "Dedicated In-House Team",
      "cap_tag": "<i class=\"fa-solid fa-check\"></i> What We Do Best",
      "cap_headline": "YOUR COMPLETE <span class=\"highlight-blue\">MARKETING TEAM</span>",
      "cap_desc": "We bring paid media, creative, SEO, conversion optimization, and analytics into one coordinated plan, so each channel supports the same business objective.",
      "cap_card1_title": "Paid Online Ads",
      "cap_card1_l1": "<i class=\"fa-solid fa-check\"></i> Google Search Ads to capture high-intent buyers",
      "cap_card1_l2": "<i class=\"fa-solid fa-check\"></i> Meta &amp; Instagram Ads targeted to your ideal clients",
      "cap_card1_l3": "<i class=\"fa-solid fa-check\"></i> TikTok campaigns for reach, consideration, and conversions",
      "cap_card1_l4": "<i class=\"fa-solid fa-check\"></i> Ongoing testing of audiences, creative, and landing pages",
      "cap_card2_title": "Content &amp; Search SEO",
      "cap_card2_l1": "<i class=\"fa-solid fa-check\"></i> Short-form video and social creative for active campaigns",
      "cap_card2_l2": "<i class=\"fa-solid fa-check\"></i> Technical, on-page, local, and content-led SEO",
      "cap_card2_l3": "<i class=\"fa-solid fa-check\"></i> Clean, mobile-friendly landing pages built to convert",
      "cap_card2_l4": "<i class=\"fa-solid fa-check\"></i> Clear monthly video reports with transparent data",
      "cap_btn": "<span>Explore All Services &rarr;</span>",
      "strat_tag": "<i class=\"fa-solid fa-chart-line\"></i> Performance Highlights",
      "strat_headline": "REAL RESULTS FOR<br><span class=\"highlight-blue\">REAL BUSINESSES</span>",
      "strat_desc": "We combine audience research, channel strategy, conversion-focused creative, and reliable tracking to learn what is working and improve the next campaign iteration.",
      "strat_btn": "<span>[ Talk To Our Team &rarr; ]</span>",
      "stat1_label": "Average ROAS across active client ad accounts",
      "stat2_label": "Increase in monthly qualified inbound leads",
      "stat3_label": "Reduction in average cost per acquisition",
      "cta_tag": "<i class=\"fa-solid fa-bolt\"></i> Take The Next Step",
      "cta_title": "Ready To Grow Your Business?",
      "cta_desc": "Book a strategic consultation with our senior marketing team. We'll audit your current channels, identify untapped growth opportunities, and provide a clear roadmap.",
      "cta_btn_primary": "<span>Get Started Today &rarr;</span>",
      "cta_btn_secondary": "<span>View All Plans</span>",
      "hero_tag_services": "<i class=\"fa-solid fa-layer-group\"></i> Full-Service Marketing",
      "hero_title_services": "Everything your business needs to <span class=\"highlight-blue\">grow and get customers</span>.",
      "hero_desc_services": "We combine strategy, channel execution, creative production, and measurement to help you attract the right audience and convert more of the demand you generate.",
      "hero_tag_why": "<i class=\"fa-solid fa-shield-halved\"></i> Why Choose Pixlark",
      "hero_title_why": "A marketing partner you can <span class=\"highlight-blue\">trust to deliver</span>.",
      "hero_desc_why": "Clear strategy, accountable execution, and reporting that connects marketing activity to the business outcomes you care about.",
      "why_p1_title": "Experienced Senior Marketers",
      "why_p1_desc": "Work directly with seasoned specialists who have managed campaigns, built creative, and optimized landing pages across competitive industries.",
      "why_p2_title": "Fast, Responsive Communication",
      "why_p2_desc": "We respect your time. Expect quick replies, clear next steps, and regular check-ins that keep projects moving without unnecessary meetings.",
      "why_p3_title": "100% In-House Account Management",
      "why_p3_desc": "Your campaigns are managed by the team you meet. We don't outsource your work to unvetted third parties or hand it off to junior interns.",
      "why_p4_title": "Measurable Business Outcomes",
      "why_p4_desc": "We track beyond vanity metrics like clicks and impressions to measure cost per lead, customer acquisition cost, and revenue generated.",
      "hero_tag_plans": "<i class=\"fa-solid fa-shapes\"></i> Flexible Plans",
      "hero_title_plans": "Marketing plans <span class=\"highlight-blue\">tailored to your budget</span>.",
      "hero_desc_plans": "Choose a working model around your priorities, internal resources, and growth stage, from ongoing channel management to focused creative, lead generation, or SEO engagements.",
      "plan_1_title": "Full-Service Growth Partner",
      "plan_1_desc": "Best for businesses that want a complete, managed marketing team handling ads, creative, SEO, and reporting with ongoing strategy.",
      "plan_1_freq": "/ mo",
      "plan_1_btn": "<span>Request A Proposal &rarr;</span>",
      "plan_2_title": "30-Day Creative Sprint",
      "plan_2_desc": "Best for teams that need high-performing video and social assets for their existing ad campaigns or organic social channels.",
      "plan_2_freq": "/ sprint",
      "plan_2_btn": "<span>Start Creative Sprint &rarr;</span>",
      "plan_3_title": "Lead Generation Engine",
      "plan_3_desc": "Best for service businesses, consultants, and B2B companies looking for a reliable, qualified inbound inquiry pipeline.",
      "plan_3_freq": "/ build",
      "plan_3_btn": "<span>Build Your Lead Engine &rarr;</span>",
      "plan_4_title": "Commercial SEO Program",
      "plan_4_desc": "Best for brands ready to build organic search equity, improve keyword rankings, and capture buyers with active purchase intent.",
      "plan_4_freq": "/ mo",
      "plan_4_btn": "<span>Start SEO Program &rarr;</span>",
      "hero_tag_faq": "<i class=\"fa-solid fa-circle-question\"></i> Helpful Answers",
      "hero_title_faq": "Frequently asked <span class=\"highlight-blue\">questions</span>.",
      "hero_desc_faq": "Answers about our services, onboarding process, budgets, reporting, and what we need from you to do good work.",
      "hero_tag_contact": "<i class=\"fa-solid fa-paper-plane\"></i> Get In Touch",
      "hero_title_contact": "Let's talk about <span class=\"highlight-blue\">growing your business</span>.",
      "hero_desc_contact": "Tell us what you are trying to improve, which channels you use today, and where the current bottleneck is. We will review the details and reply within one business day.",
      "form_tag": "<i class=\"fa-solid fa-file-signature\"></i> Send A Message",
      "form_title": "Contact Us",
      "form_desc": "Share your business model, current marketing activity, goals, and timeline. We will use that context to suggest the most relevant next step.",
      "form_name_ph": "Your Name *",
      "form_email_ph": "Email Address *",
      "form_phone_ph": "Phone Number / WhatsApp",
      "form_website_ph": "Website or Business Name",
      "form_service_select": "Select a Service of Interest",
      "form_industry_select": "Your Industry",
      "form_region_select": "Your Region",
      "form_goal_label": "What's your main goal?",
      "form_goal_sales": "More Sales / Revenue",
      "form_goal_leads": "More Leads",
      "form_goal_traffic": "Website Traffic",
      "form_goal_brand": "Brand Awareness",
      "form_marketing_select": "Current Marketing Channels",
      "form_budget_select": "Monthly Budget",
      "form_message_ph": "Tell us about your business, current challenges, and what you'd like to improve...",
      "form_submit_btn": "<span>Send Message &rarr;</span>",
      "form_success_title": "Thank you! Your message has been sent successfully.",
      "footer_tagline_1": "BUILD",
      "footer_tagline_2": "THE FUTURE OF ONLINE BUSINESS",
      "footer_tagline_3": "TOGETHER.",
      "footer_rights": "Pixlark Marketing. All rights reserved.",
      "chatbot_welcome": "Hello! I'm Pixlark Bird. How can I help scale your marketing today?",
      "chip_ads": "Paid Ads",
      "chip_seo": "Commercial SEO",
      "chip_funnels": "Lead Funnels",
      "chip_pricing": "Pricing",
      "chip_why": "Why Pixlark",
      "form_help_btn": "<span><i class=\"fa-solid fa-wand-magic-sparkles\"></i> Fill with Pixlark Bird</span>",
      "chatbot_title": "Pixlark Bird",
      "nav_suite": "Client Suite"
    },
    "es": {
      "nav_home": "Inicio",
      "nav_services": "Servicios",
      "nav_why": "Por Qué Elegirnos",
      "nav_pricing": "Precios y Planes",
      "nav_faq": "Preguntas Frecuentes",
      "nav_contact": "Contacto",
      "nav_hire": "Trabaja con Nosotros &rarr;",
      "nav_admin": "Admin",
      "hero_tag_home": "<i class=\"fa-solid fa-rocket\"></i> Agencia de Marketing Digital Integral",
      "hero_title_home": "Marketing de rendimiento para empresas listas para crecer.",
      "hero_desc_home": "Planificamos, lanzamos y optimizamos los canales que generan demanda: anuncios pagados, SEO, contenido, páginas de destino, captación de prospectos e informes transparentes.",
      "hero_cta_proposal": "<span>Solicitar Propuesta &rarr;</span>",
      "hero_cta_services": "<span>Explorar Servicios</span>",
      "hero_partners_label": "Plataformas con las que trabajamos:",
      "showcase_tag": "<i class=\"fa-solid fa-asterisk\"></i> Estrategia, Ejecución, Medición",
      "showcase_title": "ATRAE CLIENTES.<br>AUMENTA INGRESOS.",
      "showcase_desc": "Ya sea que su prioridad sea ventas de comercio electrónico, prospectos calificados o mayor visibilidad local, conectamos la estrategia con páginas de destino y medición precisa.",
      "showcase_btn": "<span>Ver Nuestro Proceso Completo &rarr;</span>",
      "badge_growth_experts": "Expertos en<br>Crecimiento",
      "cap_stat_text": "Equipo Interno Dedicado",
      "cap_tag": "<i class=\"fa-solid fa-check\"></i> Lo Que Hacemos Mejor",
      "cap_headline": "SU EQUIPO COMPLETO DE <span class=\"highlight-blue\">MARKETING</span>",
      "cap_desc": "Unimos publicidad pagada, creatividad, SEO, optimización de conversiones y análisis en un plan coordinado para alcanzar sus metas de negocio.",
      "cap_card1_title": "Publicidad Online Pagada",
      "cap_card1_l1": "<i class=\"fa-solid fa-check\"></i> Anuncios de búsqueda de Google para captar compradores de alta intención",
      "cap_card1_l2": "<i class=\"fa-solid fa-check\"></i> Anuncios de Meta e Instagram dirigidos a sus clientes ideales",
      "cap_card1_l3": "<i class=\"fa-solid fa-check\"></i> Campañas de TikTok para alcance, consideración y conversiones",
      "cap_card1_l4": "<i class=\"fa-solid fa-check\"></i> Pruebas continuas de audiencias, creatividades y páginas de destino",
      "cap_card2_title": "Contenido y SEO en Motores de Búsqueda",
      "cap_card2_l1": "<i class=\"fa-solid fa-check\"></i> Video corto y creatividades para campañas activas",
      "cap_card2_l2": "<i class=\"fa-solid fa-check\"></i> SEO técnico, on-page, local y guiado por contenido",
      "cap_card2_l3": "<i class=\"fa-solid fa-check\"></i> Páginas de destino optimizadas para móviles y diseñadas para convertir",
      "cap_card2_l4": "<i class=\"fa-solid fa-check\"></i> Informes mensuales claros en video con datos 100% transparentes",
      "cap_btn": "<span>Explorar Todos los Servicios &rarr;</span>",
      "strat_tag": "<i class=\"fa-solid fa-chart-line\"></i> Resultados Destacados",
      "strat_headline": "RESULTADOS REALES PARA<br><span class=\"highlight-blue\">EMPRESAS REALES</span>",
      "strat_desc": "Combinamos investigación de audiencia, estrategia de canales, creatividad enfocada en conversión y métricas confiables para optimizar cada campaña.",
      "strat_btn": "<span>[ Hablar con Nuestro Equipo &rarr; ]</span>",
      "stat1_label": "ROAS promedio en cuentas activas de clientes",
      "stat2_label": "Aumento en clientes potenciales calificados mensuales",
      "stat3_label": "Reducción en el costo promedio de adquisición (CPA)",
      "cta_tag": "<i class=\"fa-solid fa-bolt\"></i> Da el Siguiente Paso",
      "cta_title": "¿Listo para Hacer Crecer su Negocio?",
      "cta_desc": "Reserve una consulta estratégica con nuestro equipo senior de marketing. Analizaremos sus canales actuales y trazaremos una hoja de ruta clara.",
      "cta_btn_primary": "<span>Comenzar Hoy Mismo &rarr;</span>",
      "cta_btn_secondary": "<span>Ver Todos los Planes</span>",
      "hero_tag_services": "<i class=\"fa-solid fa-layer-group\"></i> Marketing Integral",
      "hero_title_services": "Todo lo que su negocio necesita para <span class=\"highlight-blue\">crecer y conseguir clientes</span>.",
      "hero_desc_services": "Combinamos estrategia, ejecución en canales, producción creativa y medición para atraer a la audiencia adecuada y aumentar conversiones.",
      "hero_tag_why": "<i class=\"fa-solid fa-shield-halved\"></i> Por Qué Elegir Pixlark",
      "hero_title_why": "Un socio de marketing en el que puede <span class=\"highlight-blue\">confiar para obtener resultados</span>.",
      "hero_desc_why": "Estrategia clara, ejecución responsable e informes que conectan la actividad de marketing con los resultados que le importan.",
      "why_p1_title": "Especialistas Senior con Experiencia",
      "why_p1_desc": "Trabaje directamente con especialistas experimentados que han gestionado campañas y optimizado páginas en industrias competitivas.",
      "why_p2_title": "Comunicación Rápida y Receptiva",
      "why_p2_desc": "Respetamos su tiempo. Respuestas rápidas, próximos pasos claros y seguimiento continuo sin reuniones innecesarias.",
      "why_p3_title": "Gestión 100% Interna de Cuentas",
      "why_p3_desc": "Sus campañas son administradas por el equipo que conoce. No subcontratamos su trabajo ni lo delegamos a pasantes.",
      "why_p4_title": "Resultados de Negocio Medibles",
      "why_p4_desc": "Medimos más allá de clics o impresiones para rastrear costo por prospecto, costo de adquisición y retorno real de inversión.",
      "hero_tag_plans": "<i class=\"fa-solid fa-shapes\"></i> Planes Flexibles",
      "hero_title_plans": "Planes de marketing <span class=\"highlight-blue\">adaptados a su presupuesto</span>.",
      "hero_desc_plans": "Elija un modelo de trabajo adaptado a sus prioridades, desde gestión continua de canales hasta proyectos enfocados en generación de prospectos o SEO.",
      "plan_1_title": "Socio de Crecimiento Integral",
      "plan_1_desc": "Ideal para empresas que desean un equipo completo de marketing que gestione anuncios, creatividades, SEO y reportes continuos.",
      "plan_1_freq": "/ mes",
      "plan_1_btn": "<span>Solicitar Propuesta &rarr;</span>",
      "plan_2_title": "Sprint Creativo de 30 Días",
      "plan_2_desc": "Ideal para equipos que necesitan videos y piezas publicitarias de alto impacto para sus campañas actuales o redes sociales.",
      "plan_2_freq": "/ sprint",
      "plan_2_btn": "<span>Iniciar Sprint Creativo &rarr;</span>",
      "plan_3_title": "Motor de Generación de Leads",
      "plan_3_desc": "Ideal para empresas de servicios, consultores y negocios B2B que buscan un flujo constante de prospectos calificados.",
      "plan_3_freq": "/ proyecto",
      "plan_3_btn": "<span>Construir su Motor de Leads &rarr;</span>",
      "plan_4_title": "Programa de SEO Comercial",
      "plan_4_desc": "Ideal para marcas que buscan posicionamiento orgánico, mejores rankings y capturar compradores en motores de búsqueda.",
      "plan_4_freq": "/ mes",
      "plan_4_btn": "<span>Iniciar Programa SEO &rarr;</span>",
      "hero_tag_faq": "<i class=\"fa-solid fa-circle-question\"></i> Respuestas Claras",
      "hero_title_faq": "Preguntas <span class=\"highlight-blue\">frecuentes</span>.",
      "hero_desc_faq": "Respuestas claras sobre nuestros servicios, proceso de inicio, presupuestos, informes y colaboración.",
      "hero_tag_contact": "<i class=\"fa-solid fa-paper-plane\"></i> Ponerse en Contacto",
      "hero_title_contact": "Hablemos de <span class=\"highlight-blue\">hacer crecer su negocio</span>.",
      "hero_desc_contact": "Cuéntenos qué desea mejorar, qué canales utiliza hoy y cuáles son sus desafíos. Le responderemos en menos de un día hábil.",
      "form_tag": "<i class=\"fa-solid fa-file-signature\"></i> Enviar un Mensaje",
      "form_title": "Contáctenos",
      "form_desc": "Comparta su modelo de negocio, actividades actuales y metas. Utilizaremos ese contexto para proponer los mejores pasos.",
      "form_name_ph": "Su Nombre *",
      "form_email_ph": "Correo Electrónico *",
      "form_phone_ph": "Teléfono / WhatsApp",
      "form_website_ph": "Sitio Web o Nombre de la Empresa",
      "form_service_select": "Seleccione un Servicio de Interés",
      "form_industry_select": "Su Industria",
      "form_region_select": "Su Región",
      "form_goal_label": "¿Cuál es su objetivo principal?",
      "form_goal_sales": "Más Ventas / Ingresos",
      "form_goal_leads": "Más Clientes Potenciales",
      "form_goal_traffic": "Tráfico Web",
      "form_goal_brand": "Reconocimiento de Marca",
      "form_marketing_select": "Canales Actuales de Marketing",
      "form_budget_select": "Presupuesto Mensual",
      "form_message_ph": "Cuéntenos sobre su negocio, desafíos actuales y qué le gustaría mejorar...",
      "form_submit_btn": "<span>Enviar Mensaje &rarr;</span>",
      "form_success_title": "¡Gracias! Su mensaje ha sido enviado con éxito.",
      "footer_tagline_1": "CONSTRUYE",
      "footer_tagline_2": "EL FUTURO DE LOS NEGOCIOS",
      "footer_tagline_3": "JUNTOS.",
      "footer_rights": "Pixlark Marketing. Todos los derechos reservados.",
      "chatbot_welcome": "¡Hola! Soy Pixlark Bird. ¿Cómo podemos ayudarte a escalar tu marketing hoy?",
      "chip_ads": "Anuncios Pagados",
      "chip_seo": "SEO Comercial",
      "chip_funnels": "Embudos de Leads",
      "chip_pricing": "Precios",
      "chip_why": "Por Qué Pixlark",
      "form_help_btn": "<span><i class=\"fa-solid fa-wand-magic-sparkles\"></i> Llenar con Pixlark Bird</span>",
      "chatbot_title": "Pixlark Bird",
      "nav_suite": "Portal Cliente"
    },
    "fr": {
      "nav_home": "Accueil",
      "nav_services": "Services",
      "nav_why": "Pourquoi Nous Choisir",
      "nav_pricing": "Tarifs et Plans",
      "nav_faq": "FAQ",
      "nav_contact": "Contact",
      "nav_hire": "Travailler Avec Nous &rarr;",
      "nav_admin": "Admin",
      "hero_tag_home": "<i class=\"fa-solid fa-rocket\"></i> Agence de Marketing Digital Tout-en-un",
      "hero_title_home": "Marketing à la performance pour les entreprises prêtes à grandir.",
      "hero_desc_home": "Nous planifions, lançons et optimisons les canaux qui génèrent de la demande : publicité payante, SEO, contenu, pages de conversion, acquisition de prospects et reporting.",
      "hero_cta_proposal": "<span>Demander Une Proposition &rarr;</span>",
      "hero_cta_services": "<span>Découvrir Les Services</span>",
      "hero_partners_label": "Plateformes partenaires :",
      "showcase_tag": "<i class=\"fa-solid fa-asterisk\"></i> Stratégie, Exécution, Mesure",
      "showcase_title": "ATTIREZ DES ACHETEURS.<br>AUGMENTEZ VOS REVENUS.",
      "showcase_desc": "Que votre priorité soit les ventes en ligne, des prospects qualifiés ou la visibilité locale, nous combinons stratégie et outils de conversion pour maximiser vos résultats.",
      "showcase_btn": "<span>Découvrir Notre Processus &rarr;</span>",
      "badge_growth_experts": "Experts en<br>Croissance",
      "cap_stat_text": "Équipe Dédiée en Interne",
      "cap_tag": "<i class=\"fa-solid fa-check\"></i> Nos Points Forts",
      "cap_headline": "VOTRE ÉQUIPE COMPLÈTE DE <span class=\"highlight-blue\">MARKETING</span>",
      "cap_desc": "Nous réunissons médias payants, création, SEO, optimisation des conversions et analyse de données dans un plan stratégique cohérent.",
      "cap_card1_title": "Publicité En Ligne Payante",
      "cap_card1_l1": "<i class=\"fa-solid fa-check\"></i> Google Search Ads pour capter les acheteurs à forte intention",
      "cap_card1_l2": "<i class=\"fa-solid fa-check\"></i> Publicités Meta &amp; Instagram ciblées pour vos clients idéaux",
      "cap_card1_l3": "<i class=\"fa-solid fa-check\"></i> Campagnes TikTok pour la notoriété, l'engagement et les conversions",
      "cap_card1_l4": "<i class=\"fa-solid fa-check\"></i> Tests continus des audiences, créations et pages d'atterrissage",
      "cap_card2_title": "Contenu &amp; Référencement SEO",
      "cap_card2_l1": "<i class=\"fa-solid fa-check\"></i> Vidéos courtes et visuels percutants pour vos campagnes",
      "cap_card2_l2": "<i class=\"fa-solid fa-check\"></i> SEO technique, on-page, local et stratégique",
      "cap_card2_l3": "<i class=\"fa-solid fa-check\"></i> Landing pages modernes et adaptées aux mobiles pour convertir",
      "cap_card2_l4": "<i class=\"fa-solid fa-check\"></i> Rapports vidéo mensuels détaillés et données transparentes",
      "cap_btn": "<span>Voir Tous Les Services &rarr;</span>",
      "strat_tag": "<i class=\"fa-solid fa-chart-line\"></i> Résultats Clés",
      "strat_headline": "DES RÉSULTATS RÉELS POUR<br><span class=\"highlight-blue\">DES ENTREPRISES RÉELLES</span>",
      "strat_desc": "Nous combinons recherche d'audience, stratégie de canaux, créativité axée sur la conversion et suivi précis pour améliorer chaque campagne.",
      "strat_btn": "<span>[ Discuter Avec Notre Équipe &rarr; ]</span>",
      "stat1_label": "ROAS moyen sur les comptes publicitaires gérés",
      "stat2_label": "Augmentation mensuelle des prospects qualifiés",
      "stat3_label": "Réduction du coût moyen par acquisition (CPA)",
      "cta_tag": "<i class=\"fa-solid fa-bolt\"></i> Passez à l'Action",
      "cta_title": "Prêt à Développer Votre Entreprise ?",
      "cta_desc": "Planifiez un échange stratégique avec nos experts marketing. Nous analyserons vos canaux actuels et vous proposerons un plan d'action sur mesure.",
      "cta_btn_primary": "<span>Commencer Aujourd'hui &rarr;</span>",
      "cta_btn_secondary": "<span>Voir Tous Les Plans</span>",
      "hero_tag_services": "<i class=\"fa-solid fa-layer-group\"></i> Marketing Tout-en-Un",
      "hero_title_services": "Tout ce dont votre entreprise a besoin pour <span class=\"highlight-blue\">grandir et acquérir des clients</span>.",
      "hero_desc_services": "Nous combinons stratégie, exécution, production créative et mesure pour vous aider à attirer la bonne audience et maximiser vos conversions.",
      "hero_tag_why": "<i class=\"fa-solid fa-shield-halved\"></i> Pourquoi Choisir Pixlark",
      "hero_title_why": "Un partenaire marketing sur lequel vous pouvez <span class=\"highlight-blue\">compter pour réussir</span>.",
      "hero_desc_why": "Une stratégie claire, une exécution rigoureuse et des rapports qui relient vos investissements aux résultats concrets de votre entreprise.",
      "why_p1_title": "Marketeurs Seniors Expérimentés",
      "why_p1_desc": "Collaborez directement avec des experts ayant géré des campagnes complexes et optimisé des pages de vente dans des secteurs compétitifs.",
      "why_p2_title": "Communication Rapide et Réactive",
      "why_p2_desc": "Nous respectons votre temps : réponses rapides, étapes claires et points réguliers pour avancer efficacement sans réunions inutiles.",
      "why_p3_title": "Gestion 100% Interne de Vos Comptes",
      "why_p3_desc": "Vos campagnes sont gérées par l'équipe que vous rencontrez. Nous ne sous-traitons aucun travail et ne déléguons pas à des stagiaires.",
      "why_p4_title": "Résultats Commerciaux Mesurables",
      "why_p4_desc": "Nous allons au-delà des indicateurs superficiels pour mesurer le coût par prospect, le coût d'acquisition client et le chiffre d'affaires généré.",
      "hero_tag_plans": "<i class=\"fa-solid fa-shapes\"></i> Plans Flexibles",
      "hero_title_plans": "Des plans marketing <span class=\"highlight-blue\">adaptés à votre budget</span>.",
      "hero_desc_plans": "Choisissez un modèle de collaboration adapté à vos priorités : gestion continue, production créative, génération de prospects ou SEO.",
      "plan_1_title": "Partenaire de Croissance Intégral",
      "plan_1_desc": "Idéal pour les entreprises souhaitant une équipe marketing complète gérant publicité, création, SEO et reporting stratégique.",
      "plan_1_freq": "/ mois",
      "plan_1_btn": "<span>Demander Une Proposition &rarr;</span>",
      "plan_2_title": "Sprint Créatif de 30 Jours",
      "plan_2_desc": "Idéal pour les marques ayant besoin de vidéos et visuels performants pour leurs campagnes publicitaires existantes.",
      "plan_2_freq": "/ sprint",
      "plan_2_btn": "<span>Lancer Le Sprint Créatif &rarr;</span>",
      "plan_3_title": "Moteur d'Acquisition de Prospects",
      "plan_3_desc": "Idéal pour les entreprises de services, consultants et B2B cherchant un flux continu de prospects qualifiés.",
      "plan_3_freq": "/ projet",
      "plan_3_btn": "<span>Créer Votre Moteur de Leads &rarr;</span>",
      "plan_4_title": "Programme de Référencement SEO",
      "plan_4_desc": "Idéal pour développer votre trafic organique, améliorer vos positions sur Google et capter des acheteurs qualifiés.",
      "plan_4_freq": "/ mois",
      "plan_4_btn": "<span>Lancer Le Programme SEO &rarr;</span>",
      "hero_tag_faq": "<i class=\"fa-solid fa-circle-question\"></i> Réponses Claires",
      "hero_title_faq": "Foire aux <span class=\"highlight-blue\">questions</span>.",
      "hero_desc_faq": "Tout ce que vous devez savoir sur nos services, notre accompagnement, les budgets, le reporting et notre façon de travailler.",
      "hero_tag_contact": "<i class=\"fa-solid fa-paper-plane\"></i> Contactez-nous",
      "hero_title_contact": "Parlons de la <span class=\"highlight-blue\">croissance de votre entreprise</span>.",
      "hero_desc_contact": "Dites-nous ce que vous souhaitez améliorer, vos canaux actuels et vos objectifs. Nous vous répondrons sous 24 heures ouvrées.",
      "form_tag": "<i class=\"fa-solid fa-file-signature\"></i> Envoyer un Message",
      "form_title": "Contactez-nous",
      "form_desc": "Partagez vos activités actuelles, vos objectifs et vos délais. Nous vous proposerons les prochaines étapes les plus adaptées.",
      "form_name_ph": "Votre Nom *",
      "form_email_ph": "Adresse Email *",
      "form_phone_ph": "Téléphone / WhatsApp",
      "form_website_ph": "Site Web ou Nom de l'Entreprise",
      "form_service_select": "Sélectionnez un Service",
      "form_industry_select": "Votre Secteur d'Activité",
      "form_region_select": "Votre Région",
      "form_goal_label": "Quel est votre objectif principal ?",
      "form_goal_sales": "Augmenter les Ventes / Revenus",
      "form_goal_leads": "Plus de Prospects",
      "form_goal_traffic": "Trafic Web Qualifié",
      "form_goal_brand": "Notoriété de Marque",
      "form_marketing_select": "Canaux Marketing Actuels",
      "form_budget_select": "Budget Mensuel",
      "form_message_ph": "Parlez-nous de votre entreprise, de vos défis actuels et de vos objectifs...",
      "form_submit_btn": "<span>Envoyer Le Message &rarr;</span>",
      "form_success_title": "Merci ! Votre message a été envoyé avec succès.",
      "footer_tagline_1": "BÂTIR",
      "footer_tagline_2": "L'AVENIR DU COMMERCE EN LIGNE",
      "footer_tagline_3": "ENSEMBLE.",
      "footer_rights": "Pixlark Marketing. Tous droits réservés.",
      "chatbot_welcome": "Bonjour ! Je suis Pixlark Bird. Comment puis-je vous aider à développer votre marketing aujourd'hui ?",
      "chip_ads": "Publicité Payante",
      "chip_seo": "Référencement SEO",
      "chip_funnels": "Funnels de Leads",
      "chip_pricing": "Tarifs",
      "chip_why": "Pourquoi Pixlark",
      "form_help_btn": "<span><i class=\"fa-solid fa-wand-magic-sparkles\"></i> Remplir avec Pixlark Bird</span>",
      "chatbot_title": "Pixlark Bird",
      "nav_suite": "Espace Client"
    },
    "de": {
      "nav_home": "Startseite",
      "nav_services": "Dienstleistungen",
      "nav_why": "Warum Uns Wählen",
      "nav_pricing": "Preise & Tarife",
      "nav_faq": "FAQ",
      "nav_contact": "Kontakt",
      "nav_hire": "Mit Uns Arbeiten &rarr;",
      "nav_admin": "Admin",
      "hero_tag_home": "<i class=\"fa-solid fa-rocket\"></i> Full-Service Digital-Marketing-Agentur",
      "hero_title_home": "Performance-Marketing für Unternehmen mit Wachstumszielen.",
      "hero_desc_home": "Wir planen, starten und optimieren Kanäle für kontinuierliche Nachfrage: Paid Ads, SEO, Content, Landingpages, Lead-Erfassung und transparente Reportings.",
      "hero_cta_proposal": "<span>Angebot Anfordern &rarr;</span>",
      "hero_cta_services": "<span>Leistungen Entdecken</span>",
      "hero_partners_label": "Plattformen, mit denen wir arbeiten:",
      "showcase_tag": "<i class=\"fa-solid fa-asterisk\"></i> Strategie, Umsetzung, Analyse",
      "showcase_title": "KUNDEN GEWINNEN.<br>UMSATZ STEIGERN.",
      "showcase_desc": "Ob E-Commerce-Umsatz, qualifizierte Leads oder lokale Sichtbarkeit: Wir verknüpfen Kampagnenstrategie mit konversionsstarken Landingpages und präzisem Tracking.",
      "showcase_btn": "<span>Unseren Prozess Ansehen &rarr;</span>",
      "badge_growth_experts": "Wachstums<br>Experten",
      "cap_stat_text": "Engagiertes In-House-Team",
      "cap_tag": "<i class=\"fa-solid fa-check\"></i> Unsere Kernkompetenzen",
      "cap_headline": "IHR KOMPLETTES <span class=\"highlight-blue\">MARKETING-TEAM</span>",
      "cap_desc": "Wir bündeln Paid Ads, Content, SEO, Conversion-Optimierung und Analytics in einer aufeinander abgestimmten Wachstumsstrategie.",
      "cap_card1_title": "Performance Paid Ads",
      "cap_card1_l1": "<i class=\"fa-solid fa-check\"></i> Google Search Ads für kaufbereite Suchanfragen",
      "cap_card1_l2": "<i class=\"fa-solid fa-check\"></i> Meta &amp; Instagram Ads für Ihre exakte Zielgruppe",
      "cap_card1_l3": "<i class=\"fa-solid fa-check\"></i> TikTok-Kampagnen für Reichweite und starke Conversions",
      "cap_card1_l4": "<i class=\"fa-solid fa-check\"></i> Kontinuierliches A/B-Testing von Zielgruppen, Creatives und Landingpages",
      "cap_card2_title": "Content &amp; Suchmaschinen-SEO",
      "cap_card2_l1": "<i class=\"fa-solid fa-check\"></i> Short-Form-Video und Creatives für performante Kampagnen",
      "cap_card2_l2": "<i class=\"fa-solid fa-check\"></i> Technisches, On-Page-, Local- und Content-SEO",
      "cap_card2_l3": "<i class=\"fa-solid fa-check\"></i> Moderne, mobile-first Landingpages mit maximaler Konversion",
      "cap_card2_l4": "<i class=\"fa-solid fa-check\"></i> Transparente monatliche Video-Reports mit klaren Ergebnissen",
      "cap_btn": "<span>Alle Leistungen Ansehen &rarr;</span>",
      "strat_tag": "<i class=\"fa-solid fa-chart-line\"></i> Performance-Highlights",
      "strat_headline": "ECHTE ERGEBNISSE FÜR<br><span class=\"highlight-blue\">ECHTE UNTERNEHMEN</span>",
      "strat_desc": "Wir verbinden Zielgruppenanalyse, Kanalstrategie, conversion-orientierte Creatives und verlässliches Tracking für stetiges Wachstum.",
      "strat_btn": "<span>[ Mit Unserem Team Sprechen &rarr; ]</span>",
      "stat1_label": "Durchschnittlicher ROAS aktiver Kundenkonten",
      "stat2_label": "Steigerung qualifizierter monatlicher Leads",
      "stat3_label": "Senkung der durchschnittlichen Akquisitionskosten",
      "cta_tag": "<i class=\"fa-solid fa-bolt\"></i> Der Nächste Schritt",
      "cta_title": "Bereit für Ihr Unternehmenswachstum?",
      "cta_desc": "Vereinbaren Sie ein strategisches Beratungsgespräch. Wir analysieren Ihre bestehenden Kanäle und zeigen konkrete Wachstumspotenziale auf.",
      "cta_btn_primary": "<span>Jetzt Starten &rarr;</span>",
      "cta_btn_secondary": "<span>Alle Tarife Ansehen</span>",
      "hero_tag_services": "<i class=\"fa-solid fa-layer-group\"></i> Full-Service Marketing",
      "hero_title_services": "Alles, was Ihr Unternehmen braucht, um <span class=\"highlight-blue\">Kunden zu gewinnen und zu wachsen</span>.",
      "hero_desc_services": "Wir verbinden Strategie, Kanalumsetzung, Content-Kreation und Analyse, um die richtige Zielgruppe zu erreichen und Conversions zu maximieren.",
      "hero_tag_why": "<i class=\"fa-solid fa-shield-halved\"></i> Warum Pixlark",
      "hero_title_why": "Ein Marketingpartner, auf den Sie sich <span class=\"highlight-blue\">voll und ganz verlassen können</span>.",
      "hero_desc_why": "Klare Strategie, verlässliche Ausführung und Reports, die Marketingaktivitäten direkt mit Ihren Geschäftszielen verknüpfen.",
      "why_p1_title": "Erfahrene Senior-Marketer",
      "why_p1_desc": "Arbeiten Sie direkt mit erfahrenen Spezialisten, die erfolgreiche Kampagnen und Landingpages in wettbewerbsintensiven Branchen steuern.",
      "why_p2_title": "Schnelle, Direkte Kommunikation",
      "why_p2_desc": "Wir schätzen Ihre Zeit: schnelle Antworten, klare nächste Schritte und zielgerichtete Abstimmungen ohne unnötige Meetings.",
      "why_p3_title": "100% In-House Kampagnen-Management",
      "why_p3_desc": "Ihre Kampagnen werden von den Experten betreut, die Sie kennenlernen. Kein Outsourcing an Dritte oder unerfahrene Praktikanten.",
      "why_p4_title": "Messbare Geschäftsergebnisse",
      "why_p4_desc": "Wir schauen über Klicks und Impressionen hinaus: Wir messen Lead-Kosten, Kundenakquisitionskosten (CAC) und echten Umsatz.",
      "hero_tag_plans": "<i class=\"fa-solid fa-shapes\"></i> Flexible Tarife",
      "hero_title_plans": "Marketing-Pakete <span class=\"highlight-blue\">perfekt auf Ihr Budget abgestimmt</span>.",
      "hero_desc_plans": "Wählen Sie das passende Modell für Ihre Prioritäten: fortlaufendes Kampagnen-Management, fokussierte Creatives, Lead-Generierung oder gezieltes SEO.",
      "plan_1_title": "Full-Service Growth Partner",
      "plan_1_desc": "Ideal für Unternehmen, die ein komplettes Marketing-Team für Ads, Creatives, SEO und strategische Betreuung suchen.",
      "plan_1_freq": "/ Monat",
      "plan_1_btn": "<span>Angebot Anfordern &rarr;</span>",
      "plan_2_title": "30-Tage Creative Sprint",
      "plan_2_desc": "Ideal für Teams, die performante Video- und Social-Assets für bestehende Kampagnen oder organische Kanäle benötigen.",
      "plan_2_freq": "/ Sprint",
      "plan_2_btn": "<span>Creative Sprint Starten &rarr;</span>",
      "plan_3_title": "Lead-Generation Engine",
      "plan_3_desc": "Ideal für Dienstleister, Berater und B2B-Unternehmen, die planbar qualifizierte Kundenanfragen generieren möchten.",
      "plan_3_freq": "/ Setup",
      "plan_3_btn": "<span>Lead-System Aufbauen &rarr;</span>",
      "plan_4_title": "Kommerzielles SEO-Programm",
      "plan_4_desc": "Ideal für Marken, die organische Sichtbarkeit aufbauen, Rankings verbessern und kaufbereite Suchanfragen gewinnen wollen.",
      "plan_4_freq": "/ Monat",
      "plan_4_btn": "<span>SEO-Programm Starten &rarr;</span>",
      "hero_tag_faq": "<i class=\"fa-solid fa-circle-question\"></i> Hilfreiche Antworten",
      "hero_title_faq": "Häufig gestellte <span class=\"highlight-blue\">Fragen</span>.",
      "hero_desc_faq": "Transparente Antworten zu unseren Leistungen, dem Onboarding-Prozess, Budgets, Reports und der Zusammenarbeit.",
      "hero_tag_contact": "<i class=\"fa-solid fa-paper-plane\"></i> Kontakt Aufnehmen",
      "hero_title_contact": "Lassen Sie uns über Ihr <span class=\"highlight-blue\">Unternehmenswachstum</span> sprechen.",
      "hero_desc_contact": "Erzählen Sie uns von Ihren Zielen und aktuellen Herausforderungen. Wir analysieren Ihre Angaben und melden uns innerhalb eines Werktages.",
      "form_tag": "<i class=\"fa-solid fa-file-signature\"></i> Nachricht Senden",
      "form_title": "Kontaktieren Sie Uns",
      "form_desc": "Teilen Sie uns Ihre aktuellen Aktivitäten und Ziele mit. Wir nutzen diese Informationen für eine zielgerichtete Empfehlung.",
      "form_name_ph": "Ihr Name *",
      "form_email_ph": "E-Mail-Adresse *",
      "form_phone_ph": "Telefon / WhatsApp",
      "form_website_ph": "Website oder Unternehmensname",
      "form_service_select": "Wählen Sie eine Leistung",
      "form_industry_select": "Ihre Branche",
      "form_region_select": "Ihre Region",
      "form_goal_label": "Was ist Ihr Hauptziel?",
      "form_goal_sales": "Mehr Umsatz / Verkäufe",
      "form_goal_leads": "Mehr Qualifizierte Leads",
      "form_goal_traffic": "Mehr Website-Traffic",
      "form_goal_brand": "Markenbekanntheit",
      "form_marketing_select": "Bestehende Marketing-Kanäle",
      "form_budget_select": "Monatliches Budget",
      "form_message_ph": "Erzählen Sie uns von Ihrem Unternehmen, aktuellen Herausforderungen und Zielen...",
      "form_submit_btn": "<span>Nachricht Senden &rarr;</span>",
      "form_success_title": "Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.",
      "footer_tagline_1": "GEMEINSAM",
      "footer_tagline_2": "DIE ZUKUNFT IHRES BUSINESS",
      "footer_tagline_3": "GESTALTEN.",
      "footer_rights": "Pixlark Marketing. Alle Rechte vorbehalten.",
      "chatbot_welcome": "Hallo! Ich bin Pixlark Bird. Wie können wir Ihr Marketing heute skalieren?",
      "chip_ads": "Paid Ads",
      "chip_seo": "SEO-Strategie",
      "chip_funnels": "Lead-Funnels",
      "chip_pricing": "Preise",
      "chip_why": "Warum Pixlark",
      "form_help_btn": "<span><i class=\"fa-solid fa-wand-magic-sparkles\"></i> Mit Pixlark Bird Ausfüllen</span>",
      "chatbot_title": "Pixlark Bird",
      "nav_suite": "Kundenportal"
    },
    "pt": {
      "nav_home": "Início",
      "nav_services": "Serviços",
      "nav_why": "Por Que Escolher-nos",
      "nav_pricing": "Preços e Planos",
      "nav_faq": "Perguntas Frequentes",
      "nav_contact": "Contato",
      "nav_hire": "Trabalhe Conosco &rarr;",
      "nav_admin": "Admin",
      "hero_tag_home": "<i class=\"fa-solid fa-rocket\"></i> Agência de Marketing Digital Completa",
      "hero_title_home": "Marketing de performance para empresas prontas para crescer.",
      "hero_desc_home": "Planejamos, lançamos e otimizamos canais de alta demanda: tráfego pago, SEO, conteúdo, landing pages, geração de leads e relatórios estratégicos.",
      "hero_cta_proposal": "<span>Solicitar Proposta &rarr;</span>",
      "hero_cta_services": "<span>Explorar Serviços</span>",
      "hero_partners_label": "Plataformas que gerenciamos:",
      "showcase_tag": "<i class=\"fa-solid fa-asterisk\"></i> Estratégia, Execução, Métricas",
      "showcase_title": "ATRAIA COMPRADORES.<br>AUMENTE O FATURAMENTO.",
      "showcase_desc": "Seja sua meta faturamento de e-commerce, leads qualificados ou presença local, conectamos campanhas a landing pages e acompanhamento de ponta a ponta.",
      "showcase_btn": "<span>Ver Nosso Processo Completo &rarr;</span>",
      "badge_growth_experts": "Especialistas em<br>Crescimento",
      "cap_stat_text": "Equipe Própria Dedicada",
      "cap_tag": "<i class=\"fa-solid fa-check\"></i> O Que Fazemos de Melhor",
      "cap_headline": "SEU TIME COMPLETO DE <span class=\"highlight-blue\">MARKETING</span>",
      "cap_desc": "Reunimos tráfego pago, criativos, SEO, CRO e dados em um planejamento unificado voltado aos seus objetivos de negócio.",
      "cap_card1_title": "Anúncios Pagos Online",
      "cap_card1_l1": "<i class=\"fa-solid fa-check\"></i> Google Search Ads para capturar clientes com alta intenção",
      "cap_card1_l2": "<i class=\"fa-solid fa-check\"></i> Anúncios no Meta e Instagram direcionados ao seu público-alvo",
      "cap_card1_l3": "<i class=\"fa-solid fa-check\"></i> Campanhas no TikTok para alcance, engajamento e conversão",
      "cap_card1_l4": "<i class=\"fa-solid fa-check\"></i> Testes contínuos de públicos, criativos e landing pages",
      "cap_card2_title": "Conteúdo e SEO Estratégico",
      "cap_card2_l1": "<i class=\"fa-solid fa-check\"></i> Vídeos curtos e criativos estratégicos para campanhas ativas",
      "cap_card2_l2": "<i class=\"fa-solid fa-check\"></i> SEO técnico, on-page, local e marketing de conteúdo",
      "cap_card2_l3": "<i class=\"fa-solid fa-check\"></i> Landing pages modernas, responsivas e focadas em conversão",
      "cap_card2_l4": "<i class=\"fa-solid fa-check\"></i> Relatórios mensais transparentes com análises estratégicas",
      "cap_btn": "<span>Explorar Todos os Serviços &rarr;</span>",
      "strat_tag": "<i class=\"fa-solid fa-chart-line\"></i> Destaques de Performance",
      "strat_headline": "RESULTADOS REAIS PARA<br><span class=\"highlight-blue\">EMPRESAS REAIS</span>",
      "strat_desc": "Unimos pesquisa de público, estratégia de canais, criativos de alta conversão e métricas sólidas para aprimorar cada ciclo.",
      "strat_btn": "<span>[ Falar Com Nossa Equipe &rarr; ]</span>",
      "stat1_label": "ROAS médio em contas de anúncios ativas",
      "stat2_label": "Aumento mensal de leads comerciais qualificados",
      "stat3_label": "Redução do custo médio por aquisição (CPA)",
      "cta_tag": "<i class=\"fa-solid fa-bolt\"></i> Dê o Próximo Passo",
      "cta_title": "Pronto Para Escalar o Seu Negócio?",
      "cta_desc": "Agende uma consultoria estratégica com nosso time sênior. Vamos auditar seus canais e fornecer um plano de ação personalizado.",
      "cta_btn_primary": "<span>Começar Agora &rarr;</span>",
      "cta_btn_secondary": "<span>Ver Todos os Planos</span>",
      "hero_tag_services": "<i class=\"fa-solid fa-layer-group\"></i> Marketing Completo",
      "hero_title_services": "Tudo o que sua empresa precisa para <span class=\"highlight-blue\">crescer e conquistar clientes</span>.",
      "hero_desc_services": "Unimos estratégia, execução em canais, criativos e métricas para atrair o público ideal e gerar vendas consistentes.",
      "hero_tag_why": "<i class=\"fa-solid fa-shield-halved\"></i> Por Que Escolher a Pixlark",
      "hero_title_why": "Um parceiro de marketing em quem você pode <span class=\"highlight-blue\">confiar para entregar resultados</span>.",
      "hero_desc_why": "Estratégia transparente, execução de alto nível e relatórios que conectam marketing a resultados reais de negócio.",
      "why_p1_title": "Profissionais Seniores Experientes",
      "why_p1_desc": "Trabalhe diretamente com especialistas que já gerenciaram campanhas e otimizaram conversões em mercados competitivos.",
      "why_p2_title": "Comunicação Ágil e Transparente",
      "why_p2_desc": "Respeitamos seu tempo com respostas rápidas, alinhamentos objetivos e reuniões produtivas focadas em resultados.",
      "why_p3_title": "Gestão 100% Própria das Contas",
      "why_p3_desc": "Suas contas são cuidadas pelo time que você conhece. Não terceirizamos seu projeto nem repassamos para estagiários.",
      "why_p4_title": "Resultados Comerciais Mensuráveis",
      "why_p4_desc": "Focamos no que importa: custo por lead (CPL), custo de aquisição (CAC), retorno sobre investimento (ROAS) e faturamento real.",
      "hero_tag_plans": "<i class=\"fa-solid fa-shapes\"></i> Planos Flexíveis",
      "hero_title_plans": "Planos de marketing <span class=\"highlight-blue\">ajustados ao seu orçamento</span>.",
      "hero_desc_plans": "Escolha o modelo ideal para suas prioridades: gestão contínua de tráfego, criação de criativos, captação de leads ou projetos de SEO.",
      "plan_1_title": "Parceiro Completo de Crescimento",
      "plan_1_desc": "Ideal para empresas que buscam um time completo cuidando de anúncios, criativos, SEO e relatórios contínuos.",
      "plan_1_freq": "/ mês",
      "plan_1_btn": "<span>Solicitar Proposta &rarr;</span>",
      "plan_2_title": "Sprint Criativo de 30 Dias",
      "plan_2_desc": "Ideal para marcas que precisam de vídeos e criativos de alta conversão para suas campanhas ou redes sociais.",
      "plan_2_freq": "/ sprint",
      "plan_2_btn": "<span>Iniciar Sprint Criativo &rarr;</span>",
      "plan_3_title": "Motor de Geração de Leads",
      "plan_3_desc": "Ideal para empresas de serviços, consultorias e B2B que buscam um funil previsível de clientes qualificados.",
      "plan_3_freq": "/ projeto",
      "plan_3_btn": "<span>Criar Seu Motor de Leads &rarr;</span>",
      "plan_4_title": "Programa de SEO Comercial",
      "plan_4_desc": "Ideal para empresas que desejam autoridade orgânica, primeiras posições no Google e tráfego qualificado.",
      "plan_4_freq": "/ mês",
      "plan_4_btn": "<span>Iniciar Programa SEO &rarr;</span>",
      "hero_tag_faq": "<i class=\"fa-solid fa-circle-question\"></i> Respostas Úteis",
      "hero_title_faq": "Perguntas <span class=\"highlight-blue\">frequentes</span>.",
      "hero_desc_faq": "Respostas diretas sobre nossos serviços, processo de integração, orçamentos, relatórios e parceria.",
      "hero_tag_contact": "<i class=\"fa-solid fa-paper-plane\"></i> Entre em Contato",
      "hero_title_contact": "Vamos conversar sobre o <span class=\"highlight-blue\">crescimento da sua empresa</span>.",
      "hero_desc_contact": "Compartilhe seus objetivos e desafios atuais. Nossa equipe analisará os detalhes e responderá em até 1 dia útil.",
      "form_tag": "<i class=\"fa-solid fa-file-signature\"></i> Enviar Mensagem",
      "form_title": "Fale Conosco",
      "form_desc": "Compartilhe suas atividades de marketing e objetivos. Usaremos essas informações para traçar os próximos passos.",
      "form_name_ph": "Seu Nome *",
      "form_email_ph": "E-mail *",
      "form_phone_ph": "Telefone / WhatsApp",
      "form_website_ph": "Site ou Nome da Empresa",
      "form_service_select": "Selecione o Serviço de Interesse",
      "form_industry_select": "Seu Setor / Indústria",
      "form_region_select": "Sua Região",
      "form_goal_label": "Qual é o seu principal objetivo?",
      "form_goal_sales": "Mais Vendas / Faturamento",
      "form_goal_leads": "Mais Leads Qualificados",
      "form_goal_traffic": "Tráfego no Site",
      "form_goal_brand": "Reconhecimento de Marca",
      "form_marketing_select": "Canais Atuais de Marketing",
      "form_budget_select": "Orçamento Mensal",
      "form_message_ph": "Conte-nos sobre sua empresa, desafios atuais e o que gostaria de alcançar...",
      "form_submit_btn": "<span>Enviar Mensagem &rarr;</span>",
      "form_success_title": "Obrigado! Sua mensagem foi enviada com sucesso.",
      "footer_tagline_1": "CONSTRUA",
      "footer_tagline_2": "O FUTURO DO SEU NEGÓCIO",
      "footer_tagline_3": "JUNTOS.",
      "footer_rights": "Pixlark Marketing. Todos os direitos reservados.",
      "chatbot_welcome": "Olá! Sou o Pixlark Bird. Como podemos ajudar a escalar seu marketing hoje?",
      "chip_ads": "Tráfego Pago",
      "chip_seo": "SEO Comercial",
      "chip_funnels": "Funil de Leads",
      "chip_pricing": "Preços",
      "chip_why": "Por Que a Pixlark",
      "form_help_btn": "<span><i class=\"fa-solid fa-wand-magic-sparkles\"></i> Preencher com Pixlark Bird</span>",
      "chatbot_title": "Pixlark Bird",
      "nav_suite": "Área do Cliente"
    },
    "hi": {
      "nav_home": "होम",
      "nav_services": "सेवाएं",
      "nav_why": "हमें क्यों चुनें",
      "nav_pricing": "मूल्य और योजनाएं",
      "nav_faq": "सामान्य प्रश्न",
      "nav_contact": "संपर्क",
      "nav_hire": "हमारे साथ काम करें &rarr;",
      "nav_admin": "व्यवस्थापक",
      "hero_tag_home": "<i class=\"fa-solid fa-rocket\"></i> पूर्ण-सेवा डिजिटल मार्केटिंग एजेंसी",
      "hero_title_home": "विकास के लिए तैयार व्यवसायों के लिए प्रदर्शन विपणन।",
      "hero_desc_home": "हम ऐसे माध्यमों की योजना, शुरुआत और अनुकूलन करते हैं जो मांग बढ़ाते हैं: सशुल्क विज्ञापन, एसईओ, सामग्री, लैंडिंग पेज और रिपोर्टिंग।",
      "hero_cta_proposal": "<span>प्रस्ताव का अनुरोध करें &rarr;</span>",
      "hero_cta_services": "<span>सेवाएं देखें</span>",
      "hero_partners_label": "प्लेटफ़ॉर्म जिनके साथ हम काम करते हैं:",
      "showcase_tag": "<i class=\"fa-solid fa-asterisk\"></i> रणनीति, कार्यान्वयन, माप",
      "showcase_title": "खरीदारों को आकर्षित करें।<br>राजस्व बढ़ाएं।",
      "showcase_desc": "चाहे आपकी प्राथमिकता ई-कॉमर्स बिक्री हो, योग्य लीड्स हों, या बेहतर दृश्यता हो, हम प्रगति मापने के लिए अभियान रणनीति को जोड़ते हैं।",
      "showcase_btn": "<span>हमारी पूरी प्रक्रिया देखें &rarr;</span>",
      "badge_growth_experts": "विकास<br>विशेषज्ञ",
      "cap_stat_text": "समर्पित इन-हाउस टीम",
      "cap_tag": "<i class=\"fa-solid fa-check\"></i> हमारी प्रमुख विशेषताएं",
      "cap_headline": "आपकी संपूर्ण <span class=\"highlight-blue\">मार्केटिंग टीम</span>",
      "cap_desc": "हम सशुल्क मीडिया, रचनात्मकता, एसईओ और डेटा को एक समन्वित योजना में लाते हैं।",
      "cap_card1_title": "सशुल्क ऑनलाइन विज्ञापन",
      "cap_card1_l1": "<i class=\"fa-solid fa-check\"></i> उच्च-इरादे वाले खरीदारों को आकर्षित करने के लिए Google खोज विज्ञापन",
      "cap_card1_l2": "<i class=\"fa-solid fa-check\"></i> अपने आदर्श ग्राहकों को लक्षित करने के लिए मेटा और इंस्टाग्राम विज्ञापन",
      "cap_card1_l3": "<i class=\"fa-solid fa-check\"></i> पहुंच और रूपांतरण के लिए टिकटॉक अभियान",
      "cap_card1_l4": "<i class=\"fa-solid fa-check\"></i> दर्शकों, विज्ञापनों और लैंडिंग पेजों का निरंतर परीक्षण",
      "cap_card2_title": "सामग्री और खोज एसईओ",
      "cap_card2_l1": "<i class=\"fa-solid fa-check\"></i> सक्रिय अभियानों के लिए लघु वीडियो और रचनात्मक सामग्री",
      "cap_card2_l2": "<i class=\"fa-solid fa-check\"></i> तकनीकी, ऑन-पेज, स्थानीय और सामग्री-आधारित एसईओ",
      "cap_card2_l3": "<i class=\"fa-solid fa-check\"></i> रूपांतरण के लिए निर्मित आधुनिक, मोबाइल-अनुकूल लैंडिंग पेज",
      "cap_card2_l4": "<i class=\"fa-solid fa-check\"></i> पारदर्शी डेटा के साथ स्पष्ट मासिक वीडियो रिपोर्ट",
      "cap_btn": "<span>सभी सेवाएं देखें &rarr;</span>",
      "strat_tag": "<i class=\"fa-solid fa-chart-line\"></i> प्रदर्शन हाइलाइट्स",
      "strat_headline": "वास्तविक व्यवसायों के लिए<br><span class=\"highlight-blue\">वास्तविक परिणाम</span>",
      "strat_desc": "हम दर्शकों के शोध, चैनल रणनीति और विश्वसनीय ट्रैकिंग को जोड़ते हैं ताकि यह जान सकें कि क्या काम कर रहा है।",
      "strat_btn": "<span>[ हमारी टीम से बात करें &rarr; ]</span>",
      "stat1_label": "सक्रिय ग्राहक विज्ञापन खातों में औसत ROAS",
      "stat2_label": "मासिक योग्य इनबाउंड लीड में वृद्धि",
      "stat3_label": "प्रति अधिग्रहण औसत लागत में कमी",
      "cta_tag": "<i class=\"fa-solid fa-bolt\"></i> अगला कदम उठाएं",
      "cta_title": "क्या आप अपना व्यवसाय बढ़ाने के लिए तैयार हैं?",
      "cta_desc": "हमारी वरिष्ठ मार्केटिंग टीम के साथ परामर्श बुक करें। हम आपके चैनलों का ऑडिट करेंगे और एक स्पष्ट योजना प्रदान करेंगे।",
      "cta_btn_primary": "<span>आज ही शुरू करें &rarr;</span>",
      "cta_btn_secondary": "<span>सभी योजनाएं देखें</span>",
      "hero_tag_services": "<i class=\"fa-solid fa-layer-group\"></i> पूर्ण-सेवा विपणन",
      "hero_title_services": "आपके व्यवसाय को <span class=\"highlight-blue\">बढ़ाने और ग्राहक प्राप्त करने</span> के लिए सब कुछ।",
      "hero_desc_services": "हम रणनीति, निष्पादन और रचनात्मकता को जोड़ते हैं ताकि आप सही दर्शकों को आकर्षित कर सकें।",
      "hero_tag_why": "<i class=\"fa-solid fa-shield-halved\"></i> Pixlark को क्यों चुनें",
      "hero_title_why": "एक मार्केटिंग पार्टनर जिस पर आप <span class=\"highlight-blue\">परिणाम देने के लिए भरोसा कर सकते हैं</span>।",
      "hero_desc_why": "स्पष्ट रणनीति, जवाबदेह निष्पादन, और रिपोर्टिंग जो मार्केटिंग गतिविधियों को व्यावसायिक परिणामों से जोड़ती है।",
      "why_p1_title": "अनुभवी वरिष्ठ विपणक",
      "why_p1_desc": "उन अनुभवी विशेषज्ञों के साथ सीधे काम करें जिन्होंने प्रतिस्पर्धी उद्योगों में अभियानों का प्रबंधन किया है।",
      "why_p2_title": "तेज, उत्तरदायी संचार",
      "why_p2_desc": "हम आपके समय का सम्मान करते हैं। त्वरित उत्तर और स्पष्ट कदम जो परियोजनाओं को आगे बढ़ाते हैं।",
      "why_p3_title": "100% इन-हाउस खाता प्रबंधन",
      "why_p3_desc": "आपके अभियानों का प्रबंधन उसी टीम द्वारा किया जाता है जिससे आप मिलते हैं। हम आपका काम आउटसोर्स नहीं करते हैं।",
      "why_p4_title": "मापने योग्य व्यावसायिक परिणाम",
      "why_p4_desc": "हम केवल क्लिक्स के बजाय प्रति लीड लागत, ग्राहक अधिग्रहण लागत, और राजस्व को मापते हैं।",
      "hero_tag_plans": "<i class=\"fa-solid fa-shapes\"></i> लचीली योजनाएं",
      "hero_title_plans": "आपके बजट के अनुसार <span class=\"highlight-blue\">तैयार की गई मार्केटिंग योजनाएं</span>।",
      "hero_desc_plans": "अपनी प्राथमिकताओं के अनुसार एक कार्य मॉडल चुनें, निरंतर चैनल प्रबंधन से लेकर एसईओ तक।",
      "plan_1_title": "पूर्ण-सेवा विकास भागीदार",
      "plan_1_desc": "उन व्यवसायों के लिए सर्वश्रेष्ठ जो विज्ञापनों, रचनात्मकता, और एसईओ को संभालने वाली एक पूरी मार्केटिंग टीम चाहते हैं।",
      "plan_1_freq": "/ माह",
      "plan_1_btn": "<span>प्रस्ताव का अनुरोध करें &rarr;</span>",
      "plan_2_title": "30-दिवसीय रचनात्मक स्प्रिंट",
      "plan_2_desc": "उन टीमों के लिए सर्वश्रेष्ठ जिन्हें मौजूदा अभियानों के लिए उच्च-प्रदर्शन वाले वीडियो की आवश्यकता है।",
      "plan_2_freq": "/ स्प्रिंट",
      "plan_2_btn": "<span>स्प्रिंट शुरू करें &rarr;</span>",
      "plan_3_title": "लीड जनरेशन इंजन",
      "plan_3_desc": "सेवा व्यवसायों और सलाहकारों के लिए सर्वश्रेष्ठ जो एक विश्वसनीय इनबाउंड पाइपलाइन चाहते हैं।",
      "plan_3_freq": "/ सिस्टम",
      "plan_3_btn": "<span>अपना लीड इंजन बनाएं &rarr;</span>",
      "plan_4_title": "व्यावसायिक एसईओ कार्यक्रम",
      "plan_4_desc": "उन ब्रांडों के लिए सर्वश्रेष्ठ जो ऑर्गेनिक खोज इक्विटी बनाने और कीवर्ड रैंकिंग में सुधार करने के लिए तैयार हैं।",
      "plan_4_freq": "/ माह",
      "plan_4_btn": "<span>एसईओ शुरू करें &rarr;</span>",
      "hero_tag_faq": "<i class=\"fa-solid fa-circle-question\"></i> उपयोगी उत्तर",
      "hero_title_faq": "अक्सर पूछे जाने वाले <span class=\"highlight-blue\">प्रश्न</span>।",
      "hero_desc_faq": "हमारी सेवाओं, ऑनबोर्डिंग प्रक्रिया, बजट और रिपोर्टिंग के बारे में उत्तर।",
      "hero_tag_contact": "<i class=\"fa-solid fa-paper-plane\"></i> संपर्क में रहें",
      "hero_title_contact": "आइए अपने <span class=\"highlight-blue\">व्यवसाय को बढ़ाने</span> के बारे में बात करें।",
      "hero_desc_contact": "हमें बताएं कि आप क्या सुधारना चाहते हैं। हम विवरणों की समीक्षा करेंगे और एक कार्य दिवस के भीतर उत्तर देंगे।",
      "form_tag": "<i class=\"fa-solid fa-file-signature\"></i> संदेश भेजें",
      "form_title": "संपर्क करें",
      "form_desc": "अपना व्यवसाय मॉडल, लक्ष्य और समयरेखा साझा करें।",
      "form_name_ph": "आपका नाम *",
      "form_email_ph": "ईमेल पता *",
      "form_phone_ph": "फ़ोन नंबर / व्हाट्सएप",
      "form_website_ph": "वेबसाइट या व्यवसाय का नाम",
      "form_service_select": "रुचि की सेवा का चयन करें",
      "form_industry_select": "आपका उद्योग",
      "form_region_select": "आपका क्षेत्र",
      "form_goal_label": "आपका मुख्य लक्ष्य क्या है?",
      "form_goal_sales": "अधिक बिक्री / राजस्व",
      "form_goal_leads": "अधिक लीड्स",
      "form_goal_traffic": "वेबसाइट ट्रैफ़िक",
      "form_goal_brand": "ब्रांड जागरूकता",
      "form_marketing_select": "वर्तमान मार्केटिंग चैनल",
      "form_budget_select": "मासिक बजट",
      "form_message_ph": "हमें अपने व्यवसाय, वर्तमान चुनौतियों और आप क्या सुधारना चाहते हैं इसके बारे में बताएं...",
      "form_submit_btn": "<span>संदेश भेजें &rarr;</span>",
      "form_success_title": "धन्यवाद! आपका संदेश सफलतापूर्वक भेज दिया गया है।",
      "footer_tagline_1": "बनाएं",
      "footer_tagline_2": "ऑनलाइन व्यवसाय का भविष्य",
      "footer_tagline_3": "साथ मिलकर।",
      "footer_rights": "Pixlark Marketing. सर्वाधिकार सुरक्षित।",
      "chatbot_welcome": "नमस्ते! मैं Pixlark Bird हूँ। आज मैं आपके मार्केटिंग को बढ़ाने में कैसे मदद कर सकता हूँ?",
      "chip_ads": "सशुल्क विज्ञापन",
      "chip_seo": "व्यावसायिक एसईओ",
      "chip_funnels": "लीड फ़नल",
      "chip_pricing": "मूल्य",
      "chip_why": "Pixlark क्यों",
      "form_help_btn": "<span><i class=\"fa-solid fa-wand-magic-sparkles\"></i> Pixlark Bird के साथ भरें</span>",
      "chatbot_title": "Pixlark Bird",
      "nav_suite": "क्लाइंट सुइट"
    },
    "zh": {
      "nav_home": "首页",
      "nav_services": "服务项目",
      "nav_why": "为何选择我们",
      "nav_pricing": "价格与方案",
      "nav_faq": "常见问题",
      "nav_contact": "联系我们",
      "nav_hire": "与我们合作 &rarr;",
      "nav_admin": "管理后台",
      "hero_tag_home": "<i class=\"fa-solid fa-rocket\"></i> 全方位数字营销服务机构",
      "hero_title_home": "助力企业实现突破性增长的实战营销伙伴。",
      "hero_desc_home": "我们规划、启动并持续优化推动业务增长的核心渠道：付费搜索与社交广告、商业SEO、内容创作、高转化落地页和数据报表。",
      "hero_cta_proposal": "<span>获取专属增长方案 &rarr;</span>",
      "hero_cta_services": "<span>浏览服务项目</span>",
      "hero_partners_label": "核心合作与运营平台：",
      "showcase_tag": "<i class=\"fa-solid fa-asterisk\"></i> 战略、执行、衡量",
      "showcase_title": "精准吸引买家。<br>持续倍增营收。",
      "showcase_desc": "无论您的核心目标是电商销售额、高质量销售线索，还是品牌市场知名度，我们都将广告策略与落地页优化、全链路数据追踪紧密结合。",
      "showcase_btn": "<span>了解完整服务流程 &rarr;</span>",
      "badge_growth_experts": "实战增长<br>专家团队",
      "cap_stat_text": "专属资深实战团队",
      "cap_tag": "<i class=\"fa-solid fa-check\"></i> 核心专长与服务",
      "cap_headline": "您值得信赖的 <span class=\"highlight-blue\">全栈营销增长团队</span>",
      "cap_desc": "我们将付费广告、创意制作、搜索引擎优化、转化率提升和数据分析深度融合为一个统一的增长方案。",
      "cap_card1_title": "多渠道付费广告运营",
      "cap_card1_l1": "<i class=\"fa-solid fa-check\"></i> Google搜索广告：精准捕获高购买意向客户",
      "cap_card1_l2": "<i class=\"fa-solid fa-check\"></i> Meta &amp; Instagram广告：触达并转化理想受众",
      "cap_card1_l3": "<i class=\"fa-solid fa-check\"></i> TikTok推广：全面覆盖年轻消费人群与高转化人群",
      "cap_card1_l4": "<i class=\"fa-solid fa-check\"></i> 持续A/B测试受众、素材创意和着陆页转化率",
      "cap_card2_title": "内容创意与商业SEO",
      "cap_card2_l1": "<i class=\"fa-solid fa-check\"></i> 竖屏短视频制作与高点击社交广告视觉设计",
      "cap_card2_l2": "<i class=\"fa-solid fa-check\"></i> 结构化技术SEO、站内优化及本地化搜索排名",
      "cap_card2_l3": "<i class=\"fa-solid fa-check\"></i> 移动端优先的高转化率专用落地页（LP）定制与上线",
      "cap_card2_l4": "<i class=\"fa-solid fa-check\"></i> 透明直观的月度数据汇报与下一步实战优化建议",
      "cap_btn": "<span>查看所有服务详情 &rarr;</span>",
      "strat_tag": "<i class=\"fa-solid fa-chart-line\"></i> 实战业务成果",
      "strat_headline": "赋能实体企业<br><span class=\"highlight-blue\">创造真实可见的商业回报</span>",
      "strat_desc": "我们深入洞察目标人群，结合定制渠道策略与高转化创意，通过严密的数据追踪不断迭代并放大营销回报。",
      "strat_btn": "<span>[ 预约资深增长顾问咨询 &rarr; ]</span>",
      "stat1_label": "管理广告账户的平均投资回报率 (ROAS)",
      "stat2_label": "月均高意向销售线索（Leads）增长率",
      "stat3_label": "客户获取成本（CPA）平均降幅",
      "cta_tag": "<i class=\"fa-solid fa-bolt\"></i> 立即迈出增长第一步",
      "cta_title": "准备好开启您的业务增长之旅了吗？",
      "cta_desc": "立即预约资深营销专家免费战略诊断。我们将深度评估您现有的营销渠道，发掘增长机会，并提供清晰落地的路线图。",
      "cta_btn_primary": "<span>立即开启合作 &rarr;</span>",
      "cta_btn_secondary": "<span>查看所有合作方案</span>",
      "hero_tag_services": "<i class=\"fa-solid fa-layer-group\"></i> 全链路整合营销服务",
      "hero_title_services": "为您企业量身打造的 <span class=\"highlight-blue\">获客增长整体解决方案</span>。",
      "hero_desc_services": "我们将战略规划、广告投放、创意设计与数据监测深度整合，帮助您精准触达目标人群，将流量高效转化为真实订单。",
      "hero_tag_why": "<i class=\"fa-solid fa-shield-halved\"></i> 为什么选择 Pixlark",
      "hero_title_why": "值得您托付并持续创造价值的 <span class=\"highlight-blue\">长期增长合作伙伴</span>。",
      "hero_desc_why": "清晰透明的战略、资深团队亲自操盘、并将每一分营销预算与真实的业务产出紧密关联。",
      "why_p1_title": "资深操盘手亲自负责",
      "why_p1_desc": "由拥有丰富大盘实操经验的资深专家直接统筹，熟稔各行业流量逻辑与高转化创意打法。",
      "why_p2_title": "敏捷高效的沟通与响应",
      "why_p2_desc": "我们重视您的宝贵时间。快速反馈、明确的行动计划以及高效的定期同步，告别低效冗长的沟通。",
      "why_p3_title": "100% 内部团队自营交付",
      "why_p3_desc": "您的项目由与您对接的资深团队全权负责，绝不二次外包或交给无经验的新人实习生练手。",
      "why_p4_title": "以真实商业结果为唯一导向",
      "why_p4_desc": "我们杜绝虚荣指标，聚焦客户获取成本（CPA/CAC）、有效线索单价（CPL）及最终产生的实际销售收入。",
      "hero_tag_plans": "<i class=\"fa-solid fa-shapes\"></i> 灵活多元的合作方案",
      "hero_title_plans": "契合您企业预算与发展阶段的 <span class=\"highlight-blue\">高性价比增长方案</span>。",
      "hero_desc_plans": "根据您的业务优先级选择最合适的合作模式：从全渠道代运营到专项短视频创意、销售线索漏斗或商业SEO方案。",
      "plan_1_title": "全托管增长战略伙伴",
      "plan_1_desc": "适合需要由专业团队全面接管广告投放、创意设计、SEO优化及数据复盘的成熟企业。",
      "plan_1_freq": "/ 月",
      "plan_1_btn": "<span>获取专属报价 &rarr;</span>",
      "plan_2_title": "30天高爆款创意素材冲刺",
      "plan_2_desc": "适合已有投放团队，但急需大量高点击短视频与高质量社交广告视觉素材的企业。",
      "plan_2_freq": "/ 期",
      "plan_2_btn": "<span>开启创意冲刺 &rarr;</span>",
      "plan_3_title": "自动化客户线索获取系统",
      "plan_3_desc": "专为企业服务、专业咨询及B2B品牌打造的稳定高质入站客源获取系统。",
      "plan_3_freq": "/ 套",
      "plan_3_btn": "<span>构建获客系统 &rarr;</span>",
      "plan_4_title": "高转化商业SEO霸屏计划",
      "plan_4_desc": "适合希望建立持久自然搜索资产、稳步提升关键词排名并捕获精准意向买家的企业。",
      "plan_4_freq": "/ 月",
      "plan_4_btn": "<span>启动SEO计划 &rarr;</span>",
      "hero_tag_faq": "<i class=\"fa-solid fa-circle-question\"></i> 常见问题解答",
      "hero_title_faq": "关于合作的 <span class=\"highlight-blue\">高频常见问题</span>。",
      "hero_desc_faq": "解答关于我们的服务模式、项目启动流程、预算建议、数据汇报及合作细节的所有疑问。",
      "hero_tag_contact": "<i class=\"fa-solid fa-paper-plane\"></i> 与我们取得联系",
      "hero_title_contact": "共同探讨如何实现您企业的 <span class=\"highlight-blue\">突破性业务增长</span>。",
      "hero_desc_contact": "告诉我们您希望提升的业务指标及目前的营销痛点，我们将在1个工作日内与您联系并提供初步诊断建议。",
      "form_tag": "<i class=\"fa-solid fa-file-signature\"></i> 发送咨询需求",
      "form_title": "填写咨询表单",
      "form_desc": "简要说明您的业务模式、营销现状与目标周期，我们将结合实际情况为您提供量身定制的执行方案。",
      "form_name_ph": "您的姓名 *",
      "form_email_ph": "电子邮箱 *",
      "form_phone_ph": "联系电话 / 微信 / WhatsApp",
      "form_website_ph": "公司名称或网站网址",
      "form_service_select": "请选择您感兴趣的服务领域",
      "form_industry_select": "所属行业",
      "form_region_select": "目标投放地区",
      "form_goal_label": "您的核心诉求是什么？",
      "form_goal_sales": "提升销售额与订单量",
      "form_goal_leads": "获取更多有效销售线索",
      "form_goal_traffic": "提高网站精准访问流量",
      "form_goal_brand": "扩大品牌知名度与影响力",
      "form_marketing_select": "目前正在使用的营销渠道",
      "form_budget_select": "预估月度营销预算",
      "form_message_ph": "请简要描述您的业务模式、目前面临的挑战以及希望达成的目标...",
      "form_submit_btn": "<span>提交咨询信息 &rarr;</span>",
      "form_success_title": "感谢您的咨询！信息已成功提交，我们将尽快与您联系。",
      "footer_tagline_1": "携手",
      "footer_tagline_2": "开拓数字化业务的",
      "footer_tagline_3": "崭新未来。",
      "footer_rights": "Pixlark Marketing. 保留所有权利。",
      "chatbot_welcome": "您好！我是 Pixlark Bird。今天有什么可以协助您提升营销效果的？",
      "chip_ads": "付费广告",
      "chip_seo": "商业SEO",
      "chip_funnels": "获客漏斗",
      "chip_pricing": "价格方案",
      "chip_why": "关于Pixlark",
      "form_help_btn": "<span><i class=\"fa-solid fa-wand-magic-sparkles\"></i> 使用 Pixlark Bird 智能填写</span>",
      "chatbot_title": "Pixlark Bird",
      "nav_suite": "客户后台"
    },
    "ja": {
      "nav_home": "ホーム",
      "nav_services": "サービス",
      "nav_why": "選ばれる理由",
      "nav_pricing": "料金プラン",
      "nav_faq": "よくある質問",
      "nav_contact": "お問い合わせ",
      "nav_hire": "無料相談はこちら &rarr;",
      "nav_admin": "管理画面",
      "hero_tag_home": "<i class=\"fa-solid fa-rocket\"></i> 成果追求型フルサービス・マーケティング",
      "hero_title_home": "確実な成長と売上拡大を追求するパフォーマンスマーケティング。",
      "hero_desc_home": "Google/SNS運用型広告、商業SEO、高CVR導線設計、リード獲得自動化まで、貴社の予算と事業目標に直結した戦略的マーケティングをワンストップで実行します。",
      "hero_cta_proposal": "<span>無料提案をリクエスト &rarr;</span>",
      "hero_cta_services": "<span>提供サービスを見る</span>",
      "hero_partners_label": "主要運用対応プラットフォーム：",
      "showcase_tag": "<i class=\"fa-solid fa-asterisk\"></i> 戦略設計・運用実行・効果測定",
      "showcase_title": "購買意欲の高い顧客を集客し、<br>売上を最大化する。",
      "showcase_desc": "EC売上向上、高確度な見込み客獲得、地域No.1の検索順位など、貴社の課題に応じて広告運用と高CVR導線設計、精密な計測基盤を一気通貫で構築します。",
      "showcase_btn": "<span>支援プロセスを詳しく見る &rarr;</span>",
      "badge_growth_experts": "グロース<br>専門チーム",
      "cap_stat_text": "専属シニアマーケティング体制",
      "cap_tag": "<i class=\"fa-solid fa-check\"></i> 私たちの強みと専門領域",
      "cap_headline": "事業を前進させる <span class=\"highlight-blue\">プロフェッショナル集団</span>",
      "cap_desc": "運用型広告、クリエイティブ制作、SEO対策、CVR改善、データ分析を一元化し、すべての施策を貴社の売上拡大目標に連動させます。",
      "cap_card1_title": "運用型Web広告",
      "cap_card1_l1": "<i class=\"fa-solid fa-check\"></i> Google検索広告（高確度な顕在層を確実に獲得）",
      "cap_card1_l2": "<i class=\"fa-solid fa-check\"></i> Meta / Instagram広告（精緻なターゲティング配信）",
      "cap_card1_l3": "<i class=\"fa-solid fa-check\"></i> TikTok広告（認知拡大から購買行動へのスムーズな誘導）",
      "cap_card1_l4": "<i class=\"fa-solid fa-check\"></i> 配信ターゲット、広告クリエイティブ、LPの継続的なABテスト検証",
      "cap_card2_title": "コンテンツ制作 &amp; 商業SEO",
      "cap_card2_l1": "<i class=\"fa-solid fa-check\"></i> 縦型ショート動画・高クリック率広告バナー制作",
      "cap_card2_l2": "<i class=\"fa-solid fa-check\"></i> 内部構造最適化、ローカルSEO、購買直結キーワード対策",
      "cap_card2_l3": "<i class=\"fa-solid fa-check\"></i> スマホ完全対応・高コンバージョン率ランディングページ制作",
      "cap_card2_l4": "<i class=\"fa-solid fa-check\"></i> 成果がひと目でわかる月次動画レポート＆透明なデータ共有",
      "cap_btn": "<span>全サービス一覧を見る &rarr;</span>",
      "strat_tag": "<i class=\"fa-solid fa-chart-line\"></i> 実績ハイライト",
      "strat_headline": "クライアントの事業成長を支える<br><span class=\"highlight-blue\">確かな成果と実績</span>",
      "strat_desc": "ターゲット分析、媒体選定、高CVRクリエイティブ、精密な計測を組み合わせ、継続的な改善サイクルで費用対効果を最大化します。",
      "strat_btn": "<span>[ 専門チームに相談する &rarr; ]</span>",
      "stat1_label": "運用広告アカウントの平均ROAS実績",
      "stat2_label": "月間有効リード（商談・成約候補）増加率",
      "stat3_label": "顧客獲得単価（CPA）の平均削減率",
      "cta_tag": "<i class=\"fa-solid fa-bolt\"></i> 今すぐ次のステージへ",
      "cta_title": "事業の成長を、今すぐ加速させませんか？",
      "cta_desc": "専任シニアストラテジストによる無料マーケティング戦略診断を実施中。現状の運用状況を分析し、具体的な改善施策をご提案します。",
      "cta_btn_primary": "<span>無料診断・ご相談はこちら &rarr;</span>",
      "cta_btn_secondary": "<span>料金プランを確認する</span>",
      "hero_tag_services": "<i class=\"fa-solid fa-layer-group\"></i> フルサービス・マーケティング",
      "hero_title_services": "顧客獲得と事業拡大に必要な <span class=\"highlight-blue\">すべての施策をワンストップで</span>。",
      "hero_desc_services": "戦略策定、広告運用、クリエイティブ制作、データ計測を統合し、見込み顧客の獲得から成約までの導線を強固に構築します。",
      "hero_tag_why": "<i class=\"fa-solid fa-shield-halved\"></i> Pixlark が選ばれる理由",
      "hero_title_why": "売上にコミットする、<span class=\"highlight-blue\">信頼のマーケティングパートナー</span>。",
      "hero_desc_why": "透明性の高い戦略、妥協のない運用実行、そしてマーケティング費用を実際の事業利益へと直結させる精密なレポーティング体制。",
      "why_p1_title": "経験豊富なシニアマーケター体制",
      "why_p1_desc": "数多くの高難度プロジェクトを成功に導いてきた熟練スペシャリストが、直接貴社のプロジェクトを担当します。",
      "why_p2_title": "迅速かつ的確なコミュニケーション",
      "why_p2_desc": "スピード感を重視し、無駄なミーティングを排除。明快なネクストアクションと迅速なレスポンスでプロジェクトを推進します。",
      "why_p3_title": "完全自社内ワンストップ運用体制",
      "why_p3_desc": "商談から設計・運用まで同じ専任チームが担当。外部への丸投げや新人への引き継ぎは一切行いません。",
      "why_p4_title": "売上直結の測定可能なビジネス成果",
      "why_p4_desc": "クリック数やインプレッションなどの表面的な指標にとどまらず、CPA、リード単価、獲得売上を徹底して計測・改善します。",
      "hero_tag_plans": "<i class=\"fa-solid fa-shapes\"></i> 柔軟な料金プラン",
      "hero_title_plans": "貴社の予算と成長フェーズに合わせた <span class=\"highlight-blue\">最適なプラン設計</span>。",
      "hero_desc_plans": "集客チャネルの継続運用から、特化型クリエイティブ制作、リード獲得自動化、SEO対策まで、貴社のニーズに応じた柔軟な体制をご提供します。",
      "plan_1_title": "フルサービス・グロースパートナー",
      "plan_1_desc": "広告運用、クリエイティブ制作、SEO、月次改善レポートまで一括で任せたい成長企業様向け。",
      "plan_1_freq": "/ 月",
      "plan_1_btn": "<span>詳細とお見積り &rarr;</span>",
      "plan_2_title": "30日間動画＆クリエイティブ制作スプリント",
      "plan_2_desc": "高品質な広告素材が必要な企業様へ。SNS向け縦型ショート動画・広告バナーを集中的に制作。",
      "plan_2_freq": "/ スプリント",
      "plan_2_btn": "<span>動画スプリントを申し込む &rarr;</span>",
      "plan_3_title": "新規顧客獲得リードエンジン",
      "plan_3_desc": "サービス業や士業・コンサル向け。広告トラフィックから問い合わせ獲得、商談設定までを仕組み化。",
      "plan_3_freq": "/ システム",
      "plan_3_btn": "<span>リードシステムを構築する &rarr;</span>",
      "plan_4_title": "Google 商業 SEO 順位獲得プログラム",
      "plan_4_desc": "購買意欲の高い重要キーワードでの上位表示を目指し、内部対策・コンテンツ制作・ドメイン強化を総合的に実施。",
      "plan_4_freq": "/ 月",
      "plan_4_btn": "<span>SEO対策を開始する &rarr;</span>",
      "hero_tag_faq": "<i class=\"fa-solid fa-circle-question\"></i> よくあるご質問と回答",
      "hero_title_faq": "サービス・ご契約に関する <span class=\"highlight-blue\">よくある質問</span>。",
      "hero_desc_faq": "サービス内容、導入の流れ、推奨予算、レポーティング方法、ご発注前の確認事項について詳しくお答えします。",
      "hero_tag_contact": "<i class=\"fa-solid fa-paper-plane\"></i> お問い合わせ・ご相談",
      "hero_title_contact": "貴社の事業成長について、<span class=\"highlight-blue\">まずはお気軽にご相談ください</span>。",
      "hero_desc_contact": "現状の課題、現在運用中の施策、達成したい事業目標をお聞かせください。専任担当より1営業日以内にご返信いたします。",
      "form_tag": "<i class=\"fa-solid fa-file-signature\"></i> 相談フォーム",
      "form_title": "お問い合わせ",
      "form_desc": "ビジネスモデル、現在の施策、目標時期をご記入いただければ、最適な進め方をご案内いたします。",
      "form_name_ph": "お名前 *",
      "form_email_ph": "メールアドレス *",
      "form_phone_ph": "お電話番号 / WhatsApp",
      "form_website_ph": "貴社ウェブサイトURL / 会社名",
      "form_service_select": "ご希望のサービスを選択",
      "form_industry_select": "貴社の業種",
      "form_region_select": "対象地域 / マーケット",
      "form_goal_label": "最も重視する目標は何ですか？",
      "form_goal_sales": "売上・収益の最大化",
      "form_goal_leads": "新規見込み客（リード）の獲得",
      "form_goal_traffic": "高品質なサイトアクセスの増加",
      "form_goal_brand": "ブランド認知度の向上",
      "form_marketing_select": "現在実施中のマーケティング施策",
      "form_budget_select": "月間ご予算の目安",
      "form_message_ph": "貴社の事業内容、現在の課題、改善したいポイントなどを自由にご記入ください...",
      "form_submit_btn": "<span>送信する &rarr;</span>",
      "form_success_title": "送信が完了いたしました。お問い合わせありがとうございます。",
      "footer_tagline_1": "共に",
      "footer_tagline_2": "オンラインビジネスの",
      "footer_tagline_3": "未来を切り拓きましょう。",
      "footer_rights": "Pixlark Marketing. All rights reserved.",
      "chatbot_welcome": "こんにちは！Pixlark Bird です。マーケティングのご相談や戦略設計についてお気軽にお尋ねください。",
      "chip_ads": "運用型広告",
      "chip_seo": "商業SEO対策",
      "chip_funnels": "リード獲得導線",
      "chip_pricing": "料金プラン",
      "chip_why": "Pixlarkの強み",
      "form_help_btn": "<span><i class=\"fa-solid fa-wand-magic-sparkles\"></i> Pixlark Bird と入力</span>",
      "chatbot_title": "Pixlark Bird",
      "nav_suite": "クライアントポータル"
    }
  }
};

function setPixlarkLanguage(lang) {
  if (!lang) return;
  try {
    localStorage.setItem('pixlark_language', lang);
  } catch (e) {}
  applyLanguage(lang);
}
window.setPixlarkLanguage = setPixlarkLanguage;
window.applyLanguage = applyLanguage;

function initLanguageAndCurrency() {
  let currentLang = 'en';
  try {
    currentLang = localStorage.getItem('pixlark_language') || 'en';
  } catch (e) {}

  applyLanguage(currentLang);

  const langSelectors = document.querySelectorAll('#languageSelector, .header-lang-select');
  langSelectors.forEach(sel => {
    sel.value = currentLang;
    sel.addEventListener('change', (e) => {
      setPixlarkLanguage(e.target.value);
    });
  });
}

function applyLanguage(lang) {
  if (!lang) lang = 'en';
  const dict = (pixlarkI18nData && pixlarkI18nData.translations && (pixlarkI18nData.translations[lang] || pixlarkI18nData.translations['en'])) || {};

  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
  placeholders.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) {
      el.placeholder = dict[key];
    }
  });

  // Sync all language dropdowns on page
  const langSelectors = document.querySelectorAll('#languageSelector, .header-lang-select');
  langSelectors.forEach(sel => {
    if (sel.value !== lang) sel.value = lang;
  });

  document.documentElement.lang = lang;

  // Sync chatbot language state
  if (window.pixlarkChatState) {
    window.pixlarkChatState.language = lang;
  }
}

function initDynamicYear() {
  const el = document.getElementById('currentYear');
  if (el) {
    el.textContent = new Date().getFullYear();
  }
}

/**
 * PIXLARK MARKETING �� CONTROLLER & INTERACTIVITY
 * 1. Single Solid Glowing Copper Sulphate Blue Circle Cursor
 * 2. Magnetic Button Snapping & Morphing
 * 3. Pointing Text I-Beam Mode for Input Fields
 * 4. Navbar Scroll Blur State
 * 5. GSAP ScrollTrigger Animations
 * 6. FAQ Accordions
 * 7. Case Study Breakdown Modals
 * 8. Unified Lead Form Submissions across all pages (/api/leads)
 * 9. AI Growth Chatbot with Pixlark Emblem
 */



/* Ensure fixed background video autoplays and loops */
function initBackgroundVideo() {
  const vid = document.getElementById('bgHeroVideo');
  if (vid) {
    vid.muted = true;
    const playPromise = vid.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Retry on user click/touch if policy held
        window.addEventListener('touchstart', () => vid.play(), { once: true });
        window.addEventListener('click', () => vid.play(), { once: true });
      });
    }
  }
}

/* ==========================================================
   2. NAVBAR SCROLL BLUR STATE
   ========================================================== */
function initNavbarScrollState() {
  const header = document.getElementById('header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ==========================================================
   3. GSAP SCROLLTRIGGER MODERN REVEALS
   ========================================================== */
function initGsapModernReveals() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  // Hero Section Staggered Entrance
  const heroTitle = document.querySelector('.hero-title-grotesk, .inner-hero-title');
  if (heroTitle) {
    gsap.from(heroTitle, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out'
    });
  }

  const heroImageStage = document.querySelector('.hero-composition-stage');
  if (heroImageStage) {
    gsap.from(heroImageStage, {
      opacity: 0,
      scale: 0.95,
      y: 20,
      duration: 0.9,
      delay: 0.15,
      ease: 'power3.out'
    });
  }

  // Full-Bleed Split Showcase Entrance
  gsap.utils.toArray('.fullbleed-split-section').forEach(section => {
    gsap.from(section.children, {
      scrollTrigger: {
        trigger: section,
        start: 'top 85%'
      },
      opacity: 0,
      y: 30,
      stagger: 0.12,
      duration: 0.75,
      ease: 'power3.out'
    });
  });

  // Service Cards Entrance
  gsap.utils.toArray('.service-capability-card, .service-catalog-box, .case-study-spread-card').forEach(card => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 88%'
      },
      opacity: 0,
      y: 25,
      duration: 0.7,
      ease: 'power3.out'
    });
  });
}

/* ==========================================================
   4. FAQ ACCORDIONS (FAQ.HTML)
   ========================================================== */
function initFaqAccordions() {
  const items = document.querySelectorAll('.faq-item-modern');
  items.forEach(item => {
    item.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      items.forEach(i => i.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  });
}

/* ==========================================================
   5. DETAIL MODALS FOR CASE STUDIES
   ========================================================== */
const caseArchiveData = {
  'techscale': {
    brand: 'TechScale Consulting',
    year: '2026',
    discipline: 'Online Advertising & Lead Generation',
    result: '+450 New Booked Consultations in 90 Days',
    objective: 'Generate a steady, predictable flow of high-value customer inquiries and consultation bookings.',
    execution: 'Created targeted Google Search ads and Facebook ads paired with an easy online consultation booking calendar.',
    impact: 'The business cut their advertising cost per lead by 52% and closed over $380,000 in new client contracts.'
  },
  'auracommerce': {
    brand: 'Aura Home Products',
    year: '2026',
    discipline: 'Short Video Ads & Social Content',
    result: 'Nearly 4x Return On Ad Spend / 1.8M Video Views',
    objective: 'Catch customer attention on social media and turn viewers into immediate online buyers.',
    execution: 'Produced 45 engaging, high-energy short videos for Instagram Reels and TikTok highlighting customer reviews and product benefits.',
    impact: 'Generated 3.8x sales return on their ad budget and brought in thousands of new first-time customers.'
  },
  'apexlegal': {
    brand: 'Apex Business Law',
    year: '2025',
    discipline: 'Google Search Ranking (SEO)',
    result: 'Ranked #1 on Google for 42 Commercial Keywords',
    objective: 'Show up at the top of Google searches when local businesses look for legal advice and services.',
    execution: 'Speeded up the website, optimized Google Business listings, and published helpful answers to common client questions.',
    impact: 'Free incoming website leads increased by +640% in 6 months, delivering $320,000+ in retained client business.'
  }
};

window.openIndexModal = function (key) {
  const data = caseArchiveData[key];
  if (!data) return;

  const modal = document.getElementById('indexArchiveModal');
  const container = document.getElementById('indexModalBody');
  if (!modal || !container) return;

  container.innerHTML = `
    <div style="font-size:0.78rem; font-weight:800; color:var(--bg-blue); text-transform:uppercase; letter-spacing:0.08em; margin-bottom:8px;">${data.year} &bull; ${data.discipline}</div>
    <h3 style="font-family:var(--font-heading); font-size:1.85rem; font-weight:900; color:var(--text-dark); margin-bottom:10px;">${data.brand}</h3>
    <div style="font-size:1.1rem; font-weight:800; color:var(--bg-blue); margin-bottom:20px;">${data.result}</div>
    
    <div style="margin-bottom:16px;">
      <span style="font-size:0.72rem; font-weight:700; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.08em; display:block; margin-bottom:4px;">THE OBJECTIVE</span>
      <p style="color:var(--text-secondary); font-size:0.92rem; line-height:1.6;">${data.objective}</p>
    </div>

    <div style="margin-bottom:16px;">
      <span style="font-size:0.72rem; font-weight:700; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.08em; display:block; margin-bottom:4px;">THE EXECUTION</span>
      <p style="color:var(--text-secondary); font-size:0.92rem; line-height:1.6;">${data.execution}</p>
    </div>

    <div style="margin-bottom:24px;">
      <span style="font-size:0.72rem; font-weight:700; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.08em; display:block; margin-bottom:4px;">VERIFIED IMPACT</span>
      <p style="color:var(--text-dark); font-weight:700; font-size:1rem; line-height:1.6;">${data.impact}</p>
    </div>

    <button onclick="closeIndexModal()" class="btn-primary-blue" style="padding:10px 24px; font-size:0.85rem;">
      <span>Close Breakdown</span>
    </button>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeIndexModal = function () {
  const modal = document.getElementById('indexArchiveModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
};

function initIndexModalSystem() {
  const modal = document.getElementById('indexArchiveModal');
  const closeBtn = document.getElementById('closeIndexModalBtn');
  if (closeBtn) closeBtn.addEventListener('click', window.closeIndexModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) window.closeIndexModal();
    });
  }
}

// ==========================================================
// GOOGLE APPS SCRIPT WEB APP ENDPOINT CONFIGURATION
// Replace with your deployed Google Apps Script Web App URL:
// e.g. 'https://script.google.com/macros/s/AKfycb.../exec'
// (See GOOGLE_APPS_SCRIPT_SETUP.md for 2-minute step-by-step setup)
// ==========================================================
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx5-GWLhl5WMY_RJOiNfBg59CqJI_Gu-bedRbOQL0rGnnEPETXheccEuHmrT7xAus3q/exec';

/* ==========================================================
   6. UNIFIED LEAD FORM SUBMISSION ACROSS ALL PAGES
   ========================================================== */
function initAllLeadForms() {
  const formIds = ['modernIntakeForm', 'servicesIntakeForm', 'contactPageForm'];

  formIds.forEach(id => {
    const form = document.getElementById(id);
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn ? btn.innerHTML : '<span>Contact Us &rarr;</span>';
      const alertBox = form.querySelector('[id$="SuccessAlert"]') ||
        form.parentElement.querySelector('[id$="SuccessAlert"]') ||
        document.getElementById('contactSuccessAlert') ||
        document.getElementById('intakeSuccessAlert') ||
        document.getElementById('servicesSuccessAlert');

      // Validation
      const emailInput = form.querySelector('input[type="email"]');
      const nameInput = form.querySelector('input[name="fullName"], input[name="name"]');
      if (emailInput && !emailInput.value.trim()) {
        emailInput.focus();
        return;
      }

      if (btn) {
        btn.disabled = true;
        btn.innerHTML = '<span>Sending Message... <i class="fa-solid fa-spinner fa-spin"></i></span>';
      }

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      // Collect multiple checkbox selections for goals if present
      const checkedGoals = [];
      form.querySelectorAll('input[name="goals"]:checked').forEach(cb => checkedGoals.push(cb.value));
      if (checkedGoals.length > 0) {
        data.goals = checkedGoals.join(', ');
      }

      data.submittedAt = new Date().toISOString();
      data.pageSource = window.location.pathname.split('/').pop() || 'index.html';

      let success = false;

      // 1. If Google Apps Script URL is configured, send directly to Apps Script Web App
      if (GOOGLE_APPS_SCRIPT_URL && GOOGLE_APPS_SCRIPT_URL.trim().startsWith('http')) {
        try {
          // Sending text/plain avoids CORS preflight restrictions in Google Apps Script Web Apps
          await fetch(GOOGLE_APPS_SCRIPT_URL.trim(), {
            method: 'POST',
            mode: 'no-cors', // standard for GAS web apps
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify(data)
          });
          success = true;
        } catch (err) {
          console.warn('[GAS] Google Apps Script dispatch issue:', err);
        }
      }

      // 2. Also forward to local backend / Node server if running
      try {
        const res = await fetch('/api/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        if (res.ok) success = true;
      } catch (err) {
        // If static server or local backend offline, ignore if GAS was triggered
      }

      // 3. Real-Time Suite LocalStorage Sync
      try {
        const existingLeads = JSON.parse(localStorage.getItem('pixlark_leads') || '[]');
        const newLeadEntry = {
          id: 'ld_' + Date.now(),
          name: data.fullName || 'Inbound Prospect',
          email: data.email || 'inbound@client.com',
          phone: data.phone || '',
          service: Array.isArray(data.services) ? data.services.join(', ') : (data.services || 'Growth Strategy'),
          budget: '$2,500–$5,000',
          stage: 'new',
          notes: data.message || 'Submitted via website contact form',
          date: 'Today, ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          createdAt: new Date().toISOString()
        };
        existingLeads.unshift(newLeadEntry);
        localStorage.setItem('pixlark_leads', JSON.stringify(existingLeads));

        // Also add conversation thread in Suite inbox
        const existingThreads = JSON.parse(localStorage.getItem('pixlark_suite_threads') || '[]');
        const newThread = {
          id: 'th_' + Date.now(),
          sender: data.fullName || 'Inbound Prospect',
          channel: 'web',
          lastMessage: data.message || 'Submitted new contact form inquiry.',
          timestamp: 'Just now',
          unread: true,
          messages: [
            {
              sender: data.fullName || 'Inbound Prospect',
              text: data.message || 'Hello! I submitted an intake inquiry for ' + (newLeadEntry.service || 'growth marketing services') + '.',
              time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
              incoming: true
            }
          ]
        };
        existingThreads.unshift(newThread);
        localStorage.setItem('pixlark_suite_threads', JSON.stringify(existingThreads));
      } catch (err) {
        console.warn('LocalStorage lead sync:', err);
      }

      // Default to true if user filled required info to ensure reassuring UI feedback
      if (!GOOGLE_APPS_SCRIPT_URL && !success) {
        // If neither endpoint is active yet, still deliver immediate graceful UI confirmation
        success = true;
      }

      if (btn) {
        btn.disabled = false;
        btn.innerHTML = originalText;
      }

      if (success) {
        form.reset();
        if (alertBox) {
          alertBox.style.display = 'block';
          alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    });
  });
}

/* ==========================================================
   7. INTERACTIVE FLOATING GROWTH CHATBOT WIDGET
   ========================================================== */
function initGrowthChatbot() {
  if (document.getElementById('floatingChatbotTrigger')) return;

  // 1. Create floating trigger button with brand emblem
  const trigger = document.createElement('button');
  trigger.id = 'floatingChatbotTrigger';
  trigger.className = 'growth-chatbot-toggle-btn';
  trigger.setAttribute('aria-label', 'Open Pixlark Bird');
  trigger.innerHTML = `
    <img src="assets/images/bird.png" alt="Pixlark Bird">
  `;
  document.body.appendChild(trigger);

  // 2. Create interactive chat popup panel
  const panel = document.createElement('div');
  panel.id = 'chatbotPopupPanel';
  panel.className = 'pixlark-floating-chatbot-panel';
  panel.innerHTML = `
    <div class="chatbot-header">
      <div class="chatbot-header-brand">
        <img src="assets/images/bird.png" alt="Pixlark Bird" class="chatbot-avatar-img">
        <div class="chatbot-title-box">
          <span class="chatbot-title" data-i18n="chatbot_title">Pixlark Bird</span>
          <span class="chatbot-status"><span class="chatbot-status-dot"></span> Online AI Strategist</span>
        </div>
      </div>
      <button id="closeChatbotBtn" class="chatbot-close-btn" aria-label="Close Assistant">&times;</button>
    </div>

    <div id="chatbotMessages" class="chatbot-messages-container">
      <div class="chatbot-msg-bot" data-i18n="chatbot_welcome">
        Hello! I'm your Pixlark Bird. How can I help scale your marketing today?
      </div>
    </div>

    <div class="chatbot-quick-chips" id="chatbotQuickChips">
      <button type="button" class="chatbot-chip-btn" data-chip="Paid Ads" data-i18n="chip_ads">Paid Ads</button>
      <button type="button" class="chatbot-chip-btn" data-chip="Commercial SEO" data-i18n="chip_seo">Commercial SEO</button>
      <button type="button" class="chatbot-chip-btn" data-chip="Lead Funnels" data-i18n="chip_funnels">Lead Funnels</button>
      <button type="button" class="chatbot-chip-btn" data-chip="Pricing Plans" data-i18n="chip_pricing">Pricing</button>
      <button type="button" class="chatbot-chip-btn" data-chip="Why Pixlark" data-i18n="chip_why">Why Pixlark</button>
    </div>

    <div class="chatbot-input-bar">
      <input type="text" id="chatbotInput" class="chatbot-input-field" placeholder="Ask about services, pricing, SEO, or get a plan..." autocomplete="off">
      <button id="chatbotSendBtn" class="chatbot-send-btn" aria-label="Send Message"><i class="fa-solid fa-paper-plane"></i></button>
    </div>
  `;
  document.body.appendChild(panel);

  // Chat state and elements
  const input = document.getElementById('chatbotInput');
  const sendBtn = document.getElementById('chatbotSendBtn');
  const messagesDiv = document.getElementById('chatbotMessages');
  const quickChips = document.getElementById('chatbotQuickChips');
  const isContactPage = window.location.pathname.includes('contact');

  let chatState = {
    formMode: isContactPage,
    userName: '',
    selectedService: '',
    get language() {
      return localStorage.getItem('pixlark_language') || 'en';
    }
  };
  window.pixlarkChatState = chatState;

  function openChatbot() {
    panel.style.display = 'flex';
    panel.offsetHeight; // Force reflow
    panel.classList.add('active');
    setTimeout(() => input && input.focus(), 100);
  }

  function closeChatbot() {
    panel.classList.remove('active');
    setTimeout(() => {
      if (!panel.classList.contains('active')) {
        panel.style.display = 'none';
      }
    }, 250);
  }

  function toggleChatbot() {
    if (panel.classList.contains('active')) {
      closeChatbot();
    } else {
      openChatbot();
    }
  }

  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleChatbot();
  });

  const closeBtn = document.getElementById('closeChatbotBtn');
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeChatbot();
    });
  }

  panel.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // Handle quick suggestion chips
  if (quickChips) {
    quickChips.addEventListener('click', (e) => {
      const chip = e.target.closest('.chatbot-chip-btn');
      if (!chip) return;
      const text = chip.getAttribute('data-chip') || chip.textContent.trim();
      input.value = text;
      sendMessage();
    });
  }

  // Natural localized conversational templates (Without emojis)
  const naturalDialogues = {
    'en': {
      ask_service: "Hello! We specialize in Paid Ads, Commercial SEO, and Full-Funnel Lead Systems. Which area are you looking to scale right now?",
      ask_name: (svc) => svc ? `Awesome, ${svc} is one of our strongest growth engines. Who do I have the pleasure of speaking with today?` : "Sounds great! Who do I have the pleasure of speaking with today?",
      ask_email: (name) => name ? `Great to meet you, ${name}! What's the best email address to send over your audit, strategy breakdown, and case studies?` : "What's the best email address for our team to send your growth breakdown?",
      ask_industry: (name) => name ? `Got it saved, ${name}! What industry or type of business is this for? (e.g. SaaS, E-commerce, B2B Services, Healthcare)` : "What industry or business model are you in? (e.g. SaaS, E-commerce, B2B Services)",
      ask_region: "Awesome. And what primary region or market are your target customers in? (e.g. North America, Europe, Asia, etc.)",
      ask_goals: "Makes total sense. What's the primary milestone you want to unlock in the next 90 days? (e.g. scaling sales revenue, generating qualified B2B leads, or dominating Google search traffic?)",
      ask_budget: "That aligns with our client playbooks. Roughly what monthly marketing budget range are you planning to allocate? (e.g. Under $500, $500–$1,000, $1,000–$5,000, or $5,000+)",
      form_complete: (name) => name ? `Everything is looking sharp, ${name}! I've pre-filled your answers directly onto the form on this page. Feel free to review it and click 'Request A Strategy Conversation' below, and our senior strategists will be in touch within 24 business hours!` : "All set! I've pre-filled your details on the form right here. Hit 'Request A Strategy Conversation' below and our team will get back to you within 24 hours!",

      services: "We provide 3 high-impact growth services:\n1. **Paid Ads & Performance Media**: Laser-targeted campaigns on Google, Meta, & TikTok designed for maximum ROAS.\n2. **Commercial SEO**: Ranking for buyer-intent keywords that bring paying customers, not just vanity clicks.\n3. **Lead Funnels & CRO**: Conversion-engineered landing pages and automated capture engines.\n\nWhich of these would you like to explore for your business?",
      pricing: "We believe in upfront, transparent pricing:\n• **30-Day Video Sprint**: $1,490\n• **Google SEO Ranking**: $1,250 / mo\n• **New Customer Lead Engine**: $2,250\n• **Full Monthly Growth Partnership**: $2,990 / mo\n\nWhat scope fits your current goals best?",
      seo: "Our Commercial SEO strategy goes far beyond simple keywords. We execute deep technical audits, search-intent architecture, and high-authority link acquisition to secure top Google positions that convert. What is your website domain?",
      ads: "For Paid Ads, we construct full acquisition funnels. This includes audience research, high-converting video/image creative hooks, landing page optimization, and daily bid management across Google Search, YouTube, Instagram, and TikTok.",
      leads: "Our Lead Funnels are custom engineered for service businesses and consultancies: connecting campaign traffic to interactive forms, automated lead scoring, CRM integration, and instant calendar booking.",
      why: "What makes Pixlark distinct is **100% Senior-Led Execution**. You collaborate directly with veteran growth strategists—zero junior handoffs, zero overseas outsourcing, and clear revenue attribution on every marketing dollar.",
      contact: "We'd love to connect! You can tell me about your project right here, or complete the form on this page to book a 1-on-1 strategy call with our leadership team.",
      default: "I'm here to give you actionable advice on scaling paid ads, boosting Google rankings, or optimizing your conversion funnels. What can I help you with today?"
    },

    'es': {
      ask_service: "¡Hola! Nos especializamos en Publicidad Digital, SEO Comercial y Embudos de Clientes. ¿En qué área deseas enfocar tu crecimiento?",
      ask_name: (svc) => svc ? `¡Excelente elección! ${svc} es una de nuestras mayores especialidades. ¿Con quién tengo el gusto de hablar?` : "¡Excelente! ¿Cuál es tu nombre?",
      ask_email: (name) => name ? `¡Mucho gusto, ${name}! ¿A qué correo electrónico podemos enviarte tu propuesta estratégica y casos de éxito?` : "¿Cuál es tu correo electrónico de contacto?",
      ask_industry: (name) => name ? `¡Perfecto, ${name}! ¿A qué sector o industria pertenece tu negocio? (ej. E-commerce, SaaS, Servicios B2B, Salud)` : "¿En qué industria operas?",
      ask_region: "Muy bien. ¿En qué región o país se encuentra tu mercado principal?",
      ask_goals: "¿Cuál es tu objetivo más importante en los próximos 90 días? (ej. más ventas, leads cualificados o tráfico web)",
      ask_budget: "¿Qué presupuesto mensual aproximado tienes previsto destinar a marketing?",
      form_complete: (name) => name ? `¡Todo listo, ${name}! He completado los datos en el formulario. Puedes revisarlo y hacer clic en 'Solicitar Conversación Estratégica' para que nuestro equipo sénior te contacte en 24 horas.` : "¡Formulario completado con éxito! Haz clic en enviar para continuar.",

      services: "Ofrecemos 3 soluciones principales de alto impacto: Publicidad Digital (Google & Meta), SEO Comercial en Google y Embudos Automatizados de Clientes. ¿Sobre cuál te gustaría conocer más?",
      pricing: "Precios claros y transparentes: Sprint de Video ($1,490), SEO Google ($1,250/mes), Sistema de Leads ($2,250) y Plan de Crecimiento Global ($2,990/mes). ¿Qué plan se ajusta mejor a tus metas?",
      seo: "Nuestro SEO Comercial posiciona tu web en los términos de búsqueda con mayor intención de compra para atraer clientes de forma orgánica.",
      ads: "Gestionamos campañas de anuncios en Google, Meta y TikTok con creatividades de alto rendimiento y optimización continua del ROI.",
      leads: "Diseñamos sistemas de captación automatizados que convierten visitantes en reuniones comerciales y ventas reales.",
      why: "En Pixlark trabajas directamente con especialistas sénior, sin subcontratación y con medición directa de ventas.",
      contact: "¡Nos encantaría ayudarte! Puedes contarme tu proyecto aquí o rellenar el formulario de contacto.",
      default: "Puedo asesorarte sobre estrategias de publicidad, SEO y embudos de venta. ¿En qué puedo orientarte hoy?"
    },

    'fr': {
      ask_service: "Bonjour ! Nous sommes spécialisés en Publicité Payante, SEO Commercial et Tunnels d'Acquisition. Quel levier souhaitez-vous activer ?",
      ask_name: (svc) => svc ? `Excellent choix ! ${svc} est un puissant accélérateur de croissance. Quel est votre prénom et nom ?` : "Enchanté ! Quel est votre prénom et nom ?",
      ask_email: (name) => name ? `Ravi de faire votre connaissance, ${name} ! À quelle adresse email pouvons-nous vous envoyer votre audit et proposition ?` : "Quelle est votre adresse email professionnelle ?",
      ask_industry: (name) => name ? `C'est noté, ${name} ! Dans quel secteur d'activité évolue votre entreprise ? (ex. SaaS, E-commerce, Services B2B)` : "Quel est votre secteur d'activité ?",
      ask_region: "Parfait. Dans quelle région ou marché géographique ciblez-vous vos clients ?",
      ask_goals: "Quel est votre objectif prioritaire pour les 90 prochains jours ? (Ventes, leads qualifiés, trafic organique)",
      ask_budget: "Quel est votre budget marketing mensuel envisagé ?",
      form_complete: (name) => name ? `Tout est prêt, ${name} ! J'ai pré-rempli vos informations dans le formulaire. Cliquez sur 'Envoyer le Message' pour que nos experts seniors reviennent vers vous sous 24h.` : "Votre formulaire est prêt à être envoyé !",

      services: "Nous proposons 3 services d'accélération : Publicités à la performance (Google, Meta, TikTok), Référencement SEO commercial et Tunnels de conversion automatisés.",
      pricing: "Tarifs transparents : Sprint Vidéo (1 490 $), Programme SEO (1 250 $/mois), Moteur de Leads (2 250 $) et Croissance Mensuelle Complète (2 990 $/mois).",
      seo: "Notre approche SEO cible les requêtes à forte valeur commerciale pour générer des prospects qualifiés durables.",
      ads: "Nous concevons et optimisons vos campagnes Google & Meta Ads avec un accent absolu sur le retour sur investissement.",
      leads: "Nous créons des parcours de conversion complets pour transformer vos visiteurs en rendez-vous qualifiés.",
      why: "Notre force : 100% de gestion par des stratèges seniors, zéro sous-traitance et une transparence totale sur les résultats.",
      contact: "Discutons de votre projet ! Vous pouvez me détailler vos besoins ici ou soumettre le formulaire.",
      default: "Je suis à votre disposition pour vous conseiller sur vos leviers d'acquisition et votre stratégie digitale."
    },

    'de': {
      ask_service: "Hallo! Wir sind spezialisiert auf Performance Ads, kommerzielles SEO und Lead-Funnel-Systeme. Welchen Bereich möchten Sie ausbauen?",
      ask_name: (svc) => svc ? `Hervorragende Wahl! ${svc} ist einer unserer stärksten Wachstumstreiber. Wie lautet Ihr Name?` : "Sehr gerne! Wie darf ich Sie ansprechen?",
      ask_email: (name) => name ? `Freut mich, ${name}! An welche E-Mail-Adresse dürfen wir Ihre Strategieanalyse und Fallstudien senden?` : "Wie lautet Ihre geschäftliche E-Mail-Adresse?",
      ask_industry: (name) => name ? `Notiert, ${name}! In welcher Branche ist Ihr Unternehmen tätig? (z.B. SaaS, E-Commerce, B2B, Gesundheit)` : "In welcher Branche sind Sie aktiv?",
      ask_region: "Sehr gut. In welcher Zielregion bzw. welchem Markt befinden sich Ihre Kunden?",
      ask_goals: "Was ist Ihr wichtigstes Wachstumsziel für die nächsten 90 Tage? (Mehr Umsatz, qualifizierte B2B-Leads, Top-Rankings)",
      ask_budget: "Welches monatliche Marketingbudget planen Sie dafür ein?",
      form_complete: (name) => name ? `Perfekt, ${name}! Ich habe Ihre Angaben direkt in das Formular eingetragen. Klicken Sie einfach auf 'Strategiegespräch Anfordern', und unsere Senior-Strategen melden sich innerhalb von 24 Stunden bei Ihnen.` : "Alles erledigt! Ihr Formular ist fertig zum Absenden.",

      services: "Unsere 3 Kernleistungen: 1. Paid Ads (Google, Meta, TikTok), 2. Kommerzielles SEO für Top-Rankings, 3. Automatisierte Lead-Systeme mit hoher Conversion-Rate.",
      pricing: "Volle Preistransparenz: 30-Tage Video-Sprint ($1.490), Google SEO ($1.250/Monat), Neukunden-Lead-Engine ($2.250) und Full Growth Plan ($2.990/Monat).",
      seo: "Wir konzentrieren uns auf umsatzrelevante Suchbegriffe mit echter Kaufabsicht, nicht bloß auf inhaltslose Klickzahlen.",
      ads: "Von zielgerichteten Creatives bis zu täglichem Gebotsmanagement steuern wir Ihre Kampagnen auf maximalen ROAS.",
      leads: "Wir bauen schlüsselfertige Funnels, die Interessenten automatisch qualifizieren und direkt in Ihren Kalender buchen.",
      why: "100% Senior-Level Betreuung ohne Weitergabe an Junioren oder externe Dienstleister.",
      contact: "Lassen Sie uns Ihr Projekt besprechen! Nutzen Sie das Formular oder schreiben Sie mir direkt hier.",
      default: "Ich helfe Ihnen gerne bei Fragen zu Kampagnen, SEO-Rankings oder Lead-Generierung weiter."
    },

    'pt': {
      ask_service: "Olá! Somos especialistas em Tráfego Pago, SEO Comercial e Funis de Vendas. Qual área você deseja alavancar agora?",
      ask_name: (svc) => svc ? `Excelente escolha! ${svc} é um dos nossos maiores motores de escala. Como posso te chamar?` : "Perfeito! Qual é o seu nome?",
      ask_email: (name) => name ? `Prazer em te conhecer, ${name}! Qual é o seu melhor e-mail para enviarmos o diagnóstico estratégico e cases?` : "Qual é o seu e-mail de contato?",
      ask_industry: (name) => name ? `Perfeito, ${name}! Qual é o nicho ou segmento da sua empresa? (ex: SaaS, E-commerce, Serviços B2B)` : "Em qual segmento sua empresa atua?",
      ask_region: "Ótimo. Em qual país ou região geográfica estão concentrados seus clientes?",
      ask_goals: "Qual é o principal resultado que você quer alcançar nos próximos 90 dias? (Mais vendas, leads qualificados ou tráfego orgânico)",
      ask_budget: "Qual é a sua faixa de orçamento mensal prevista para marketing?",
      form_complete: (name) => name ? `Tudo pronto, ${name}! Preenchi todos os seus dados no formulário desta página. Clique em 'Solicitar Conversa Estratégica' para que nossos estrategistas seniores entrem em contato em até 24 horas.` : "Formulário preenchido com sucesso!",

      services: "Oferecemos 3 pilares de aceleração: Anúncios Pagos (Google, Meta, TikTok), SEO Comercial focado em vendas e Funis Automatizados de Leads.",
      pricing: "Valores transparentes: Sprint de Vídeo ($1.490), SEO no Google ($1.250/mês), Motor de Leads ($2.250) e Plano de Crescimento Mensal ($2.990/mês).",
      seo: "Posicionamos seu negócio nas palavras-chave mais lucrativas do Google para atrair clientes de alta intenção.",
      ads: "Criamos e otimizamos campanhas com foco obsessivo em retorno sobre investimento e custo por aquisição.",
      leads: "Estruturamos funis de alta conversão para transformar tráfego frio em reuniões e vendas concretas.",
      why: "Atendimento 100% sênior, sem estagiários ou terceirizações, com foco total em receita real.",
      contact: "Vamos conversar sobre o seu negócio! Conte-me aqui ou envie o formulário da página.",
      default: "Estou aqui para te orientar sobre tráfego pago, SEO e estratégias de conversão. Como posso ajudar?"
    },

    'hi': {
      ask_service: "नमस्ते! हम पेड विज्ञापन, व्यावसायिक एसईओ और लीड फ़नल सिस्टम में विशेषज्ञ हैं। आप किस क्षेत्र को बढ़ाना चाहते हैं?",
      ask_name: (svc) => svc ? `शानदार! ${svc} हमारे सबसे सफल समाधानों में से एक है। आपका शुभ नाम क्या है?` : "आपका शुभ नाम क्या है?",
      ask_email: (name) => name ? `आपसे मिलकर बहुत खुशी हुई, ${name}! आपकी रणनीति और ऑडिट भेजने के लिए सबसे अच्छा ईमेल पता क्या है?` : "कृपया अपना ईमेल पता साझा करें।",
      ask_industry: (name) => name ? `नोट कर लिया, ${name}! आपका व्यवसाय किस उद्योग से संबंधित है? (जैसे SaaS, ई-कॉमर्स, बी2बी, स्वास्थ्य)` : "आपका व्यवसाय किस उद्योग में है?",
      ask_region: "बहुत बढ़िया। आपके लक्षित ग्राहक किस क्षेत्र या देश में स्थित हैं?",
      ask_goals: "अगले 90 दिनों में आपका सबसे बड़ा लक्ष्य क्या है? (अधिक बिक्री, योग्य लीड्स या गूगल रैंकिंग)",
      ask_budget: "मार्केटिंग के लिए आपका मासिक बजट लगभग कितना है?",
      form_complete: (name) => name ? `बहुत बढ़िया, ${name}! मैंने आपकी सभी जानकारी इस फ़ॉर्म में भर दी है। बस नीचे 'रणनीतिक बातचीत का अनुरोध करें' पर क्लिक करें, हमारी वरिष्ठ टीम 24 घंटों में संपर्क करेगी।` : "आपका फ़ॉर्म सफलतापूर्वक भर दिया गया है!",

      services: "हमारी सेवाएँ: 1. पेड विज्ञापन (गूगल, मेटा, टिकटॉक), 2. व्यावसायिक एसईओ, 3. ऑटोमेटेड लीड फ़नल।",
      pricing: "पारदर्शी मूल्य: वीडियो स्प्रिंट ($1,490), गूगल एसईओ ($1,250/माह), लीड इंजन ($2,250), पूर्ण विकास योजना ($2,990/माह)।",
      seo: "हम गूगल पर उन कीवर्ड्स को रैंक करते हैं जो केवल विज़िटर्स नहीं बल्कि असली ग्राहक लाते हैं।",
      ads: "हम अधिकतम आरओआई के लिए उच्च-परिवर्तन विज्ञापनों की योजना और दैनिक प्रबंधन करते हैं।",
      leads: "हम स्वचालित लीड सिस्टम बनाते हैं जो पूछताछ को सीधे अपॉइंटमेंट्स में बदलते हैं।",
      why: "100% वरिष्ठ विशेषज्ञों द्वारा प्रबंधन, कोई आउटसोर्सिंग नहीं और वास्तविक व्यावसायिक परिणाम।",
      contact: "हम आपके साथ काम करने के लिए उत्सुक हैं! यहाँ अपना विवरण साझा करें या फ़ॉर्म भरें।",
      default: "मैं आपके व्यवसाय के विकास के लिए सही डिजिटल रणनीति चुनने में मदद कर सकता हूँ।"
    },

    'zh': {
      ask_service: "您好！我们专注于高回报付费广告、商业 SEO 和全链路获客漏斗。您目前最希望提升哪个业务板块？",
      ask_name: (svc) => svc ? `太棒了，${svc} 是我们最具爆发力的增长引擎之一。请问怎么称呼您？` : "很高兴为您服务！请问怎么称呼您？",
      ask_email: (name) => name ? `很高兴认识您，${name}！请问方便接收增长方案和案例分析的电子邮箱是什么？` : "请问您的电子邮箱是什么？",
      ask_industry: (name) => name ? `已为您记录，${name}！请问您的企业属于哪个行业领域？(如 SaaS、跨境电商、B2B 专业服务、医疗健康)` : "请问您的企业属于哪个行业？",
      ask_region: "好的。您的核心目标客户主要分布在哪个地区？(如北美、欧洲、亚太等)",
      ask_goals: "在接下来的90天内，您最核心的业务目标是什么？(如提升销售额、获取高价值询盘、霸榜谷歌流量)",
      ask_budget: "您预估每月可投入的营销预算大概在什么范围？(如 $500–$1,000, $1,000–$5,000, 或 $5,000+)",
      form_complete: (name) => name ? `完美，${name}！我已将您的信息同步填写到本页面的表单中。您可以确认并点击下方的“预约战略增长咨询”，我们的资深增长专家将在24小时内与您取得联系！` : "表单已全部为您填妥，点击提交即可！",

      services: "我们提供3大核心增长服务：1. **效果付费广告** (Google, Meta, TikTok)，2. **商业 SEO 排名**，3. **高转化获客漏斗系统**。您对哪项最感兴趣？",
      pricing: "透明统一的定价方案：30天短视频素材冲刺 ($1,490)、Google SEO 排名 ($1,250/月)、新客户获客漏斗 ($2,250)、全托管月度增长计划 ($2,990/月)。",
      seo: "我们的商业 SEO 专注于具备高购买意向的商业关键词，直接为您带来成交客户，而非无效的虚高流量。",
      ads: "我们打造端到端广告投放模型，涵盖高转化素材创意、落地页协同及每日精细化 ROI 竞价优化。",
      leads: "专为服务型企业与咨询机构打造的获客闭环：实现广告引流、客户自动初筛到日程预约的无缝串联。",
      why: "Pixlark 的最大优势是 **100% 资深团队直接交付**——绝无初级客服传话或廉价海外外包，每一分预算都对实际营收负责。",
      contact: "期待与您合作！您可以在此直接告诉我您的需求，或填写表单预约 1对1 战略沟通。",
      default: "我是您的专属 AI 增长顾问，可为您解答营销投放、SEO 战略及获客漏斗等任何疑问。"
    },

    'ja': {
      ask_service: "こんにちは！有料広告運用、商業SEO、およびリード獲得ファネルを専門としています。現在どの分野の強化をご検討ですか？",
      ask_name: (svc) => svc ? `素晴らしい選択です！${svc}は弊社の最も得意とする成長施策です。お名前を伺えますか？` : "ありがとうございます！お名前を教えていただけますか？",
      ask_email: (name) => name ? `はじめまして、${name}様！戦略分析レポートや事例資料をお送りするメールアドレスを教えてください。` : "メールアドレスをお教えいただけますか？",
      ask_industry: (name) => name ? `承知いたしました、${name}様！貴社の業界・ビジネスモデルはどちらになりますか？ (例: SaaS、EC、B2Bサービス、医療など)` : "どのような業界・事業分野でしょうか？",
      ask_region: "ありがとうございます。ターゲットとする主な顧客地域はどちらですか？",
      ask_goals: "今後90日間で最も達成したい目標は何ですか？ (売上向上、質の高いリード獲得、検索順位向上など)",
      ask_budget: "月間の想定マーケティング予算はどのくらいのレンジでしょうか？",
      form_complete: (name) => name ? `完了いたしました、${name}様！このページのフォームに入力内容を反映させました。内容をご確認の上、下の「戦略ミーティングを申し込む」ボタンを押していただければ、24時間以内にシニア担当者よりご連絡いたします。` : "フォームの入力が完了しました！",

      services: "主な3つの支援プラン：1. **高費用対効果の広告運用** (Google, Meta, TikTok)、2. **購買意欲の高いユーザーを狙う商業SEO**、3. **自動リード獲得ファネル構築**。詳細をご希望ですか？",
      pricing: "明瞭な料金体系：30日間動画スプリント ($1,490)、Google SEO ($1,250/月)、リード獲得システム ($2,250)、総合グロース支援 ($2,990/月)。",
      seo: "単なるアクセス数ではなく、実際の問い合わせや購入に直結する商業キーワードでの上位表示を実現します。",
      ads: "成果重視の広告運用：高CVRクリエイティブ制作からLP改善、日々の入札最適化までワンストップで代行します。",
      leads: "広告流入から自動スクリーニング、商談日程調整までを自動化する仕組みを構築します。",
      why: "**100% 経験豊富なシニアマーケターが直接担当**。外部委託や新人への丸投げは一切ありません。",
      contact: "ぜひ貴社の事業成長をお手伝いさせてください！こちらでご要望を伺うか、フォームからご相談いただけます。",
      default: "広告運用、SEO、コンバージョン改善など、Web集客に関することなら何でもお気軽にご相談ください。"
    }
  };

  // Form field mapping
  const formFieldMap = {
    name: 'fullName',
    fullName: 'fullName',
    email: 'email',
    phone: 'phone',
    website: 'website',
    service: 'service',
    industry: 'industry',
    region: 'region',
    goals: 'goals',
    budget: 'budget',
    marketing: 'currentMarketing',
    currentMarketing: 'currentMarketing',
    message: 'message'
  };

  // Smart regex extraction from user text
  function extractFormData(userText) {
    const data = {};
    const textLower = userText.toLowerCase().trim();

    // Email extraction
    const emailMatch = userText.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/i);
    if (emailMatch) {
      data.email = emailMatch[0];
    }

    // Phone extraction
    const digits = userText.replace(/\D/g, '');
    if (digits.length >= 7 && digits.length <= 15 && !userText.includes('$') && !textLower.includes('budget') && !textLower.includes('month') && !textLower.includes('k') && !userText.includes('–') && !userText.includes('-')) {
      const phoneMatch = userText.match(/(\+?[0-9]{1,4}[\s-]?)?(\(?[0-9]{3}\)?[\s-]?)?[0-9]{3}[\s-]?[0-9]{4}/);
      if (phoneMatch) {
        data.phone = phoneMatch[0];
      }
    }

    // URL / Website extraction
    if (!data.email) {
      const urlMatch = userText.match(/(https?:\/\/[^\s]+)|(www\.[^\s]+)|([a-zA-Z0-9-]+\.(com|org|net|io|co|in|agency|tech|store))/i);
      if (urlMatch) {
        data.website = urlMatch[0];
      }
    }

    // Service detection
    if (textLower.includes('paid ad') || textLower.includes('google ad') || textLower.includes('meta ad') || textLower.includes('facebook') || textLower.includes('instagram') || textLower.includes('ads') || textLower.includes('advertising') || textLower.includes('anuncio') || textLower.includes('publicit') || textLower.includes('werbung') || textLower.includes('विज्ञापन') || textLower.includes('广告') || textLower.includes('広告')) {
      data.service = 'Paid Ads';
    } else if (textLower.includes('seo') || textLower.includes('rank') || textLower.includes('posicionamiento') || textLower.includes('référencement') || textLower.includes('search engine') || textLower.includes('organic') || textLower.includes('एसईओ') || textLower.includes('排名') || textLower.includes('順位')) {
      data.service = 'Commercial SEO';
    } else if (textLower.includes('funnel') || textLower.includes('lead') || textLower.includes('conversion') || textLower.includes('embudo') || textLower.includes('tunnel') || textLower.includes('funil') || textLower.includes('लीड') || textLower.includes('漏斗') || textLower.includes('ファネル')) {
      data.service = 'Lead Funnels';
    }

    // Region detection
    if (textLower.includes('usa') || textLower.includes('united states') || textLower.includes('america') || textLower.includes('canada') || textLower.includes('north america')) {
      data.region = 'North America';
    } else if (textLower.includes('uk') || textLower.includes('united kingdom') || textLower.includes('london') || textLower.includes('europe') || textLower.includes('germany') || textLower.includes('france') || textLower.includes('spain')) {
      data.region = 'Europe';
    } else if (textLower.includes('asia') || textLower.includes('india') || textLower.includes('china') || textLower.includes('japan') || textLower.includes('singapore')) {
      data.region = 'Asia';
    } else if (textLower.includes('africa')) {
      data.region = 'Africa';
    } else if (textLower.includes('middle east')) {
      data.region = 'Middle East';
    } else if (textLower.includes('oceania') || textLower.includes('australia') || textLower.includes('new zealand')) {
      data.region = 'Oceania';
    } else if (textLower.includes('south america') || textLower.includes('brasil') || textLower.includes('brazil')) {
      data.region = 'South America';
    }

    // Industry detection
    if (textLower.includes('ecommerce') || textLower.includes('e-commerce') || textLower.includes('online store') || textLower.includes('shop') || textLower.includes('store') || textLower.includes('tienda') || textLower.includes('boutique')) {
      data.industry = 'E-commerce';
    } else if (textLower.includes('saas') || textLower.includes('software as') || textLower.includes('subscription')) {
      data.industry = 'SaaS';
    } else if (textLower.includes('it') || textLower.includes('technology') || textLower.includes('tech') || textLower.includes('software') || textLower.includes('development') || textLower.includes('coding')) {
      data.industry = 'IT/Technology';
    } else if (textLower.includes('healthcare') || textLower.includes('medical') || textLower.includes('clinic') || textLower.includes('hospital') || textLower.includes('health') || textLower.includes('salud')) {
      data.industry = 'Healthcare';
    } else if (textLower.includes('real estate') || textLower.includes('property') || textLower.includes('realtor') || textLower.includes('inmobiliaria')) {
      data.industry = 'Real Estate';
    } else if (textLower.includes('financial') || textLower.includes('banking') || textLower.includes('insurance') || textLower.includes('finance')) {
      data.industry = 'Financial Services';
    } else if (textLower.includes('education') || textLower.includes('school') || textLower.includes('university') || textLower.includes('training')) {
      data.industry = 'Education';
    } else if (textLower.includes('manufacturing') || textLower.includes('factory') || textLower.includes('production')) {
      data.industry = 'Manufacturing';
    } else if (textLower.includes('retail')) {
      data.industry = 'Retail';
    } else if (textLower.includes('hospitality') || textLower.includes('hotel') || textLower.includes('restaurant') || textLower.includes('cafe')) {
      data.industry = 'Hospitality';
    } else if (textLower.includes('consulting') || textLower.includes('agency') || textLower.includes('professional services') || textLower.includes('b2b')) {
      data.industry = 'Professional Services';
    }

    // Budget detection
    const textClean = textLower.replace(/,/g, '');
    if (textClean.includes('1000-5000') || textClean.includes('1000 - 5000') || textClean.includes('1000 to 5000') || textClean.includes('1k-5k') || textClean.includes('1k - 5k') || textClean.includes('2000') || textClean.includes('3000') || textClean.includes('4000') || textClean.includes('2k') || textClean.includes('3k') || textClean.includes('4k')) {
      data.budget = '1000-5000';
    } else if (textClean.includes('500-1000') || textClean.includes('500 - 1000') || textClean.includes('500 to 1000') || textClean.includes('500 - 1k') || textClean.includes('500-1k') || textClean.includes('500') || textClean.includes('800') || textClean.includes('1000') || textClean.includes('thousand') || textClean.includes('1k')) {
      data.budget = '500-1000';
    } else if (textClean.includes('5000+') || textClean.includes('5000') || textClean.includes('5k+') || textClean.includes('5k') || textClean.includes('enterprise') || textClean.includes('10000') || textClean.includes('10k')) {
      data.budget = '5000+';
    } else if (textClean.includes('under 500') || textClean.includes('less than 500') || textClean.includes('minimal') || textClean.includes('tight') || textClean.includes('<500') || textClean.includes('< 500')) {
      data.budget = 'Under 500';
    }

    // Goal detection
    if (textLower.includes('sale') || textLower.includes('revenue') || textLower.includes('income') || textLower.includes('ventas') || textLower.includes('vendas') || textLower.includes('umsatz') || textLower.includes('vente') || textLower.includes('बिक्री') || textLower.includes('销量') || textLower.includes('売上')) {
      data.goals = 'More Sales';
    } else if (textLower.includes('lead') || textLower.includes('client') || textLower.includes('customer') || textLower.includes('prospect') || textLower.includes('लीड') || textLower.includes('线索') || textLower.includes('リード')) {
      data.goals = 'More Leads';
    } else if (textLower.includes('traffic') || textLower.includes('visitor') || textLower.includes('tráfico') || textLower.includes('trafic') || textLower.includes('besucher') || textLower.includes('ट्रैफ़िक') || textLower.includes('流量') || textLower.includes('アクセス')) {
      data.goals = 'Website Traffic';
    } else if (textLower.includes('brand') || textLower.includes('awareness') || textLower.includes('marca') || textLower.includes('notoriété') || textLower.includes('bekanntheit') || textLower.includes('ब्रांड') || textLower.includes('品牌') || textLower.includes('認知')) {
      data.goals = 'Brand Awareness';
    }

    // Name extraction heuristics
    const nameMatch = userText.match(/(?:my name is|i am|i'm|call me|name:)\s+([a-zA-Z\s]{2,35})/i);
    if (nameMatch && !data.email) {
      data.name = nameMatch[1].trim();
      data.fullName = data.name;
    } else if (!data.email && !data.phone && !data.website && !data.service && !data.industry && !data.region && !data.goals && !data.budget) {
      const words = userText.trim().split(/\s+/);
      const isGreeting = /^(hi|hello|hey|hola|bonjour|hallo|olá|नमस्ते|你好|こんにちは|good morning|good afternoon|good evening|yo)$/i.test(userText.trim());
      if (!isGreeting && words.length >= 1 && words.length <= 4 && userText.length >= 2 && userText.length <= 40 && !userText.includes('?') && !userText.includes('!')) {
        data.name = userText.trim();
        data.fullName = data.name;
      }
    }

    return data;
  }

  // Fill form field and highlight it visually
  function fillFormField(fieldName, value) {
    if (!value) return;

    let field = document.querySelector(`[name="${fieldName}"]`);
    if (!field && (fieldName === 'name' || fieldName === 'fullName')) {
      field = document.querySelector('[name="fullName"]') || document.querySelector('[name="name"]');
    }
    if (!field && (fieldName === 'marketing' || fieldName === 'currentMarketing')) {
      field = document.querySelector('[name="currentMarketing"]') || document.querySelector('[name="marketing"]');
    }
    if (!field) {
      field = document.querySelector(`#${fieldName}`);
    }

    if (field) {
      if (field.type === 'checkbox') {
        const checkboxes = document.querySelectorAll(`input[name="${field.name}"]:not([type="hidden"])`);
        checkboxes.forEach(cb => {
          if (cb.value.toLowerCase() === value.toLowerCase() ||
            cb.value.toLowerCase().includes(value.toLowerCase()) ||
            value.toLowerCase().includes(cb.value.toLowerCase())) {
            cb.checked = true;
          }
        });
      } else if (field.tagName === 'SELECT') {
        for (let i = 0; i < field.options.length; i++) {
          const optVal = field.options[i].value.toLowerCase();
          const optTxt = field.options[i].text.toLowerCase();
          const target = value.toLowerCase();
          if (optVal === target || optTxt === target || (optVal && target.includes(optVal)) || (optTxt && target.includes(optTxt)) || optTxt.includes(target)) {
            field.selectedIndex = i;
            break;
          }
        }
      } else {
        field.value = value;
      }

      field.style.transition = 'all 0.3s ease';
      field.style.boxShadow = '0 0 14px rgba(0, 82, 255, 0.45)';
      field.style.borderColor = 'var(--bg-blue, #0052FF)';
      setTimeout(() => {
        field.style.boxShadow = '';
      }, 1500);

      field.dispatchEvent(new Event('change', { bubbles: true }));
      field.dispatchEvent(new Event('input', { bubbles: true }));
    }
  }

  function getFormFilledFields() {
    const filled = {};
    const form = document.querySelector('#contactPageForm') || document.querySelector('form.contact-modern-form') || document.querySelector('form');
    if (!form) return filled;

    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      if (input.type === 'checkbox') {
        if (input.checked) {
          filled[input.name] = (filled[input.name] || []).concat(input.value);
          filled.goals = filled[input.name];
        }
      } else if (input.value && input.value.trim() !== '') {
        const val = input.value.trim();
        filled[input.name] = val;
        if (input.name === 'fullName' || input.name === 'name') {
          filled.name = val;
          filled.fullName = val;
        }
        if (input.name === 'currentMarketing' || input.name === 'marketing') {
          filled.marketing = val;
          filled.currentMarketing = val;
        }
      }
    });

    return filled;
  }

  function generateFormResponse(detectedData, currentFilled) {
    const lang = chatState.language || 'en';
    const dlg = naturalDialogues[lang] || naturalDialogues['en'];

    const merged = Object.assign({}, currentFilled, detectedData);

    if (merged.name) chatState.userName = merged.name;
    if (merged.service) chatState.selectedService = merged.service;

    if (!merged.service) {
      return dlg.ask_service;
    }
    if (!merged.name && !merged.fullName) {
      return typeof dlg.ask_name === 'function' ? dlg.ask_name(chatState.selectedService) : dlg.ask_name;
    }
    if (!merged.email) {
      return typeof dlg.ask_email === 'function' ? dlg.ask_email(chatState.userName) : dlg.ask_email;
    }
    if (!merged.industry) {
      return typeof dlg.ask_industry === 'function' ? dlg.ask_industry(chatState.userName) : dlg.ask_industry;
    }
    if (!merged.region) {
      return dlg.ask_region;
    }
    if (!merged.goals) {
      return dlg.ask_goals;
    }
    if (!merged.budget) {
      return dlg.ask_budget;
    }

    return typeof dlg.form_complete === 'function' ? dlg.form_complete(chatState.userName) : dlg.form_complete;
  }

  function sendMessage() {
    const text = input.value.trim();
    if (!text) return;

    const userMsg = document.createElement('div');
    userMsg.className = 'chatbot-msg-user';
    userMsg.textContent = text;
    messagesDiv.appendChild(userMsg);

    input.value = '';
    messagesDiv.scrollTop = messagesDiv.scrollHeight;

    setTimeout(() => {
      let response = '';
      const textLower = text.toLowerCase();
      const lang = chatState.language || 'en';
      const dlg = naturalDialogues[lang] || naturalDialogues['en'];

      if (chatState.formMode) {
        const formData = extractFormData(text);

        for (const [key, value] of Object.entries(formData)) {
          fillFormField(formFieldMap[key] || key, value);
        }

        const filledFields = getFormFilledFields();
        response = generateFormResponse(formData, filledFields);
      } else {
        if (textLower.includes('service') || textLower.includes('servicio') || textLower.includes('leistung') || textLower.includes('dienst') || textLower.includes('सेवा') || textLower.includes('服务') || textLower.includes('サービス')) {
          response = dlg.services;
        } else if (textLower.includes('price') || textLower.includes('cost') || textLower.includes('pricing') || textLower.includes('precio') || textLower.includes('prix') || textLower.includes('preis') || textLower.includes('preço') || textLower.includes('कीमत') || textLower.includes('मूल्य') || textLower.includes('价格') || textLower.includes('料金') || textLower.includes('費用')) {
          response = dlg.pricing;
        } else if (textLower.includes('seo') || textLower.includes('rank') || textLower.includes('posicionamiento') || textLower.includes('référencement') || textLower.includes('ranking') || textLower.includes('एसईओ') || textLower.includes('排名') || textLower.includes('順位')) {
          response = dlg.seo;
        } else if (textLower.includes('ad') || textLower.includes('paid') || textLower.includes('meta') || textLower.includes('google') || textLower.includes('anuncio') || textLower.includes('werbung') || textLower.includes('publicité') || textLower.includes('publicidade') || textLower.includes('विज्ञापन') || textLower.includes('广告') || textLower.includes('広告')) {
          response = dlg.ads;
        } else if (textLower.includes('lead') || textLower.includes('funnel') || textLower.includes('conversion') || textLower.includes('embudo') || textLower.includes('trichter') || textLower.includes('tunnel') || textLower.includes('funil') || textLower.includes('लीड') || textLower.includes('फ़नल') || textLower.includes('漏斗') || textLower.includes('ファネル')) {
          response = dlg.leads;
        } else if (textLower.includes('why') || textLower.includes('por qué') || textLower.includes('pourquoi') || textLower.includes('warum') || textLower.includes('por que') || textLower.includes('क्यों') || textLower.includes('为什么') || textLower.includes('なぜ') || textLower.includes('理由')) {
          response = dlg.why;
        } else if (textLower.includes('contact') || textLower.includes('reach') || textLower.includes('hire') || textLower.includes('book') || textLower.includes('call') || textLower.includes('contacto') || textLower.includes('kontakt') || textLower.includes('contato') || textLower.includes('संपर्क') || textLower.includes('联系') || textLower.includes('連絡') || textLower.includes('お問い合わせ') || textLower.includes('talk to')) {
          response = dlg.contact;
        } else {
          const formData = extractFormData(text);
          if (formData.service || formData.email || formData.name) {
            response = "Got it! We'd love to put together a customized strategy plan for you. Would you like to hop over to our Contact page to lock in a consultation, or should I answer any specific questions first?";
          } else {
            response = dlg.default;
          }
        }
      }

      const botMsg = document.createElement('div');
      botMsg.className = 'chatbot-msg-bot';
      botMsg.innerHTML = response.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      messagesDiv.appendChild(botMsg);

      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }, 350);
  }

  if (sendBtn) sendBtn.addEventListener('click', sendMessage);
  if (input) {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendMessage();
    });
  }

  const helpFormBtn = document.getElementById('helpWithFormBtn');
  if (helpFormBtn) {
    helpFormBtn.addEventListener('click', () => {
      openChatbot();
      setTimeout(() => {
        if (messagesDiv.children.length === 1) {
          const botMsg = document.createElement('div');
          botMsg.className = 'chatbot-msg-bot';
          const lang = chatState.language || 'en';
          const dlg = naturalDialogues[lang] || naturalDialogues['en'];
          botMsg.innerHTML = dlg.ask_service.replace(/\n/g, '<br>');
          messagesDiv.appendChild(botMsg);
          messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }
      }, 100);
    });
  }
}

/* ==========================================================
   INITIALIZATION DISPATCHER (RUNS ONCE DOM IS READY)
   ========================================================== */
function initApp() {
  try { initBackgroundVideo(); } catch (e) { console.warn('initBackgroundVideo error:', e); }
  try { initNavbarScrollState(); } catch (e) { console.warn('initNavbarScrollState error:', e); }
  try { initGsapModernReveals(); } catch (e) { console.warn('initGsapModernReveals error:', e); }
  try { initFaqAccordions(); } catch (e) { console.warn('initFaqAccordions error:', e); }
  try { initIndexModalSystem(); } catch (e) { console.warn('initIndexModalSystem error:', e); }
  try { initAllLeadForms(); } catch (e) { console.warn('initAllLeadForms error:', e); }
  try { initGrowthChatbot(); } catch (e) { console.warn('initGrowthChatbot error:', e); }
  try { initDynamicYear(); } catch (e) { console.warn('initDynamicYear error:', e); }
  try { initLanguageAndCurrency(); } catch (e) { console.warn('initLanguageAndCurrency error:', e); }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
