import { FaDownload } from "react-icons/fa";
import Score from "./Score";
import { useState } from "react";

const AtsResume = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle the dropdown
  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="flex flex-col lg:flex-row py-4 max-w-[1540px] mx-auto mt-12">
      {/* Left section */}
      <div className="w-full lg:w-2/3 bg-blue-50 p-6 lg:mb-0 relative">
        {/* Download Button on Top Right */}
        <div className="absolute top-6 right-6">
          <button className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700">
            <FaDownload className="w-4 h-4" />
          </button>
        </div>

        {/* Top Left Box with Inline Buttons */}
        <div className="inline-flex rounded-md shadow-sm mb-4" role="group">
          {/* Button 1 */}
          <button
            type="button"
            className="flex items-center px-4 py-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700"
          >
            <img
              src="/AtsResume/resume.svg"
              alt="resume"
              className="w-5 h-5 mr-2"
            />
            Resume
          </button>

          {/* Button 2 */}
          <button
            type="button"
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700"
          >
            <img
              src="/AtsResume/coverLetter.svg"
              alt="cover letter"
              className="w-5 h-5 mr-2"
            />
            Cover Letter
          </button>

          {/* Button 3 */}
          <button
            type="button"
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700"
          >
            <img
              src="/AtsResume/jd.svg"
              alt="job description"
              className="w-5 h-5 mr-2"
            />
            Job Description
          </button>
        </div>

        {/* Horizontal Line */}
        <hr className="border-gray-300 mb-4" />

        <h2 className="text-2xl font-medium mb-4">Resume.pdf</h2>
        {/* Embed PDF Viewer */}
        <div className="w-full h-[500px] md:h-[650px]">
          <iframe
            src="/AtsResume/Md_Asif_Resume.pdf"
            title="Resume PDF"
            className="w-full h-full border border-gray-300 rounded-md"
          ></iframe>
        </div>

        {/* Additional Box for Chat GPT Screen */}
        <div className="w-full bg-white shadow-lg p-6 rounded-md mt-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Chat GPT Screen
          </h2>
          {/* Horizontal Line */}
          <hr className="border-gray-300 " />

          {/* White Background Container for Content */}
          <div className="bg-white py-2 ">
            <p className="text-gray-700">
              This section can contain content relevant to a Chat GPT screen,
              such as a simulated chat interface, messages, or other interactive
              text. Adjust as needed based on your design.
            </p>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="w-full lg:w-1/3 bg-white p-6">
        <h3 className="text-xl font-semibold mb-4">Job Title</h3>

        {/* Horizontal Line */}
        <hr className="border-gray-300 mb-4" />

        {/* Score Component */}
        <Score />

        {/* Button Group */}
        <div className="flex space-x-4 mt-4">
          <button className="flex items-center px-4 py-2 bg-[#DBE2F2] rounded-md hover:bg-[#DBE2F2]">
            <img
              src="/AtsResume/resume.svg"
              alt="Icon 1"
              className="w-5 h-5 mr-1"
            />
            <span className="text-gray-800">Report</span>
          </button>
          <button className="flex items-center px-4 py-2 bg-white rounded-md hover:bg-[#DBE2F2]">
            <img
              src="/AtsResume/theme.svg"
              alt="Icon 2"
              className="w-6 h-6 mr-1"
            />
            <span className="text-gray-800">Style</span>
          </button>
          <button className="flex items-center px-4 py-2 bg-white rounded-md hover:bg-[#DBE2F2]">
            <img
              src="/AtsResume/resume.svg"
              alt="Icon 1"
              className="w-5 h-5 mr-1"
            />
            <span className="text-gray-800">Templates</span>
          </button>
        </div>

        {/* Horizontal Line */}
        <hr className="border-gray-300 mb-4 mt-2" />

        {/* Hard Skills Section with Toggle */}
        <div
          className="flex justify-between items-center mb-2 cursor-pointer"
          onClick={handleDropdownClick}
        >
          <h4 className="text-lg font-semibold">Hard Skills</h4>
          <span className="text-gray-400">{isDropdownOpen ? "▲" : "▼"}</span>
        </div>

        {isDropdownOpen && (
          <>
            <p className="text-sm text-gray-500 mb-2">
              4 to 5 skills are missing
            </p>

            {/* Red Line */}
            <hr className="border-red-500 mb-4" />

            {/* Skills List with Icons */}
            <div className="grid grid-cols-1 ">
              {/* Left column with skills */}
              <div>
                <div className="flex justify-between ">
                  <span>Skill 1</span>
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-400 text-white">
                    ✔
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Skill 2</span>
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-500">
                    ✘
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Skill 3</span>
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-500">
                    ✔
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Skill 4</span>
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-500">
                    ✘
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Skill 5</span>
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-500">
                    ✔
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AtsResume;
