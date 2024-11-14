const Template4 = () => {
  return (
    <div className="w-[210mm] h-[297mm] mx-auto p-8 bg-white border shadow-md">
      {/* User Name */}
      <h1 className="text-center text-4xl font-bold">HARPER RUSSO</h1>

      {/* Contact Info */}
      <p className="text-center mt-2 text-gray-800">
        <a href="tel:+1234567890" className="hover:underline">
          +123-456-7890
        </a>
        &nbsp;·&nbsp;
        <a href="mailto:hello@reallygreatsite.com" className="hover:underline">
          hello@reallygreatsite.com
        </a>
        &nbsp;·&nbsp;
        <a
          href="https://twitter.com/reallygreatsite"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          @reallygreatsite
        </a>
      </p>

      <p className="text-center text-gray-800 ">
        123 Anywhere St., Any City, ST 12345
      </p>

      <hr className="border-t-4 border-black my-4" />

      {/* Job Title */}
      <h2 className="text-center text-lg font-bold">
        BUSINESS OPERATIONS MANAGER
      </h2>

      {/* Summary */}
      <p className="text-justify mt-2 text-sm font-medium text-gray-800">
        I am a proficient Business Operations Manager with a strong focus on
        achieving outcomes, possessing notable expertise in media management and
        assuming leadership responsibilities. I have demonstrated exceptional
        leadership capabilities while overseeing and directing media operations
        in North America and the APAC region. I have a proven track record of
        enhancing team performance, fostering customer loyalty, and cultivating
        collaborative alliances with internal and external stakeholders.
      </p>

      <hr className="border-t-1 border-black my-4" />

      {/* Strengths & Expertise */}
      <h2 className="text-lg text-center font-bold mt-4">
        STRENGTHS AND EXPERTISE
      </h2>
      <div className="grid grid-cols-3 text-center mt-2 text-sm font-medium text-gray-800">
        <p>Leadership</p>
        <p>Media Management</p>
        <p>Strategic Planning</p>
        <p>Project Management</p>
        <p>Customer Loyalty</p>
        <p>Team Performance</p>
        <p>Stakeholder Relations</p>
        <p>Growth Strategy</p>
        <p>Budgeting</p>
      </div>

      <hr className="border-t-1 border-black my-4" />

      {/* Professional Experience */}
      <h2 className="text-lg text-center font-bold mt-4">
        PROFESSIONAL EXPERIENCE
      </h2>

      {/* Job 1 */}
      <div className="mt-2">
        <div className="flex justify-between">
          <h3 className="font-bold inline-block">Ginyard International Co.</h3>
          <span className="ml-4 font-semibold">October 2019 - Present</span>
        </div>

        <h2 className="font-bold">Operations Manager</h2>
        <p className="mt-2 text-sm font-medium text-gray-800">
          Demonstrated exceptional leadership by overseeing nationwide
          operations, resulting in a phenomenal growth rate of 120% within two
          years. Played a pivotal role in spearheading the conception and
          execution of subscription video-on-demand over-the-top streaming
          products.
        </p>
        <h4 className="font-semibold mt-2">Accomplishments:</h4>
        <ul className="list-disc ml-6 text-sm font-medium text-gray-800">
          <li>Increased company revenue by 30% through strategic planning.</li>
          <li>Developed a high-performing team, reducing costs by 15%.</li>
          <li>
            Proin et nibh eleifend, posuere lectus et, leo. Praesent vitae massa
            id odio vulputate posuere is
          </li>
        </ul>
      </div>
      <hr className="border-t-1 border-black my-4" />

      {/* Projects */}
      <h3 className="text-lg text-center font-bold mt-4">PROJECTS</h3>

      <div className="mt-2">
        <div className="flex justify-between">
          <h4 className="font-bold">Project Alpha</h4>
          <a
            href="https://ecommerceplatform.com"
            className=" hover:underline ml-4 self-start text-sm font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
        <ul className="list-disc ml-6 text-sm font-medium text-gray-800 mt-1">
          <li>
            Implemented global media management for North American clients.
          </li>
          <li>
            Drove customer satisfaction through efficient media operations.
          </li>
          <li>
            Proin et nibh eleifend, posuere lectus et, leo. Praesent vitae massa
            id odio vulputate posuere is
          </li>
        </ul>

        <div className="flex justify-between mt-4">
          <h4 className="font-bold">Project Beta</h4>
          <a
            href="https://ecommerceplatform.com"
            className=" hover:underline ml-4 self-start text-sm font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
        <ul className="list-disc ml-6 text-sm font-medium text-gray-800 mt-1">
          <li>
            Managed rollout of subscription service, achieving 90% retention.
          </li>
          <li>
            Successfully scaled operations to new markets within three months.
          </li>
          <li>
            Proin et nibh eleifend, posuere lectus et, leo. Praesent vitae massa
            id odio vulputate posuere is
          </li>
        </ul>
      </div>

      <hr className="border-t-1 border-black my-4" />

      {/* Education */}
      <h3 className="text-lg text-center font-bold mt-4">EDUCATION</h3>
      <div className="mt-2">
        <div className="flex justify-between">
          <h4 className="font-bold">University of Anywhere</h4>
          <span className="text-sm font-semibold">2015 - 2019</span>
        </div>
        <div className="flex justify-between ">
          <span className="text-sm font-medium text-gray-800">
            Bachelor of Business Administration
          </span>
          <span className="text-sm font-medium text-gray-800">
            CGPA: 3.8/4.0
          </span>
        </div>
      </div>
    </div>
  );
};

export default Template4;
