/** @format */

// Contenido del CV (fuente: CV-Gonzalo-Gomez-Pizarro-ES/EN, oct 2026).
// Todo lo que se muestra en las pantallas sale de acá.

export const SECTIONS = ["home", "about", "experience", "projects", "skills", "education", "contact"];

export const CONTACT = {
  name: "Gonzalo Gómez Pizarro",
  email: "gonzalogomezpizarro@gmail.com",
  phone: "+54 9 351 279-5265",
  whatsapp: "5493512795265",
  whatsappDisplay: "+54 9 351 279-5265",
  linkedin: "https://www.linkedin.com/in/gonzagomezp/",
  github: "https://github.com/gonzagomezp",
  photo: "/profile.jpg",
  cv: {
    es: "/cv/CV-Gonzalo-Gomez-Pizarro-ES.pdf",
    en: "/cv/CV-Gonzalo-Gomez-Pizarro-EN.pdf",
  },
};

const es = {
  ui: {
    nav: {
      home: "inicio",
      about: "perfil",
      experience: "experiencia",
      projects: "proyectos",
      skills: "habilidades",
      education: "educación",
      contact: "contacto",
    },
    enter: "Entrar",
    loading: "Cargando escena",
    boot: ["Iniciando portfolio…", "Cargando modelos 3D…", "Montando el CV…"],
    hint: "Arrastrá para girar · Tocá un dispositivo para acercarte",
    keys: "1-6 secciones · Esc volver · ←/→ dispositivo",
    views: { overview: "Vista general", desktop: "Compu", mobile: "Celular" },
    downloadCv: "Descargar CV",
    contactMe: "Contactame",
    copy: "Copiar",
    copied: "¡Copiado!",
    visit: "Ver sitio",
    present: "Actualidad",
    current: "Actualmente",
    languages: "Idiomas",
    otherExperience: "Otra experiencia",
    location: "Ubicación",
    email: "Email",
    phone: "Teléfono",
    links: "Links",
    stack: "Stack",
    contact: "Contactar",
    contactTitle: "¿Cómo preferís contactarme?",
    contactSubtitle: "Elegí un canal y te respondo lo antes posible.",
    contactWhatsapp: "Escribime por WhatsApp",
    contactEmail: "Mandame un email",
    close: "Cerrar",
    waMessage: "Hola Gonzalo, vi tu portfolio y me gustaría hablar con vos.",
    emailSubject: "Contacto desde tu portfolio",
    emailBody: "Hola Gonzalo,\n\nVi tu portfolio y me gustaría hablar con vos.\n\n",
  },
  role: "AI Engineer | Full Stack & Cloud",
  location: "Argentina",
  summary:
    "Ingeniero en Sistemas (2026) que diseña, construye y lleva a producción productos de IA y SaaS de punta a punta: backends multiagente con LLMs, frontends en Next.js e infraestructura en GCP con CI/CD. AI Engineer en BIT Automatizaciones, donde construí y opero AlShow, una plataforma de venta de entradas en producción con eventos reales, y cofundador técnico de GP Intelligence.",
  now: [
    { role: "AI Engineer", org: "BIT Automatizaciones" },
    { role: "Cofundador técnico", org: "GP Intelligence" },
    { role: "Fundador", org: "Presupuestá" },
  ],
  experience: [
    {
      company: "BIT Automatizaciones",
      place: "Argentina",
      role: "AI Engineer",
      dates: "Mayo 2026 – Actualidad",
      current: true,
      links: [{ label: "alshow.com.ar", href: "https://alshow.com.ar" }],
      bullets: [
        "Líder técnico de AlShow (alshow.com.ar), plataforma de venta de entradas en producción con un cliente revendedor: 2 eventos realizados y 3 más programados. Autor del 97% del código (199 de 206 commits en 3,5 meses) y responsable de 5 servicios en producción: API en FastAPI + MongoDB, dos frontends en Next.js 16 / React 19, un agente de ventas con IA y un reverse proxy Caddy con un sidecar en Go.",
        "Pagos sin sobreventa: reserva atómica de stock, webhooks de MercadoPago idempotentes, redondeo con Decimal y ventanas de vencimiento diseñadas para que un pago tardío siempre encuentre stock o se reembolse.",
        "Agente de ventas con IA en WhatsApp Cloud API y web (SSE): más de 12 herramientas habilitadas según canal e identidad, compra completa por chat, verificación por OTP al teléfono y un prompt optimizado para caché que lo hizo unas 10 veces más barato.",
        "Seguridad: autenticación JWT propia con 4 roles, servicios privados en Cloud Run invocados con ID tokens por cuenta de servicio, Secret Manager y entradas con QR firmado con JWT que no se pueden falsificar.",
        "PWA de escaneo en puerta con modo offline de 5 minutos y validación idempotente de entradas.",
        "Migración de Railway a GCP Cloud Run (2 entornos aislados, scripts de infraestructura reproducibles, Cloud Tasks y Scheduler). Pirámide de testing completa (pytest, Vitest, Playwright e2e) y pruebas de carga con k6.",
        "Además: sistemas multiagente con ruteo de modelos en LiteLLM e integración de herramientas vía MCP, asistentes de WhatsApp con OCR basado en IA, benchmarking de LLMs open-weight y skills reutilizables de Claude Code para desarrollo guiado por especificaciones.",
      ],
    },
    {
      company: "GP Intelligence",
      place: "Córdoba",
      role: "Cofundador técnico y Lead Engineer (part-time)",
      dates: "Enero 2026 – Actualidad",
      current: true,
      links: [{ label: "gpintelligence.com.ar", href: "https://gpintelligence.com.ar" }],
      bullets: [
        "Único responsable técnico de una plataforma SaaS para asesores financieros y agentes de bolsa, desplegada y en prelanzamiento: producto, arquitectura, código, infraestructura, seguridad y costos.",
        "Arquitectura en GCP: 6 servicios en Cloud Run, Cloud SQL Postgres, Firestore, GCS, Secret Manager, Cloud Tasks y 9 tareas programadas, en 3 entornos con CI/CD en GitHub Actions y tests E2E nocturnos con Playwright.",
        "Backend en FastAPI integrado con la API del agente de bolsa; frontend en Next.js 15 + React 19 + TypeScript con BFF del lado del servidor, PWA instalable y notificaciones push.",
        "Agente de IA propio: orquestador y 5 especialistas sobre datos reales de carteras, con streaming, transcripción de audio, cuotas por usuario y ruteo entre Gemini, Claude y DeepSeek.",
        "Integraciones: WhatsApp Cloud API con webhooks validados por HMAC, Gmail / Calendar / Meet vía OAuth, Amazon SES (50.000 envíos diarios aprobados) y bots de reuniones con transcripción y resúmenes.",
      ],
    },
    {
      company: "EPAM Systems",
      place: "Argentina",
      role: "Systems Engineer Junior (ene – may 2026) · Cloud & DevOps Trainee (jun – dic 2025)",
      dates: "Junio 2025 – Mayo 2026",
      bullets: [
        "Trabajo en la nube sobre GCP y testing de IA.",
        "Programa intensivo de Cloud y DevOps: AWS (EC2, S3, Lambda, IAM, VPC, CloudFormation), Terraform, Ansible, Docker, Kubernetes, CI/CD con Jenkins y GitHub Actions, Linux y Bash.",
      ],
    },
    {
      company: "Bircle AI",
      place: "Argentina",
      role: "Full Stack Developer Junior",
      dates: "Marzo 2024 – Noviembre 2024",
      bullets: [
        "Desarrollo de servicios backend en Python (FastAPI) y Express.js, y frontends en React / Next.js con TypeScript y Tailwind CSS.",
        "Diseño y consumo de APIs REST, trabajo con bases MongoDB y SQL y con servicios de AWS.",
      ],
    },
  ],
  projects: [
    {
      name: "Presupuestá",
      role: "Fundador",
      dates: "2026 – Actualidad",
      href: "https://presupuestaa.com.ar",
      label: "presupuestaa.com.ar",
      description:
        "SaaS para que oficios en Argentina armen y envíen presupuestos profesionales. Lo construí y lancé solo; hoy trabajo la captación de usuarios con contenido y publicidad paga.",
      stack: [],
    },
    {
      name: "Cantina UCC",
      role: "Proyecto final de Ingeniería en Sistemas",
      dates: "Diciembre 2024 – Febrero 2026",
      description:
        "App web y mobile para gestionar la cantina de la universidad: búsqueda de productos, carrito, pagos con Mercado Pago y panel de administración. FastAPI, Firestore, Next.js y Firebase Auth, desplegada en Cloud Run y Vercel con GitHub Actions.",
      stack: ["FastAPI", "Firestore", "Next.js", "Firebase Auth", "Cloud Run", "Vercel", "GitHub Actions"],
    },
  ],
  skills: [
    {
      group: "IA y agentes",
      items: ["Orquestación de LLMs (LiteLLM)", "MCP", "Arquitecturas multiagente", "Tool calling", "OCR con modelos de visión", "Google Vertex AI", "Claude Code"],
    },
    { group: "Backend", items: ["Python", "FastAPI", "Node.js", "TypeScript", "APIs REST"] },
    { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "PWA"] },
    {
      group: "Cloud y DevOps",
      items: ["GCP (Cloud Run, Cloud SQL, Firestore, Secret Manager, Cloud Tasks)", "AWS", "Docker", "Terraform", "Kubernetes", "GitHub Actions"],
    },
    { group: "Bases de datos", items: ["MongoDB", "PostgreSQL", "Firestore", "MySQL"] },
    { group: "Testing", items: ["pytest", "Vitest", "Playwright", "k6"] },
  ],
  education: [
    {
      school: "Universidad Católica de Córdoba",
      degree: "Ingeniería en Sistemas",
      dates: "Recibido en febrero de 2026",
    },
  ],
  languages: ["Español (nativo)", "Inglés (avanzado, B2 – Cambridge First Certificate)"],
  other: [
    {
      title: "Vail Resorts, EE. UU.",
      description: "Venta y alquiler de equipos de esquí, atención al cliente en inglés (temporada 2022/23)",
    },
  ],
};

