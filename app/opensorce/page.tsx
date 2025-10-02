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
<section className='p-20 justify-center items-center'>
<h1 className='text-4xl text-white z-10 justify-center items-center px-40'>Open source Contribution</h1>
        <div className="grid gap-6 mt-4 py-10">
          {Opensource.map((exp, index) => (
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

    )
}