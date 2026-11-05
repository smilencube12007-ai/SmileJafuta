import DonateDirectly from "./DonateDirectly";

function Donate() {
  return (
    <section className="w-full bg-white">
     
      <div className="px-2">
        <img
          src="/women-africa-hero-image (1).webp"
          alt="Children enjoying time together"
          className="h-[390px] w-full object-cover object-center"
        />
      </div>

      
      <div className="mx-auto max-w-3xl px-6 pb-16 pt-20 text-center">
        <h1 className="mb-8 text-3xl font-normal text-[#292929] md:text-4xl">
          Make a Difference
        </h1>

        <p className="text-base leading-7 text-gray-600 md:text-lg">
          Whether large or small, every donation matters. We steward your
          contribution carefully, transparently, and with deep respect
          for both our donors and the communities we serve.
        </p>
      </div>
      <DonateDirectly />
    </section>
    
  );
}

export default Donate;