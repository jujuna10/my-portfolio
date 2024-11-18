import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Introduction from "@/components/Introduction";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import ProjectsList from "@/components/ProjectsList";
import Tecnologie from "@/components/Tecnologie";
import Tools from "@/components/Tools";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[100%] md:w-[90%] flex flex-col gap-20 justify-center items-center overflow-hidden">
      <Navbar />
      <Introduction />
      <Tecnologie />
      <Projects />
      <Education />
      <Tools />
      <ProjectsList />
      <Contact />
    </div>
  );
}
