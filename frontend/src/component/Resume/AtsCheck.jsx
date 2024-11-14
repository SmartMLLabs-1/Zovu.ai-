const AtsCheck = () => {
  return (
    <div className="bg-[#FAFBFC] py-32">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between mx-auto max-w-screen-xl px-4 md:px-8 lg:px-16 space-y-8 md:space-y-0 md:space-x-8 ">
        <div className="w-full md:w-1/2 py-9 md:py-0">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Placeholder"
            className="w-full h-auto"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left ">
          <h1 className="text-xl md:text-4xl lg:text-[32px] font-semibold mb-4 text-[#1F284F]">
            Perform an ATS compatibility check
          </h1>
          <p className="text-base md:text-[16px] text-[#575757] max-w-[500px] mx-auto md:mx-0">
            We score your resume&apos;s ATS compatibility by assessing its
            parsability. We&apos;ve reverse-engineered top applicant tracking
            systems to check for skills, keywords, readable contact info, file
            type, and length. You&apos;ll receive suggestions for improvements
            based on this analysis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AtsCheck;
