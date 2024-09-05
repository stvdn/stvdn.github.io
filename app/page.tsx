import { Header } from "./ui/Header";
import { About } from "./ui/About";
import { Experience } from "./ui/Experience";
import { Archivement } from "./ui/Archivement";

export default function Page() {
  return (
    <div className="grid grid-cols-1 justify-items-center w-100 text-neutral-50 text-lg text-justify	">
      <Header />
      <div className="h-px w-full bg-neutral-600"></div>
      <About />
      <Experience />
      <Archivement />
    </div>
  );
}
