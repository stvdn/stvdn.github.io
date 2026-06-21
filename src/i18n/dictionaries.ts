import type { Locale } from "@/i18n/config";
import { dictionary as en } from "./dictionaries/en";
import { dictionary as es } from "./dictionaries/es";

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