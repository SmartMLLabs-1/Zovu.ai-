import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="fixed top-0 right-0 left-0 z-50 flex justify-between items-center px-4 lg:px-10 w-full h-[70px] bg-[#FAFBFC]">
        <div>
          <img src="/logo.png" alt="Resume.ai Logo" className="h-[20px]" />
        </div>
        <div className="hidden lg:flex items-center gap-8 text-[#1F284F] font-semibold">
          <nav className="flex gap-6 text-sm sm:text-base lg:text-lg ">
            <Link to="/" className="hover:text-[#3CBA79] transition">
              Home
            </Link>
            <Link to="/resume" className="hover:text-[#3CBA79] transition">
              ATS Resume
            </Link>
            <Link to="/cover" className="hover:text-[#3CBA79] transition">
              Cover Letter
            </Link>
            <Link to="/pricing" className="hover:text-[#3CBA79] transition">
              Pricing
            </Link>
          </nav>
          <a href="/signup" rel="noopener noreferrer" className="inline-block">
            <button className="bg-[#3CBA79] rounded-[30px] py-2 px-4 text-white transition hover:scale-90">
              Get Started
            </button>
          </a>
        </div>
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? (
              <span className="block w-6 h-6 relative">
                <span className="absolute block w-full h-[2px] bg-black rotate-45 top-1/2 transform -translate-y-1/2" />
                <span className="absolute block w-full h-[2px] bg-black -rotate-45 top-1/2 transform -translate-y-1/2" />
              </span>
            ) : (
              "☰"
            )}
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 z-40 h-full w-[250px] bg-[#FAFBFC] transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex flex-col h-full justify-between">
          <div className="flex flex-col justify-center gap-8 pt-[6.5rem] px-10">
            <Link
              to="/"
              className="text-2xl hover:text-[#3CBA79] transition"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/resume"
              className="text-2xl hover:text-[#3CBA79] transition"
              onClick={toggleMenu}
            >
              ATS Resume
            </Link>
            <Link
              to="/cover"
              className="text-2xl hover:text-[#3CBA79] transition"
              onClick={toggleMenu}
            >
              Cover Letter
            </Link>
            <Link
              to="/pricing"
              className="text-2xl hover:text-[#3CBA79] transition"
              onClick={toggleMenu}
            >
              Pricing
            </Link>
          </div>
          <div className="flex justify-center mb-12">
            <a
              href="/signup"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-[#3CBA79] rounded-[30px] py-2 px-4 text-white transition hover:scale-90">
                Get Started
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
