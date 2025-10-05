import { FaReact, FaPython, FaAws, FaDocker } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiPostgresql, SiTypescript, SiPrisma, SiLangchain, SiZod } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { IoLogoJavascript, IoLogoNodejs } from 'react-icons/io5';
import { SiFastapi } from "react-icons/si";
import { RiTailwindCssFill } from 'react-icons/ri';
import { TbBrandFramerMotion, TbBrandThreejs } from 'react-icons/tb';

export default function Skills() {
  const skills = [
    { Icon: FaReact, title: "React", hoverColor: "hover:text-cyan-400" },
    { Icon: SiNextdotjs, title: "Next.js", hoverColor: "hover:text-gray-300" },
    { Icon: SiExpress, title: "Express", hoverColor: "hover:text-gray-400" },
    { Icon: GrMysql, title: "MySQL", hoverColor: "hover:text-blue-400" },
    { Icon: SiPostgresql, title: "PostgreSQL", hoverColor: "hover:text-sky-500" },
    { Icon: IoLogoJavascript, title: "JavaScript", hoverColor: "hover:text-yellow-400" },
    { Icon: SiTypescript, title: "TypeScript", hoverColor: "hover:text-blue-400" },
    { Icon: IoLogoNodejs, title: "Node.js", hoverColor: "hover:text-green-400" },
    { Icon: SiFastapi , title: "FastApi", hoverColor: "hover:text-green-500" },
    { Icon: SiPrisma, title: "Prisma", hoverColor: "hover:text-indigo-400" },
    { Icon: FaPython, title: "Python", hoverColor: "hover:text-yellow-300" },
    { Icon: SiLangchain, title: "Langchain", hoverColor: "hover:text-purple-400" },
    { Icon: RiTailwindCssFill, title: "Tailwind CSS", hoverColor: "hover:text-sky-400" },
    { Icon: FaAws, title: "AWS", hoverColor: "hover:text-orange-400" },
    { Icon: FaDocker, title: "Docker", hoverColor: "hover:text-blue-500" },
    { Icon: SiZod, title: "Zod", hoverColor: "hover:text-red-400" },
    { Icon: TbBrandFramerMotion, title: "Framer Motion", hoverColor: "hover:text-pink-500" },
    { Icon: TbBrandThreejs, title: "Three.js", hoverColor: "hover:text-gray-200" },
  ];

  return (
    <div className=" container flex items-center justify-center">
      <div className="w-full max-w-[768px] mx-auto px-4 sm:px-5 lg:px-0 py-8">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-white mb-6 sm:mb-8 font-bold">
            Skills
          </h2>

          <section className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center group cursor-pointer"
              >
                <skill.Icon
                  title={skill.title}
                  className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white transition-all duration-300 transform group-hover:scale-110 ${skill.hoverColor}`}
                />
                <span className="text-xs sm:text-sm text-gray-400 mt-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {skill.title}
                </span>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}