"use client";

import { useState } from "react";
import { MouseFollower } from "./MouseFollower";
import { ContactModal } from "./ContactModal";
import type { ContactModalStrings } from "@/i18n/dictionaries";

interface FooterProps {
  label: string;
  mailtoHref: string;
  contactApiUrl?: string;
  strings: ContactModalStrings;
}

export function Footer({ label, mailtoHref, contactApiUrl, strings }: FooterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const useModal = Boolean(contactApiUrl);

  const linkClass =
    "group relative inline-block ml-auto text-lg font-bold text-white md:text-xl lg:text-2xl";
  const underline =
    "absolute -bottom-0.5 left-1/2 h-0.5 w-0 bg-white transition-all duration-300 group-hover:left-0 group-hover:w-full";

  return (
    <MouseFollower>
      <footer className="text-right pt-80 pb-8">
        {useModal ? (
          <button type="button" onClick={() => setIsOpen(true)} className={linkClass}>
            {label}
            <span className={underline} />
          </button>
        ) : (
          <a href={mailtoHref} className={linkClass}>
            {label}
            <span className={underline} />
          </a>
        )}
      </footer>
      {useModal && (
        <ContactModal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          apiUrl={contactApiUrl!}
          strings={strings}
        />
      )}
    </MouseFollower>
  );
}