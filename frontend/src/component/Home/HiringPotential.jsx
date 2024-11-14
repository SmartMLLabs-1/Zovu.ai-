const HiringPotential = () => {
  return (
    <div className="bg-[#EFF6FE] py-32">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between mx-auto max-w-screen-xl px-4 md:px-8 lg:px-16 space-y-8 md:space-y-0 md:space-x-8 ">
        {/*  Image */}
        <div className="w-full md:w-1/2 py-9 md:py-0">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Placeholder"
            className="w-full h-auto"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left ">
          <h1 className="text-3xl md:text-4xl lg:text-[32px] font-bold mb-4 text-[#1F284F] ">
            Maximize Your Hiring Potential
          </h1>
          <p className="text-base md:text-[16px] text-[#575757] max-w-[500px] mx-auto md:mx-0">
            Discover expert tips and strategies to optimize your resume, stand
            out from the competition, and land your dream job Our solutions are
            designed to enhance your recruitment strategy and ensure you find
            the perfect fit for your organization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HiringPotential;
