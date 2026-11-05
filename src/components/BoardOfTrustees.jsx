const trustees = [
  {
    id: 1,
    name: "Benoit Fayd'herbe",
    image: "./public/Benoit+Fayd'herbe.png",
  },
  {
    id: 2,
    name: "Malcolm Ainscough",
    image: "./public/Malcolm+Ainscough.png",
  },
  {
    id: 3,
    name: "Kathy Cole (USA)",
    image: "",
  },

  {
    id: 4,
    name: "Joshua Magaba",
    image: "./public/Joshua+Magaba.png",
  },

  {
    id: 5,
    name: "Gail van Jaarsveldt",
    image: "Gail+Image+1.png",
  },

  {
    id: 6,
    name: "Nyasha Mupita",
    image: "Nyasha+Mupita.png",
  },

   {
    id: 7,
    name: "Courtney Connelly",
    image: "Courtney+Connelly.png",
  },

   {
    id: 8,
    name: "Sara Gardiner",
    image: "Sara+Gardiner.png",
  },
];

function BoardOfTrustees() {
  return (
    <section className="bg-[#eee5da] px-6 py-12 md:px-10 lg:px-16">
      <h2 className="mb-16 text-center text-3xl font-normal text-gray-800 md:text-4xl">
        Board of Trustees
      </h2>

      <div className="mx-auto grid max-w-7xl grid-cols-1 justify-items-center gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-20 lg:gap-y-24">
        {trustees.map((trustee) => (
          <div
            key={trustee.id}
            className="flex w-full flex-col items-center text-center"
          >
            {trustee.image ? (
              <img
                src={trustee.image}
                alt={trustee.name}
                className="h-[220px] w-[220px] rounded-full object-cover md:h-[270px] md:w-[270px]"
              />
            ) : (
              <div
                aria-hidden="true"
                className="flex h-[220px] w-[220px] items-center justify-center rounded-full bg-[#39868E] text-5xl font-semibold text-white md:h-[270px] md:w-[270px]"
              >
                {trustee.name
                  .split(/\s+/)
                  .slice(0, 2)
                  .map((part) => part[0])
                  .join("")}
              </div>
            )}

            <h3 className="mt-7 text-lg font-normal text-gray-900">
              {trustee.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BoardOfTrustees;