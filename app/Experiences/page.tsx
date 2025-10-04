import React from 'react';
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
import pahacare from "../assests/panhacare.jpg";
import Image from "next/image";

export default function Work() {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      slug: "full-stack-developer-intern",
      src: pahacare,
      company: "Panha care",
      duration: "August -- Present (Remote)",
      description: [
        "Converted Figma designs into a fully responsive Next.js front-end, ensuring a modern and user-friendly UI.",
        "Developed an SEO-friendly and performance-optimized blog platform using Next.js for better search rankings and faster load times.",
        "Built a real-time chat application using Ably for live communication, integrated with Appwrite for backend services."
      ]
    }
  ];

  return (
    <main className="min-h-screen container items-center justify-center flex-col">
      <div className="flex md:mt-4 flex-col max-w-[768px] mx-auto p-5 lg:p-0">
        <div className="container">
          <h1 className="text-2xl text-white mt-5 mb-5">Work Experience</h1>

          <div className="flex flex-col space-y-6">
            {experiences.map((exp, index) => (
              <Link
                key={exp.slug}
                href={`/project/${exp.slug}`}
                className="group"
              >
                <div className="border rounded-xl shadow-md px-6 py-6 transition">
                  {/* Header: Image + Title + Company */}
                  <div className="flex items-center gap-4">
                    <Image
                      src={exp.src}
                      alt={exp.company}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h2 className="text-xl font-semibold text-gray-50 group-hover:text-white">
                        {exp.title}
                      </h2>
                      <p className="text-gray-300">{exp.company}</p>
                      <p className="text-sm text-gray-400">{exp.duration}</p>
                    </div>
                  </div>

                  {/* Description Points */}
                  <ul className="list-disc ml-8 mt-4 space-y-2">
                    {exp.description.map((point, i) => (
                      <li key={i} className="text-gray-300">
                        {point}
                      </li>
                    ))}
                  </ul>

          
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

