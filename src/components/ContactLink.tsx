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
    <div className="group border-t border-divider px-2 py-4 m inline-flex items-center gap-1 text-xs text-white transition-colors hover:text-gray-300">
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        <span className="relative">
          {label}
          <span className="absolute -bottom-0.5 left-1/2 h-px w-0 bg-current transition-all duration-300 group-hover:left-0 group-hover:w-full" />
        </span>
      </a>
      <button
        type="button"
        onClick={handleCopy}
        disabled={!copyValue}
        aria-label={`Copy ${copyValue ?? label}`}
        className="inline-flex h-3.5 w-3.5 items-center justify-center text-white/80 transition-colors hover:text-white disabled:cursor-default disabled:opacity-30"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={copied ? "copied" : "clipboard"}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            aria-hidden="true"
            className="inline-flex"
          >
            {copied ? <ClipboardCheck size={14} /> : <Clipboard size={14} />}
          </motion.span>
        </AnimatePresence>
      </button>
    </div>
  );
}