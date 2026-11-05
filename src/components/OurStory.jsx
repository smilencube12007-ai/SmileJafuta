const storySections = [
  {
    title: "The People",
    image: "./public/Girls_sports_africa.png",
    imageAlt: "Children playing together in a rural community",
    text: (
      <p>
        The rural communities of Dibutibu, Chisuma, and Sizinda
        villages faced severe challenges due to limited access to
        essential resources: clean drinking water, under-resourced
        schools, and minimal income-generating opportunities.
        Most families depended on subsistence farming in a dry,
        arid region with scarce rainfall, making daily survival and
        progress an ongoing struggle.
      </p>
    ),
  },
  {
    title: "The Reality",
    image: "./public/kids-play-nonprofit.png",
    imageAlt: "Children facing educational challenges in a rural community",
    text: (
      <ul className="list-disc space-y-3 pl-10">
        <li>
         Students walked long distances to school, often without access to textbooks, computers, or proper learning materials.
        </li>
        <li>
         Communities depended on unsafe and distant water sources, forcing families—especially women and children—to spend hours collecting water.
        </li>
        <li>
          Many young people had no access to employment, vocational training, or life skills, leaving them without hope for a sustainable future.
        </li>
         <li>
         Rural dwellers relied solely on subsistence farming in a dry, arid region with consistently low rainfall.
        </li>
         <li>
          Families faced chronic food insecurity and limited access to nutritious produce during the dry months.
        </li>
         <li>
         Girls often missed school due to lack of sanitary hygiene products, leading to absenteeism and educational disadvantage.
        </li>
      </ul>
    ),
  },
];

function OurStory() {
  return (
    <section className="bg-[#eee5da] px-6 py-16 md:px-12 lg:px-0">
      <div className="mx-auto max-w-[1068px] space-y-20 md:space-y-24">
        {storySections.map((section, index) => (
          <div
            key={section.title}
            className={`grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16 ${
              index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* Text content */}
            <div className="text-[#292929]">
              {index === 0 && (
                <h2 className="mb-8 text-3xl font-normal md:text-[34px]">
                  Our Story
                </h2>
              )}

              <h3 className="mb-5 text-base font-bold">
                {section.title}
              </h3>

              <div className="text-[16px] leading-[1.8] text-[#343434]">
                {section.text}
              </div>
            </div>

            
            <div className="w-full">
              <img
                src={section.image}
                alt={section.imageAlt}
                className="h-[340px] w-full object-cover md:h-[420px]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurStory;