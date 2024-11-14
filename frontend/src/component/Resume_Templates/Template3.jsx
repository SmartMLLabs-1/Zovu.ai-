const Resume = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 w-full max-w-[210mm] max-h-[297mm] overflow-auto">
        {/* Header */}
        <div className="text-center mb-3">
          <h1 className="text-4xl font-bold mb-2">John Doe</h1>
          <p className="text-gray-700">
            <span>San Francisco, CA</span> |
            <a
              href="mailto:john.doe@example.com"
              className="text-gray-700 hover:underline mx-1"
            >
              john.doe@example.com
            </a>{" "}
            |
            <a
              href="tel:+1234567890"
              className="text-gray-700 hover:underline mx-1"
            >
              +1 234 567 890
            </a>{" "}
            |
            <a
              href="https://johndoe.dev"
              className="text-gray-700 hover:underline mx-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </a>{" "}
            |
            <a
              href="https://linkedin.com/in/johndoe"
              className="text-gray-700 hover:underline mx-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            |
            <a
              href="https://github.com/johndoe"
              className="text-gray-700 hover:underline mx-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>

        {/* Summary */}
        <section className="mb-3">
          <h2 className="text-xl font-semibold inline-block mb-2 text-orange-600 uppercase">
            Summary
          </h2>
          <hr className="border-orange-700 mb-2 border-b-1" />
          <p className="text-sm">
            Passionate software developer with over 5 years of experience in
            building high-performance web applications. Expertise in JavaScript,
            React, and modern development practices. Known for innovative
            problem-solving and commitment to continuous learning and
            improvement.
          </p>
          <p className="text-sm">
            Proven ability to collaborate effectively with cross-functional
            teams to deliver complex projects on time and within budget. Looking
            to bring technical skills and creative thinking to a
            forward-thinking company.
          </p>
        </section>

        {/* Projects */}
        <section className="mb-3">
          <h2 className="text-xl font-semibold inline-block mb-2 text-orange-600 uppercase">
            Projects
          </h2>
          <hr className="border-orange-700 mb-2 border-b-1" />

          <div className="space-y-2">
            <div className="flex justify-between items-start pb-2">
              <div className="flex-1">
                <h3 className="text-md font-semibold">
                  Project Management Tool
                </h3>
                <ul className="list-disc list-inside ml-4 text-sm">
                  <li>
                    Designed and implemented a web-based project management tool
                    to streamline team workflows.
                  </li>
                  <li>
                    Added features for task tracking, reporting, and team
                    collaboration.
                  </li>
                  <li>
                    Integrated APIs for enhanced functionality and real-time
                    updates.
                  </li>
                </ul>
              </div>
              <a
                href="https://projectmanagementtool.com"
                className="text-blue-500 hover:underline ml-4 self-start text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
            <div className="flex justify-between items-start pb-2">
              <div className="flex-1">
                <h3 className="text-md font-semibold">E-commerce Platform</h3>
                <ul className="list-disc list-inside ml-4 text-sm">
                  <li>
                    Developed a fully responsive e-commerce platform with a
                    user-friendly interface.
                  </li>
                  <li>
                    Implemented secure payment processing and user account
                    management.
                  </li>
                  <li>
                    Optimized for speed and performance to enhance user
                    experience.
                  </li>
                </ul>
              </div>
              <a
                href="https://ecommerceplatform.com"
                className="text-blue-500 hover:underline ml-4 self-start text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-3">
          <h2 className="text-xl font-semibold inline-block mb-2 text-orange-600 uppercase">
            Work Experience
          </h2>
          <hr className="border-orange-700 mb-2 border-b-1" />

          <div className="space-y-2">
            <div className="flex justify-between items-start pb-2">
              <div className="flex-1">
                <h3 className="text-md font-semibold">
                  Tech Innovators Inc. | Senior Software Engineer
                </h3>
                <ul className="list-disc list-inside ml-4 text-sm">
                  <li>
                    Led a team of developers in creating scalable web
                    applications and services.
                  </li>
                  <li>
                    Enhanced system architecture to improve application
                    performance and security.
                  </li>
                  <li>
                    Mentored junior developers and conducted code reviews.
                  </li>
                </ul>
              </div>
              <p className="text-gray-600 self-start text-sm">
                June 2021 - Present
              </p>
            </div>
            <div className="flex justify-between items-start pb-2">
              <div className="flex-1">
                <h3 className="text-md font-semibold">
                  Web Solutions Ltd. | Software Developer
                </h3>
                <ul className="list-disc list-inside ml-4 text-sm">
                  <li>
                    Developed interactive web applications with a focus on user
                    experience.
                  </li>
                  <li>
                    Collaborated with designers to translate requirements into
                    functional features.
                  </li>
                  <li>Fixed bugs and optimized code for better performance.</li>
                </ul>
              </div>
              <p className="text-gray-600 self-start text-sm">
                January 2018 - May 2021
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold inline-block mb-3 text-orange-700 uppercase tracking-wide">
            Skills
          </h2>
          <hr className="border-orange-700 mb-2 border-b-1" />

          <ul className="grid grid-cols-2 gap-y-2 text-sm ml-2 sm:ml-4">
            <li className="before:mr-2">
              <span className="font-medium">Programming Languages:</span> Java,
              Python, C++
            </li>
            <li className=" before:mr-2">
              <span className="font-medium"> Web Development:</span> HTML, CSS,
              JavaScript, React.js
            </li>
            <li className=" before:mr-2">
              <span className="font-medium"> Tools & Technologies:</span> Git,
              Docker, Jenkins
            </li>
            <li className=" before:mr-2">
              <span className="font-medium"> Database Management: </span> MySQL,
              MongoDB
            </li>
            <li className=" before:mr-2">
              <span className="font-medium">Cloud Computing:</span> AWS, Azure
            </li>
            <li className=" before:mr-2">
              {" "}
              <span className="font-medium">DevOps:</span> CI/CD, Kubernetes
            </li>
            <li className=" before:mr-2">
              <span className="font-medium"> Cybersecurity:</span> Network
              Security, Ethical Hacking
            </li>
            <li className=" before:mr-2">
              <span className="font-medium">Data Analysis:</span> SQL, Pandas,
              NumPy
            </li>
            <li className=" before:mr-2">
              <span className="font-medium"> Machine Learning: </span>{" "}
              Scikit-learn, TensorFlow
            </li>
            <li className=" before:mr-2">
              <span className="font-medium"> Mobile Development:</span> Flutter,
              Android Studio
            </li>
            <li className=" before:mr-2">
              <span className="font-medium"> Problem Solving:</span> Data
              Structures, Algorithms
            </li>
            <li className=" before:mr-2">
              <span className="font-medium">Software Engineering:</span> Agile,
              Scrum
            </li>
          </ul>
        </section>

        {/* Education */}
        <section className="mb-3">
          <h2 className="text-xl font-semibold inline-block mb-2 text-orange-600 uppercase">
            Education
          </h2>
          <hr className="border-orange-700 mb-2 border-b-1" />

          <div className="flex justify-between items-center ">
            <p>
              Bachelor of Science in Computer Science | University of
              California, Berkeley
            </p>
            <p className="text-gray-600 text-sm">2014 - 2018 | CGPA: 3.9</p>
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-xl font-semibold inline-block mb-2 text-orange-600 uppercase">
            Certifications
          </h2>
          <hr className="border-orange-700 mb-2 border-b-1" />

          <ul className="list-disc list-inside ml-4 text-sm">
            <li>Certified Full Stack Web Developer - Coursera</li>
            <li>React.js Expert - Udemy</li>
            <li>Advanced JavaScript - Pluralsight</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Resume;
