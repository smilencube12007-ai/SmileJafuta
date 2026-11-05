const teamMembers = [
  {
    id: 1,
    name: "Gail van Jaarsveldt",
    role: "FOUNDER & CHIEF EXECUTIVE OFFICER",
    image: "./public/Gail+Image+1.png",
   
  },
  {
    id: 2,
    name: "Minenhle Moyo",
    role: "CHIEF OPERATIONS OFFICER",
    image: "./public/Minenhle+Moyo.png",
   
  },
  {
    id: 3,
    name: "Sipho Moyo",
    role: "OUTREACH DIRECTOR",
    image: "./public/Sipho+Moyo+1.png",
    description: "Building strong partnerships and supporting community initiatives.",
  },

   {
    id: 4,
    name: "Courtney Connolly",
    role: "EDUCATION DIRECTOR & BOARD SECRETARY",
    image: "./public/Courtney+Connelly.png",
    
  },

   {
    id: 5,
    name: "Jacqueline Gurajena",
    role: "HUMAN CAPITAL & WOMEN EMPOWERMENT PROGRAMS DIRECTOR",
    image: "./public/Sipho+Moyo.png",
    
  },

   {
    id: 6,
    name: "Tsitsi Mposiwa",
    role: "COUNSELLOR & GENDER CHAMPION",
    image: "./public/Tsitsi+Mposiwa.png",
    
  },
];

function Team() {
  return (
    <section className="bg-white px-5 py-16 md:px-10 lg:px-16">
      {/* African proverb */}
      <div className="mx-auto mb-24 max-w-3xl text-center md:text-left">
        <p className="text-lg leading-relaxed text-gray-800 md:text-2xl">
          “If you want to go fast, go alone. If you want to go far,
          go together.”
        </p>
        <p className="mt-2 text-lg text-gray-800 md:text-2xl">
          — African Proverb
        </p>
      </div>

      
      <h2 className="mb-12 text-center text-3xl font-normal text-gray-800 md:mb-14 md:text-4xl">
        Meet the Team
      </h2>

      
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
        {teamMembers.map((member) => (
          <div key={member.id} className="overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="h-[320px] w-full object-cover sm:h-[350px] lg:h-[400px]"
            />

            <div className="py-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                {member.name}
              </h3>

              <p className="mt-2 text-base font-medium text-gray-600">
                {member.role}
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
