const services = [
  {
    img: "/resume.png",
    title: "ATS Resume Builder",
    description:
      "With Resume.ai, you can create a resume that not only passes through Applicant Tracking Systems with ease but also catches the eye of recruiters.",
    link: "#",
    linkText: "Build Your Resume",
  },
  {
    img: "/letter.png",
    title: "Cover Letter Builder",
    description:
      "Create a compelling cover letter that grabs the recruiter's attention and showcases your unique qualifications.",
    link: "#",
    linkText: "Craft Your Cover Letter",
  },
  {
    img: "/human-resources.png",
    title: "Resume Analytics",
    description:
      "Analyze your resume’s strengths and weaknesses with our advanced resume scoring system. Get personalized feedback to improve your chances of getting hired.",
    link: "#",
    linkText: "Score Your Resume",
  },
];

const Services = () => {
  return (
    <div className="bg-[#EFF6FE] py-10">
      <div className="container mx-auto max-w-screen-xl px-4">
        <h1 className="text-3xl font-bold text-center mb-8 md:text-5xl mx-auto max-w-[600px] pb-12 text-[#1F284F]">
          Unlock Your Full Potential with Resume.ai
        </h1>

        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="order-2 md:order-1 md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0 pt-20">
            <img
              src="/resume1.webp"
              alt="Service"
              className="w-full md:w-3/4"
            />
          </div>

          <div className="order-1 md:order-2 md:w-1/2 space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-6 rounded-[16px] border border-[#E1E8F0] "
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-[#F5F5F5] rounded-full">
                    <img
                      src={service.img}
                      alt={`Logo ${index + 1}`}
                      className="w-8 h-8"
                    />
                  </div>
                  <h2 className="text-xl font-semibold ml-4">
                    {service.title}
                  </h2>
                </div>
                <p className="text-[#575757] mb-4">{service.description}</p>
                <a
                  href={service.link}
                  className="text-[#0070F0] hover:underline"
                >
                  {service.linkText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
