const Steps = () => {
  const steps = [
    {
      id: 1,
      imgSrc: "/resume/resume.svg",
      description: "Upload Your Resume",
    },
    {
      id: 2,
      imgSrc: "/resume/job.svg",
      description: "Copy and Paste The Job Description",
    },
    {
      id: 3,
      imgSrc: "/resume/optimize.svg",
      description: "Optimize Resume",
    },
  ];

  return (
    <div className="bg-[#EFF6FE]">
      <div className="flex flex-col items-center py-12 px-4 bg-[#EFF6FE] max-w-[1440px] mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 text-[#1F284F]">
          Get Your Dream Job: Build Your Resume in 3 Steps
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-4 lg:gap-8 mb-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center w-full md:w-1/2 lg:w-72"
            >
              <div className="bg-[#FAFBFD] w-full h-[250px] flex items-center justify-center ">
                <img
                  src={step.imgSrc}
                  alt={`Step ${step.id}`}
                  className="max-w-full max-h-full object-contain h-24"
                />
              </div>
              <div className="flex items-center justify-center w-12 h-12 mt-4 rounded-full bg-[#3CBA79] text-white font-bold text-lg">
                {step.id}
              </div>
              <p className="text-sm md:text-base mt-4">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
