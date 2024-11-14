const Template6 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 space-y-10">
      {/* Page 1 */}
      <div className="bg-white w-[210mm] h-[297mm] shadow-lg p-10">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">ROHIT KUMAR BR</h1>
          <p className="text-md mb-1">+1(551) 998-7709 ⋄ Jersey City, NJ</p>
          <div className="flex justify-center space-x-2 mb-6">
            <a
              href="mailto:example@email.com"
              className="text-blue-500 hover:underline"
            >
              xyz@gmail.com
            </a>
            <span>⋄</span>
            <a
              href="https://linkedin.com/in/username"
              className="text-blue-500 hover:underline"
            >
              LinkedIn
            </a>
            <span>⋄</span>
            <a
              href="https://github.com/username"
              className="text-blue-500 hover:underline"
            >
              Github
            </a>
            <span>⋄</span>
            <a
              href="https://portfolio.com"
              className="text-blue-500 hover:underline"
            >
              Portfolio
            </a>
          </div>
        </div>

        {/* Profile Summary */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-1">PROFILE SUMMARY</h2>
          <hr className="border-black mb-2" />
          <p className="text-justify text-sm">
            Highly motivated student pursuing masters degree with a strong
            background in software and web development, actively seeking
            opportunities as a software developer, web developer, or data
            scientist. Proficient in various programming languages, web
            technologies, and data analysis. Adept problem-solver, adaptable to
            new challenges, and eager to contribute to innovative projects
            within a dynamic organization.
          </p>
        </div>

        {/* Education */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-1 uppercase">Education</h2>
          <hr className="border-black mb-2" />
          <div className="flex justify-between">
            <h3 className="font-semibold inline-block">
              Master of Data Science,
              <span className="pl-1 font-normal">Sacred Heart University</span>
            </h3>
            <span className="ml-4 ">Expected March 2025</span>
          </div>
          <p className="text-sm mb-1">
            Relevant Coursework: Artificial Intelligence, Machine Learning, Deep
            Learning, Big Data Analytics, Data Visualization, and Advanced
            Database Design.
          </p>
          <div className="flex justify-between">
            <h3 className="font-semibold inline-block">
              Bachelor of Computer Science,
              <span className="pl-1 font-normal">
                Ballari Institute of Technology and Management
              </span>
            </h3>
            <span className="ml-4 ">May 2023</span>
          </div>
          <p className="text-sm mb-1">
            Relevant Coursework: Machine Learning, Python, Computer Networks,
            Big Data Analytics, User Interface Design, and Object-Oriented
            Programming.
          </p>
        </div>

        {/* Skills */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-1 uppercase">Skills</h2>
          <hr className="border-black mb-2" />
          {[
            { heading: "Languages:", skills: "Python, R, C, C++, Java, PHP" },
            {
              heading: "Machine Learning:",
              skills:
                "Regression, Classification, Clustering, Pandas, Numpy, Scikit-learn, Jupyter, PyTest, Natural Language Toolkit (NLTK).",
            },
            { heading: "Big Data:", skills: "MongoDB, MySQL." },
            {
              heading: "Visualization:",
              skills: "Tableau, Seaborn, Matplotlib.",
            },
            { heading: "Platforms:", skills: "Linux, Ubuntu, Windows." },
            {
              heading: "Web Technologies:",
              skills: "HTML5, CSS3, JavaScript, ReactJS.",
            },
            {
              heading: "Soft Skills:",
              skills:
                "Project management, Collaboration, Problem-solving, Creative thinking.",
            },
          ].map((item, index) => (
            <div key={index} className="grid grid-cols-12 gap-4 mt-1 text-sm">
              <div className="col-span-3 text-left font-semibold">
                <p>{item.heading}</p>
              </div>
              <div className="col-span-9 text-left">
                <p>{item.skills}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Experience */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-1 uppercase">Experience</h2>
          <hr className="border-black mb-2" />
          <div className="mt-2">
            <div className="flex justify-between">
              <h4 className="font-semibold">Front-end Developer Intern</h4>
              <span className="text-sm font-semibold">Jan 2023 - Feb 2023</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium">QSqpiders</span>
              <span className="text-sm font-medium">Bangalore, India</span>
            </div>
            <ul className="list-disc ml-6 text-sm mt-1">
              <li>
                Developed a responsive website UI using HTML, CSS, JavaScript,
                and React that reduced overall page load speed by 35%.
              </li>
              <li>
                Implemented visual elements to enhance user experience based on
                design feedback and client requirements.
              </li>
              <li>
                Coordinated with other teams to understand functional
                requirements of applications, resulting in a high accuracy rate
                upon release.
              </li>
              <li>
                Optimized the user interface for increased responsiveness,
                achieving an improved user experience for customers.
              </li>
              <li>
                Collaborated with project managers to successfully deliver
                projects on time, resulting in an increase in organizational
                efficiency.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Page 2 */}
      <div className="bg-white w-[210mm] h-[297mm] shadow-lg p-10">
        {/* Projects */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-1 uppercase">Projects</h2>
          <hr className="border-black mb-2" />
          <h4 className="font-semibold">
            Naive Bayes Classifier-based Movie Recommendation System{" "}
            <span>
              <a
                href="https://ecommerceplatform.com"
                className="text-blue-700 hover:underline self-start text-sm font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                (Github Repository)
              </a>
            </span>
          </h4>
          <p className="text-sm">Machine Learning</p>
          <ul className="list-disc ml-6 text-sm mt-1">
            <li>
              The project aims to create a user-friendly movie recommendation
              website. It recommends movies, provides basic movie and cast
              information, and performs sentimental analysis on reviews.
            </li>
            <li>
              Techniques such as cosine similarity and natural language
              processing are used to develop the recommendation model.
            </li>
            <li>
              The project also includes designing the website and conducting
              data mining operations on the dataset
            </li>
          </ul>
          {/* project 2 */}
          <h4 className="font-semibold mt-2">
            Harvestify - A Agriculture Product
            <span>
              <a
                href="https://ecommerceplatform.com"
                className="text-blue-700 hover:underline self-start text-sm font-semibold ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                (Github Repository)
              </a>
            </span>
          </h4>
          <p className="text-sm">Machine Learning</p>
          <ul className="list-disc ml-6 text-sm mt-1">
            <li>
              The project aims to create a user-friendly website for framers
              that helps during yield production.
            </li>
            <li>
              It recommends crops, recommends fertilizers and detects disease of
              the infected crop
            </li>
            <li>
              Algorithms such as decision tree, random forest and SVM were used
              to develop harvestify.
            </li>
          </ul>

          {/* Project 3 */}

          <h4 className="font-semibold mt-2">
            IPL - First Innings Score Predictor
            <span>
              <a
                href="https://ecommerceplatform.com"
                className="text-blue-700 hover:underline self-start text-sm font-semibold ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                (Github Repository)
              </a>
            </span>
          </h4>
          <p className="text-sm">Machine Learning</p>
          <ul className="list-disc ml-6 text-sm mt-1">
            <li>
              The project aims to create a user-friendly website to predict the
              first innings score of a IPL match
            </li>
            <li>
              It predicts using overs, wickets and score of previous 5 overs. It
              is trained on linear regression. The trained model has accuracy of
              98.96
            </li>
          </ul>
        </div>

        {/* Certification */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-1 uppercase">
            certification
          </h2>
          <hr className="border-black mb-2" />
          <ul className="list-disc ml-6 text-sm mt-1">
            <li>British Airways - Data Science Job Simulation.</li>
            <li>Machine Learning by python - Certified by Linkedin</li>
            <li>MongoDb Python Developer Path - Certified by MongoDb.</li>
            <li>J2EE Java - Certified by Wipro</li>
            <li>Front-end Development - Certified by IANT.</li>
            <li>Java - Certified by IANT.</li>
          </ul>
        </div>

        {/* Publication */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-1 uppercase">publication</h2>
          <hr className="border-black mb-2" />
          <ul className="list-disc ml-6 text-sm mt-1">
            <li>
              ”Naive Bayes Classifier based Movie Recommendation System” - IEEE
              ICSCSS-679
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Template6;
