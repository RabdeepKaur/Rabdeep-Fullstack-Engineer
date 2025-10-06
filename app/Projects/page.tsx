"use client";

import Image from "next/image";
import lockme from "../assests/lockme.png";
import landingpage from "../assests/rejectMe.jpg";
import Link from "next/link";
import previous from "../assests/previous.png";
import { motion } from "framer-motion";

export default function Project() {
  const projects = [
    {
      src: previous,
      title: "Previous year question",
      link: "https://previousyearquestions-psi.vercel.app/",
      codelink: "https://github.com/RabdeepKaur/Proof-of-Work",
      description:
        "AI power SAAS platform where you upload question paper and notes and get length-to-marks perfect ratio answers.",
    },
    {
      src: landingpage,
      title: "RejectMe",
      link: "https://reject-me.vercel.app/",
      codelink: "https://github.com/RabdeepKaur/RejectMe",
      description:
        "AI website that generates personalized rejection emails for interview processes. Attracted 80+ visitors and ranked 36 on Peerlist.",
    },
    {
      src: lockme,
      title: "Lock me in",
      codelink: "https://github.com/RabdeepKaur/Lock-me-in",
      description:
        "Chrome extension that restricts browsing to a single website until timer ends. Gained 5+ active users.",
    },
  ];

  // Variants for animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen container items-center justify-center flex-col">
      <div className="flex md:mt-4 flex-col max-w-[768px] mx-auto p-5 lg:p-0">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl text-white mb-8 font-bold"
          >
            Projects
          </motion.h2>

  
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col space-y-6"
          >
            {projects.map((exp, index) => (
              <motion.div
                key={index}
               
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="group"
              >
                <div className="border hover:border-green-400 rounded-xl shadow-lg hover:shadow-xl hover:bg-black backdrop-blur-sm px-4 sm:px-6 py-5 sm:py-6 transition-all duration-300">
                  <h2 className="text-xl font-semibold text-gray-50 group-hover:text-white">
                    {exp.title}
                  </h2>

  
                  <div className="flex items-center gap-4">
                    <Image
                      src={exp.src}
                      alt={exp.title}
                      width={70}
                      height={70}
                      className="rounded-full mt-4"
                    />
                    <div>
                      <p className="text-gray-300 mt-4">{exp.description}</p>

                      <div className="flex flex-row mt-3 space-x-4">
                        {exp.link && (
                          <Link href={exp.link} target="_blank">
                            <button className="px-3 py-1.5 text-sm text-white font-semibold underline hover:text-blue-400 transition-colors">
                              Live link
                            </button>
                          </Link>
                        )}
                        {exp.codelink && (
                          <Link href={exp.codelink} target="_blank">
                            <button className="px-3 py-1.5 text-sm text-white font-semibold underline hover:text-blue-400 transition-colors">
                              Code
                            </button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
