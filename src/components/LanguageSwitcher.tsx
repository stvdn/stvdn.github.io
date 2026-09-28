"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
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

  return (
    <div className="flex items-center gap-2 border-l border-divider pl-4" aria-label="Language">
      <Globe size={15} strokeWidth={1.7} className="shrink-0 text-gray-400" aria-hidden="true" />
      <Link
        href={getAlternatePath(pathname, "en")}
        aria-label="Switch to English"
        aria-current={current === "en" ? "page" : undefined}
        className={`text-xs font-medium transition-colors ${
          current === "en"
            ? "text-white"
            : "text-gray-500 hover:text-white"
        }`}
      >
        {dictionary.language.en}
      </Link>
      <Link
        href={getAlternatePath(pathname, "es")}
        aria-label="Switch to Spanish"
        aria-current={current === "es" ? "page" : undefined}
        className={`text-xs font-medium transition-colors ${
          current === "es"
            ? "text-white"
            : "text-gray-500 hover:text-white"
        }`}
      >
        {dictionary.language.es}
      </Link>
    </div>
  );
}
