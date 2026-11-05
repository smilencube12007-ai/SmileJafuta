
export default function Vision() {
  return (
    <>
      <section className="bg-white text-[#40362e] px-4 md:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-12">

       
        <div>
          <h1 className="text-3xl md:text-4xl leading-tight font-normal mb-16">
            “Everyone deserves to thrive with
            <br className="hidden xl:block" /> dignity and hope”
          </h1>

         
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl mb-7">
              Our Vision
            </h2>

            <p className="text-base leading-7">
              To foster self-sustaining community development in the Hwange
              District (Dibutibu, Sizinda, Chisuma, Monde and Matetsi)
              through education, empowerment, and livelihood opportunities
              that build resilience and improve quality of life.
            </p>
          </div>

         
          <div>
            <h2 className="text-3xl md:text-4xl mb-7">
              Our Mission
            </h2>

            <p className="text-base leading-7">
           Jafuta Foundation is dedicated to empowering rural communities by providing
            increased access to essential resources and services, championing conservation,
             advancing gender equality, fostering resilience, and promoting self-sufficiency.
             Through collaborative efforts, we work to create sustainable environments that 
             uplift lives and safeguard our shared future.
            </p>
          </div>
        </div>

       
        <div>
          <img
            src="/women-africa-hero-image.webp"
            alt="Jafuta Foundation community members"
            className="pr-10 w-full h-[500px] md:h-[600px] object-cover object-center"
          />
        </div>

        </div>
      </section>
      <CoreValues />
    </>
  );
}
