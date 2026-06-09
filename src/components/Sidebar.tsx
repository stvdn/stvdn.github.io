import { portfolioData } from "@/data/portfolio";
import { ContactLink } from "./ContactLink";

export function Sidebar() {
  return (
    <aside className="mb-10 md:mb-0 md:sticky md:top-8 md:self-start">
      <p className="text-sm leading-relaxed text-white md:text-base">
        {portfolioData.bio}
      </p>
      <hr className="my-6 border-t border-gray-700" />
      <div className="flex flex-col gap-2">
        {portfolioData.contactLinks.map((link) => (
          <ContactLink key={link.label} label={link.label} href={link.href} />
        ))}
      </div>
    </aside>
  );
}