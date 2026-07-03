export interface ContactLink {
  label: string;
  href: string;
  copyValue?: string;
}

export interface JobEntry {
  title: string;
  company: string;
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
  dateRange?: string;
  minor?: string;
}

export interface Company {
  name: string;
  logo: string;
}

export interface Project {
  title: string;
  description: string;
  techTags?: string[];
}

export interface PortfolioData {
  name: string;
  role: string;
  bio: string;
  contactLinks: ContactLink[];
  experience: JobEntry[];
  skills: SkillCategory[];
  education: Education[];
  projects: Project[];
  companies: Company[];
  certifications: string[];
}