import { getDictionary } from "@/i18n/dictionaries";
import { getPortfolioData } from "@/data/portfolio";
import { isLocale, type Locale } from "@/i18n/config";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { SectionHeading } from "@/components/SectionHeading";
import { JobEntry } from "@/components/JobEntry";
import { ProjectEntry } from "@/components/ProjectEntry";
import { Footer } from "@/components/Footer";
import { CompaniesMarquee } from "@/components/CompaniesMarquee";
import { ScrollReveal } from "@/components/ScrollReveal";
import { MouseFollower } from "@/components/MouseFollower";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return null;
  }
  const typedLocale: Locale = locale;
  const dictionary = getDictionary(typedLocale);
  const portfolio = getPortfolioData(typedLocale);

  return (
    <>
      <Header
        name={portfolio.name}
        role={portfolio.role}
        locale={typedLocale}
        dictionary={dictionary}
        navLink={{ href: `/${typedLocale}/blog`, label: dictionary.nav.blog }}
      />

      <div className="grid grid-cols-1 gap-12 md:grid-cols-[30%_1fr]">
        <Sidebar portfolio={portfolio} />
        <MouseFollower>
          <main className="space-y-16">
            <ScrollReveal>
              <section className="mb-20">
                <SectionHeading>{dictionary.sections.experience}</SectionHeading>
                <div>
                  {portfolio.experience.map((job, index) => (
                    <div key={index}>
                      <JobEntry job={job} />
                      {index < portfolio.experience.length - 1 && (
                        <hr className="border-t border-gray-700" />
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section className="mb-20">
                <SectionHeading>{dictionary.sections.projects}</SectionHeading>
                <div>
                  {portfolio.projects.map((project, index) => (
                    <div key={index}>
                      <ProjectEntry project={project} />
                      {index < portfolio.projects.length - 1 && (
                        <hr className="border-t border-gray-700" />
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section className="mb-20">
                <h2 className="pt-7 pb-6 text-xs font-bold tracking-widest border-t border-divider">
                  {dictionary.sections.skills}
                </h2>
                <div className="grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2 md:grid-cols-2">
                  {portfolio.skills.map((category) => (
                    <div key={category.title} className="mt-4">
                      <h3 className="mb-3 text-sm font-bold text-white">
                        {category.title}
                      </h3>
                      <ul className="space-y-1.5 list-disc ml-5 mt-4">
                        {category.skills.map((skill) => (
                          <li key={skill} className="text-sm text-gray-400">
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section className="mb-20">
                <h2 className="pt-7 pb-10 text-xs font-bold tracking-widest border-t border-divider">
                  {dictionary.sections.education}
                </h2>
                <div>
                  {portfolio.education.map((edu, index) => (
                    <div key={index}>
                      <div className="grid grid-cols-1 gap-1 space-y-8 md:grid-cols-2">
                        <div>
                          <p className="text-sm font-bold text-white">
                            {edu.university}
                          </p>
                          {edu.dateRange && (
                            <p className="text-sm text-gray-500">{edu.dateRange}</p>
                          )}
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">{edu.degree}</p>
                          {edu.minor && (
                            <p className="text-sm text-gray-500">{edu.minor}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section className="mb-18">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                  <div>
                    <h2 className="pt-5 pb-8 text-xs font-bold tracking-widest border-t border-divider">
                      {dictionary.sections.companies}
                    </h2>
                    <CompaniesMarquee companies={portfolio.companies} />
                  </div>

                  <div>
                    <h2 className="pt-5 pb-8 text-xs font-bold tracking-widest border-t border-divider">
                      {dictionary.sections.certifications}
                    </h2>
                    <ul className="space-y-1.5">
                      {portfolio.certifications.map((cert) => (
                        <li key={cert} className="text-sm text-gray-400">
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            <hr className="border-t border-gray-700" />
          </main>
        </MouseFollower>
      </div>

      <Footer
        label={dictionary.footer.contact}
        mailtoHref={portfolio.contactLinks.find((c) => c.href.startsWith("mailto:"))?.href ?? "#"}
      />
    </>
  );
}