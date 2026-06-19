import { portfolioData } from "@/data/portfolio";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { SectionHeading } from "@/components/SectionHeading";
import { JobEntry } from "@/components/JobEntry";
import { ProjectEntry } from "@/components/ProjectEntry";
import { Footer } from "@/components/Footer";
import { CompaniesMarquee } from "@/components/CompaniesMarquee";
import { ScrollReveal } from "@/components/ScrollReveal";
import { MouseFollower } from "@/components/MouseFollower";

export default function HomePage() {
  return (
    <>
      <Header />

      <div className="grid grid-cols-1 gap-12 md:grid-cols-[30%_1fr]">
        <Sidebar />
        <main className="space-y-16">
          <ScrollReveal>
            <MouseFollower>
              <section className="mb-20">
                <SectionHeading>Experience</SectionHeading>
                <div>
                  {portfolioData.experience.map((job, index) => (
                    <div key={index}>
                      <JobEntry job={job} />
                      {index < portfolioData.experience.length - 1 && (
                        <hr className="border-t border-gray-700" />
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </MouseFollower>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-20">
              <SectionHeading>Projects</SectionHeading>
              <div>
                {portfolioData.projects.map((project, index) => (
                  <div key={index}>
                    <ProjectEntry project={project} />
                    {index < portfolioData.projects.length - 1 && (
                      <hr className="border-t border-gray-700" />
                    )}
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <MouseFollower>
              <section className="mb-20">
                <h2 className="pt-7 pb-6 text-xs font-bold tracking-widest border-t border-divider">
                  Skills
                </h2>
                <div className="grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2 md:grid-cols-2">
                  {portfolioData.skills.map((category) => (
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
            </MouseFollower>
          </ScrollReveal>

          <ScrollReveal>
            <section className="mb-20">
              <h2 className="pt-7 pb-10 text-xs font-bold tracking-widest border-t border-divider">
                Education
              </h2>
              <div>
                {portfolioData.education.map((edu, index) => (
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
                    Companies
                  </h2>
                  <CompaniesMarquee />
                </div>

                <div>
                  <h2 className="pt-5 pb-8 text-xs font-bold tracking-widest border-t border-divider">
                    Certifications
                  </h2>
                  <ul className="space-y-1.5">
                    {portfolioData.certifications.map((cert) => (
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
      </div>

      <MouseFollower>
        <Footer />
      </MouseFollower>
    </>
  );
}
