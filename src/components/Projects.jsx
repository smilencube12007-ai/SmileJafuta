import Impact from "./impact";

const projects = [
  {
    image: "/women-africa-hero-image.webp",
    title: "Women & Youth Empowerment",
    description:
      "Through gender empowerment, girls' dignity, education, scholarships, and vocational skills training, Jafuta Foundation creates pathways for women and young people to build confidence and develop meaningful livelihoods.",
  },
  {
    image: "/boys-school-africa-nonprofit.jpg",
    title: "Education & Digital Access",
    description:
      "We strengthen rural education through supplementary learning, teacher development, learning resources, scholarships, and access to technology—bridging the digital divide for rural children and youth.",
  },
  {
    image: "/water sanit.webp",
    title: "Water, Sanitation (WASH) & Health",
    description:
      "We improve health and livelihoods by expanding access to clean water, safe sanitation, hygiene education, mobile health clinics, and mental health education in rural communities.",
  },
  {
    image: "/woman-garden-africa+(1).webp",
    title: "Livelihoods & Food Security",
    description:
      "Our programme supports communities through nutritional gardens, climate-smart agriculture, and the growing and distribution of food-bearing and indigenous trees.",
    reverse: true,
  },
  {
    image: "/Waterhole+maintenance+in+surround+national+Parks.webp",
    title: "Conservation & Community Co-Existence",
    description:
      "We protect wildlife while supporting nearby communities through education, conflict mitigation, habitat restoration, and conservation-linked livelihoods.",
  },
  {
    image: "/Batoka-creatives-beads.jpg",
    title: "Creativity, Arts & Culture",
    description:
      "From deep cultural roots to contemporary creative talent, we celebrate Zimbabwe's identity through artistic and visual expression.",
    reverse: true,
  },
];

export default function Projects() {
  return (
    <main>
      <h1 className="bg-white px-6 py-12 text-3xl font-normal text-[#292929] md:px-16 md:text-4xl">
        Our Projects
      </h1>
      {projects.map((project) => (
        <Impact
          key={project.title}
          {...project}
          buttonText="Get involved"
          to="/contact"
        />
      ))}
    </main>
  );
}