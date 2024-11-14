const Footer = () => {
  return (
    <div className="pt-14 bg-[#EFF6FE]">
      <footer className="bg-[#EFF6FE] text-[#1F284F] py-8 px-4 sm:px-8 lg:px-16">
        <div className="container mx-auto flex flex-wrap lg:flex-nowrap justify-between items-start">
          {/* Logo and Paragraph */}
          <div className="w-full md:w-full lg:w-1/4 mb-8 md:mb-8 lg:mb-0 lg:mr-8">
            <img src="/logo.png" alt="Logo" className="h-5 mb-4" />
            <p className="text-[#1F284F] ">
              Welcome to Resume.ai, your go-to for ATS-friendly resumes and
              cover letters. Our AI crafts professional documents and scores
              your resume for a competitive edge.
            </p>
          </div>

          {/*  Headings and Links */}
          <div className="w-full md:w-full lg:w-3/4 flex flex-wrap lg:flex-nowrap justify-between">
            {/* Box 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 lg:mb-0">
              <h4 className="font-semibold mb-4">Get Started</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-[#1F284F] hover:text-[#3CBA79]">
                    Resume
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#1F284F] hover:text-[#3CBA79]">
                    Cover Letter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#1F284F] hover:text-[#3CBA79]">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            {/* Box 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 lg:mb-0">
              <h4 className="font-semibold mb-4">Resume</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-[#1F284F] hover:text-[#3CBA79]">
                    Build a Resume
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#1F284F] hover:text-[#3CBA79]">
                    Resume Templates
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#1F284F] hover:text-[#3CBA79]">
                    Resume Examples
                  </a>
                </li>
              </ul>
            </div>

            {/* Box 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 lg:mb-0">
              <h4 className="font-semibold mb-4">Cover Letter</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-[#1F284F] hover:text-[#3CBA79]">
                    Create a Cover Letter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#1F284F] hover:text-[#3CBA79]">
                    Cover Letter Templates
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#1F284F] hover:text-[#3CBA79]">
                    Cover Letter Examples
                  </a>
                </li>
              </ul>
            </div>

            {/* Box 4 */}
            <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 lg:mb-0">
              <h4 className="font-semibold mb-4">About Us</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-[#1F284F] hover:text-[#3CBA79]">
                    Company
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#1F284F] hover:text-[#3CBA79]">
                    Reviews
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#1F284F] hover:text-[#3CBA79]">
                    Help
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="container mx-auto mt-8 flex flex-wrap justify-center space-x-4 pt-5">
          <a href="#" title="Facebook">
            <img src="/Social/facebook.png" alt="Facebook" className="h-6" />
          </a>
          <a href="#">
            <img src="/Social/twitter.png" alt="Thread" className="h-6" />
          </a>
          <a href="#">
            <img src="/Social/instagram.png" alt="instagram" className="h-6" />
          </a>
          <a href="#">
            <img src="/Social/youtube.png" alt="Youtube" className="h-6" />
          </a>
          <a href="#">
            <img src="/Social/linkedin.png" alt="Linkedin" className="h-6" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
