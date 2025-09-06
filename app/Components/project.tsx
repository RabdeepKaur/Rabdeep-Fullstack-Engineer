import Image from "next/image";
import rejectme from "../assests/rejectme.png";

export default function Project() {
  const projects = [
    {
      src: rejectme,
      title: "RejectMe",
      link: "https://reject-me.vercel.app/",
      codelink: "https://github.com/RabdeepKaur/RejectMe",
      description: "A project that demonstrates rejection handling.",
    },
    {
      src: rejectme,
      title: "Lock me in",
      codelink: "https://github.com/RabdeepKaur/Lock-me-in",
      description: "A project that demonstrates rejection handling.",
    },
    {
      src: rejectme,
      title: "Proof of work",
      link: "https://reject-me.vercel.app/",
      codelink: "https://github.com/RabdeepKaur/Proof-of-Work",
      description: "A project that demonstrates rejection handling.",
    },
    {
      src: rejectme,
      title: "Previous year question",
      link: "https://reject-me.vercel.app/",
      codelink: "https://github.com/RabdeepKaur/Proof-of-Work",
      description: "A project that demonstrates rejection handling.",
    },
  ];

  return (
    <>
      <h1 className="flex text-white font-bold text-3xl items-center justify-center mb-8">
        PROJECTS
      </h1>
      <div className="flex flex-row items-center justify-center min-h-screen z-1 ">
        <div className="flex flex-row items-center justify-center gap-8 flex-wrap">
          {projects.map((item, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              style={{ width: "280px", height: "350px" }}
            >
              {/* Image Puzzle Piece (Top) */}
              <div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gray-900 backdrop-blur-lg border-0 shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:rotate-1 flex items-center justify-center"
                style={{
                  width: "200px",
                  height: "160px",
                  clipPath: `circle(
                    0% 0%, 
                    70% 0%, 
                    85% 15%, 
                    100% 15%, 
                    100% 40%, 
                    85% 40%, 
                   
                  )`,
                  zIndex: 2,
                }}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="rounded-lg drop-shadow-lg"
                />
              </div>

              {/* Text Puzzle Piece (Bottom) */}
              <div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-900 backdrop-blur-lg border-0 shadow-xl p-6 transition-all duration-500 group-hover:scale-105 group-hover:-rotate-1"
                style={{
                  width: "240px",
                  height: "220px",
                  clipPath: `circle(
                    15% 0%, 
                    30% 0%, 
                    45% 15%, 
                    60% 0%, 
                    85% 0%, 
                    100% 15%, 
                    100% 40%, 
                    85% 55%, 
                    
                  )`,
                  zIndex: 1,
                }}
              >
                <div className="pt-12 text-white text-center overflow-hidden">
                  <h3 className="text-xl font-bold mb-3 text-white drop-shadow-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm mb-4 text-gray-200 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex gap-4 justify-center">
                    {item.link && (
                      <a 
                        href={item.link} 
                        className="text-cyan-300 hover:text-cyan-100 hover:underline font-medium transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    )}
                    <a 
                      href={item.codelink} 
                      className="text-pink-300 hover:text-pink-100 hover:underline font-medium transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Hover Effect Glow */}
              <div className="absolute inset-0 bg-green-300 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}