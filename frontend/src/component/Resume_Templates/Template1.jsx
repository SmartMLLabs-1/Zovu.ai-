import "./Template1.css";

function Template1() {
  return (
    <div className="wrapper">
      <div className="A4">
        <div className="container flex flex-row">
          {/* Left Panel */}
          <div className="leftPanel w-1/4 bg-gray-800 p-4 flex flex-col items-center">
            <img
              src="avatar.png"
              alt="Avatar"
              className="w-32 h-32 mb-4 rounded-full border-4 border-white object-cover"
            />
            <div className="details w-full flex flex-col">
              {/* Contact Section */}
              <div className="item mb-4">
                <h2 className="text-white text-lg mb-1">CONTACT</h2>
                <hr className="hr mb-1" />
                <div className="smallText text-gray-300">
                  <p className="sub-detail">Phone</p>
                  <p>(+33) 777 777 77</p>
                  <p>
                    <span className="sub-detail">Mail:</span>
                    <a href="mailto:lorem@ipsum.com">lorem@ipsum.com</a>
                  </p>
                  <p>
                    <span className="sub-detail">Location:</span>
                    NewYork, USA
                  </p>
                  <p>
                    <span className="sub-detail">LinkedIn:</span>
                    <a href="#">loremipsum</a>
                  </p>
                </div>
              </div>

              {/* Skills Section */}
              <div className="item mb-4">
                <h2 className="text-white text-lg mb-1">SKILLS</h2>
                <hr className="hr mb-1" />
                <div className="smallText text-gray-300">
                  {[
                    "Accounting",
                    "Word",
                    "PowerPoint",
                    "Marketing",
                    "Photoshop",
                    "French",
                    "English",
                    "Management",
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className="skill mb-1 flex justify-between"
                    >
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Section */}
              <div className="item">
                <h2 className="text-white text-lg mb-1">EDUCATION</h2>
                <hr className="hr mb-1" />
                <div className="text-md font-semibold text-white">
                  <p>Bachelor of Economics</p>
                  <p className="text-gray-300 smallText font-normal text-sm ">
                    {" "}
                    The University of Sydney
                  </p>
                  <p className="text-gray-300 smallText font-normal text-sm ">
                    2010 - 2014
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="rightPanel w-3/4 p-4">
            {/* Name and Title */}
            <div className="mb-4">
              <h1 className="text-4xl font-light">Jhon Doe</h1>
              <div className="smallText mb-2 font-semibold">
                <h3>Accountant</h3>
              </div>
            </div>

            {/* About Me Section */}
            <div className="mb-4">
              <h2 className="text-2xl font-semibold">About me</h2>
              <div className="smallText">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris venenatis, justo sed feugiat pulvinar., quam ipsum
                  tincidunt enim, ac gravida est metus sit amet neque. Curabitur
                  ut arcu ut nunc finibus accumsan id id elit.
                </p>
                <p>
                  Vivamus non magna quis neque viverra finibus quis a tortor.
                </p>
              </div>
            </div>

            {/* Work Experience Section */}
            <div className="workExperience mb-4">
              <h2 className="text-2xl font-semibold">Work experience</h2>
              <hr className="hrblue mb-2" />
              <ul>
                {[
                  {
                    title: "Accountant",
                    duration: "Jun 2014 - Sept 2015",
                    projectName: "Accounting project name | Company name",
                    description:
                      "Quisque rutrum mollis ornare. In pharetra diam libero, non interdum dui imperdiet quis. Quisque aliquam sapien in libero finibus sodales. Mauris id commodo metus. In in laoreet dolor.",
                    skills: "Accounting, Word, PowerPoint",
                  },
                  {
                    title: "Digital Marketing Expert",
                    duration: "Nov 2020 - Sept 2021",
                    projectName: "Project name | Company name",
                    description:
                      "Morbi rhoncus, tortor vel luctus tincidunt, sapien lacus vehicula augue, vitae ultrices eros diam eget mauris. Aliquam dictum nulla vel augue tristique bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
                    skills: "Writing, Photoshop",
                  },
                  {
                    title: "Accountant",
                    duration: "Jun 2017 - May 2020",
                    projectName: "Project name | Company name",
                    description:
                      "Maecenas eget semper sapien. Sed convallis nunc egestas dui convallis dictum id nec metus. Donec vestibulum justo mauris, ac congue lacus tincidunt id. Vivamus rhoncus risus ac ex varius gravida. Donec eget ullamcorper ipsum.",
                    skills: "Management, French",
                  },
                ].map((job, index) => (
                  <li key={index} className="relative mb-4 pl-4">
                    <div className="jobPosition flex justify-between font-semibold">
                      <span>{job.title}</span>
                      <span>{job.duration}</span>
                    </div>
                    <div className="projectName font-bold">
                      <span>{job.projectName}</span>
                    </div>
                    <div className="smallText">
                      <p>{job.description}</p>
                      <ul className="list-disc pl-5">
                        <li>{job.skills}</li>
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Project Section */}
            <div className="workExperience">
              <h2 className="text-2xl font-semibold">Project</h2>
              <hr className="hrblue mb-2" />
              <div className="jobPosition font-semibold">
                <span>Accountant</span>
                <span>Jun 2017 - May 2020</span>
              </div>
              <div className="smallText">
                <p>
                  Quisque rutrum mollis ornare. In pharetra diam libero, non
                  interdum dui imperdiet quis. Quisque aliquam sapien in libero
                  finibus sodales. Mauris id commodo metus. In in laoreet dolor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template1;
