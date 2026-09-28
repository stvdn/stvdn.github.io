import { ArrowUpRight, GitBranch } from "lucide-react";
import type { Project as ProjectType } from "@/data/portfolio";

interface ProjectEntryProps {
  project: ProjectType;
}

export function ProjectEntry({ project }: ProjectEntryProps) {
  return (
    <article className="project-entry">
      <div className="project-details">
        <h3>{project.title}</h3>
        {project.links && project.links.length > 0 && (
          <div className="project-links">
            {project.links.map((link) => {
              const Icon = link.kind === "code" ? GitBranch : ArrowUpRight;
              return (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                  <span>{link.label}</span>
                  <Icon size={15} strokeWidth={1.7} aria-hidden="true" />
                </a>
              );
            })}
          </div>
        )}
      </div>
      <div className="project-content">
        <p>{project.description}</p>
        {project.techTags && (
          <ul className="project-tags" aria-label="Technologies">
            {project.techTags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
        )}
      </div>
    </article>
  );
}
