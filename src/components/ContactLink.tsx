"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Clipboard, ClipboardCheck } from "lucide-react";

interface ContactLinkProps {
  label: string;
  href: string;
  copyValue?: string;
}

export function ContactLink({ label, href, copyValue }: ContactLinkProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(
    async (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (!copyValue) return;
      try {
        await navigator.clipboard.writeText(copyValue);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      } catch {
        /* clipboard unavailable; no-op */
      }
    },
    [copyValue],
  );

  const isExternal = href.startsWith("http");

  return (
    <div className="contact-row">
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="contact-row-link"
      >
        {label}
      </a>
      {copyValue && (
        <button
          type="button"
          onClick={handleCopy}
          aria-label={`${copied ? "Copied" : "Copy"} ${label}`}
          className="contact-copy"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={copied ? "copied" : "clipboard"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              aria-hidden="true"
              className="inline-flex"
            >
              {copied ? <ClipboardCheck size={16} /> : <Clipboard size={16} />}
            </motion.span>
          </AnimatePresence>
        </button>
      )}
      <span className="sr-only" aria-live="polite">{copied ? `${label} copied` : ""}</span>
    </div>
  );
}
