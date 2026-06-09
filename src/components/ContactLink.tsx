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
      className="inline-flex items-center gap-1 text-sm text-white transition-colors hover:text-gray-300"
    >
      {label}
      <span aria-hidden="true">↗</span>
    </a>
  );
}