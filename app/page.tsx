import { Header } from "./Header";
import { About } from "./About";
import { Experience } from "./Experience";
import { Archivement } from "./Archivement";
import { Footer } from "./Footer";

export default function Page() {
  return (
    <div className="grid grid-cols-1 justify-items-center w-100 text-neutral-50 text-md md:text-lg text-justify w-full">
      <Header />
      <div className="h-px w-full bg-neutral-600"></div>
      <About />
      <Experience />
      <Archivement />
      <Footer />
    </div>
  );
}
