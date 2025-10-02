import React from 'react';
import pahacare from "../assests/panhacare.jpg"
import Image from "next/image"


export default function Work() {
 
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      src:pahacare,
      company: "Panha care",
      duration: "August -- Present (Remote)",
      description: [
      "Converted Figma designs into a fully responsive Next.js front-end, ensuring a modern and user-friendly UI.",
      "Developed an SEO-friendly and performance-optimized blog platform using Next.js for better search rankings and faster load times.",
      "Built a real-time chat application using Ably for live communication, integrated with Appwrite for backend services."
    ]

    },

  ];

  return (
<>
<section className='p-20 justify-center items-center'>
<h1 className='text-4xl text-white z-10 justify-center items-center px-40'>Experiences</h1>
        <div className="grid gap-6 mt-4 py-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border rounded-xl shadow-md px-40"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={exp.src}
                  alt={exp.company}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h2 className="text-xl font-semibold text-gray-50">{exp.title}</h2>
                  <p className="text-gray-100">{exp.company}</p>
                  <p className="text-sm text-gray-200">{exp.duration}</p>
                </div>
              </div>

              <ul className="list-disc ml-8 mt-4 space-y-2">
                {exp.description.map((point, i) => (
                  <li key={i} className="text-gray-300">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
  </section>
</>
  )}