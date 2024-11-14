import { useState } from "react";

const FAQSection = () => {
  const [openStates, setOpenStates] = useState(
    Array(4).fill(true) 
  );

  const toggleAnswer = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };

  const questions = [
    {
      question: "Personalizes Your Application",
      answer:
        "Our generator helps you craft a unique cover letter, introducing yourself and explaining your interest in the position.",
    },
    {
      question: "Saves Time and Effort",
      answer:
        "Thanks to Resume.ai, cover letter generator, you don’t have to worry about what to write. Just answer a few simple questions and we will create a format based on your needs.",
    },
    {
      question: "Diverse & Unique Templates",
      answer:
        "Every cover letter template in our builder provides a unique aesthetic that can be used for almost any job opportunity.",
    },
    {
      question: "Easy to Use",
      answer:
        "We will guide you every step of the way so you can feel confident that you are creating the best possible cover letter with our generator.",
    },
  ];

  return (
    <div className="bg-[#EFF6FE] ">
      <div className="bg-[#EFF6FE] justify-between mx-auto max-w-screen-xl px-4 md:px-8 lg:px-2 space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex flex-col items-center p-6">
          <h1 className="text-2xl md:text-3xl font-bold text-center pt-5 pb-6 md:pb-14 lg:pb-20 text-[#1F284F]">
            Why Use Resume.ai Cover Letter Generator?
          </h1>
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Resume Generator"
              className="w-full md:w-1/2 object-cover md:order-1 order-2 pt-10"
            />
            <div className="w-full md:w-1/2 flex flex-col space-y-4 order-1 md:order-2 ">
              {questions.map((item, index) => (
                <div
                  key={index}
                  className="border-b pb-4 bg-white border-[#E1E8F0] p-4 rounded-[16px] shadow-md"
                >
                  <div
                    className="flex justify-between items-center cursor-pointer "
                    onClick={() => toggleAnswer(index)}
                  >
                    <h2 className="text-lg font-semibold">{item.question}</h2>
                    <span className="transform transition-transform">
                      {openStates[index] ? "▼" : "►"}
                    </span>
                  </div>
                  <div
                    className={`mt-2 text-gray-700 transition-all duration-300 ${
                      openStates[index]
                        ? "max-h-full"
                        : "max-h-0 overflow-hidden"
                    }`}
                    style={{ minHeight: openStates[index] ? "50px" : "0px" }}
                  >
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
