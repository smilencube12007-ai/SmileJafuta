const DonateDirectly = () => {
  return (
    <section className="bg-white px-6 py-10 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
       
        <h2 className="mb-8 text-3xl font-normal text-gray-800 md:text-4xl">
          Donate Directly:
        </h2>

        
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-20">

          
          <div className="mx-auto w-full max-w-md text-[15px] leading-7 text-gray-700">
            <h3 className="mb-4 font-bold text-gray-900">
              Direct Donation Details
            </h3>

            <div className="mb-5">
              <p className="font-bold text-gray-900">
                Bank Name:
              </p>
              <p>Wells Fargo Bank</p>
            </div>

            <div className="mb-5">
              <p className="font-bold text-gray-900">
                Account Number:
              </p>
              <p>Enter your official account number</p>
            </div>

            <div className="mb-5">
              <p className="font-bold text-gray-900">
                SWIFT Code:
              </p>
              <p>Enter your official SWIFT code</p>
            </div>

            <div className="mb-5">
              <p className="font-bold text-gray-900">
                For Direct Deposit:
              </p>
              <p>Enter your official routing number</p>
            </div>

            <div className="mb-5">
              <p className="font-bold text-gray-900">
                For Wire Transfers:
              </p>
              <p>Enter your official wire transfer details</p>
              <p>Wells Fargo Bank, N.A.</p>
            </div>

            <div className="mb-5">
              <p className="font-bold text-gray-900">
                To Mail a Cheque:
              </p>
              <p>Enter recipient's name</p>
              <p>Enter organization name</p>
              <p>Enter mailing address</p>
              <p>Enter city, state and postal code</p>
            </div>
          </div>

         
          <div className="w-full max-w-xl">
            <h3 className="mb-8 text-2xl font-normal leading-snug text-gray-900">
              When you donate, you are:
            </h3>

            <ul className="list-disc space-y-3 pl-5 text-[15px] leading-7 text-gray-700">
              <li>
                Supporting access to quality healthcare and medical
                resources for underserved communities.
              </li>
              <li>
                Helping vulnerable families access essential treatment
                and health services.
              </li>
              <li>
                Supporting medical education and awareness programs.
              </li>
              <li>
                Strengthening communities through sustainable healthcare
                initiatives.
              </li>
              <li>
                Helping people build healthier and more hopeful futures.
              </li>
            </ul>

            <p className="mt-8 text-2xl leading-snug text-gray-900">
              Be part of our story of hope, resilience, and opportunity
              by making a difference together!
            </p>

            
            <div className="mt-10 flex justify-center md:justify-start">
              <img
                src="/logo.jpeg"
                alt="Jafuta Foundation logo"
                className="h-auto w-52 object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DonateDirectly;