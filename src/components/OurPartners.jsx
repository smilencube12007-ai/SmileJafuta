const partners = [
  {
    name: "Matter",
    logo: "./Matter+Logo.png",
  },
  {
    name: "Uncommon",
    logo: "./Uncommon.png",
  },
  {
    name: "Lesedi Community Projects",
    logo: "./Lesedi+Community+Projects.png",
  },
  {
    name: "JL Foundation",
    logo: "./public/Children+Community.png",
  },
  {
    name: "Rotary International",
    logo: "./public/Rotary+International+Logo.png",
  },
  {
    name: "Miracle Missions Vimba",
    logo: "./public/Miracle+Missions+Vimba.png",
  },
  {
    name: "Hwange Rural District Council",
    logo: "./public/Hwange+Rural+District+Council.png",
  },
  {
    name: "Africa Eden",
    logo: "./public/Africa's+Eden.png",
  },
];

export default function OurPartners() {
  return (
    <section className="w-full bg-white px-5 py-12 md:px-12 md:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <h2 className="mb-8 text-center text-3xl font-normal text-[#333333] md:mb-10 md:text-4xl">
          Our Partners
        </h2>

        {/* Partners grid */}
        <div className="grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-12 lg:gap-y-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex h-24 items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-20 w-full max-w-[190px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}