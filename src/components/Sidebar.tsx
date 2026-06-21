import type { PortfolioData } from "@/data/portfolio";
import { ContactLink } from "./ContactLink";

interface SidebarProps {
  portfolio: PortfolioData;
}

export function Sidebar({ portfolio }: SidebarProps) {
  return (
    <aside className="pt-8 border-t-1 border-divider md:sticky md:top-4 md:self-start">
      <p className="text-paragraph text-sm md:text-base md:px-2 md:pr-16">
        {portfolio.bio}
      </p>
      <div className="mt-18 flex flex-col gap-2">
        {portfolio.contactLinks.map((link) => (
          <ContactLink key={link.label} label={link.label} href={link.href} />
        ))}
      </div>
    </aside>
  );
}