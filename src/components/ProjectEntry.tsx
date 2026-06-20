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
      </div>
      <p className="text-sm text-gray-300">{project.description}</p>
    </div>
  );
}