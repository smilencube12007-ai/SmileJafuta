import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    const subscriberEmail = email.trim();
    if (!subscriberEmail) return;

    const subject = encodeURIComponent("Newsletter subscription");
    const body = encodeURIComponent(
      `Please subscribe this email address to the quarterly newsletter:\n\n${subscriberEmail}`,
    );

    setMessage("Your email app should open with a subscription request. Send it to complete sign-up.");
    window.location.href = `mailto:gcvj@jafuta.org?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-white px-2 py-8">

     
      <section className="mb-32 pl- w-250">
        <h2 className="text-3xl md:text-6xl text-gray-900">
          “With the support from donors, we have been able to serve our community better than ever.”
        </h2>

        <p className="mt-8 text-sm md:text-base text-gray-600">
          — Gail van Jaarsveldt, Director
        </p>
      </section>

     
      <section
        className="relative min-h-[370px] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('/Batoka-creatives-beads.jpg')",
        }}
      >
       
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 px-6 py-12 md:px-10 md:py-16 text-white">

        
          <div>
            <h2 className="text-3xl font-medium mb-8">
              Contact us
            </h2>

            <p className="text-base mb-12">
              Feel free to contact us with any questions.
            </p>

            <div>
              <h3 className="font-bold mb-2">Email</h3>
              <a
                href="mailto:gcvj@jafuta.org"
                className="hover:underline"
              >
                Email: gcvj@jafuta.org
              </a>
            </div>
          </div>

          
          <div className="text-center">
            <h2 className="text-3xl font-medium mb-5">
              Subscribe
            </h2>

            <p className="text-base leading-7 mb-10">
              Sign up to our quarterly newsletter to receive news
              <br className="hidden lg:block" /> and updates.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                aria-label="Email address"
                className="w-full min-w-0 bg-white px-6 py-5 text-gray-800 outline-none focus:ring-2 focus:ring-cyan-600"
              />

              <button
                type="submit"
                className="bg-[#318c9b] px-10 py-2 font-semibold text-white transition hover:bg-[#267583]"
              >
                SignUp
              </button>
            </form>

            {message && (
              <p role="status" className="mt-4 text-sm">
                {message}
              </p>
            )}

            <p className="mt-10 text-sm text-gray-200">
              We respect your privacy.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}