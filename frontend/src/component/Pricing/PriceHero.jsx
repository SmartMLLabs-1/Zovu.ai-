const PriceHero = () => {
  return (
    <div className="relative bg-[#FAFBFC] min-h-screen flex items-center justify-center">
      {/* <div className="absolute top-[4.6rem] left-0  w-16 h-32 md:w-[100px] md:h-[200px] bg-[#673AB7] rounded-r-full"></div>

      <div className="absolute bottom-5 right-0  w-16 h-32 md:w-[100px] md:h-[200px] bg-[#673AB7] rounded-l-full"></div> */}
      <div className="absolute top-20 left-10 w-8 h-8 bg-[#0070F0] rounded-full hidden md:block"></div>
      <div className="absolute top-28 left-20 w-6 h-6 bg-[#afd1f8] rounded-full hidden md:block"></div>
      <div className="absolute bottom-5 left-0 w-20 h-40 bg-[#afd1f8] rounded-r-full opacity-45"></div>
      <div className="text-center p-4">
        <h1 className="text-4xl font-bold mb-4 md:text-6xl lg:text-7xl mx-auto max-w-[1100px] pb-5 text-[#1F284F]">
          Choose the Right Plan for Your Success
        </h1>
        <p className="text-lg mb-6 mx-auto max-w-[700px] text-[#575757]">
          Whether you&apos;re just starting your job search or looking to
          advance your career, our plans provide the tools and resources you
          need to create standout resumes and cover letters.
        </p>
        <button className="bg-[#3CBA79] text-white px-6 py-3 rounded-[30px]  transition hover:scale-90 text-lg md:text-xl font-semibold ">
          Choose Your Plan
        </button>
      </div>
    </div>
  );
};

export default PriceHero;
