import { Link } from "react-router-dom";
import Impact from "./impact";
import CommunityVoices from "./CommunityVoices";
import Contact from "./contact";


const Home = () => {
  return (
    <main>
      <section className="relative flex min-h-screen flex-col items-start justify-start bg-[url('/women-africa-hero-image.webp')] bg-cover bg-center bg-no-repeat pt-50">
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <h1 className="relative z-10 w-3/4 p-5 text-6xl font-bold leading-normal text-white pt-40">
          Empowering Rural Communities Through Action.
        </h1>
      </section>

      <section
        id="vision"
        className="bg-white px-6 py-16 text-[#292929] sm:px-10 md:py-24 lg:px-16"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div className="flex flex-col items-start">
            <h2 className="max-w-xl text-3xl font-normal leading-tight sm:text-4xl lg:text-[44px]">
              Supporting education and
               community.
            </h2>

            <Link
              to="/vision"
              className="mt-10 inline-flex min-h-[72px] min-w-[202px] items-center justify-center bg-[#38858d] px-8 py-5 font-semibold text-white transition duration-300 hover:bg-[#286b72]"
            >
              Our Vision
            </Link>
          </div>

          <div className="text-base leading-[1.8] text-[#333333]">
            <p>
              We provide rural families with access to quality
              education, digital technology, clean water,
              nutritional gardens, equal opportunities for girls,
              skills training, and income-generating initiatives,
            </p>

            <p className="mt-4">
              Jafuta Foundation is nurturing healthier and more
              resilient communities by restoring dignity,
              strengthening independence, and inspiring lasting
              hope for generations to come.
            </p>
          </div>
        </div>
      </section>
       <Impact
        image="/women-africa-hero-image.webp"
        title="Women & Youth Empowerment"
        description="Through deepened impact in gender empowerment, girls’ dignity, education, scholarships, and vocational skills training, Jafuta Foundation creates pathways for women and young people to build confidence and develop meaningful livelihoods."
        buttonText="Learn More"
      />
      <Impact
        image="/boys-school-africa-nonprofit.jpg"
        title="Education & Digital Access"
        description="We strengthen rural education through supplementary and informal learning, teacher development & training, learning resources, scholarships, and access to technology—bridging the digital divide and expanding education opportunities for rural children and youth. "
        buttonText="Learn More"
        reverse={true}
      />
      <Impact
        image="/water sanit.webp"
        title="Water, Sanitation (WASH) & Health"
        description="Improving health and livelihoods by expanding access to solar-powered boreholes/wells, clean and accessible water points, safe sanitation, hygiene education, mobile health clinics, and mental health education and counselling within rural communities"
        buttonText="Learn More"
      />

      <Impact
        image="/woman-garden-africa+(1).webp"
        title="Livelihoods & Food Security"
        description="Our Livelihoods & Food Security Programme supports communities through nutritional community gardens, climate-smart agriculture, and the growing and distribution of food-bearing and indigenous trees."
        buttonText="Learn More"
        reverse={true}
      />

      <Impact
        image="/Waterhole+maintenance+in+surround+national+Parks.webp"
        title="Conservation & Community Co-Existence"
        description="We protect wildlife while supporting the communities that live alongside it. Through education, conflict-mitigation, habitat restoration, and conservation-linked livelihoods, we can help people and wildlife to better coexist safely and sustainably."
        buttonText="Learn More"
        reverse={false}
      />

      <Impact
        image="/Batoka-creatives-beads.jpg"
        title="Creativity, Arts & Culture"
        description="From deep cultural roots to contemporary creative talent, we celebrate Zimbabwe’s identity through artistic and visual expression."
        buttonText="Learn More"
        reverse={true}
      />

      <CommunityVoices/>
      <Contact/>
     
    </main>
  );
};

export default Home;