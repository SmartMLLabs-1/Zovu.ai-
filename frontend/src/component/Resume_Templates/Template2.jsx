const Template2 = () => {
  return (
    <div className="w-[21cm] h-[29.7cm] bg-white m-auto my-2 border-none box-border">
      <div className="flex w-full h-full">
        {/* Left Side */}
        <div className="w-[65%] p-0 box-border">
          <div className="bg-[#a6eca3] text-[#064d03] p-4">
            <div className="text-4xl font-bold text-[#333]">John Doe</div>
            <div className="text-2xl text-[#555] mt-1">Software Engineer</div>
          </div>
          <div className="m-5 text-sm text-[#555]">
            <p>
              Passionate software engineer with 5 years of experience in
              developing scalable web applications and working across the full
              stack. Proficient in various programming languages and tools,
              committed to delivering high-quality code and user-friendly
              interfaces.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="bg-[#a6eca3] text-[#064d03] p-2 text-xl mb-2 box-border  font-semibold">
              Professional Experience
            </h2>
            <div className="px-5">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-[16px] font-medium">
                  Software Engineer at ABC Corp
                </h3>
                <span className="text-xs text-[#777]">Jan 2020 - Present</span>
              </div>
              <ul className="list-disc pl-5 text-sm">
                <li>Developed and maintained web applications.</li>
                <li>Collaborated with cross-functional teams.</li>
                <li>Improved application performance by 20%.</li>
                <li>Led the migration to a cloud-based infrastructure.</li>
              </ul>
            </div>
            <div className="px-5 mt-4 ">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-[16px] font-medium">
                  Junior Developer at XYZ Ltd
                </h3>
                <span className="text-xs text-[#777]">Jan 2018 - Dec 2019</span>
              </div>
              <ul className="list-disc pl-5 text-sm">
                <li>Assisted in developing front-end components.</li>
                <li>Contributed to code reviews and testing.</li>
                <li>Implemented UI/UX improvements.</li>
                <li>Maintained documentation and user manuals.</li>
              </ul>
            </div>
          </div>
          <div className="mb-4">
            <h2 className="bg-[#a6eca3] text-[#064d03] p-2 text-xl mb-2 box-border  font-semibold">
              Education
            </h2>
            <div className="px-5">
              <div className="flex justify-between items-center ">
                <h3 className="text-[16px] font-medium">
                  Bachelor of Computer Science
                </h3>
                <span className="text-xs text-[#777]">2014 - 2018</span>
              </div>
              <p className="mb-2 text-xs">
                University of Technology, Cityville
              </p>
              <ul className="list-disc pl-5 text-sm">
                <li>Graduated with Honors, GPA: 3.8/4.0</li>
                <li>
                  Relevant coursework: Data Structures, Algorithms, Software
                  Engineering, Cloud Computing
                </li>
                <li>
                  Capstone project: Developed a web-based application for
                  real-time data analysis
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-4">
            <h2 className="bg-[#a6eca3] text-[#064d03] p-2 text-xl mb-2 box-border font-semibold">
              Certificates
            </h2>
            <div className="px-5">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-[16px] font-medium">
                  Certified Web Developer
                </h3>
                <span className="text-xs text-[#777]">2020</span>
              </div>
              <p className="text-sm">
                A comprehensive certification covering full-stack web
                development, including front-end technologies like HTML, CSS,
                and JavaScript, as well as back-end development using Node.js
                and databases.
              </p>
              <div className="flex justify-between items-center mb-2 mt-4">
                <h3 className="text-[16px] font-medium">
                  Cloud Computing Certification
                </h3>
                <span className="text-xs text-[#777]">2019</span>
              </div>
              <p className="text-sm">
                Focused on cloud infrastructure and services, with practical
                experience in deploying applications on AWS, Google Cloud, and
                Azure. Learned about cloud architecture, security, and best
                practices.
              </p>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="w-[35%] bg-[#064d03] text-white flex flex-col items-center p-0 box-border">
          <div className="profile-pic w-[100px] h-[100px] my-5">
            <img
              src="/avatar.png"
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="contact-info text-center mb-5">
            <p>123 Main Street</p>
            <p>City, State, ZIP</p>
            <p>Country</p>
            <p>johndoe@example.com</p>
          </div>
          <div className="w-full box-border">
            <h2 className="bg-[#064d03] text-white p-2 text-xl ml-3">
              Key Skills
            </h2>
            <ul className="list-none p-0 m-0 mx-5 mt-2">
              <li className="my-2 p-2 bg-[#218838] rounded">JavaScript</li>
              <li className="my-2 p-2 bg-[#218838] rounded">React</li>
              <li className="my-2 p-2 bg-[#218838] rounded">Node.js</li>
              <li className="my-2 p-2 bg-[#218838] rounded">Python</li>
              <li className="my-2 p-2 bg-[#218838] rounded">Cloud Computing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template2;
