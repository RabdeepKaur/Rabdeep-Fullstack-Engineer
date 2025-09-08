import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiPostgresql, SiTypescript } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { FaPython } from "react-icons/fa6";
import { SiDjango } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaAws } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiShadcnui } from "react-icons/si";
import { SiZod } from "react-icons/si";
import { SiLangchain } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiPrisma } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";

export default function ContactMe() {
  return (
    <div className="flex flex-col items-center justify-center text-white">
      <h1 className="text-white font-bold text-5xl text-center mb-16">Impressive things about me </h1>

      {/* Wrapper for side-by-side */}
      <div className="flex flex-row gap-8 items-start justify-center flex-wrap">
        {/* Achievements Section */}
        <section className="flex flex-col items-center justify-center w-[350px] text-lg backdrop-blur-lg bg-black rounded-xl shadow-lg py-6 px-4 space-y-3">
          <h2 className="text-2xl text-purple-500 mb-4">Achievements</h2>
          <p>📖 Read a 400-page book in one sitting (I love reading books)</p>
          <p>🏆Winner – Girls’ Category at HackByte Hackathon Conducted by IIITDM and Major League Hacking (MLH).</p>
          <p>🎯 Smart India Hackathon 2024 Finalist Selected among the top 6 teams under the Ministry of Postal and
Transportation problem statement</p>
          <p>🌟 SheFi Scholar</p>
        </section>

        {/* Skills Section */}
        <section className="flex flex-col items-center justify-center w-[350px] text-lg backdrop-blur-lg bg-black rounded-xl shadow-lg py-6 px-4">
          <h2 className="text-2xl mb-4 text-green-400">Skills</h2>
          <div className="grid grid-cols-4 gap-6 text-4xl">
            <FaReact title="React" className="text-blue-500" />
            <SiNextdotjs title="Next.js" className="text-white" />
            <SiExpress title="Express" className="text-gray-400" />
            <GrMysql title="MySQL" className="text-blue-300" />
            <SiPostgresql title="PostgreSQL" className="text-sky-500" />
            <IoLogoJavascript title="JavaScript" className="text-yellow-400" />
            <SiTypescript title="TypeScript" className="text-blue-400" />
            <IoLogoNodejs title="Node.js" className="text-green-500" />
            <DiMongodb title="MongoDB" className="text-green-400" />
            <SiPrisma  title="prisma" className="text-cyan-200"/>
            <FaPython  title="python" className="text-amber-400"/>
            <SiLangchain  title ="Langchain" className="text-orange-400"/>
            <SiDjango  title="Django" className="text-green-300"/>
            <RiTailwindCssFill  title="tailwindcss" className="text-blue-700"/>
            <FaAws  title="AWS" className="text-purple-400"/>
            <FaDocker  title="Docker" className="text-red-400"/>
            <SiShadcnui  title="Shadcnui" className="text-pink-400"/>
            <SiZod title="Zod" className="text-green-700" />
            <TbBrandFramerMotion title="Motion" className="text-cyan-400" />
            <TbBrandThreejs title="Threejs" className="text-lime-400" />

          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-white text-black mt-8  w-full">
        <p className="text-center font-bold ">
          Made with procrastination and to showcase my fascination with cosmos,
          aurora lights, puzzles, and weird shapes.
        </p>
      </footer>
    </div>
  );
}

