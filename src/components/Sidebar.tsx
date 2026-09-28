import type { PortfolioData } from "@/data/portfolio";
import { ContactLink } from "./ContactLink";

interface SidebarProps {
  portfolio: PortfolioData;
}

export function Sidebar({ portfolio }: SidebarProps) {
  return (
    <aside className="portfolio-aside">
      <p className="portfolio-bio">
        {portfolio.bio}
      </p>
      <div className="contact-list">
        {portfolio.contactLinks.map((link) => (
          <ContactLink key={link.label} label={link.label} href={link.href} copyValue={link.copyValue} />
        ))}
      </div>
    </aside>
  );
}
