import { MouseFollower } from "./MouseFollower";

export function Footer() {
  return (
    <MouseFollower>
    <footer className="text-right pt-80 pb-8">
      <h2 className="group relative inline-block ml-auto text-lg font-bold text-white md:text-xl lg:text-2xl">
        Contact me
        <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-0 bg-white transition-all duration-300 group-hover:left-0 group-hover:w-full" />
      </h2>
    </footer>
    </MouseFollower>
  );
}