const en = {
  ui: {
    nav: {
      home: "home",
      about: "about",
      experience: "experience",
      projects: "projects",
      skills: "skills",
      education: "education",
      contact: "contact",
    },
    enter: "Enter",
    loading: "Loading scene",
    boot: ["Booting portfolio…", "Loading 3D models…", "Mounting the CV…"],
    hint: "Drag to rotate · Tap a device to zoom in",
    keys: "1-6 sections · Esc back · ←/→ device",
    views: { overview: "Overview", desktop: "Desktop", mobile: "Phone" },
    downloadCv: "Download CV",
    contactMe: "Contact me",
    copy: "Copy",
    copied: "Copied!",
    visit: "Visit site",
    present: "Present",
    current: "Currently",
    languages: "Languages",
    otherExperience: "Other experience",
    location: "Location",
    email: "Email",
    phone: "Phone",
    links: "Links",
    stack: "Stack",
    contact: "Contact",
    contactTitle: "How would you like to reach me?",
    contactSubtitle: "Pick a channel and I'll get back to you soon.",
    contactWhatsapp: "Message me on WhatsApp",
    contactEmail: "Send me an email",
    close: "Close",
    waMessage: "Hi Gonzalo, I saw your portfolio and would like to talk.",
    emailSubject: "Contact from your portfolio",
    emailBody: "Hi Gonzalo,\n\nI saw your portfolio and would like to talk.\n\n",
  },
  role: "AI Engineer | Full Stack & Cloud",
  location: "Argentina",
  summary:
    "Systems Engineer (2026) who designs, builds and ships production AI and SaaS products end to end: multi-agent LLM backends, Next.js frontends and GCP infrastructure with CI/CD. AI Engineer at BIT Automatizaciones, where I built and run AlShow, a ticketing platform live with real events, and technical co-founder of GP Intelligence.",
  now: [
    { role: "AI Engineer", org: "BIT Automatizaciones" },
    { role: "Technical Co-founder", org: "GP Intelligence" },
    { role: "Founder", org: "Presupuestá" },
  ],
  experience: [
    {
      company: "BIT Automatizaciones",
      place: "Argentina",
      role: "AI Engineer",
      dates: "May 2026 – Present",
      current: true,
      links: [{ label: "alshow.com.ar", href: "https://alshow.com.ar" }],
      bullets: [
        "Lead engineer of AlShow (alshow.com.ar), an event ticketing platform in production with a reseller client: 2 live events completed and 3 more scheduled. Wrote 97% of the codebase (199 of 206 commits in 3.5 months) and own 5 production services: a FastAPI + MongoDB API, two Next.js 16 / React 19 frontends, an AI sales agent and a Caddy reverse proxy with a Go sidecar.",
        "Payments without overselling: atomic stock reservation, idempotent MercadoPago webhooks, Decimal rounding and expiry windows designed so a late payment always finds stock or is refunded.",
        "AI sales agent on WhatsApp Cloud API and web (SSE): 12+ tools gated by channel and identity, full purchase through chat, phone OTP verification and a cache-friendly prompt that made it about 10× cheaper.",
        "Security: in-house JWT auth with 4 roles, private Cloud Run services called with per-service-account ID tokens, Secret Manager, and JWT-signed QR tickets that cannot be forged.",
        "Door-scanning PWA with a 5-minute offline mode and idempotent ticket validation.",
        "Migrated from Railway to GCP Cloud Run (2 isolated environments, reproducible infrastructure scripts, Cloud Tasks and Scheduler). Full test pyramid (pytest, Vitest, Playwright e2e) plus k6 load tests.",
        "Also: multi-agent systems with LiteLLM model routing and MCP tool integration, WhatsApp assistants with AI-based OCR, open-weight LLM benchmarking, and reusable Claude Code skills for spec-driven development.",
      ],
    },
    {
      company: "GP Intelligence",
      place: "Córdoba",
      role: "Technical Co-founder & Lead Engineer (part-time)",
      dates: "Jan 2026 – Present",
      current: true,
      links: [{ label: "gpintelligence.com.ar", href: "https://gpintelligence.com.ar" }],
      bullets: [
        "Sole technical owner of a SaaS platform for financial advisors and broker-dealers, deployed and in pre-launch: product, architecture, code, infrastructure, security and cost.",
        "GCP architecture: 6 Cloud Run services, Cloud SQL Postgres, Firestore, GCS, Secret Manager, Cloud Tasks and 9 scheduled jobs, across 3 environments with GitHub Actions CI/CD and nightly Playwright E2E tests.",
        "FastAPI backend integrated with the broker-dealer's API; Next.js 15 + React 19 + TypeScript frontend with a server-side BFF, installable PWA and push notifications.",
        "In-house AI agent: orchestrator plus 5 specialists over real portfolio data, with streaming, audio transcription, per-user quotas and routing across Gemini, Claude and DeepSeek.",
        "Integrations: WhatsApp Cloud API with HMAC-validated webhooks, Gmail / Calendar / Meet via OAuth, Amazon SES (50,000 daily sends approved) and meeting bots with transcription and summaries.",
      ],
    },
    {
      company: "EPAM Systems",
      place: "Argentina",
      role: "Systems Engineer Junior (Jan – May 2026) · Cloud & DevOps Trainee (Jun – Dec 2025)",
      dates: "Jun 2025 – May 2026",
      bullets: [
        "Cloud work on GCP and AI testing.",
        "Intensive Cloud & DevOps program: AWS (EC2, S3, Lambda, IAM, VPC, CloudFormation), Terraform, Ansible, Docker, Kubernetes, CI/CD with Jenkins and GitHub Actions, Linux and Bash.",
      ],
    },
    {
      company: "Bircle AI",
      place: "Argentina",
      role: "Full Stack Developer Junior",
      dates: "Mar 2024 – Nov 2024",
      bullets: [
        "Built backend services in Python (FastAPI) and Express.js, and frontends in React / Next.js with TypeScript and Tailwind CSS.",
        "Designed and consumed REST APIs, worked with MongoDB and SQL databases and with AWS services.",
      ],
    },
  ],
  projects: [
    {
      name: "Presupuestá",
      role: "Founder",
      dates: "2026 – Present",
      href: "https://presupuestaa.com.ar",
      label: "presupuestaa.com.ar",
      description:
        "SaaS for tradespeople in Argentina to create and send professional quotes. Built and launched solo; now running user acquisition with content and paid ads.",
      stack: [],
    },
    {
      name: "Cantina UCC",
      role: "Systems Engineering Final Project",
      dates: "Dec 2024 – Feb 2026",
      description:
        "Web and mobile app to run the university cafeteria: product search, cart, Mercado Pago payments and an admin panel. FastAPI, Firestore, Next.js and Firebase Auth, deployed on Cloud Run and Vercel with GitHub Actions.",
      stack: ["FastAPI", "Firestore", "Next.js", "Firebase Auth", "Cloud Run", "Vercel", "GitHub Actions"],
    },
  ],
  skills: [
    {
      group: "AI & Agents",
      items: ["LLM orchestration (LiteLLM)", "MCP", "Multi-agent architectures", "Tool calling", "OCR with vision models", "Google Vertex AI", "Claude Code"],
    },
    { group: "Backend", items: ["Python", "FastAPI", "Node.js", "TypeScript", "REST APIs"] },
    { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "PWA"] },
    {
      group: "Cloud & DevOps",
      items: ["GCP (Cloud Run, Cloud SQL, Firestore, Secret Manager, Cloud Tasks)", "AWS", "Docker", "Terraform", "Kubernetes", "GitHub Actions"],
    },
    { group: "Databases", items: ["MongoDB", "PostgreSQL", "Firestore", "MySQL"] },
    { group: "Testing", items: ["pytest", "Vitest", "Playwright", "k6"] },
  ],
  education: [
    {
      school: "Universidad Católica de Córdoba",
      degree: "Systems Engineering",
      dates: "Graduated Feb 2026",
    },
  ],
  languages: ["Spanish (native)", "English (advanced, B2 – Cambridge First Certificate)"],
  other: [
    {
      title: "Vail Resorts, USA",
      description: "Ski equipment sales and rental, customer service in English (Winter 2022/23)",
    },
  ],
};

export const CV = { es, en };

export const contactLinks = (lang) => {
  const ui = CV[lang].ui;
  return {
    whatsapp: `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(ui.waMessage)}`,
    email: `mailto:${CONTACT.email}?subject=${encodeURIComponent(ui.emailSubject)}&body=${encodeURIComponent(ui.emailBody)}`,
  };
};
