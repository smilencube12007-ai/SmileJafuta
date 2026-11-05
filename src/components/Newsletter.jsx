import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const subscriberEmail = email.trim();
    const subject = encodeURIComponent("Newsletter subscription");
    const body = encodeURIComponent(
      `Please subscribe this email address to the quarterly newsletter:\n\n${subscriberEmail}`,
    );
    setMessage("Your email app should open with a subscription request. Send it to complete sign-up.");
    window.location.href = `mailto:gcvj@jafuta.org?subject=${subject}&body=${body}`;
  };

  return (
    <section
      className="relative flex min-h-[420px] items-center
      justify-center bg-cover bg-center px-4 py-12"
      style={{
        backgroundImage: "url('/bg.jpeg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl text-center text-white">
        <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
          Subscribe to our newsletter.
        </h2>

        <p className="mb-10 text-sm md:text-base">
          Sign up to our quarterly newsletter to receive news and updates.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-[420px] flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center"
        >
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-16 w-full border border-gray-200 bg-white
            px-8 text-gray-800 outline-none placeholder:text-gray-400
            focus:ring-2 focus:ring-cyan-600 sm:w-[280px]"
          />

          <button
            type="submit"
            className="h-16 bg-[#378b9b] px-8 font-semibold
            text-white transition hover:bg-[#287382]"
          >
            Sign Up
          </button>
        </form>

        {message && (
          <p className="mt-4 text-sm" role="status">
            {message}
          </p>
        )}
      </div>
    </section>
  );
}

export default Newsletter;