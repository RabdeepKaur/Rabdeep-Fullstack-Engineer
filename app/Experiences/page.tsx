import React from 'react';
import Link from "next/link";
import pahacare from "../assests/panhacare.jpg";
import Image from "next/image";
import { FiExternalLink } from 'react-icons/fi';

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
        "Built a real-time support chat app using Ably for the chat and Appwrite for the backend . Users logged in with Google oAuth, got their own private channel kinda like one token per user , and whenever someone started a chat, the backend would ping an admin to jump in. The user and admin could then chat one-on-one for 10 minutes approx. Designed the whole system based on the pub/sub modle - it was pretty cool."
      ]
    }
  ];

  return (
    <main className=" container flex items-center justify-center ">
      <div className="w-full max-w-[768px] mx-auto px-4 sm:px-5 lg:px-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-white mb-6 sm:mb-8 font-bold">
          Work Experience
        </h2>

        <div className="space-y-4 sm:space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.slug}
              className="block group"
            >
              <div className="border hover:border-gray-600 rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-900/60 backdrop-blur-sm px-4 sm:px-6 py-5 sm:py-6 transition-all duration-300">
                {/* Header: Image + Title + Company */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={exp.src}
                      alt={exp.company}
                      width={60}
                      height={60}
                      className="rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-50 group-hover:text-white transition-colors mb-1">
                      {exp.title}
                    </h3>
                    <Link href={`https://www.panhacare.com/`} target="_blank" className="hover:underline">
                    <p className="text-sm sm:text-base text-gray-300 font-medium">
                      {exp.company}  <FiExternalLink className='flex-row inline'/>
                     
                    </p>
                    </Link>
                    <p className="text-xs sm:text-sm text-gray-400 mt-1">
                      {exp.duration}
                    </p>
                  </div>
                </div>

                {/* Description Points */}
                <ul className="list-disc ml-4 sm:ml-8 mt-4 space-y-2">
                  {exp.description.map((point, i) => (
                    <li key={i} className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}