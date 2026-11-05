import Home from './components/home'
import Vision from './components/vision'
import Projects from './components/Projects'
import Team from './components/Team'
import BoardOfTrustees from './components/BoardOfTrustees'
import Blog from './components/blog'
import About from './components/About'
import Contact from './components/contact'
import Donate from './components/Donate'
import Footer from "./components/footer";
import Newsletter from "./components/Newsletter";
import ImpactSection from "./components/ImpactSection";
import YouTubeSection from "./components/YouTubeSection";
import OurStory from "./components/OurStory";
import OurPartners from "./components/OurPartners";
import NewsletterSubscribe from "./components/NewsletterSubscribe";



import { BrowserRouter, Route, Routes, Link, useLocation } from 'react-router-dom'
import './App.css'

function AppContent() {
  const { pathname } = useLocation()
  const isHome = pathname === '/' || pathname === '/home'
  const navTextClass = isHome ? 'text-white text-slate-300' : 'text-black'
  const navHoverClass = isHome
    ? 'hover:bg-slate-800 hover:text-white'
    : 'hover:bg-slate-100 hover:text-black'

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`flex flex-wrap items-center gap-2 bg-transparent px-4 py-3 sm:px-6 ${
          isHome ? 'absolute inset-x-0 top-0 z-10 text-white' : ''
        }`}
      >
        
        <Link to="/" aria-label="Jafuta Foundation home" className="mr-auto shrink-0">
          <img
            src=""
            alt="Jafuta Foundation Logo"
            className=" h-16 w-16 object-contain sm:h-40 sm:w-40"
          />
        </Link>
        <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
          <Link className={`${navTextClass} px-3 py-2 text-sm font-medium transition-colors ${isHome ? 'hover:border-b hover:text-white' : 'hover:text-black'} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 sm:text-base`} to="/home">
            Home
          </Link>
          <Link className={`${navTextClass} px-3 py-2 text-sm font-medium transition-colors ${isHome ? 'hover:border-b hover:text-white' : 'hover:text-black'} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 sm:text-base`} to="/vision">
            Our Vision
          </Link>
          <Link className={`${navTextClass} px-3 py-2 text-sm font-medium transition-colors ${isHome ? 'hover:border-b hover:text-white' : 'hover:text-black'} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 sm:text-base`} to="/projects">
            Projects
          </Link>
         <Link className={`${navTextClass} px-3 py-2 text-sm font-medium transition-colors ${isHome ? 'hover:border-b hover:text-white' : 'hover:text-black'} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 sm:text-base`} to="/about">
            About Us
          </Link>
         <Link className={`${navTextClass} px-3 py-2 text-sm font-medium transition-colors ${isHome ? 'hover:border-b hover:text-white' : 'hover:text-black'} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 sm:text-base`} to="/team">
            Our Team
          </Link>
         <Link className={`${navTextClass} px-3 py-2 text-sm font-medium transition-colors ${isHome ? 'hover:border-b hover:text-white' : 'hover:text-black'} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 sm:text-base`} to="/blog">
            Blog
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <a
            aria-label="Facebook"
            className={`${navTextClass} rounded-md p-2 transition-colors ${navHoverClass} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400`}
            href="https://www.facebook.com/"
            rel="noreferrer"
            target="_blank"
          >
            <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2v-2c0-.9.3-1.5 1.6-1.5h1.7V3.2c-.3 0-1.3-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3v3.2h2.8V21h3.4Z" />
            </svg>
          </a>
          <a
            aria-label="Instagram"
            className={`${navTextClass} rounded-md p-2 transition-colors ${navHoverClass} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400`}
            href="https://www.instagram.com/"
            rel="noreferrer"
            target="_blank"
          >
            <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <Link
            to="/donate"
            className=" bg-[#39868E] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300 sm:text-base"
          >
            Donate
          </Link>
        </div>
      </nav>

      <Routes>
       
        <Route path="/home" element={<Home />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/blog"
          element={
            <>
              <Blog />
              <NewsletterSubscribe />
            </>
          }
        />
        <Route
          path="/team"
          element={
            <>
              <Team />
              <BoardOfTrustees />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/coreValues" element={<CoreValues />} />
        <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/impactsection" element={<ImpactSection />} />
          <Route path="/youtubesection" element={<YouTubeSection />} />
          <Route path="/ourstory" element={<OurStory />} />
          <Route path="/ourpartners" element={<OurPartners />} />


      </Routes>
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
