import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faGlobe,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
const Template8 = () => {
  const [languages, setLanguages] = useState({
    english: 100,
    spanish: 60,
    german: 80,
  });

  const handleSliderChange = (language, value) => {
    setLanguages({ ...languages, [language]: value });
  };

  const getProficiencyLabel = (value) => {
    if (value === 100) return "Native";
    if (value === 98 || value >= 70) return "Advanced";
    if (value >= 40) return "Intermediate";
    return "Beginner";
  };

  return (
    <div className="w-[21cm] h-[29.7cm] bg-white m-auto my-2 border-none box-border">
      <div className="flex w-full h-full">
        {/* Left Side */}
        <div className="w-[65%] px-1 box-border">
          <div className="p-4">
            <div className="text-4xl font-bold text-[#333]">John Doe</div>
            <div className="text-2xl text-blue-500 ">
              Experienced Project Manager
            </div>

            <div className="mt-4">
              <div className="flex justify-start gap-6">
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faPhone} className="text-blue-500" />
                  <span className="text-sm font-medium">+123 456 789</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-blue-500"
                  />
                  <span className="text-sm font-medium">email@example.com</span>
                </div>
              </div>
              <div className="flex justify-start gap-6 mt-2">
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faGlobe} className="text-blue-500" />
                  <span className="text-sm font-medium">www.example.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-blue-500"
                  />
                  <span className="text-sm font-medium">
                    1234 Address St, City
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-sm mb-3">
            <h2 className="p-2 text-xl mb-1 box-border font-semibold uppercase">
              Summary
            </h2>
            <hr className="w-full border-gray-400 mb-2 " />
            <p className="px-3">
              Motivated project manager with 5 years of experience leading
              diverse teams to complete projects on time and within scope.
              Skilled in both Agile and Waterfall methodologies, with a focus on
              optimizing workflows and ensuring clear communication across all
              levels. Dedicated to delivering successful outcomes and driving
              continuous improvement.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="p-2 text-xl mb-1 box-border font-semibold uppercase">
              Professional Experience
            </h2>
            <hr className="w-full border-gray-400 mb-2" />
            <div className="px-5">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-[16px] font-medium">
                  Project Manager at ABC Corp
                </h3>
                <span className="text-xs text-[#777]">Jan 2020 - Present</span>
              </div>
              <ul className="list-disc pl-5 text-sm">
                <li>
                  Led multiple cross-functional teams to deliver complex
                  projects on time and within budget.
                </li>
                <li>
                  Implemented Agile methodologies to streamline project
                  processes and enhance team productivity.
                </li>
                <li>
                  Developed and maintained project plans, including timelines,
                  budgets, and resource allocation.
                </li>
                <li>
                  Facilitated communication between stakeholders and team
                  members to ensure alignment on project goals.
                </li>
              </ul>
            </div>
            <div className="px-5 mt-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-[16px] font-medium">
                  Assistant Project Manager at XYZ Ltd
                </h3>
                <span className="text-xs text-[#777]">Jan 2018 - Dec 2019</span>
              </div>
              <ul className="list-disc pl-5 text-sm">
                <li>
                  Supported project managers in planning and executing project
                  tasks.
                </li>
                <li>
                  Coordinated with various departments to ensure timely delivery
                  of project components.
                </li>
                <li>
                  Assisted in monitoring project progress and addressing any
                  issues or risks.
                </li>
                <li>
                  Prepared detailed project reports and documentation for
                  stakeholder review.
                </li>
              </ul>
            </div>
            <div className="px-5 mt-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-[16px] font-medium">
                  Project Coordinator at DEF Inc
                </h3>
                <span className="text-xs text-[#777]">Jan 2016 - Dec 2017</span>
              </div>
              <ul className="list-disc pl-5 text-sm">
                <li>
                  Assisted in the development and execution of project plans.
                </li>
                <li>
                  Organized and managed project meetings, including agendas and
                  follow-up actions.
                </li>
                <li>
                  Tracked project milestones and deliverables to ensure
                  adherence to schedules.
                </li>
                <li>
                  Communicated with vendors and stakeholders to ensure project
                  requirements were met.
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="p-2 text-xl mb-1 box-border font-semibold">
              Education
            </h2>
            <hr className="w-full border-gray-400 mb-2" />
            <div className="px-5">
              <div className="flex justify-between items-center">
                <h3 className="text-[16px] font-medium">
                  Industrial Engineering
                </h3>
                <span className="text-xs text-[#777]">2014 - 2018</span>
              </div>
              <p className="mb-2 text-xs text-blue-500">
                University of Technology, Cityville
              </p>
            </div>
            <div className="px-5 mt-2">
              <div className="flex justify-between items-center">
                <h3 className="text-[16px] font-medium">
                  Industrial Engineering
                </h3>
                <span className="text-xs text-[#777]">2014 - 2018</span>
              </div>
              <p className="mb-2 text-xs text-blue-500">
                University of Technology, Cityville
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-[35%] bg-blue-950 text-white flex flex-col p-5 box-border">
          {/* Profile Picture */}
          <div className="profile-pic w-[130px] h-[130px] my-5 mx-auto">
            <img
              src="/avatar.png"
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          {/* Strengths Section */}
          <h2 className="text-xl font-semibold uppercase">Strengths</h2>
          <hr className="w-full border-gray-400 mb-2" />
          <h3 className="text-lg font-medium mb-1">Strategic Planner</h3>
          <p className="text-sm pb-2 text-gray-300">
            Skilled in creating effective strategies to achieve business goals
            while anticipating challenges.
          </p>
          <h3 className="text-lg font-medium mb-1">Flexible</h3>
          <p className="text-sm pb-3 text-gray-300">
            Adaptable to new environments and quick to adjust to changing
            priorities and technologies.
          </p>

          {/* Achievements Section */}
          <h2 className="text-xl font-semibold uppercase">Achievements</h2>
          <hr className="w-full border-gray-400 mb-2" />
          <h3 className="text-lg font-medium mb-1">Project Leadership</h3>
          <p className="text-sm pb-2 text-gray-300">
            Led a team to deliver a successful web application that increased
            client engagement by 30%.
          </p>
          <h3 className="text-lg font-medium mb-1">Award Recognition</h3>
          <p className="text-sm pb-2 text-gray-300">
            Received &apos;Employee of the Year&apos; for exceptional
            contributions to software development and innovation.
          </p>

          {/* Skills Section */}
          <h2 className="text-xl font-semibold uppercase">Skills</h2>
          <hr className="w-full border-gray-400 mb-2" />
          <p className="mb-4 text-gray-300">
            Product Development, Scrum, SQL, Jira
          </p>

          {/* Languages Section */}
          <h2 className="text-xl font-semibold uppercase">Languages</h2>
          <hr className="w-full border-gray-400 mb-2" />

          {/* Language Proficiency Bars */}
          <div className="mb-4">
            {/* English */}
            <div className="mb-4">
              <div className="flex justify-between">
                <h3 className="text-lg font-medium">English</h3>
                <span>{getProficiencyLabel(languages.english)}</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={languages.english}
                onChange={(e) => handleSliderChange("english", e.target.value)}
                className="w-full appearance-none bg-blue-500 h-2 rounded-lg slider-thumb"
              />
            </div>

            {/* Spanish */}
            <div className="mb-4">
              <div className="flex justify-between">
                <h3 className="text-lg font-medium">Spanish</h3>
                <span>{getProficiencyLabel(languages.spanish)}</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={languages.spanish}
                onChange={(e) => handleSliderChange("spanish", e.target.value)}
                className="w-full appearance-none bg-blue-500 h-2 rounded-lg slider-thumb"
              />
            </div>

            {/* German */}
            <div className="mb-4">
              <div className="flex justify-between">
                <h3 className="text-lg font-medium">German</h3>
                <span>{getProficiencyLabel(languages.german)}</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={languages.german}
                onChange={(e) => handleSliderChange("german", e.target.value)}
                className="w-full appearance-none bg-blue-500 h-2 rounded-lg slider-thumb"
              />
            </div>
          </div>

          <style>
            {`
    .slider-thumb::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: white;
      cursor: pointer;
    }
    .slider-thumb::-moz-range-thumb {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: white;
      cursor: pointer;
    }
  `}
          </style>
        </div>
      </div>
    </div>
  );
};

export default Template8;
