const RewriteResume = () => {
  return (
    <div className=" bg-[#EFF6FE] py-32">
      <div className="flex flex-col md:flex-row items-center justify-between mx-auto max-w-screen-xl px-4 md:px-8 lg:px-16 space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-xl md:text-4xl lg:text-[32px] font-semibold mb-4 text-[#1F284F]">
            Rewrite your resume with AI
          </h2>
          <p className="text-base md:text-[16px] text-[#575757] max-w-[490px] mx-auto md:mx-0">
            Get your resume rewritten by the world’s best AI (ChatGPT 4.0) with
            tailored prompts and a fine-tuned model based on your resume and the
            job ad. Save time with content suggestions, generate a resume
            summary or objective, receive industry-specific skill
            recommendations, and eliminate buzzwords and irrelevant content.
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

export default RewriteResume;
