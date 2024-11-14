const PricingBanner = () => {
  return (
    <div className="bg-[#EFF6FE] py-10 md:pt-20 text-white px-4 sm:px-6">
      <div
        className="bg-[#1F384F] flex flex-col md:flex-row items-center justify-center md:justify-between mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12 py-14 space-y-6 md:space-y-0 space-x-0 md:space-x-10 border "
        style={{ borderRadius: "20px 0px 20px 0px" }}
      >
        <div className="w-full md:w-1/2 hidden md:block">
          <img
            src="https://via.placeholder.com/800x400"
            alt="Cover Letter Generator"
            className="w-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-3xl font-bold mb-4">Pick Your Path to Success</h1>
          <p className="text-lg mb-6">
            Our flexible pricing options are designed to fit your needs, whether
            you&apos;re just starting out or looking to advance your career.
            Select the plan that works best for you and start building a
            standout resume today!
          </p>
          <button className="bg-[#3CBA79] text-white font-semibold py-2 px-6 rounded-[30px] hover:scale-90 transition">
            Build My Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingBanner;
