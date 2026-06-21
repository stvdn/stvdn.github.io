import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";
import { ScrollToTop } from "@/components/ScrollToTop";
import { locales, isLocale, type Locale } from "@/i18n/config";
import { getPortfolioData } from "@/data/portfolio";

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-schibsted",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface RouteProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const portfolio = getPortfolioData(locale);
  return {
    title: `${portfolio.name} — ${portfolio.role}`,
    description: portfolio.bio,
    alternates: {
      languages: {
        en: "/en",
        es: "/es",
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: RouteProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const typedLocale: Locale = locale;

  return (
    <html lang={typedLocale} className={`${schibstedGrotesk.variable} h-full`}>
      <body className="min-h-full bg-black font-sans text-white antialiased">
        <div className="mx-auto max-w-7xl px-8 py-8 md:pt-16">
          {children}
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
}