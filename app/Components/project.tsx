import Image from "next/image";
import lockme from "../assests/lockme.png";
import landingpage from "../assests/landingpage.png"
import proof from "../assests/proof.png"
import previous from "../assests/previous.png"

export default function Project() {
  const projects = [
    {
      src:  landingpage,
      title: "RejectMe",
      link: "https://reject-me.vercel.app/",
      codelink: "https://github.com/RabdeepKaur/RejectMe",
      description: "AI website that generates personalized rejection emails for interview processes. Attracted 80+ visitors and ranked 36 on peerlist.",
    },
    {
      src: lockme,
      title: "Lock me in",
      codelink: "https://github.com/RabdeepKaur/Lock-me-in",
      description: "Chrome extension that restricts browsing to a single website until timer ends. Gained 5+ active users.",
    },
    {
      src: proof,
      title: "Proof of work",
      link: "https://reject-me.vercel.app/",
      codelink: "https://github.com/RabdeepKaur/Proof-of-Work",
      description: "A comprehensive project demonstrating blockchain proof-of-work concepts and implementation.",
    },
    {
      src: previous,
      title: "Previous year question",
      link: "https://reject-me.vercel.app/",
      codelink: "https://github.com/RabdeepKaur/Proof-of-Work",
      description: "Educational platform for accessing and managing previous year examination questions.",
    },
  ];
return (
  <div className="py-16">
    <h1 className="text-white font-bold text-5xl text-center mb-16">
      PROJECTS
    </h1>

    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        {projects.map((item, index) => (
          <div
            key={index}
            className="bg-black rounded-xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-500"
          >
            {/* Image Section */}
            <div className="w-full h-60 overflow-hidden">
              <Image
                src={item.src}
                alt={item.title}
                width={500}
                height={500}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Content Section */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3 truncate">
                {item.title}
              </h3>

              <p className="text-sm text-gray-300 mb-5 line-clamp-3">
                {item.description}
              </p>

              {/* Links */}
              <div className="flex gap-4">
                {item.link && (
                  <a
                    href={item.link}
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-200 underline-offset-2 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
                <a
                  href={item.codelink}
                  className="text-pink-400 hover:text-pink-300 text-sm font-medium transition-colors duration-200 underline-offset-2 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

}