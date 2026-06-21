"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

function getAlternatePath(pathname: string, target: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && (locales as readonly string[]).includes(segments[0])) {
    segments[0] = target;
  } else {
    segments.unshift(target);
  }
  return "/" + segments.join("/");
}

export function LanguageSwitcher({
  current,
  dictionary,
}: {
  current: Locale;
  dictionary: Dictionary;
}) {
  const pathname = usePathname();
  const target: Locale = current === "en" ? "es" : "en";

  return (
    <Link
      href={getAlternatePath(pathname, target)}
      className="group relative text-link text-lg md:text-xl lg:text-2xl"
      aria-label={`Switch to ${target === "en" ? "English" : "Spanish"}`}
    >
      <span className="text-white">{dictionary.language[current]}</span>
      <span className="text-gray-500 mx-1">/</span>
      <span className="text-gray-500 group-hover:text-white transition-colors">
        {dictionary.language[target]}
      </span>
    </Link>
  );
}