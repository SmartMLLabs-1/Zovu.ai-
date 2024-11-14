import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const Template7 = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      {/* A4 size page  */}
      <div className="w-[210mm] h-[297mm] bg-white shadow-xl relative overflow-hidden ">
        {/* Header Section */}
        <div className="w-full h-[170px] bg-[#751b2d] flex items-center relative mb-10">
          <div className="absolute left-20 top-[40px] w-48 h-48 rounded-full overflow-hidden border-2 border-white">
            <img
              src="/avatar.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-80 text-[#eae0e2]">
            <h1 className="text-5xl font-bold">HOWARD ONG</h1>
            <h2 className="text-3xl font-semibold mt-2">Financial Analyst</h2>
          </div>
        </div>

        <div className="flex gap-8 px-10">
          {/* First Column */}
          <div className="w-1/3 pr-6">
            {/* My Contact Section */}
            <div className="mb-5 pt-14">
              <h3 className="text-xl font-bold mb-4 text-[#751b2d] relative inline-block after:content-[''] after:block after:h-[2px] after:w-full after:bg-[#751b2d] after:mt-1">
                My Contact
              </h3>

              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="mr-2 text-gray-700"
                  />{" "}
                  hello@reallygreatsite.com
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="mr-2 text-gray-700"
                  />{" "}
                  +123-456-7890
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="mr-2 text-gray-700"
                  />{" "}
                  123 Anywhere St
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faGlobe}
                    className="mr-2 text-gray-700"
                  />{" "}
                  www.reallygreatsite.com
                </li>
              </ul>
            </div>

            {/* Hard Skills Section */}
            <div className="mb-5">
              <h3 className="text-xl font-bold mb-4 text-[#751b2d] relative inline-block after:content-[''] after:block after:h-[2px] after:w-full after:bg-[#751b2d] after:mt-1">
                Hard Skills
              </h3>

              <ul className="list-disc pl-5 text-gray-700 text-sm">
                <li>Financial Analysis</li>
                <li>Data Modeling</li>
                <li>Risk Management</li>
                <li>Advanced Excel</li>
              </ul>
            </div>

            {/* Soft Skills Section */}
            <div className="mb-5">
              <h3 className="text-xl font-bold mb-4 text-[#751b2d] relative inline-block after:content-[''] after:block after:h-[2px] after:w-full after:bg-[#751b2d] after:mt-1">
                Soft Skills
              </h3>

              <ul className="list-disc pl-5 text-gray-700 text-sm">
                <li>Observation</li>
                <li>Decision Making</li>
                <li>Communication</li>
                <li>Multi-tasking</li>
              </ul>
            </div>

            {/* Education Section */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#751b2d] relative inline-block after:content-[''] after:block after:h-[2px] after:w-full after:bg-[#751b2d] after:mt-1">
                Education
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800">
                    University Name
                  </h4>
                  <p className="text-sm text-gray-700">
                    Bachelor of Science in Finance - 2018
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">Certification</h4>
                  <p className="text-sm text-gray-700">
                    Chartered Financial Analyst (CFA) - Level II
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">
                    Additional Course
                  </h4>
                  <p className="text-sm text-gray-700">
                    Advanced Financial Modeling Course, completed in 2020
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Column  */}
          <div className="w-2/3">
            {/* About Me Section */}
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-4 text-[#751b2d] relative inline-block after:content-[''] after:block after:h-[2px] after:w-full after:bg-[#751b2d] after:mt-1">
                About Me
              </h3>

              <p className="text-gray-700 text-sm font-medium">
                Dedicated and detail-oriented Financial Analyst with 10 years of
                experience. Eager to apply proven-budget maximization skills for
                Bank of Brocelle in monitoring, maintaining, and completing
                client billing and reconciliations. Special interest in
                achieving the millennial market and helping with retirement and
                general financial planning.
              </p>
            </div>

            {/* Experience Section */}
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-4 text-[#751b2d] relative inline-block after:content-[''] after:block after:h-[2px] after:w-full after:bg-[#751b2d] after:mt-1">
                Professional Experience
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Ginyard International Co. | Financial Analyst
                  </h4>
                  <p className="text-sm text-gray-700">
                    2015 – 2020
                    <br />
                    Key responsibilities:
                    <ul className="list-disc pl-5 text-gray-700 text-sm mt-1">
                      <li>Analyzed financial data and created reports.</li>
                      <li>Provided investment recommendations to clients.</li>
                      <li>Assisted in developing financial models.</li>
                      <li>Monitored market trends and economic conditions.</li>
                    </ul>
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">
                    Ingoude Company | Junior/Investment Analyst
                  </h4>
                  <p className="text-sm text-gray-700">
                    2015 – 2020
                    <br />
                    Key responsibilities:
                    <ul className="list-disc pl-5 text-gray-700 text-sm mt-1">
                      <li>Analyzed financial data and created reports.</li>
                      <li>Provided investment recommendations to clients.</li>
                      <li>Assisted in developing financial models.</li>
                      <li>Monitored market trends and economic conditions.</li>
                    </ul>
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">
                    Timmerman Industries | Financial Analyst Intern
                  </h4>
                  <p className="text-sm text-gray-700">
                    2020 – Present
                    <br />
                    Key responsibilities:
                    <ul className="list-disc pl-5 text-gray-700 text-sm mt-1">
                      <li>
                        Supported senior analysts in financial analysis tasks.
                      </li>
                      <li>Prepared financial statements and presentations.</li>
                      <li>
                        Conducted market research for investment opportunities.
                      </li>
                      <li>
                        Assisted in budget forecasting and variance analysis.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>

            {/* Achievements Section */}
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-4 text-[#751b2d] relative inline-block after:content-[''] after:block after:h-[2px] after:w-full after:bg-[#751b2d] after:mt-1">
                Achievements
              </h3>

              <div className="grid grid-cols-[auto_1fr] gap-x-[25px]">
                <div className="text-gray-700 text-sm w-auto">
                  <p>2013 – 2015</p>
                </div>
                <div className="text-gray-700 text-sm">
                  <p>
                    Reduced the production cost by 20% in the second year of
                    internship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template7;
