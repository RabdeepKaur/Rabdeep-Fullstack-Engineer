     import girlscriptsoc_logo from "../assests/girlscriptsoc_logo.jpg"
     import  hacktoberfest from "../assests/hacktoberfest.jpg"
     import Image from "next/image"


    export default function Opensource(){

    
    const Opensource=[
    {
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
      src:hacktoberfest,
      company: "Hacktoberfest",
      duration: "October 2024",
      description: ["Contributed to 5 open-source repositories, raising 5 pull requests with an 80% merge success rate—demonstrating effective collaboration and code quality.",
      " Implemented a client-side search algorithm with a 95% accuracy rate in predicting user intent, enabling the delivery of more relevant search results to users.",
      " Achieved all 4 Hacktoberfest badges through consistent and high-quality contributions to open-source repositories."
      ]
    }
]
    return(
<>
<section className='min-h-screen container items-center justify-center flex-col'>
    <div className="flex md:mt-4 flex-col max-w-[768px] mx-auto p-5 lg:p-0">
      <div className="container">
<h1 className='text-2xl text-white mt-5 mb-5'>Open source Contribution</h1>
        <div className="flex flex-col space-y-6">
          {Opensource.map((exp, index) => (
            <div
              key={index}
              className="group"
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
        </div>
        </div>
  </section>
</>

    )
}