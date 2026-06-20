import { portfolioData } from "@/data/portfolio";
import { ContactLink } from "./ContactLink";

export function BlogSidebar() {
  return (
    <aside className="md:sticky md:top-4 md:self-start">
      <div className="flex flex-col gap-2">
        {portfolioData.contactLinks.map((link) => (
          <ContactLink key={link.label} label={link.label} href={link.href} />
        ))}
      </div>
    </aside>
  );
}