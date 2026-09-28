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

  const linkClass = "footer-contact-link";

  return (
    <MouseFollower>
      <footer className="site-footer">
        {useModal ? (
          <button type="button" onClick={() => setIsOpen(true)} className={linkClass}>
            {label}
          </button>
        ) : (
          <a href={mailtoHref} className={linkClass}>
            {label}
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
