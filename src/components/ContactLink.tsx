interface ContactLinkProps {
  label: string;
  href: string;
}

export function ContactLink({ label, href }: ContactLinkProps) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group border-t border-divider p-2 m inline-flex items-center gap-1 text-xs text-white transition-colors hover:text-gray-300"
    >
      <span className="relative">
        {label}
        <span className="absolute -bottom-0.5 left-1/2 h-px w-0 bg-current transition-all duration-300 group-hover:left-0 group-hover:w-full" />
      </span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}