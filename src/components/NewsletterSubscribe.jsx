import { useState } from "react";

export default function NewsletterSubscribe() {
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
      className="flex min-h-[427px] items-center justify-center bg-cover bg-center px-4 py-10"
      style={{
        backgroundImage: "url('/bg.jpeg')",
      }}
    >
      <div className="w-full max-w-[523px] bg-[#eee5da] px-8 py-5 text-center sm:px-12">
        <h2 className="text-3xl font-normal text-[#302b27] sm:text-[36px]">
          Subscribe
        </h2>

        <p className="mx-auto mt-4 max-w-[400px] text-[15px] leading-7 text-[#302b27] sm:text-base">
          Sign up to our quarterly newsletter to receive news
          and updates.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email Address"
            className="h-[65px] min-w-0 flex-1 border border-[#dedbd8] bg-white px-8 text-sm text-[#302b27] outline-none placeholder:text-[#b5b1b1] focus:border-[#302b27]"
          />

          <button
            type="submit"
            className="h-[65px] bg-[#302b27] px-8 text-base font-semibold text-white transition-colors hover:bg-[#51463e]"
          >
            Sign Up
          </button>
        </form>

        {message && (
          <p className="mt-4 text-sm text-[#51463e]" role="status">
            {message}
          </p>
        )}

        <p className="mt-10 text-sm text-[#817970]">
          We respect your privacy.
        </p>
      </div>
    </section>
  );
}
