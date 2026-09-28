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
  sectionLinks?: { href: string; label: string }[];
  showLanguageSwitcher?: boolean;
}

export function Header({ name, role, locale, dictionary, navLink, sectionLinks = [], showLanguageSwitcher = true }: HeaderProps) {
  return (
    <header className="site-header">
      <MouseFollower>
        <div className="header-nav-row">
          <Link href={`/${locale}`} className="header-wordmark" aria-label={`${name} — home`}>
            stvdn<span aria-hidden="true">.</span>
          </Link>
          <nav className="header-nav" aria-label="Primary">
            {sectionLinks.map((link) => (
              <a key={link.href} href={link.href} className="header-nav-link">
                {link.label}
              </a>
            ))}
            <Link href={navLink.href} className="header-nav-link">
              {navLink.label}
            </Link>
            {showLanguageSwitcher && <LanguageSwitcher current={locale} dictionary={dictionary} />}
          </nav>
        </div>
        <div className="header-intro">
          <StaggerReveal index={0}>
            <h1>{name}<span className="header-period">.</span></h1>
          </StaggerReveal>
          <StaggerReveal index={1}>
            <p>{role}</p>
          </StaggerReveal>
        </div>
      </MouseFollower>
    </header>
  );
}
