import type { PortfolioData } from "./portfolio.types";

export const portfolioEs: PortfolioData = {
  name: "Steven Peñafiel",
  role: "Ingeniero de Software",
  roleAlternatives: ["Maestría en Ingeniería de Software (en curso)", "Amante de la tecnología"],
  bio:
    "Ingeniero de software con más de 5 años de experiencia en automatización empresarial, integraciones backend y desarrollo full stack. Construyo flujos y APIs confiables con Python, PowerShell y SQL Server, y productos web con TypeScript, Next.js y React.",
  contactLinks: [
    { label: "stevendanny2000@gmail.com", href: "mailto:stevendanny2000@gmail.com", copyValue: "stevendanny2000@gmail.com" },
    { label: "+593 958836085", href: "tel:+593958836085", copyValue: "+593958836085" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/stevendanny/", copyValue: "https://www.linkedin.com/in/stevendanny/" },
    { label: "GitHub", href: "https://github.com/stvdn", copyValue: "https://github.com/stvdn" },
  ],
  experience: [
    {
      title: "Ingeniero de Software",
      company: "Redsis",
      dateRange: "Diciembre 2022 – Presente",
      location: "Remoto",
      bullets: [
        "Actualmente refactorizando el motor de migración central hacia un framework agnóstico de herramientas usando PowerShell, permitiendo migraciones multi-origen desde diversos orquestadores empresariales mientras se aumenta la reutilización de código y se reduce la deuda técnica.",
        "Automatizada la migración de más de 5.600 procesos de negocio a un orquestador moderno (JAMS), eliminando errores heredados y mejorando la modularidad del sistema.",
        "Recopilé requisitos con equipos bancarios, resolví problemas de procesamiento por lotes y apoyé lanzamientos y despliegues críticos en producción.",
        "Diseñé y desarrollé soluciones ETL en Python para sincronizar datos entre bases de datos SQL Server y APIs REST, garantizando la consistencia de datos entre plataformas.",
        "Arquitecté validación de recursos en tiempo real (CPU/RAM) usando PowerShell y WinRM para la ejecución remota de paquetes empresariales.",
        "Reduje los errores operacionales manuales en un 80% integrando lógica de negocio personalizada en JAMS usando Python y PowerShell.",
        "Ingenieré automatización unificada para Azure Data Factory, AWS Glue y AWS Lambda, proporcionando monitoreo centralizado y registro detallado.",
      ],
    },
    {
      title: "Desarrollador Web Full Stack",
      company: "WebCoop",
      dateRange: "Mayo 2022 – Diciembre 2022",
      location: "Quito, Ecuador",
      bullets: [
        "Colaboré con stakeholders bancarios para diseñar y construir un Módulo de Tesorería integrado al sistema bancario central usando PHP/Laravel y MySQL.",
        "Desarrollé un sistema de reportes automatizado vía API REST de WhatsApp, mejorando la comunicación en tiempo real de datos financieros.",
        "Construí operaciones CRUD complejas con filtrado avanzado y paginación para mejorar la navegación interna y la eficiencia del usuario.",
      ],
    },
    {
      title: "Desarrollador Móvil y Web",
      company: "Hausi",
      dateRange: "Febrero 2022 – Mayo 2022",
      location: "Quito, Ecuador",
      bullets: [
        "Automatizada la extracción, limpieza y transformación de datos de clientes desde el CRM de la empresa hacia Firestore usando Make, garantizando la integridad de datos para los flujos de ventas.",
        "Construí una aplicación móvil de gestión de propiedades desde cero usando Flask y Firebase, implementando filtros de búsqueda complejos y gestión de estado.",
        "Construí una calculadora de préstamos para el sitio web usando JavaScript, HTML y CSS, con fórmulas adaptadas a las tasas de interés de bancos ecuatorianos.",
      ],
    },
    {
      title: "Desarrollador Web Full Stack",
      company: "Marcairis",
      dateRange: "Enero 2021 – Enero 2022",
      location: "Remoto",
      bullets: [
        "Implementé autenticación multi-método (Google, OTP, OAuth) y Control de Acceso Basado en Roles (RBAC) para gestionar permisos complejos entre vendedores y usuarios regulares.",
        "Ingenieré APIs Backend usando PHP (Laravel) para automatizar la generación de metadatos para SEO, aumentando significativamente la visibilidad de la plataforma y la eficiencia de compartición social.",
        "Desarrollé Herramientas Internas de Reportes para generar y automatizar la entrega de facturas de compra y reportes financieros en formatos PDF/Excel vía email.",
        "Colaboré en la Migración Frontend de Angular a Ionic, garantizando una base de código unificada para despliegue multiplataforma (web y móvil).",
      ],
    },
  ],
  skills: [
    {
      title: "Lenguajes",
      skills: ["Python", "JavaScript", "TypeScript", "PowerShell", "PHP", "Dart"],
    },
    {
      title: "Frameworks y Automatización",
      skills: ["React / Next.js", "Angular", "Laravel", "Flask / FastAPI", "Integración con APIs de LLM", "JAMS / GoAnywhere"],
    },
    {
      title: "Tecnologías y Prácticas",
      skills: ["Docker / Docker Compose", "AWS / Azure", "PostgreSQL / SQL Server", "Git / GitHub Actions", "APIs REST / ETL", "POO y Principios SOLID", "Automatización de Flujos"],
    },
  ],
  education: [
    {
      university: "Universidad Politécnica Salesiana, Ecuador",
      degree: "Maestría en Ingeniería de Software – Mención en Diseño de Arquitectura de Sistemas",
      dateRange: "Esperado julio de 2027",
    },
    {
      university: "Pontificia Universidad Católica, Ecuador",
      degree: "Título de Grado en Ingeniería de Sistemas de Información",
      dateRange: "2018–2022",
    },
  ],
  projects: [
    {
      title: "Ventario",
      description:
        "Plataforma SaaS para gestión de inventario y ventas construida con Next.js y React. Integré la API de Gemini para generar texto y la API de Replicate para generar imágenes; usé Docker Compose para los contenedores y Dokploy para el despliegue.",
      techTags: ["Next.js", "React", "Gemini API", "Replicate API", "Docker", "Dokploy"],
      links: [
        { label: "Inicio", href: "https://usaventario.com/", kind: "live" },
        { label: "Catálogo", href: "https://the-girls-club-by-nany.usaventario.com/catalogo", kind: "live" },
      ],
    },
    {
      title: "Next.js Portfolio",
      description:
        "Portafolio personal y blog construido con Next.js 16 (App Router), React 19 y TypeScript, estilizado con Tailwind CSS v4. Incluye enrutado i18n por locale, animaciones con motion y un formulario de contacto respaldado por un Cloudflare Worker con Resend para el envío de correos. Desplegado en GitHub Pages con CI/CD vía GitHub Actions.",
      techTags: ["Next.js", "React 19", "TypeScript", "Tailwind CSS v4", "Resend", "Cloudflare Workers"],
      links: [
        { label: "GitHub", href: "https://github.com/stvdn/stvdn.github.io", kind: "code" },
      ],
    },
    {
      title: "Convertidor de Video a MP3",
      description:
        "Aplicación de consola construida para practicar arquitectura de microservicios, con servicios modulares usando Python, Docker, RabbitMQ y MariaDB.",
      techTags: ["Python", "Docker", "RabbitMQ", "MariaDB"],
      links: [
        { label: "GitHub", href: "https://github.com/stvdn/mp3converter", kind: "code" },
      ],
    },
    {
      title: "Travel Planner",
      description:
        "App de planificación de viajes construida con Next.js, TypeScript y Tailwind CSS, usando PostgreSQL (Supabase) y Prisma. Incluye autenticación, gestión de itinerarios y una visualización de globo 3D.",
      techTags: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Prisma"],
      links: [
        { label: "Demo", href: "https://travel-planner-gamma-green.vercel.app/", kind: "live" },
        { label: "GitHub", href: "https://github.com/stvdn/travel_planner", kind: "code" },
      ],
    },
  ],
  certifications: [
    "Principios de Programación SOLID – LinkedIn Learning, Online",
    "Certificado Profesional de Fundamentos de Docker – LinkedIn Learning, Online",
  ],
};
