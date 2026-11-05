const newsletters = [
  {
    id: 1,
    date: "April 2026",
    title: "New Beginnings & Big Dreams",
    image: "./public/Children-africa-school-JafutaFoundation.png",
    description:
      "It's hard to believe we are already in April - the year is flying by! And what a start it has been. We hit the ground running in January (and we haven't stopped yet!) as the new school year began.There is something incredibly special about this time of year. Watching our scholarship students - both new and returning - receive their uniforms and school supplies is always a deeply moving moment.",
    link: "#",
  },
  {
    id: 2,
    date: "Mar 2026",
    title: "2025 Annual Report",
    image: "./public/Jafuta+2025+Annual+Report.png",
    description:
      "The 2025 financial year was marked by consolidation, measurable impact, and strengthened institutional maturity for Jafuta Foundation. Operating in complex rural communities in the Chidobe and Matetsi Wards of Matabeleland North, , the Foundation continued to deliver high-impact, community-driven programmes aligned with its mission:",
    link: "#",
 },

  {
    id: 3,
    date: "December 2025",
    title: "Jafuta Foundation 2025 Year End Reflection",
    image: "./public/boy_boxer_africa.webp",
    description:
      "As we close out 2025, we do so with full hearts and deep gratitude. This has been a year of remarkable progress on the ground-made possible by the belief,generosity and encouragement of our supporters, partners, and friends.",
    link: "#",
  },

   {
    id: 4,
    date: "Sept 2025",
    title: "Celebrating our Batoka Creatives!",
    image: "./public/Batoka-creatives-beads.png",
    description:
      "As we cross into the second half of the year, it’s incredible to reflect on how much has already happened — and how busy our team on the ground has been!",
    link: "#",
  },
];

function NewsletterCard({ newsletter }) {
  return (
    <article className="min-w-0">
      <a
        href={newsletter.link}
        className="block overflow-hidden"
      >
        <img
          src={newsletter.image}
          alt={newsletter.title}
          className="h-[240px] w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </a>

      <p className="mt-3 text-[15px] text-[#555]">
        {newsletter.date}
      </p>

      <h2 className="mt-4 text-2xl font-normal text-[#292929]">
        {newsletter.title}
      </h2>

      <p className="mt-10 text-[16px] leading-7 text-[#555]">
        {newsletter.description}
      </p>

      <a
        href={newsletter.link}
        className="mt-5 inline-block font-medium text-[#398c99] hover:underline"
      >
        Read More →
      </a>
    </article>
  );
}

export default function Blog() {
  return (
    <main className="min-h-screen bg-white px-5 pb-20 pt-4 md:px-10">
      <h1 className="text-center text-3xl font-normal text-[#292929] md:text-[34px]">
        Jafuta Foundation Newsletters
      </h1>

      <section className="mx-auto mt-20 grid max-w-[1056px] grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-[117px] md:gap-y-16">
        {newsletters.map((newsletter) => (
          <NewsletterCard
            key={newsletter.id}
            newsletter={newsletter}
          />
        ))}
      </section>
    </main>
  );
}
