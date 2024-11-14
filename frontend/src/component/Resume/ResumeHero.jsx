const ResumeHero = () => {
  return (
    <div className="bg-[#FAFBFC] ">
      <div className="flex flex-col md:flex-row items-center justify-center py-20 max-w-[1400px] mx-auto px-4">
        <div className="md:w-1/2 p-4">
          <p className="text-[#374151] mb-2">
            <span className="text-[#0070F0]">Resume.ai </span> &gt;&gt; Resume
            Builder
          </p>
          <h1 className="text-4xl font-bold mb-4 md:text-6xl text-[#1F284F] ">
            <span className="block ">The Best Online AI </span>
            <span className="block"> Resume Builder</span>
          </h1>
          <p className="text-base md:text-lg mb-6 max-w-[500px] text-[#575757] text-justify">
            See what our AI resume builder can do for you by trying it for free
            today. We provide fast and easy options that showcase your best to
            employers.
          </p>
          <button className="bg-[#3CBA79] text-white py-2 px-4 rounded-[30px] mb-4  transition hover:scale-90">
            Build My Resume
          </button>
          <p className="text-[#0070F0]">
            3X Faster Job Search | 40% More Job Matches
          </p>
        </div>
        {/* Img Box */}
        <div className="md:w-1/2 p-4 pt-10">
          <img
            src="/resume/ats-resume.png"
            alt="Cover Letter Illustration"
            className="w-full h-auto md:w-[600px] md:h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeHero;
