import Image from "next/image";
import lockme from "../assests/lockme.png";
import landingpage from "../assests/landingpage.png"
import Link from "next/link"
import previous from "../assests/previous.png"


export default function Project() {
  const projects = [
    {
      src:  landingpage,
      title: "RejectMe",
      link: 'https://reject-me.vercel.app/',
      codelink: 'https://github.com/RabdeepKaur/RejectMe',
      description: "AI website that generates personalized rejection emails for interview processes. Attracted 80+ visitors and ranked 36 on peerlist.",
    },
    {
      src: lockme,
      title: "Lock me in",
      codelink: 'https://github.com/RabdeepKaur/Lock-me-in',
      description: "Chrome extension that restricts browsing to a single website until timer ends. Gained 5+ active users.",
    },
    {
      src: previous,
      title: "Previous year question",
      link: 'https://previousyearquestions-psi.vercel.app/',
      codelink: 'https://github.com/RabdeepKaur/Proof-of-Work',
      description: "AI power SAAS platefrom where you upload question paper and notes and get length to marks perfect ratio answers.",
    },
  ];
return (
  
<section className="p-20 justify-center items-center">
  <h1 className="text-4xl text-white z-10 justify-center items-center px-40">
    PROJECTS
  </h1>
  <div className="grid gap-6 mt-4 py-5 px-40">
    {projects.map((exp, index) => (
      <div
        key={index}
        className="border rounded-xl shadow-md p-6 "
      >
      
        <div className="flex flex-row items-center gap-3">
          <Image
            src={exp.src}
            width={40}
            height={40}
            className="rounded-full"
            alt={`${exp.title} logo`}
          />
          <h2 className="text-xl font-semibold text-gray-50">
            {exp.title}
          </h2>
        </div>
 <p className="mt-4 text-gray-300">{exp.description}</p>

        <div className="flex flex-row gap-4 mt-2">
      {exp.link && (
  <Link href={exp.link} target="_blank">
    <button className="px-2 py-2    text-sm text-black bg-white rounded-lg">
      Live link
    </button>
  </Link>
)}

{exp.codelink && (
  <Link href={exp.codelink} target="_blank">
    <button className="px-2 py-2  text-sm text-black  bg-white rounded-lg">
      Code
    </button>
  </Link>
)}
        </div>
      </div>
    ))}
  </div>
</section>


);

}