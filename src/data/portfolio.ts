import type { PortfolioData } from "./portfolio.types";
import { defaultLocale } from "@/i18n/config";
import { portfolioEn } from "./portfolio.en";
import { portfolioEs } from "./portfolio.es";

export type {
  PortfolioData,
  ContactLink,
  JobEntry,
  SkillCategory,
  Education,
  Company,
  Project,
} from "./portfolio.types";

const portfolioData: Record<typeof defaultLocale, PortfolioData> = {
  en: portfolioEn,
  es: portfolioEs,
};

export function getPortfolioData(locale: typeof defaultLocale): PortfolioData {
  return portfolioData[locale];
}