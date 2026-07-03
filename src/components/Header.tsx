import Link from "next/link";
import { MouseFollower } from "@/components/MouseFollower";
import { StaggerReveal } from "@/components/StaggerReveal";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

interface HeaderProps {
  name: string;
  role: string;
  locale: Locale;
  dictionary: Dictionary;
  navLink: { href: string; label: string };
  showLanguageSwitcher?: boolean;
}

export function Header({ name, role, locale, dictionary, navLink, showLanguageSwitcher = true }: HeaderProps) {
  return (
    <header>
      <MouseFollower>
        <div className="flex items-start justify-between mb-12 md:pb-27">
          <div>
            <StaggerReveal index={0}>
              <h1 className="text-link text-lg md:text-xl lg:text-2xl">
                {name},
              </h1>
            </StaggerReveal>
            <StaggerReveal index={1}>
              <p className="text-gray-400 font-light text-link text-lg md:text-xl lg:text-2xl">
                {role}
              </p>
            </StaggerReveal>
          </div>
          <div className="flex items-center gap-6">
            {showLanguageSwitcher && (
              <StaggerReveal index={2}>
                <LanguageSwitcher current={locale} dictionary={dictionary} />
              </StaggerReveal>
            )}
            <StaggerReveal index={3}>
              <Link
                href={navLink.href}
                className="group relative text-link text-lg md:text-xl lg:text-2xl"
              >
                {navLink.label}
                <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-0 bg-white transition-all duration-300 group-hover:left-0 group-hover:w-full" />
              </Link>
            </StaggerReveal>
          </div>
        </div>
      </MouseFollower>
    </header>
  );
}