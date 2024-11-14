const Home = () => {
  return (
    <div className="relative bg-[#FAFBFC] min-h-screen flex items-center justify-center">
      {/*  Top Left */}
      <div className="absolute top-20 left-10 w-8 h-8 bg-[#0070F0] rounded-full hidden md:block"></div>
      <div className="absolute top-28 left-20 w-6 h-6 bg-[#afd1f8] rounded-full hidden md:block"></div>

      {/* Right Semicircle */}
      <div className="absolute bottom-5 left-0 w-20 h-40 bg-[#afd1f8] rounded-r-full opacity-45"></div>

      {/*  Right Bottom */}
      <div className="absolute bottom-10 right-10 w-8 h-8 bg-[#5956E9] rounded-full "></div>
      <div className="absolute bottom-20 right-20 w-6 h-6 bg-[#0070F0] rounded-full hidden md:block"></div>

      <div className="text-center p-4">
        <h1 className="text-4xl font-bold mb-4 md:text-6xl lg:text-7xl mx-auto max-w-[1100px] pb-5 text-[#1F284F]">
          Create an AI-Powered Resume for Success
        </h1>
        <p className="text-lg mb-6 mx-auto max-w-[700px] text-[#575757]">
          Resume.ai is the ultimate AI-powered resume and cover letter creating
          tool. Our advanced algorithms generate ATS-friendly resumes and cover
          letters, helping you stand out and land your dream job.
        </p>
        <button className="bg-[#3CBA79] text-white px-6 py-3 rounded-[30px] transition text-lg md:text-xl font-semibold hover:scale-90">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Home;
