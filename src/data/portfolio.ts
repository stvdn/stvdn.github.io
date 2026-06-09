export interface ContactLink {
  label: string;
  href: string;
}

export interface JobEntry {
  title: string;
  company: string;
  companyUrl: string;
  dateRange: string;
  location: string;
  bullets: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Education {
  university: string;
  degree: string;
}

export interface Recommendation {
  quote: string;
  attribution: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  bio: string;
  contactLinks: ContactLink[];
  experience: JobEntry[];
  skills: SkillCategory[];
  education: Education;
  recommendations: Recommendation[];
  certifications: string[];
}

export const portfolioData: PortfolioData = {
  name: "Steven Peñafiel",
  role: "Software Architect",
  bio:
    "Software architect with years of experience designing scalable systems and leading engineering teams. Passionate about clean architecture, developer experience, and building products that make a difference. Currently focused on distributed systems and cloud-native solutions.",
  contactLinks: [
    { label: "hello@figma.com", href: "mailto:hello@figma.com" },
    { label: "(555) 123-4567", href: "tel:+15551234567" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
  experience: [
    {
      title: "Senior Software Architect",
      company: "Tech Corp",
      companyUrl: "https://example.com",
      dateRange: "June 2022 – Present",
      location: "Remote & New York, NY",
      bullets: [
        "Led the architecture redesign of the core platform, reducing latency by 40% and improving system throughput by 3x",
        "Designed and implemented a microservices migration strategy moving from a monolith to 12 independent services",
        "Established architectural review processes and technical standards across 4 engineering teams",
        "Directed the adoption of event-driven architecture for real-time data processing pipelines",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Dev Studios",
      companyUrl: "https://example.com",
      dateRange: "December 2021 – June 2022",
      location: "New York, NY",
      bullets: [
        "Built a high-traffic API gateway handling 10M+ requests per day with 99.99% availability",
        "Mentored a team of 6 engineers on best practices for distributed systems design",
        "Implemented observability solutions reducing mean time to detection from hours to minutes",
      ],
    },
    {
      title: "Software Engineer",
      company: "Code Hub",
      companyUrl: "https://example.com",
      dateRange: "October 2016 – March 2018",
      location: "Los Angeles, CA",
      bullets: [
        "Developed full-stack features for a SaaS platform serving 50K+ active users",
        "Optimized database queries reducing page load times by 60%",
        "Contributed to the open-source component library used across 3 product teams",
      ],
    },
  ],
  skills: [
    {
      title: "System Design",
      skills: [
        "Architecture Design",
        "Scalability Planning",
        "Technology Selection",
        "Performance Optimization",
      ],
    },
    {
      title: "Technical Leadership",
      skills: [
        "Team Mentoring",
        "Code Review",
        "Technical Strategy",
        "Cross-team Collaboration",
      ],
    },
    {
      title: "Development",
      skills: [
        "Full-stack Development",
        "API Design",
        "Database Design",
        "Cloud Infrastructure",
      ],
    },
  ],
  education: {
    university: "Instituto Tecnológico de Costa Rica",
    degree: "Bachelor of Science in Computer Engineering",
  },
  recommendations: [
    {
      quote:
        "Steven is one of those rare architects who combines deep technical expertise with genuine empathy for the engineers implementing his designs. His system proposals are always well-reasoned, thoroughly documented, and a joy to work with.",
      attribution: "Sarah Mitchell, VP of Engineering at Tech Corp",
    },
  ],
  certifications: [
    "AWS Solutions Architect – Professional",
    "Google Cloud Professional Cloud Architect",
    "Certified Kubernetes Administrator (CKA)",
  ],
};