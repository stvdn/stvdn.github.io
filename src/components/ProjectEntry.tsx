import { GitBranch, Globe } from "lucide-react";
import type { Project as ProjectType } from "@/data/portfolio";

interface ProjectEntryProps {
  project: ProjectType;
}

export function ProjectEntry({ project }: ProjectEntryProps) {
  return (
    <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-[1fr_1.5fr] rounded-sm border-2 border-transparent p-4 -m-4 transition-all duration-150 hover:border-white hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_rgba(255,255,255,0.25)]">
      <div className="space-y-2">
        <h3 className="text-base font-bold text-white">{project.title}</h3>
        {project.techTags && (
          <div className="flex flex-wrap gap-1.5">
            {project.techTags.map((tag) => (
              <span
                key={tag}
                className="border-2 border-gray-700 px-2 py-0.5 text-xs text-gray-400 rounded-none"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-1">
            {project.links.map((link) => {
              const Icon = link.kind === "code" ? GitBranch : Globe;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1.5 text-xs text-gray-300 transition-colors hover:text-white"
                >
                  <Icon size={14} className="shrink-0" aria-hidden="true" />
                  <span className="relative">
                    {link.label}
                    <span className="absolute -bottom-0.5 left-1/2 h-px w-0 bg-current transition-all duration-300 group-hover/link:left-0 group-hover/link:w-full" />
                  </span>
                </a>
              );
            })}
          </div>
        )}
      </div>
      <p className="text-sm text-gray-300">{project.description}</p>
    </div>
  );
}