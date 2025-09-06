import React from 'react';

export default function Work() {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Panha care",
      duration: "August 2025 - October 2025",
      description: "What did I do here"
    },
  
    {
      title: "Open Source Contributor",
      company: "Girlscript Summer of Code",
      duration: "October 2024",
      description: "What did I do here"
    },
    {
      title: "Open Source Contributor",
      company: "Hacktoberfest",
      duration: "October 2024",
      description: "What did I do here"
    },

  ];

  return (
    <div className=" py-16 px-4">
      <h1 className="text-white text-4xl font-bold text-center mb-16">
        Experiences
      </h1>
      
      <div className="max-w-7xl mx-auto">
        {/* Horizontal Timeline Container */}
        <div className="relative overflow-x-auto pb-8">
          <div className="flex items-center min-w-max px-8">
            
            {/* Horizontal Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-white  rounded-full transform -translate-y-1/2"></div>
            
            {experiences.map((experience, index) => (
              <div key={index} className="relative flex-shrink-0">
               
                
                {/* Experience Card */}
                <div className={`${index % 2 === 0 ? 'mb-55' : 'mt-55'} mx-6`}>
                  <div className="w-80 bg-black backdrop-blur-lg border border-gray-200 rounded-xl shadow-lg p-6 mt-3 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    
                    {/* Card Arrow */}
                    <div className={`absolute left-1/2 transform -translate-x-1/2 ${index % 2 === 0 ? 'bottom-0 translate-y-full' : 'top-0 -translate-y-full'} w-0 h-0`}>
                      <div className={`${index % 2 === 0 ? 'border-t-[15px] border-white border-b-0' : 'border-b-[15px] border-b-white border-t-0'} border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent`}></div>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-lg font-bold text-white leading-tight">
                        {experience.title}
                      </h3>
                      
                      {experience.company && (
                        <p className="text-base font-semibold text-blue-100">
                          {experience.company}
                        </p>
                      )}
                      
                      <p className="text-xs font-medium text-gray-100 px-3 py-1 rounded-full inline-block">
                        {experience.duration}
                      </p>
                      
                      <p className="text-sm text-gray-100 leading-relaxed">
                        {experience.description}
                      </p>
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
  );
}