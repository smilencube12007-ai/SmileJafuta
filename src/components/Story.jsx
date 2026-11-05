function Story() {
  const storyImages = [
    {
      src: "./public/man-worker-africa.png",
      alt: "Young man participating in a community project",
    },
    {
      src: "./public/girl-school-africa.png",
      alt: "Young people learning digital skills",
    },
    {
      src: "./public/woman-sewing-africa.png",
      alt: "Community member working on a practical project",
    },
  ];

  return (
    <section className="w-full bg-white px-6 py-10 md:px-8 md:py-16">
    
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-7 text-3xl font-medium text-[#292929] md:text-4xl">
          Our Story Now
        </h2>

        <p className="text-left text-base leading-[1.8] text-[#333333] md:text-lg">
          Jafuta Foundation has implemented a series of targeted,
          community-driven projects to address the pressing challenges
          faced by rural families. Each initiative was designed to
          promote education, equality, opportunity, and long-term
          self-reliance through practical and sustainable solutions.
        </p>
      </div>

     
      <div className="mt-14 flex flex-col items-center justify-between gap-10 md:mt-16 md:flex-row md:items-start md:gap-8 lg:gap-12">
        {storyImages.map((image) => (
          <div
            key={image.src}
            className="w-full overflow-hidden md:w-[30%] md:flex-none"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-[420px] w-full object-cover md:h-[460px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Story;