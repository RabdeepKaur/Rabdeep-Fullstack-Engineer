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
<div className="min-h-screen container items-center justify-center flex-col">
  <div className="flex md:mt-4 flex-col max-w-[768px] mx-auto p-5 lg:p-0">
    <div className="container">
  <h2 className="text-2xl text-white mt-5 mb-5">Skills</h2>

  <section className="flex flex-col space-y-6">
    <FaReact title="React" className="hover:text-cyan-400 transition" />
    <SiNextdotjs title="Next.js" className="hover:text-gray-300 transition" />
    <SiExpress title="Express" className="hover:text-gray-400 transition" />
    <GrMysql title="MySQL" className="hover:text-blue-400 transition" />
    <SiPostgresql title="PostgreSQL" className="hover:text-sky-500 transition" />
    <IoLogoJavascript title="JavaScript" className="hover:text-yellow-400 transition" />
    <SiTypescript title="TypeScript" className="hover:text-blue-400 transition" />
    <IoLogoNodejs title="Node.js" className="hover:text-green-400 transition" />
    <DiMongodb title="MongoDB" className="hover:text-green-500 transition" />
    <SiPrisma title="Prisma" className="hover:text-indigo-400 transition" />
    <FaPython title="Python" className="hover:text-yellow-300 transition" />
    <SiLangchain title="Langchain" className="hover:text-purple-400 transition" />
    <SiDjango title="Django" className="hover:text-green-400 transition" />
    <RiTailwindCssFill title="Tailwind CSS" className="hover:text-sky-400 transition" />
    <FaAws title="AWS" className="hover:text-orange-400 transition" />
    <FaDocker title="Docker" className="hover:text-blue-500 transition" />
    <SiShadcnui title="Shadcn UI" className="hover:text-pink-400 transition" />
    <SiZod title="Zod" className="hover:text-red-400 transition" />
    <TbBrandFramerMotion title="Framer Motion" className="hover:text-pink-500 transition" />
    <TbBrandThreejs title="Three.js" className="hover:text-gray-200 transition" />
  </section>
  </div>
  </div>
</div>
   
  );
}

