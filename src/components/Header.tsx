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
          <div className="header-workstation" aria-hidden="true">
            <svg viewBox="0 0 320 320" fill="none">
              <rect className="header-workstation-frame" x="31" y="35" width="258" height="183" rx="3" />
              <path className="header-workstation-frame" d="M31 62h258M31 198h258M143 218v28m34-28v28m-62 1h90" />
              <circle className="header-workstation-detail" cx="45" cy="49" r="2" />
              <circle className="header-workstation-detail" cx="56" cy="49" r="2" />
              <circle className="header-workstation-detail" cx="67" cy="49" r="2" />
              <path className="header-workstation-code" d="m62 94 9 8-9 8m19 0h18" />
              <path className="header-workstation-detail" d="M62 130h61m10 0h31M62 150h25m10 0h89M62 170h48m10 0h28" />
              <path className="header-workstation-frame" d="M47 263h226l17 29H30l17-29Z" />
              <path className="header-workstation-detail" d="M51 273h218M43 283h234m-207-20-4 29m43-29-2 29m43-29v29m44-29 2 29m41-29 5 29" />
            </svg>
          </div>
        </div>
      </MouseFollower>
    </header>
  );
}
