import { FaEnvelope, FaPhoneAlt, FaGlobe } from "react-icons/fa";

const Template5 = () => {
  return (
    <div className="bg-white shadow-lg mx-auto p-8 max-w-[210mm] min-h-[297mm] flex flex-col items-start">
      {/* Name and Title */}
      <div className="text-left">
        <h1 className="text-4xl font-bold text-amber-900">Avery Davis</h1>
        <h2 className="text-2xl text-gray-700 mt-1">Web Designer</h2>
      </div>

      {/* Contact Info */}
      <div className="w-full mt-6">
        <div className="flex justify-between items-center border border-amber-900 p-2">
          <a
            href="mailto:hello@reallygreatsite.com"
            className="flex items-center space-x-2 text-amber-900 hover:underline"
          >
            <FaEnvelope />
            <span>hello@reallygreatsite.com</span>
          </a>

          <a
            href="tel:+1234567890"
            className="flex items-center space-x-2 text-amber-900 hover:underline"
          >
            <FaPhoneAlt />
            <span>+123-456-7890</span>
          </a>

          <a
            href="http://www.reallygreatsite.com"
            className="flex items-center space-x-2 text-amber-900 hover:underline"
          >
            <FaGlobe />
            <span>www.reallygreatsite.com</span>
          </a>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-4">
        <p className="text-gray-700 text-md ">
          Enthusiastic and self-motivated web designer with 5+ years of
          experience. Eager to join Studio Shodwe and bring my skill in frontend
          development, and visual design to every project that will be received
          in the future. A previous project for improving and redesigning
          reallygreatsite.com resulted in an increase in web traffic by 50% and
          performance improvement by 20%.
        </p>
      </div>

      {/* Experience Section */}
      <div className="mt-4 w-full">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold text-amber-900">Experience</h3>
          <div className="border-b-2 border-amber-900 w-full ml-12"></div>
        </div>

        {/* Exp-1 */}
        <div className="mt-1">
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-semibold text-gray-800">
              Freelance Graphic Designer
            </h4>
            <span className="text-gray-600">2015 - 2017</span>
          </div>
          <ul className="list-disc list-inside text-gray-700 mt-1 space-y-1  text-sm">
            <li>
              Took an online course to learn more about web design and
              management, and successfully finished the course with the highest
              score.
            </li>
            <li>
              Designed a website for a local TV by applying the skill received
              from the course and years of experience as a graphic designer,
              improving website performance and web traffic by 46%.
            </li>
            <li>
              Won second place in a website design competition held by Studio
              Shodwe and received an award.
            </li>
          </ul>
        </div>

        {/* Exp-2 */}
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-semibold text-gray-800">
              Studio Shodwe Web Designer
            </h4>
            <span className="text-gray-600">2017 - Present</span>
          </div>
          <ul className="list-disc list-inside text-gray-700 mt-1 space-y-1 text-sm ">
            <li>
              Worked with clients to develop visually appealing and highly
              functional websites.
            </li>
            <li>
              Improved the web performance and speed by 30% for several major
              projects.
            </li>
            <li>
              Managed a team of junior designers, guiding them through complex
              design tasks.
            </li>
            <li>
              Created custom designs that increased user engagement by 25%.
            </li>
          </ul>
        </div>
      </div>

      {/* Project Section */}
      <div className="mt-4 w-full">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold text-amber-900">Projects</h3>
          <div className="border-b-2 border-amber-900 w-full ml-12"></div>
        </div>
        <div className="mt-1">
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-semibold text-gray-800">Unifinder</h4>
            <a
              href="https://ecommerceplatform.com"
              className="text-gray-600 hover:underline ml-4 self-start text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
          <ul className="list-disc list-inside text-gray-700 mt-1 space-y-1 text-sm ml-3 ">
            <li>
              Developed &quot;UniFinder&quot;,a centralized platform to simplify
              university life with easy access to campus information.{" "}
            </li>
            <li>
              Implemented search, interactive maps, and detailed listings for
              efficient information access.
            </li>
            <li>
              Implemented search, interactive maps, and detailed listings for
              efficient information access.
            </li>
            <li>
              Integrated Firebase backend for photo uploads, reviews, and
              user-suggested amenities.
            </li>
            <li>
              {" "}
              Ensured responsive design and scalability for reliable performance
              across multiple devices.
            </li>
          </ul>
        </div>
      </div>

      {/* Education Section */}
      <div className="mt-4 w-full">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold text-amber-900">Education</h3>
          <div className="border-b-2 border-amber-900 w-full ml-12"></div>
        </div>

        <div className="mt-1">
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-semibold text-gray-800">High School</h4>
            <span className="text-gray-600">2014</span>
          </div>
        </div>
        <div className="mt-1">
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-semibold text-gray-800">
              Borcelle University
            </h4>
            <span className="text-gray-600">2019</span>
          </div>
          <ul className="list-disc list-inside text-gray-700 mt-1 space-y-1 text-sm ml-3 ">
            <li>Bachelor of Science, Web Design, & Development</li>
            <li>GPA: 3.83</li>
          </ul>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-4 w-full">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold text-amber-900">Skills</h3>
          <div className="border-b-2 border-amber-900 w-full ml-12"></div>
        </div>

        {/* Skills section */}
        <div className="flex space-between mt-2 text-gray-700">
          <ul className=" list-disc list-inside ml-6">
            <li>Application Design</li>
            <li>Coding</li>
            <li>Security System</li>
            <li>Communication Skill</li>
          </ul>

          <ul className=" ml-52 list-disc ">
            <li>Problem-solving</li>
            <li>Creativity</li>
            <li>Time Management</li>
            <li>Eye for Detail</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Template5;
