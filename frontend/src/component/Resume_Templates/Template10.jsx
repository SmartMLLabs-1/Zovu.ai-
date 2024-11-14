import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Template10 = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white w-[210mm] h-[297mm] shadow-lg">
        {/* Top Part  */}
        <div className="flex w-full h-[200px]">
          <div className="w-3/4 bg-gray-200 p-10 flex items-center">
            <div className="flex items-center ">
              <div className="w-72 h-36 bg-white border-4 border-orange-500 rounded-lg overflow-hidden ">
                <img
                  src="/avatar.png"
                  alt="profile_pic"
                  className="object-cover w-full h-full"
                />
              </div>
              <div style={{ marginTop: "-20px", paddingLeft: "15px" }}>
                <h1 className="text-3xl font-bold text-[#624E88]">
                  Aarav Patel
                </h1>
                <h2 className="text-lg text-orange-500">Data Scientist</h2>
                <p className="text-sm mt-2">
                  Data Scientist with expertise in data analysis, machine
                  learning, and predictive modeling to drive business insights
                  and solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="w-1/3 bg-[#624E88] text-white p-5 flex flex-col justify-center">
            <div className="flex flex-col space-y-4">
              <a
                href="http://www.userwebsite.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <div className="flex items-center justify-center w-8 h-8 border-2 border-orange-500 rounded-full">
                  <FontAwesomeIcon
                    icon={faGlobe}
                    className="text-lg text-orange-500"
                  />
                </div>
                <span className=" hover:underline">www.userwebsite.com</span>
              </a>

              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-8 h-8 border-2 border-orange-500 rounded-full">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-lg text-orange-500"
                  />
                </div>
                <span>+123 456 789</span>
              </div>

              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-8 h-8 border-2 border-orange-500 rounded-full">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-lg text-orange-500"
                  />
                </div>
                <span>user@example.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-8 h-8 border-2 border-orange-500 rounded-full">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-lg text-orange-500"
                  />
                </div>
                <span>City,Country</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Part*/}
        <div className="flex w-full h-auto flex-grow">
          {/* First Box */}
          <div className="w-3/4  p-5">
            {/* work experience */}
            <div className="mb-5">
              <h3 className="font-medium text-[#624E88] text-xl uppercase mb-1">
                work experience
              </h3>
              {/* exp-1 */}
              <div className="mb-3">
                <h3 className="text-lg font-medium">Data Scientist</h3>
                <p className="text-sm font-medium">Future Energy limited</p>
                <div className="flex justify-between items-center mb-1 text-orange-500">
                  <h3 className="text-sm">06/2020 - Present</h3>
                  <span className="text-sm ">New York</span>
                </div>
                <ul className="list-disc pl-5 text-sm ">
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
              {/* exp-2 */}
              <div className="mb-3">
                <h3 className="text-lg font-medium">Data Analyst</h3>
                <p className="text-sm font-medium">Future Energy Limited</p>
                <div className="flex justify-between items-center mb-1 text-orange-500">
                  <h3 className="text-sm">06/2020 - Present</h3>
                  <span className="text-sm">New York</span>
                </div>
                <ul className="list-disc pl-5 text-sm">
                  <li>
                    Analyzed large datasets to identify trends, patterns, and
                    insights that helped improve operational efficiency by 15%.
                  </li>
                  <li>
                    Built interactive dashboards using Tableau and Power BI for
                    visualizing KPIs, allowing stakeholders to make data-driven
                    decisions.
                  </li>
                  <li>
                    Collaborated with cross-functional teams to implement data
                    models, streamline data pipelines, and improve data accuracy
                    by 20%.
                  </li>
                  <li>
                    Provided ad-hoc analysis and reports to support business
                    strategies and improve decision-making processes.
                  </li>
                </ul>
              </div>

              {/* exp-3 */}
              <div className="mb-3">
                <h3 className="text-lg font-medium">Business Analyst</h3>
                <p className="text-sm font-medium">Future Energy limited</p>
                <div className="flex justify-between items-center mb-1 text-orange-500">
                  <h3 className="text-sm">06/2020 - Present</h3>
                  <span className="text-sm ">New York</span>
                </div>
                <ul className="list-disc pl-5 text-sm ">
                  <li>
                    Conducted detailed business analysis to identify areas for
                    operational improvement, resulting in a 12% cost reduction.
                  </li>
                  <li>
                    Collaborated with stakeholders to gather business
                    requirements and translate them into technical
                    specifications for developers.
                  </li>
                  <li>
                    Implemented Agile methodologies, improving project delivery
                    timelines by 20% and increasing team collaboration.
                  </li>
                  <li>
                    Developed comprehensive project plans, including scope,
                    budgets, timelines, and risk assessments.
                  </li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div className="mb-5">
              <h3 className="font-medium text-[#624E88] text-xl uppercase">
                education
              </h3>
              <h3 className="text-lg font-medium">
                {" "}
                Master of science in Computer Science and Informatics
              </h3>
              <p className="text-sm">San Franciso University</p>
              <p className="text-sm text-orange-500">2014-18</p>
            </div>
          </div>

          {/* Second Box */}
          <div className="w-1/3 bg-gray-200 p-5">
            {/* Technical Skills */}
            <div className="mb-6">
              <h3 className="font-medium text-[#624E88] text-xl uppercase">
                Technical Skills
              </h3>
              <div className="mb-2">
                <p className="text-sm font-medium">Database/Server:</p>
                <p className="text-sm">Mysql , Sql Server</p>
              </div>
              <div className="mb-2">
                <p className="text-sm font-medium">Programming Languages:</p>
                <p className="text-sm">
                  Python, R, SQL, Java, C++, MATLAB, Julia, Scala, SAS
                </p>
              </div>

              <div className="mb-2">
                <p className="text-sm font-medium">Other/Software Tools:</p>
                <p className="text-sm">
                  TensorFlow, PyTorch, Pandas, NumPy, Matplotlib, Scikit-learn,
                  Hadoop, Spark, Tableau, Excel
                </p>
              </div>
            </div>

            {/* Skills */}

            <div className="w-full box-border mb-6">
              <h3 className="font-medium text-[#624E88] text-xl uppercase">
                Skills
              </h3>
              <ul className="list-none p-0 m-0 mt-2">
                <li className="my-2 p-2 bg-[#624E88] rounded text-white">
                  Machine Learning
                </li>
                <li className="my-2 p-2 bg-[#624E88] rounded text-white">
                  Deep Learning
                </li>
                <li className="my-2 p-2 bg-[#624E88] rounded text-white">
                  Data Analysis
                </li>
                <li className="my-2 p-2 bg-[#624E88] rounded text-white">
                  Python
                </li>
                <li className="my-2 p-2 bg-[#624E88] rounded text-white">
                  TensorFlow
                </li>
                <li className="my-2 p-2 bg-[#624E88] rounded text-white">
                  PyTorch
                </li>
                <li className="my-2 p-2 bg-[#624E88] rounded text-white">
                  Data Visualization
                </li>
                <li className="my-2 p-2 bg-[#624E88] rounded text-white">
                  Big Data Processing
                </li>
              </ul>
            </div>

            {/* Certificates */}
            <div className="mb-4">
              <h3 className="font-medium text-[#624E88] text-xl uppercase">
                certificates
              </h3>
              <div className="text-sm">
                <p className="mb-1">
                  Certification of Applied Data Analysis (2019)
                </p>
                <p className="mb-1">
                  Machine Learning Certification - Coursera (2020)
                </p>
                <p className="mb-1">
                  Deep Learning Specialization - Coursera (2021)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template10;
