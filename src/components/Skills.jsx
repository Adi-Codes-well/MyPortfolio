import React from "react";
import LogoLoop from "../ui/LogoLoop";
import { SiReact, SiNextdotjs, SiJavascript, SiTailwindcss  } from "react-icons/si";
import { FaNode, FaHtml5  } from "react-icons/fa";

const techLogos = [
  { node: <FaHtml5 size={40} />, title: "React", href: "https://react.dev" },
  { node: <SiTailwindcss size={40} />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiJavascript size={40} />, title: "JavaScript", href: "https://www.typescriptlang.org" },
  { node: <SiReact size={40} />, title: "React", href: "https://react.dev" },
  { node: <FaNode size={40} />, title: "Node.js", href: "https://nodejs.org" },

];

const Skills = () => {
  return (
    <section className="py-20 bg-[#0b0b0b] text-white flex flex-col items-center">
      {/* <h2 className="text-3xl font-bold mb-10">Technologies I Use</h2> */}

      <div className="w-full max-w-5xl h-[120px] relative overflow-hidden">
        <LogoLoop
          logos={techLogos}
          speed={100}
          direction="left"
          logoHeight={50}
          gap={50}
          pauseOnHover
          scaleOnHover
          ariaLabel="Technology stack logos"
        />
      </div>
    </section>
  );
};

export default Skills;
