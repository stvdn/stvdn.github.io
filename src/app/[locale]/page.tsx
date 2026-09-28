import { getDictionary } from "@/i18n/dictionaries";
import { getPortfolioData } from "@/data/portfolio";
import { isLocale, type Locale } from "@/i18n/config";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { SectionHeading } from "@/components/SectionHeading";
import { JobEntry } from "@/components/JobEntry";
import { ProjectEntry } from "@/components/ProjectEntry";
import { Footer } from "@/components/Footer";
import { TechStackMarquee } from "@/components/TechStackMarquee";
import { techStack } from "@/data/tech-stack";
import { MouseFollower } from "@/components/MouseFollower";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) return null;

  const typedLocale: Locale = locale;
  const dictionary = getDictionary(typedLocale);
  const portfolio = getPortfolioData(typedLocale);

  return (
    <>
      <Header
        name={portfolio.name}
        role={portfolio.role}
        roleAlternatives={portfolio.roleAlternatives}
        locale={typedLocale}
        dictionary={dictionary}
        navLink={{ href: `/${typedLocale}/blog`, label: dictionary.nav.blog }}
        sectionLinks={[
          { href: "#projects", label: dictionary.sections.projects },
          { href: "#experience", label: dictionary.sections.experience },
        ]}
      />

      <div className="portfolio-grid">
        <Sidebar portfolio={portfolio} />
        <MouseFollower>
          <main className="portfolio-main">
            <section id="projects" className="portfolio-section scroll-mt-8">
              <SectionHeading>{dictionary.sections.projects}</SectionHeading>
              <div className="project-list">
                {portfolio.projects.map((project) => (
                  <ProjectEntry key={project.title} project={project} />
                ))}
              </div>
            </section>

            <section id="experience" className="portfolio-section scroll-mt-8">
              <SectionHeading>{dictionary.sections.experience}</SectionHeading>
              <div className="experience-list">
                {portfolio.experience.map((job) => (
                  <JobEntry key={`${job.company}-${job.dateRange}`} job={job} />
                ))}
              </div>
            </section>

            <section className="portfolio-section">
              <SectionHeading>{dictionary.sections.skills}</SectionHeading>
              <div className="skills-grid">
                {portfolio.skills.map((category) => (
                  <div key={category.title} className="skill-group">
                    <h3>{category.title}</h3>
                    <ul>
                      {category.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="portfolio-section">
              <SectionHeading>{dictionary.sections.education}</SectionHeading>
              <div className="education-list">
                {portfolio.education.map((edu) => (
                  <div key={edu.university} className="education-entry">
                    <div>
                      <h3>{edu.university}</h3>
                      {edu.dateRange && <p className="education-date">{edu.dateRange}</p>}
                    </div>
                    <div>
                      <p>{edu.degree}</p>
                      {edu.minor && <p className="education-date">{edu.minor}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="closing-grid">
              <section className="portfolio-section">
                <SectionHeading>{dictionary.sections.techStack}</SectionHeading>
                <TechStackMarquee technologies={techStack} />
              </section>
              <section className="portfolio-section">
                <SectionHeading>{dictionary.sections.certifications}</SectionHeading>
                <ul className="certification-list">
                  {portfolio.certifications.map((cert) => (
                    <li key={cert}>{cert}</li>
                  ))}
                </ul>
              </section>
            </div>
          </main>
        </MouseFollower>
      </div>

      <Footer
        label={dictionary.footer.contact}
        mailtoHref={portfolio.contactLinks.find((c) => c.href.startsWith("mailto:"))?.href ?? "#"}
        contactApiUrl={process.env.NEXT_PUBLIC_CONTACT_API_URL}
        strings={dictionary.contact}
      />
    </>
  );
}
