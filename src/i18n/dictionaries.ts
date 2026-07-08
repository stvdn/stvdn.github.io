import type { Locale } from "@/i18n/config";
import { dictionary as en } from "./dictionaries/en";
import { dictionary as es } from "./dictionaries/es";

export interface ContactModalStrings {
  title: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  subjectLabel: string;
  subjectPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  attachLabel: string;
  attachHint: string;
  attachError: string;
  attachRemove: string;
  attachDrop: string;
  submit: string;
  submitting: string;
  success: string;
  error: string;
  close: string;
}

export interface Dictionary {
  nav: { blog: string; about: string };
  sections: {
    experience: string;
    projects: string;
    skills: string;
    education: string;
    companies: string;
    certifications: string;
  };
  footer: { contact: string };
  contact: ContactModalStrings;
  blog: { title: string; emptyTitle: string; emptyBody: string; back: string };
  language: { en: string; es: string };
}

const dictionaries: Record<Locale, Dictionary> = {
  en,
  es,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}