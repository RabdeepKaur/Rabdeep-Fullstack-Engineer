import React from 'react';
import pahacare from "../assests/panhacare.jpg"
import Image from "next/image"
 import girlscriptsoc_logo from "../assests/girlscriptsoc_logo.jpg"
 import  hacktoberfest from "../assests/hacktoberfest.jpg"

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
  
    {
      title: "Open Source Contributor",
      src: girlscriptsoc_logo,
      company: "Girlscript Summer of Code",
      duration: "October 2024",
        description: [
      " Enhanced the frontend of a legacy game by implementing a dynamic search feature and redesigning the UI, resulting in a 30% increase in user retention.",
      "Introduced new gameplay mechanics and optimized performance, reducing load time by 40 % and improving overall userexperience.",
      "Contributed to 6 open-source repositories by raising 10 pull requests, with a 50% merge success rate, demonstrating collaborative development and code quality.",
      "Achieved 70+ contribution points and was awarded the Explorer Badge for consistent and valuable engagement in open-source development."
    ]
    },
    {
      title: "Open Source Contributor",
      src:hacktoberfest,
      company: "Hacktoberfest",
      duration: "October 2024",
      description: ["Contributed to 5 open-source repositories, raising 5 pull requests with an 80% merge success rate—demonstrating effective collaboration and code quality.",
      " Implemented a client-side search algorithm with a 95% accuracy rate in predicting user intent, enabling the delivery of more relevant search results to users.",
      " Achieved all 4 Hacktoberfest badges through consistent and high-quality contributions to open-source repositories."
      ]
    },

  ];

  return (
 <>
      {/* Mobile Layout (hidden on desktop) */}
      <div className="py-12 px-4 lg:hidden">
        <h1 className="text-white font-bold text-3xl text-center mb-8">
          Experiences
        </h1>
        
        <div className="max-w-sm mx-auto">
          {/* Vertical Timeline */}
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-white rounded-full"></div>
            
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className="absolute left-4 w-4 h-4 bg-white rounded-full border-4 border-gray-900 z-10"></div>
                  
                  {/* Experience Card */}
                  <div className="ml-12 w-full">
                    <div className="bg-black/80 backdrop-blur-lg border border-gray-200 rounded-xl shadow-lg p-4 transform transition-all duration-300 hover:shadow-xl group">
                      <div className="space-y-3">
                        <h3 className="text-base font-bold text-white leading-tight">
                          {experience.title}
                        </h3>
                        
                        {experience.company && (
                          <div className="flex items-center gap-3">
                            {experience.src && (
                              <Image
                                src={experience.src}
                                alt={experience.company}
                                width={32}
                                height={32}
                                className="rounded-full"
                              />
                            )}
                            <div>
                              <p className="text-sm font-semibold text-blue-100">
                                {experience.company}
                              </p>
                              <span className="text-xs font-light text-amber-300">
                                {experience.duration}
                              </span>
                            </div>
                          </div>
                        )}
                        
                        {/* Always show description on mobile */}
                        <div className="mt-3">
                          <ul className="list-disc list-inside text-xs text-gray-100 leading-relaxed space-y-1">
                            {Array.isArray(experience.description) ? (
                              experience.description.map((point, idx) => (
                                <li key={idx}>{point}</li>
                              ))
                            ) : (
                              <li>{experience.description}</li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Original Desktop Layout (hidden on mobile) */}
      <div className="hidden lg:block py-16 px-4">
        <h1 className="text-white font-bold text-5xl text-center mb-16">
          Experiences
        </h1>
        
        <div className="max-w-7xl mx-auto">
          {/* Horizontal Timeline Container */}
          <div className="relative overflow-x-auto pb-10">
            <div className="flex items-center min-w-max px-8">
              
              {/* Horizontal Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-white rounded-full transform -translate-y-1/2"></div>
              
              {experiences.map((experience, index) => (
                <div key={index} className="relative flex-shrink-0">
                  
                  {/* Experience Card */}
                  <div className={`${index % 2 === 0 ? 'mb-40' : 'mt-55'} mx-6`}>
                    <div className="w-80 bg-black backdrop-blur-lg border border-gray-200 rounded-xl shadow-lg p-6 mt-3 transform transition-all duration-300 hover:h-auto hover:shadow-xl group">
                      
                      {/* Card Arrow */}
                      <div className={`absolute left-1/2 transform -translate-x-1/2 ${index % 2 === 0 ? 'bottom-0 translate-y-[110%]' : 'top-0 -translate-y-[300%]'} w-0 h-1`}>
                        <div className={`${index % 2 === 0 ? 'border-t-[15px] border-white border-b-0' : 'border-b-[15px] border-b-white'} border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent`}></div>
                      </div>
                      
                      <div className="space-y-3">
                        <h3 className="text-lg font-bold text-white leading-tight">
                          {experience.title}
                        </h3>
                        
                        {experience.company && (
                          <div className="flex items-center gap-3">
                            {/* Show Image only if src exists */}
                            {experience.src && (
                              <Image
                                src={experience.src}
                                alt={experience.company}
                                width={40}
                                height={40}
                                className="rounded-full"
                              />
                            )}
                            <p className="text-base font-semibold text-blue-100">
                              {experience.company}<br></br> 
                              <span className='text-sm font-light text-amber-300'>{experience.duration}</span>
                            </p>
                          </div>
                        )}
                        
                        <div className="relative">
                          <div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-100">
                            <ul className="list-disc list-inside text-sm text-gray-100 leading-relaxed space-y-1">
                              {Array.isArray(experience.description) ? (
                                experience.description.map((point, idx) => (
                                  <li key={idx}>{point}</li>
                                ))
                              ) : (
                                <li>{experience.description}</li>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Connecting line to next item (except for last item) */}
                  {index < experiences.length - 1 && (
                    <div className="absolute top-1/2 right-0 w-12 h-1-translate-y-1/2 translate-x-full"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}