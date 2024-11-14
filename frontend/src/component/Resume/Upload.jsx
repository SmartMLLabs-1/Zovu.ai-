import { useRef, useState } from "react";
import "./Upload.css";
import { Link } from "react-router-dom";

const Upload = () => {
  const fileInputRef = useRef(null);
  const [resumeName, setResumeName] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [showTextModal, setShowTextModal] = useState(false);
  const [tempJobDescription, setTempJobDescription] = useState("");

  const handleFileUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setResumeName(file.name);
    }
  };

  const handlePasteDescriptionClick = () => {
    setTempJobDescription(jobDescription);
    setShowTextModal(true);
  };

  const handleCloseModal = () => {
    setShowTextModal(false);
  };

  const handleSaveDescription = () => {
    setJobDescription(tempJobDescription);
    setShowTextModal(false);
  };

  const handleScanResumeClick = () => {
    if (!resumeName || !jobDescription) {
      alert(
        "Please make sure to upload your resume and enter a job description before scanning."
      );
      return;
    }
    // Implement scanning functionality here
  };

  return (
    <div className="bg-[#FAFBFC]">
      <div className="max-w-4xl mx-auto p-6 py-20 bg-[#FAFBFC]">
        <h1 className="text-3xl font-bold text-center mb-4 text-[#374151]">
          Upload Your Resume!
        </h1>
        <p className="text-center mb-8 text-[#575757]">
          It seems like you have not uploaded your resume till now.
        </p>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Resume Upload Box */}
          <div className="border-2 border-dashed border-[#3CBA79] p-6 rounded-lg text-center flex-1 flex flex-col items-center justify-center h-[300px] bg-[#EFF6FE]">
            <h2 className="text-xl font-semibold mb-2">Resume</h2>
            {resumeName ? (
              <>
                <p className="text-green-600 mb-4">{resumeName}</p>
                <button
                  onClick={handleFileUploadClick}
                  className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-[30px] bg-white hover:bg-gray-50 transition"
                >
                  <img
                    src="/resume/Upload cloud.png"
                    alt="Upload Icon"
                    className="w-5 h-5 mr-2"
                  />
                  <span>Upload Another Resume</span>
                </button>
              </>
            ) : (
              <>
                <p className="mb-4">Drag-n-drop or upload your resume</p>
                <button
                  onClick={handleFileUploadClick}
                  className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-[30px] bg-white hover:bg-gray-50 transition"
                >
                  <img
                    src="/resume/Upload cloud.png"
                    alt="Upload Icon"
                    className="w-5 h-5 mr-2"
                  />
                  <span>Upload Resume</span>
                </button>
              </>
            )}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept=".doc, .docx, .pdf"
            />
          </div>

          {/* Job Description Box */}
          <div
            onClick={handlePasteDescriptionClick}
            className={`border-2 border-dashed border-[#3CBA79] p-6 rounded-lg flex-1 bg-[#EFF6FE] cursor-pointer ${
              jobDescription
                ? "text-left overflow-y-auto max-h-[300px]"
                : "text-center flex flex-col items-center justify-center h-[300px]"
            }`}
          >
            <h2 className="text-xl font-semibold mb-2">Job Description</h2>
            {jobDescription ? (
              <p
                className="text-[#575757] break-words rounded text-justify relative"
                title="Click to Edit"
              >
                {jobDescription}
                <span
                  style={{
                    display: "inline-block",
                    animation: "blink 1s step-end infinite",
                    opacity: 1,
                  }}
                >
                  |
                </span>
              </p>
            ) : (
              <>
                <p className="mb-4">Paste or type the job description here</p>
                <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-[30px] bg-white hover:bg-gray-50 transition">
                  <img
                    src="/resume/add.png"
                    alt="Job Description Icon"
                    className="w-5 h-5 mr-2"
                  />
                  <span>Paste Job Description</span>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Scan Your Resume Button */}
        <div className="flex justify-center mt-8">
          <Link
            to={resumeName && jobDescription ? "/atsresume" : "#"}
            onClick={handleScanResumeClick}
            className={`px-6 py-3 font-semibold rounded-[30px] transition ${
              resumeName && jobDescription
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Scan Your Resume
          </Link>
        </div>

        {/* Text Modal */}
        {showTextModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-11/12 sm:w-96">
              <h2 className="text-xl font-semibold mb-4">
                Paste Job Description
              </h2>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-lg"
                rows="5"
                value={tempJobDescription}
                onChange={(e) => setTempJobDescription(e.target.value)}
                placeholder="Type or paste the job description here..."
              />
              <div className="flex justify-end mt-4">
                <button
                  onClick={handleCloseModal}
                  className="px-4 py-2 bg-gray-300 rounded-lg mr-2 hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveDescription}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Upload;
