const BestBuilder = () => {
  return (
    <div className="bg-[#EFF6FE] py-32">
      <div className="flex flex-col md:flex-row items-center justify-between mx-auto max-w-screen-xl px-4 md:px-8 lg:px-16 space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-xl md:text-4xl lg:text-[32px] font-semibold mb-4 text-[#1F284F]">
            Use the industry’s leading resume builder
          </h2>
          <p className="text-base md:text-[16px] text-[#575757] max-w-[490px] mx-auto md:mx-0">
            Elevate your job application with the industry&apos;s leading resume
            builder. Designed to streamline the process, our tool offers
            advanced features that ensure your resume stands out. Whether
            you&apos;re crafting a new resume or refining an existing one, our
            builder provides the best resources to showcase your skills,
            experience, and qualifications, helping you make a strong impression
            on potential employers.
          </p>
        </div>

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

export default BestBuilder;
