"use client";

import { useRef, useState } from "react";
import type { Project as ProjectType } from "@/data/portfolio";

interface ProjectEntryProps {
  project: ProjectType;
}

export function ProjectEntry({ project }: ProjectEntryProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;
    setTransform(
      `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
    );
  }

  function handleMouseLeave() {
    setTransform("perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)");
  }

  return (
    <div
      ref={cardRef}
      className="grid grid-cols-1 gap-4 my-4 md:grid-cols-[1fr_1.5fr] rounded-lg p-4 -m-4 transition-shadow duration-300 hover:shadow-lg hover:shadow-white/5"
      style={{
        transform,
        transition: transform
          ? "transform 0.15s ease-out"
          : "transform 0.4s ease-out",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="space-y-2">
        <h3 className="text-base font-bold text-white">{project.title}</h3>
        {project.techTags && (
          <div className="flex flex-wrap gap-1.5">
            {project.techTags.map((tag) => (
              <span
                key={tag}
                className="border border-gray-700 px-2 py-0.5 text-xs text-gray-500 rounded"
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