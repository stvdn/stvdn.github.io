import type { PortfolioData } from "./portfolio.types";

export const portfolioEn: PortfolioData = {
  name: "Steven Peñafiel",
  role: "Software Engineer",
  bio:
    "Master's student in Systems Architecture Design with experience in web and mobile application development. Currently focused on automating processes and business rules, always learning cutting-edge technologies with the knowledge to apply them effectively.",
  contactLinks: [
    { label: "stevendanny2000@gmail.com", href: "mailto:stevendanny2000@gmail.com", copyValue: "stevendanny2000@gmail.com" },
    { label: "+593 958836085", href: "tel:+593958836085", copyValue: "+593958836085" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/stevendanny/", copyValue: "https://www.linkedin.com/in/stevendanny/" },
  ],
  experience: [
    {
      title: "Software Engineer",
      company: "Redsis",
      dateRange: "December 2022 – Present",
      location: "Remote",
      bullets: [
        "Currently refactoring the core migration engine into a tool-agnostic framework using PowerShell, enabling multi-source migrations from diverse enterprise orchestrators while increasing code reusability and reducing technical debt.",
        "Automated the migration of 5,600+ business processes to a modern orchestrator (JAMS), eliminating legacy errors and improving system modularity.",
        "Designed and developed Python ETL solutions to synchronize data between SQL Server databases and REST APIs, ensuring data consistency across platforms.",
        "Architected real-time resource validation (CPU/RAM) using PowerShell and WinRM for remote execution of enterprise packages.",
        "Reduced manual operational errors by 80% by integrating custom business logic into JAMS using Python and PowerShell.",
        "Engineered unified automation for Azure Data Factory, AWS Glue, and AWS Lambda, providing centralized monitoring and detailed logging.",
      ],
    },
    {
      title: "Full Stack Web Developer",
      company: "WebCoop",
      dateRange: "May 2022 – December 2022",
      location: "Quito, Ecuador",
      bullets: [
        "Collaborated with banking stakeholders to design and build a Treasury Module integrated into the core banking system using PHP/Laravel and MySQL.",
        "Developed an automated reporting system via WhatsApp REST API, enhancing real-time communication of financial data.",
        "Built complex CRUD operations with advanced filtering and pagination to improve internal navigation and user efficiency.",
      ],
    },
    {
      title: "Mobile and Web Developer",
      company: "Hausi",
      dateRange: "February 2022 – May 2022",
      location: "Quito, Ecuador",
      bullets: [
        "Automated customer data extraction, cleansing, and transformation from the company's CRM into Firestore using Make, ensuring data integrity for sales workflows.",
        "Built a property management mobile app from scratch using Flask and Firebase, implementing complex search filters and state management.",
        "Built a loan calculator for the website using JavaScript, HTML, and CSS, with formulas adapted to Ecuadorian bank interest rates.",
      ],
    },
    {
      title: "Full Stack Web Developer",
      company: "Marcairis",
      dateRange: "January 2021 – January 2022",
      location: "Remote",
      bullets: [
        "Implemented multi-method authentication (Google, OTP, OAuth) and Role-Based Access Control (RBAC) to manage complex permissions between vendors and regular users.",
        "Engineered Backend APIs using PHP (Laravel) to automate metadata generation for SEO, significantly increasing platform visibility and social sharing efficiency.",
        "Developed Internal Reporting Tools to generate and automate the delivery of purchase invoices and financial reports in PDF/Excel formats via email.",
        "Collaborated on the Frontend Migration from Angular to Ionic, ensuring a unified codebase for multi-platform (web and mobile) deployment.",
      ],
    },
  ],
  skills: [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "TypeScript", "PowerShell", "PHP", "Dart", "C#/.NET"],
    },
    {
      title: "Frameworks & Automation",
      skills: ["React / Next.js", "Angular", "Laravel", "Flask / FastAPI", "AI Agents & LLM Integration", "JAMS / GoAnyWhere"],
    },
    {
      title: "Technologies & Practices",
      skills: ["Docker", "AWS", "SQL & NoSQL", "Git", "OOP & SOLID Principles", "Solution Architecture", "Workflow Automation"],
    },
  ],
  education: [
    {
      university: "Universidad Politécnica Salesiana, Ecuador",
      degree: "Master in Software Engineering – Mention in Systems Architecture Design",
      dateRange: "Expected 2027",
    },
    {
      university: "Pontificia Universidad Católica, Ecuador",
      degree: "Bachelor's Degree in Information Systems Engineering",
      dateRange: "2018–2022",
    },
  ],
  projects: [
    {
      title: "Ventario",
      description:
        "SaaS platform for inventory and sales management built with Next.js and React, featuring autonomous AI Agents to automate data entry and generate real-time business insights. Orchestrated with Docker-compose and deployed using Dokploy to ensure robust environment management and high-performance synchronization.",
      techTags: ["Next.js", "React", "AI Agents", "Docker", "Dokploy"],
      links: [
        { label: "Home", href: "https://usaventario.com/", kind: "live" },
        { label: "Catalog", href: "https://the-girls-club-by-nany.usaventario.com/catalogo", kind: "live" },
      ],
    },
    {
      title: "Next.js Portfolio",
      description:
        "Personal portfolio and blog built with Next.js 16 (App Router), React 19, and TypeScript, styled with Tailwind CSS v4. Features locale-based i18n routing, motion animations, and a contact form backed by a Cloudflare Worker with Resend for email delivery. Deployed on GitHub Pages with CI/CD via GitHub Actions.",
      techTags: ["Next.js", "React 19", "TypeScript", "Tailwind CSS v4", "Resend", "Cloudflare Workers"],
      links: [
        { label: "GitHub", href: "https://github.com/stvdn/stvdn.github.io", kind: "code" },
      ],
    },
    {
      title: "Video to MP3 Converter",
      description:
        "Console application built to practice microservices architecture, featuring modular services using Python, Docker, RabbitMQ, and MariaDB.",
      techTags: ["Python", "Docker", "RabbitMQ", "MariaDB"],
      links: [
        { label: "GitHub", href: "https://github.com/stvdn/mp3converter", kind: "code" },
      ],
    },
    {
      title: "Travel Planner",
      description:
        "Trip planning app built with Next.js, TypeScript, and Tailwind CSS, using PostgreSQL (Supabase) and Prisma. Features authentication, itinerary management, and a 3D globe visualization.",
      techTags: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Prisma"],
      links: [
        { label: "Live", href: "https://travel-planner-gamma-green.vercel.app/", kind: "live" },
        { label: "GitHub", href: "https://github.com/stvdn/travel_planner", kind: "code" },
      ],
    },
  ],
  companies: [
    { name: "Redsis", logo: "/companies/redsis.webp" },
    { name: "WebCoop", logo: "/companies/webcoop.webp" },
    { name: "Hausi", logo: "/companies/hausi.webp" },
    { name: "Marcairis", logo: "/companies/marcairis.webp" },
  ],
  certifications: [
    "SOLID Programming Principles – LinkedIn Learning, Online",
    "Docker Foundations Professional Certificate – LinkedIn Learning, Online",
  ],
};