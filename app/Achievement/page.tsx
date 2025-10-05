
export default function Achivement() {
  const Achivement = [
    {
      description: [
      "I won a hackathon organized by IIITDM in collaboration with MLH. It was a great experience.",

"I was a finalist among the top 6 teams from all over India in the Smart India Hackathon 2024 under the Ministry of Postal Transportation.",

"I was a SheFi Scholar, where I completed an MBA-style course on crypto, DeFi, and Web3.",

"I have worked with 3 startups as a freelance social media marketer.",
      ],
    },
  ];
  return (
    <section className="container flex items-center justify-center py-12 ">
      <div className="flex md:mt-4 flex-col max-w-[768px] mx-auto p-5 lg:p-0">
        <div className="container">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-white mb-8 font-bold">
          Interesting things about me
        </h2>

      <div className="grid gap-8 w-full max-w-3xl justify-center items-center mx-auto">
        {Achivement.map((exp, index) => (
          <ul
            key={index}
            className="list-disc text-left ml-6 md:ml-10 space-y-3 text-lg text-gray-300"
          >
            {exp.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        ))}
      </div>
</div>
</div>
    </section>
  );
}