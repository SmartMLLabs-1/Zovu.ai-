const KeyFeatures = () => {
  return (
    <div className="bg-[#FAFBFC] ">
      <div className=" bg-[#FAFBFC]  flex flex-wrap justify-between p-6 mx-auto max-w-screen-xl py-10 ">
        <div className="w-full lg:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4 text-[#1F284F]">
            Why Choose Resume.ai ?
          </h2>
          <div className="flex flex-col space-y-2">
            <a href="#" className="text-[#0070F0] hover:underline">
              Expertly-crafted Templates
            </a>
            <a href="#" className="text-[#0070F0] hover:underline">
              Personalized Recommendations
            </a>
            <a href="#" className="text-[#0070F0] hover:underline">
              Comprehensive Feedback
            </a>
            <a href="#" className="text-[#0070F0] hover:underline">
              Affordable Pricing
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4 text-[#1F284F]">
            Key Features <br />{" "}
            <span className="text-[#0070F0]">Crafted By Experts</span>
          </h2>
          <p className="mb-4  max-w-[500px] text-[#575757] ">
            Our team of resume experts and career coaches has designed templates
            and tools to help you create a resume that stands out.
          </p>
          <p className="mb-4 max-w-[500px] text-[#575757]">
            Our AI analyzes job descriptions and provides personalized
            suggestions to optimize your resume for the role.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-[#0070F0] hover:underline">
              Resume Builder
            </a>
            <a href="#" className="text-[#0070F0] hover:underline">
              Cover Letter Builder
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
