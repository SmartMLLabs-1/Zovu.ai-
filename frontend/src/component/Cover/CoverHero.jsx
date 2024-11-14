const CoverHero = () => {
  return (
    <div className="bg-[#FAFBFC]">
      <div className="flex flex-col md:flex-row items-center justify-center py-16 max-w-[1400px] mx-auto px-4">
        <div className="md:w-1/2 p-4">
          <p className="text-[#374151] mb-2">
            <span className="text-[#0070F0]">Resume.ai </span> &gt;&gt; Cover
            Letter Builder
          </p>
          <h1 className="text-4xl font-bold mb-4 md:text-6xl text-[#1F284F] ">
            <span className="block">Fast & Easy Cover</span>
            <span className="block"> Letter Generator</span>
          </h1>
          <p className="text-base md:text-lg mb-6 max-w-[500px] text-[#575757] text-justify">
            Save yourself valuable time and energy with our AI cover letter
            generator. In just a few simple steps you’ll have a cover letter
            that will impress any potential employer.
          </p>
          <button className="bg-[#3CBA79] text-white py-2 px-4 rounded-[30px] mb-4 transition hover:scale-90">
            Build My Cover Letter
          </button>
          <p className="text-[#0070F0]">
            3X Faster Job Search | 40% More Job Matches
          </p>
        </div>
        {/* Img Box */}
        <div className="md:w-1/2 p-4">
          <img
            src="/cover/Cover.png"
            alt="Cover Letter Illustration"
            className="w-full h-auto md:w-[600px] md:h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CoverHero;
