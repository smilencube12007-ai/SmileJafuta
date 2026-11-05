import { useState } from "react";

const testimonials = [
  {
    name: "Edward Mazunga",
    message:
      "Your commitment to my education and studies has well and truly transformed my life. I am able to pursue my studies and focus on my future as a lawyer without the burden of financial worries and I am immensely grateful for the opportunities you have created.",
  },
  {
    name: "Muzi",
    message:
      "Through access to the internet and Career Guidance program I was introduced to electrics. I knew what I wanted to be then and I am now reaching my dreams thanks to the mentorship and support through Jafuta Foundation.",
  },
  {
    name: "Mildred M",
    message:
      "From the village to becoming a qualified Software Engineer—something I never imagined before Jafuta Foundation.",
  },
  {
    name: "Teen Ndimakule",
    message:
      "l never thought l would use a computer, until l joined Education and Technology Center.",
  },
  {
    name: "Community Member",
    message:
      "My daughters and l never walk long distance for water thanks to the solar-powered well nearby.",
  },
];

export default function CommunityVoices() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNext = () => {
    setCurrentIndex((index) => (index + 1) % testimonials.length);
  };

  const showPrevious = () => {
    setCurrentIndex(
      (index) => (index - 1 + testimonials.length) % testimonials.length,
    );
  };

  const visibleTestimonials = Array.from(
    { length: 3 },
    (_, index) => testimonials[(currentIndex + index) % testimonials.length],
  );

  

  return (
    <section
      aria-label="Community voices"
      aria-roledescription="carousel"
      className="w-full bg-white py-10"
    >
      <div className=" px-5 pb-14">
        <h2 className="text-3xl font-normal text-[#292929] md:text-4xl">
          Community Voices
        </h2>
      </div>

      <div className="relative  px-5">
        <div
          aria-live="polite"
          className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-10"
        >
          {visibleTestimonials.map((item) => (
            <article
              key={item.name}
              aria-roledescription="slide"
              className="min-h-[300px] bg-[#eee5da] px-7 py-10 md:px-10"
            >
              <h3 className="mb-2 text-xl font-medium text-[#292929] md:text-2xl">
                {item.name}
              </h3>

              <p className="text-base italic leading-[1.8] text-[#333333]">
                “{item.message}”
              </p>
            </article>
          ))}
        </div>

        <button
          type="button"
          onClick={showPrevious}
          aria-label="Previous testimonials"
          className="absolute left-5 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-[#70a8a9] text-white shadow-md transition hover:bg-[#4d8e90] focus:outline-none focus:ring-2 focus:ring-[#4d8e90]"
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5" />
            <path d="m11 6-6 6 6 6" />
          </svg>
        </button>
        
 


        <button
          type="button"
          onClick={showNext}
          aria-label="Next testimonials"
          className="absolute right-5 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-[#70a8a9] text-white shadow-md transition hover:bg-[#4d8e90] focus:outline-none focus:ring-2 focus:ring-[#4d8e90]"
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </button>
      </div>
    </section>
  );
}