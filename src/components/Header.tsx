import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export function Header() {
  return (
    <header className="flex items-start justify-between pb-8 pt-2 md:py-0">
      <div>
        <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          {portfolioData.name},
        </h1>
        <p className="mt-1 text-lg text-gray-400 md:text-xl lg:text-2xl">
          {portfolioData.role}
        </p>
      </div>
      <Link
        href="/about"
        className="text-white hover:underline mt-2 text-sm md:text-base"
      >
        About
      </Link>
    </header>
  );
}