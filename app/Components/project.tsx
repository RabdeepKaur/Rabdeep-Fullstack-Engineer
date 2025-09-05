import Image from "next/image";
import rejectme from "../assests/rejectme.png";

export default function Project() {
  const projects = [
    {
      src: rejectme,
      title: "RejectMe",
      link: "https://example.com",
      codelink: "https://github.com/example",
      description: "A project that demonstrates rejection handling.",
    },
  ];

  return (
    <div className="flex flex-row items-center justify-center h-screen z-1">
      <div className="flex flex-col items-center justify-center gap-6">
        {projects.map((item, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center max-w-[400px] h-[150px] bg-gradient-to-br from-[#f7f7f7] to-[#94bbe9] backdrop-blur-lg border rounded-xl shadow-lg p-4"
          >
            {/* First Div (Image) */}
            <Image
              src={item.src}
              alt={item.title}
              width={64}
              height={64}
              className="mb-2 rounded"
            />

            {/* Second Div (Text & Links) - Overlapping */}
            <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 w-[90%] bg-gray-100 rounded-2xl p-4 shadow-md">
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
              <div className="flex gap-4 mt-2 justify-center">
                <a href={item.link} className="text-blue-600 hover:underline">
                  Live Demo
                </a>
                <a href={item.codelink} className="text-blue-600 hover:underline">
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
