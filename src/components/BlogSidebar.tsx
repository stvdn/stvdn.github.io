import type { PortfolioData } from "@/data/portfolio";
import { ContactLink } from "./ContactLink";

interface BlogSidebarProps {
  portfolio: PortfolioData;
}

export function BlogSidebar({ portfolio }: BlogSidebarProps) {
  return (
    <aside className="md:sticky md:top-4 md:self-start">
      <div className="flex flex-col gap-2">
        {portfolio.contactLinks.map((link) => (
          <ContactLink key={link.label} label={link.label} href={link.href} />
        ))}
      </div>
    </aside>
  );
}