import { portfolioData } from "@/data/portfolio";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { SectionHeading } from "@/components/SectionHeading";
import { JobEntry } from "@/components/JobEntry";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />

      <div className="grid grid-cols-1 gap-10 md:grid-cols-[30%_1fr]">
        <Sidebar />

        <main className="space-y-16">
          {/* Experience Section */}
          <section>
            <SectionHeading>Experience</SectionHeading>
            <div className="space-y-8">
              {portfolioData.experience.map((job, index) => (
                <div key={index}>
                  <JobEntry job={job} />
                  {index < portfolioData.experience.length - 1 && (
                    <hr className="my-8 border-t border-gray-700" />
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <SectionHeading>Skills</SectionHeading>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {portfolioData.skills.map((category) => (
                <div key={category.title}>
                  <h3 className="mb-3 text-sm font-bold text-white">
                    {category.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-sm text-gray-400"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section>
            <SectionHeading>Education</SectionHeading>
            <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
              <p className="text-sm font-bold text-white">
                {portfolioData.education.university}
              </p>
              <p className="text-sm text-gray-400">
                {portfolioData.education.degree}
              </p>
            </div>
          </section>

          {/* Recommendations & Certifications Section */}
          <section>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              {/* Recommendations */}
              <div>
                <SectionHeading>Recommendations</SectionHeading>
                <div className="space-y-6">
                  {portfolioData.recommendations.map((rec, index) => (
                    <blockquote key={index} className="space-y-2">
                      <p className="text-sm italic leading-relaxed text-gray-300">
                        &ldquo;{rec.quote}&rdquo;
                      </p>
                      <footer className="text-xs text-gray-500">
                        — {rec.attribution}
                      </footer>
                    </blockquote>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <SectionHeading>Certifications</SectionHeading>
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
        </main>
      </div>

      <Footer />
    </>
  );
}