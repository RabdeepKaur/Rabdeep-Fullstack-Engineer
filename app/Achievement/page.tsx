

export default function Achivement() {
  const Achivement = [
    {
      description: [
        "Winner – Girls’ Category at HackByte Hackathon conducted by IIITDM and Major League Hacking (MLH).",
        "Smart India Hackathon 2024 Finalist – Selected among the top 6 teams under the Ministry of Postal Transportation problem statement.",
        "SheFi Scholar",
      ],
    },
  ];

  return (
    <section className=" flex flex-col  mt-40 ">
      <h1 className="text-4xl text-white px-65 mb-3 ">
        Achievements
      </h1>

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

    </section>
  );
}
