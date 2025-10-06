"use client";

import React from "react";
import Link from "next/link";
import pahacare from "../assests/panhacare.jpg";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Work() {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      slug: "full-stack-developer-intern",
      src: pahacare,
      company: "Panha care",
      duration: "August -- Present (Remote)",
      description: [
        "Converted Figma designs into a fully responsive Next.js front-end, ensuring a modern, responsive, and user-friendly UI.",
        "Developed an SEO-friendly and performance-optimized blog page using Next.js, featuring individual user profiles and dynamic search functionality based on user ID.",
        "Built a real-time support chat app using Ably for the chat and Appwrite for the backend. Users logged in with Google oAuth, got their own private channel (one token per user), and whenever someone started a chat, the backend pinged an admin to jump in. The user and admin could then chat one-on-one for ~10 minutes. Designed the whole system based on the pub/sub model."
      ],
    },
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main className="container flex items-center justify-center py-16">
      <div className="w-full max-w-[768px] mx-auto px-4 sm:px-6 lg:px-0">

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 "
        >
          Work Experience
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 sm:space-y-8"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.slug}
    
              whileHover={{ scale: 1.02 }}
              className="group border hover:border-green-400 rounded-xl shadow-md hover:shadow-lg hover:bg-black backdrop-blur-md transition-all duration-300 p-6"
            >
             
              <div className="flex items-start gap-4">
                <Image
                  src={exp.src}
                  alt={exp.company}
                  width={64}
                  height={64}
                  className="rounded-full w-14 h-14 sm:w-16 sm:h-16 object-cover shadow-md"
                />

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-100 group-hover:text-white transition-colors">
                    {exp.title}
                  </h3>
                  <Link
                    href="https://www.panhacare.com/"
                    target="_blank"
                    className="flex items-center gap-1 text-sm sm:text-base text-indigo-400 hover:underline"
                  >
                    {exp.company} <FiExternalLink />
                  </Link>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">
                    {exp.duration}
                  </p>
                </div>
              </div>

              
              <ul className="list-disc ml-5 sm:ml-8 mt-4 space-y-2">
                {exp.description.map((point, i) => (
                  <motion.li
                    key={i}
                    className="text-sm sm:text-base text-gray-300 leading-relaxed"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 3, x: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.30 }}
                    viewport={{ once: true }}
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
