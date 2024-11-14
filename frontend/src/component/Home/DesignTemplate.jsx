const DesignTemplate = () => {
  return (
    <div className="bg-[#FAFBFD] py-32">
      <div className="flex flex-col md:flex-row items-center justify-between mx-auto max-w-screen-xl px-4 md:px-8 lg:px-16 space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-[32px] font-bold mb-4 text-[#1F284F]">
            Professionally Designed Templates
          </h1>
          <p className="text-base md:text-[16px] text-[#575757] max-w-[490px] mx-auto md:mx-0 ">
            Choose from a variety of modern, ATS-friendly resume templates to
            create a resume that stands out.Our templates are designed not only
            to catch the eye of recruiters but also to pass seamlessly through
            Applicant Tracking Systems (ATS).
          </p>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Placeholder"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default DesignTemplate;
