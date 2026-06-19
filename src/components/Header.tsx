import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { MouseFollower } from "@/components/MouseFollower";
import { StaggerReveal } from "@/components/StaggerReveal";

export function Header() {
  return (
    <header>
      <MouseFollower>
        <div className="flex items-start justify-between mb-12 md:pb-27">
          <div>
            <StaggerReveal index={0}>
              <h1 className="text-link text-lg md:text-xl lg:text-2xl">
                {portfolioData.name},
              </h1>
            </StaggerReveal>
            <StaggerReveal index={1}>
              <p className="text-gray-400 font-light text-link text-lg md:text-xl lg:text-2xl">
                {portfolioData.role}
              </p>
            </StaggerReveal>
          </div>
          <StaggerReveal index={2}>
            <Link
              href="/about"
              className="group relative text-link text-lg md:text-xl lg:text-2xl"
            >
              About
              <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-0 bg-white transition-all duration-300 group-hover:left-0 group-hover:w-full" />
            </Link>
          </StaggerReveal>
        </div>
      </MouseFollower>
    </header>
  );
}
