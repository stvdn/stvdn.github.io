import Link from "next/link";
import { MouseFollower } from "@/components/MouseFollower";
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
  const nameParts = name.split(" ");

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
          <div className="header-intro-copy">
            <h1 aria-label={name}>
              {nameParts.map((part, index) => (
                <span className="header-name-line" key={`${part}-${index}`} aria-hidden="true">
                  <span className="header-name-type">
                    {part}{index === nameParts.length - 1 && <span className="header-period">.</span>}
                  </span>
                </span>
              ))}
            </h1>
            <p className="header-role"><span className="header-role-rule" aria-hidden="true" />{role}</p>
          </div>
          <div className="header-emblem" aria-hidden="true">
            <svg viewBox="0 0 320 320" fill="none">
              <circle className="header-emblem-ring" cx="160" cy="160" r="124" />
              <circle className="header-emblem-orbit" cx="160" cy="160" r="91" />
              <path className="header-emblem-axis" d="M160 0v49m0 222v49M0 160h49m222 0h49" />
              <path className="header-emblem-star" d="m160 68 19.5 72.5L252 160l-72.5 19.5L160 252l-19.5-72.5L68 160l72.5-19.5L160 68Z" />
              <circle className="header-emblem-dot" cx="160" cy="36" r="3" />
              <circle className="header-emblem-dot" cx="284" cy="160" r="3" />
            </svg>
          </div>
        </div>
      </MouseFollower>
    </header>
  );
}
