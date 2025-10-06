"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaCircle } from "react-icons/fa";
import { BiSpreadsheet } from "react-icons/bi";
import Link from "next/link";
import { FlipWords } from "../Components/flipword";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center  text-white">
      <div className="max-w-3xl w-full text-center px-6 sm:px-8">
        
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 hover:text-amber-300 transition-colors duration-300"
        >
          Rabdeep Kaur Badwal
        </motion.h1>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 text-2xl mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Link href="https://github.com/RabdeepKaur" target="_blank">
            <FaGithub className="hover:text-green-500 transition-colors duration-300" />
          </Link>
          <Link href="https://www.linkedin.com/in/rabdeep-kaur-35a26925b" target="_blank">
            <FaLinkedin className="hover:text-blue-600 transition-colors duration-300" />
          </Link>
          <Link href="https://x.com/Rabdeep790" target="_blank">
            <FaTwitter className="hover:text-pink-400 transition-colors duration-300" />
          </Link>
          <Link
            href="https://drive.google.com/file/d/13ukFWvqedAB_Fuqw7u9SHLcL42qoQOFc/view?usp=sharing"
            target="_blank"
          >
            <BiSpreadsheet className="hover:text-red-500 transition-colors duration-300" />
          </Link>
        </motion.div>

        {/* Intro */}
        <motion.p
          className="text-lg sm:text-xl text-slate-200 leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          I am a Full-Stack Engineer who loves building
          <span className="px-2 font-semibold text-white">
            <FlipWords
              words={["Backends", "Frontends", "Websites", "Digital Marketing"]}
              className="text-green-300 font-serif"
            />
          </span>
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-2 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          <FaCircle className="text-green-500 text-xs animate-pulse" />
          <span className="text-sm font-medium">Open for Opportunities</span>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
        <div className="mt-8 flex justify-center gap-4">
  {/* Hire Me Button with mailto */}
  <Link href="mailto:rabdeep0202@gmail.com">
    <button className="bg-green-600 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold shadow-md transition-all duration-300">
      Hire Me
    </button>
  </Link>

  {/* Resume Button with external link */}
  <Link
    href="https://drive.google.com/file/d/13ukFWvqedAB_Fuqw7u9SHLcL42qoQOFc/view?usp=sharing"
    target="_blank"
  >
    <button className="border border-white hover:bg-white hover:text-black px-6 py-2 rounded-lg font-semibold transition-all duration-300">
      Resume
    </button>
  </Link>
</div>

        </motion.div>
      </div>
    </section>
  );
}
