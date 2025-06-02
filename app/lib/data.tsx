const archivements = [
  {
    title: "Computer Systems Engineering",
    courseOwner: "Pontificia Universidad Católica del Ecuador",
    link: "", // No link provided for this item
    type: "Degree",
    completed: true,
  },
  {
    title: "SOLID Programming Principles",
    courseOwner: "LinkedIn Learning",
    link: "https://www.linkedin.com/learning/certificates/520fb99d8b0792228ecbac1658675a7f6d7e5cfa89d2710d65212baa3634e6b9",
    type: "Online course",
    completed: true,
  },
  {
    title: "Docker Foundations Professional Certificate",
    courseOwner: "LinkedIn Learning",
    link: "https://www.linkedin.com/learning/certificates/10d1d67411fbc2eebd473858e8186864d9173ee25988a83cb3945ed2bbc7547b",
    type: "Online course",
    completed: true,
  },
];

const contactData = [
  { title: "Location", info: "Ecuador, Quito" },
  { title: "Phone", info: "+593 958836085" },
  { title: "Email", info: "stevendanny2000@gmail.com" },
];

const experiences = [
  {
    company: "Redsis",
    location: "Remote",
    time: "December 2022 - Present",
    rol: "Software Engineer",
    intro: "My role is primarily focused on software engineering, automating processes from requirements gathering, adapting business rules, designing the solution, and presenting it to the client. The projects are carried out for a renowned Ecuadorian financial institution.",
    tasks: [
        "Automated the migration of 1,600+ processes from a legacy orchestrator to JAMS, eliminating previous errors.",
        "Designed a Python ETL solution to transform SQL Server data and interact with a REST API.",
        "Implemented remote SSIS package execution using PowerShell and WinRM with real-time system resource validation.",
        "Integrated custom functionality into JAMS using Python and PowerShell, reducing manual errors by 80%.",
        "Led stakeholder meetings for requirements, training, and presentations.",
        "Resolved a Kerberos-related authentication issue during production deployment, meeting project deadlines."
      ],
    stack: [
      "Python",
      "Powershell",
      "API REST",
      "Trello",
      "JAMS",
      "Scrum",
      "Automation",
    ],
  },
  {
    company: "WebCoop",
    location: "Quito, Ecuador",
    time: "May 2022 - December 2022",
    rol: "Full Stack Web Developer",
    intro: "The company develops software solutions for various banking cooperatives in Ecuador. My activities involved developing functionalities for the main banking core system, using both backend and frontend technologies, based on the requirements from banking operators.",
    tasks: [
      "Developed the treasury module backend using Laravel and MySQL, with Blade and JavaScript frontend.",
      "Gathered requirements and designed the treasury module in collaboration with banking cooperative staff.",
      "Implemented automatic report delivery via WhatsApp REST API using JavaScript.",
      "Built CRUD operations with pagination, filters, and data linking to enhance UX."
    ],
    stack: ["PHP", "Laravel", "MySQL", "JavaScript", "GitHub", "Scrum", "Jira"],
  },
  {
    company: "Hausi",
    location: "Quito, Ecuador",
    time: "February 2022 - May 2022",
    rol: "Mobile and Web Developer",
    intro:
      "A startup focused on renting and selling in the real estate sector, leveraging technology to enhance user experience. I was responsible for the entire software development process, both for the website and the mobile application.",
    tasks: [
        "Built a loan calculator for the website based on Ecuadorian interest rates.",
        "Developed a property rental/sales mobile app using Flask and Firebase.",
        "Used Firestore NoSQL, Firebase Cloud Storage, and Provider for app data and state management.",
        "Automated CRM data import into Firestore using Make with data cleansing and transformation."
      ],
    stack: [
      "Flutter",
      "Dart",
      "Firebase",
      "HTML",
      "CSS",
      "JavaScript",
      "GitHub",
      "Scrum",
      "MAKE",
    ],
  },
  {
    company: "Marcairis",
    location: "Remote",
    time: "January 2021 - January 2022",
    rol: "Full Stack Web Developer",
    intro:
      "SaaS company dedicated to creating an online business community, allowing businesses to have a section on the portal with various functionalities based on their purchased plan. For this, different functionalities were developed both in the backend and frontend of the system.",
    tasks: [
      "Developed Angular and TypeScript frontend features integrated with Firebase backend services.",
      "Implemented multi-method user authentication and role-based access control.",
      "Created blog and forum features with social interaction capabilities.",
      "Built PHP Laravel APIs for SEO metadata and social sharing cards.",
      "Generated PDF/Excel purchase reports and invoices sent via email.",
      "Migrated the web app from Angular to Ionic for multi-platform support."
    ],
    stack: [
      "Angular",
      "Ionic",
      "Firebase",
      "Laravel",
      "TypeScript",
      "GitHub",
      "Scrum",
    ],
  },
  {
    company: "FULLEF",
    location: "Quito, Ecuador",
    time: "August 2020 - December 2020",
    rol: "Mentor",
    intro:
      "The organization aims to improve the technological landscape in Ecuador by starting with education in schools across the country. After completing leadership courses, I was assigned a group of students whom I guided and taught about software development.",
    tasks: [
      "The organization provided courses to participants on communication skills, organization, and task assignment. These skills were applied in the classes I taught, where topics such as data types, conditionals, loops, sorting algorithms, functions, OOP, file reading, and console programs using Python were covered. Additionally, these skills were utilized in organizing each student's final project, where the Scrum framework was applied as a real-world example.",
    ],
    stack: ["Python"],
  },
];

const medias = [
  {
    icon: "icon-[line-md--github-loop]",
    link: "https://github.com/stvdn",
    name: "GitHub",
  },
  {
    icon: "icon-[line-md--linkedin]",
    link: "https://www.linkedin.com/in/stevendanny/",
    name: "LinkedIn",
  },
];

export { archivements, contactData, experiences, medias };
