import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#594d40] text-white px-8 md:px-12 pt-12 pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        
        <div>
          <p className="font-bold leading-7">
            Jafuta Foundation<br />
            Elephant’s Walk,<br />
            273 Adam Stander Road,<br />
            Victoria Falls, Zimbabwe<br />
            PVO Registration No: 201/26
          </p>

          <img
            src=""
            alt="Jafuta Foundation logo"
            className="mt-12 w-[202px] h-[183px] object-contain"
          />
        </div>

       
        <div className="pt-0 lg:pt-9">
          <p className="font-bold leading-7">
            Jafuta Foundation<br />
            525 Bingham Knoll,<br />
            Jacksonville, OR 97530<br />
            Registered 501(c)3
          </p>

          <p className="leading-7">
            <span className="font-bold">Ein No.</span> 81-3902811
          </p>

          <p className="mt-4">
            Email:{" "}
            <a
              href="mailto:gcvj@jafuta.org"
              className="hover:underline"
            >
              gcvj@jafuta.org
            </a>
          </p>

          <div className="pb-5 flex items-center gap-4 mt-10">
            <a
              href="https://www.facebook.com/"
              aria-label="Facebook"
              className="flex h-6 w-6 items-center justify-center text-xl font-bold leading-none hover:text-gray-300"
            >
              f
            </a>

            <a
              href="https://www.instagram.com/"
              aria-label="Instagram"
              className="flex h-6 w-6 items-center justify-center hover:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="block"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>

        
        <div>
          <h2 className="text-2xl mb-6">About</h2>

          <ul className="space-y-2 underline underline-offset-2">
            <li><Link to="/vision">Our Vision</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/team">Our Team</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/donate">Donate</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

       
        <div>
          <h2 className="text-2xl mb-6">Projects</h2>

          <ul className="space-y-2 underline underline-offset-2">
            <li>
              <Link to="/projects">
                Women &amp; Youth Empowerment
              </Link>
            </li>
            <li>
              <Link to="/projects">
                Education &amp; Digital Access
              </Link>
            </li>
            <li>
              <Link to="/projects">
                Water, Sanitation (WASH) &amp; Health
              </Link>
            </li>
            <li>
              <Link to="/projects">
                Livelihoods &amp; Food Security
              </Link>
            </li>
            <li>
              <Link to="/projects">
                Conservation &amp; Community Co-Existence
              </Link>
            </li>
            <li>
              <Link to="/projects">
                Creativity, Arts &amp; Culture
              </Link>
            </li>
          </ul>
        </div>

      </div>

    
      <div className="text-center mt-12">
        © 2026 Jafuta Foundation
      </div>
    </footer>
  );
}