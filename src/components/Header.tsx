import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export function Header() {
  return (
    <header>
      <div className="flex items-start justify-between mb-12 md:pb-32">
        <div>
          <h1 className="text-link font-bold text-xl md:text-2xl lg:text-3xl">
            {portfolioData.name},
          </h1>
          <p className="text-gray-400 text-link text-lg md:text-xl lg:text-2xl">
            {portfolioData.role}
          </p>
        </div>
        <Link
          href="/about"
          className="text-link font-bold text-xl md:text-2xl lg:text-3xl"
        >
          About
        </Link>
      </div>
    </header>
  );
}
