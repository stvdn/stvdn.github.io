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
    intro:
      "My role is primarily focused on software engineering, automating processes from requirements gathering, adapting business rules, designing the solution, and presenting it to the client. The projects are carried out for a renowned Ecuadorian financial institution.",
    tasks: [
      "Migration of Banco Bolivariano's current orchestrator to the JAMS orchestrator, automating the process through the design and implementation of a migrator developed in Python with an object-oriented paradigm applying the principles of SOLID programming. Responsible for consuming the current orchestrator's database, transforming the data, and consuming the JAMS tool's REST API.",
      "Automation of business rules using PowerShell to adapt the new tool to the bank's operations. Scripts were developed for executing SSIS packages on different Windows servers, validating resource availability (CPU, RAM). For certain legacy servers, remote connections were established using WinRM; SQR package execution was performed via ksh scripts on UNIX servers; date calculations and the presentation of pop-up messages with sound alerts were implemented; along with other crucial business rules for managing batch dependencies/scheduling.",
      "Support and multipurpose meetings with various operational areas of the bank to explain the solution architecture, functional aspects of the tool, approval of security rules related to ports and services, and security schema developed in collaboration with the functional area for role-based permission segmentation. Also included approval of use cases by the operational area.",
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
    intro:
      "The company develops software solutions for various banking cooperatives in Ecuador. My activities involved developing functionalities for the main banking core system, using both backend and frontend technologies, based on the requirements from banking operators.",
    tasks: [
      "Requirements gathering with specialized operational staff from banking cooperatives in Ecuador for the design, development, and integration of the treasury module into the main banking core, sing PHP with the Laravel framework as the backend and MySQL as the database, Blade and JavaScript were used for the frontend. The module included business logic for managing suppliers, checkbooks, electronic invoices, payment verification and approval, bank reconciliations, and the generation and visualization of reports.",
      "Proposed and developed missing functionalities in different modules, using JavaScript and the WhatsApp API to automate the sending of reports to a user at a scheduled time. Additionally, implemented the functionality for uploading multiple files, storing them in a MySQL database, with PHP and JavaScript used for the frontend.",
      "Additionally, various CRUD operations were performed for report presentation across different system modules, including pagination and filters, as well as data linking for improved navigation on the website.",
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
      "The company had a website and was in the process of developing its MVP—a mobile application using Flutter as the development framework. Based on these requirements, it was proposed to use Firebase services as the backend due to time constraints and proof of concept needs. Delivered features included login and registration with Google and email, property listing with custom filters to enhance user experience on mobile devices, detailed property views with the ability to add to a favorites list, a horizontal navigation menu for Android and iOS devices, loan application functionality, and user data configuration for address and contact information. For data storage, Firestore NoSQL database was used, and for images/files, Firebase Cloud Storage was utilized. Dart was used to implement most of the business logic.",
      "The visual aspects of the website and mobile application were developed based on a Figma project. Additionally, for the website, a loan calculator was implemented for the real estate sector by creating a formula that adapts to the interest rates of Ecuadorian banks, using JavaScript, HTML, and CSS.",
      "As the person responsible for developing the mobile application, I designed and implemented the automation of loading customer data from the startup’s CRM. Using Make, the data was extracted, cleaned based on business logic criteria, and loaded into the NoSQL Firestore database for use in the mobile application. Additionally, Git was used for version control with GitHub as the repository. I proposed and implemented the Provider library for state management in Flutter, based on its advantages for the client’s needs. Scrum was established and used as the framework for the project.",
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
      "For frontend development, JavaScript was used with the Angular framework and TypeScript, while Firebase services were used for the backend. These technologies enabled the implementation of Google, Facebook, OTP, and email registration and login; logic to manage user types and access based on roles; CRUD operations for user data configuration, allowing users to be either vendors or regular users; and screens to view businesses, forums, blogs, and products in list format with filters (including location) and pagination.",
      "For business-type users, CRUD screens for products were developed, and logic was implemented to allow each business to have a forum and a blog with Facebook-like comments, likes, and replies. Additionally, functionalities for creating a list of favorite products and stores were included, with options to share stores, products, and blogs on Facebook, WhatsApp, X, and LinkedIn. These functionalities were activated or deactivated based on the user's purchased plan.",
      "Logic for product purchases was implemented, allowing users to keep items in their cart until purchase or generate a new cart. Similarly, the logic for the payment button with the PlacetoPay platform was developed, including acceptance of payment by the business and product shipment.",
      "Backend development also included PHP with Laravel to create an API that was called from Angular for generating purchase reports or invoices in PDF and Excel formats, which were sent to the user's email. The API was also used to create metadata that allowed for the generation of cards when using the sharing functionality from the frontend, interacting with the APIs of each social network for improved SEO.",
      "With the development team, the migration of the Angular programmed website to Ionic was designed and implemented, allowing the company to have a multi-platform application.",
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
    rol: "Teacher",
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
