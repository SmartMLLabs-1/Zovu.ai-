const Template9 = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 w-full max-w-[210mm] max-h-[297mm] overflow-auto">
        {/* Header */}
        <div className="text-center mb-3">
          <h1 className="text-4xl font-bold mb-2">John Doe</h1>
          <p className="">
            <span>San Francisco, CA</span> |
            <a
              href="mailto:john.doe@example.com"
              className=" hover:underline mx-1"
            >
              john.doe@example.com
            </a>{" "}
            |
            <a href="tel:+1234567890" className=" hover:underline mx-1">
              +1 234 567 890
            </a>{" "}
            |
            <a
              href="https://linkedin.com/in/johndoe"
              className=" hover:underline mx-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
          </p>
        </div>

        {/* Summary */}
        <section className="mb-3">
          <hr className="border-black mb-2 border-b-2" />
          <div className="grid grid-cols-[auto_1fr] gap-x-[130px]">
            <div className="text-sm w-auto uppercase font-semibold">
              <h3>Profile</h3>
            </div>
            <div className="text-sm mb-2">
              <p>
                Experienced accountant with 5 years of experience in financial
                reporting, budget management, and auditing. Proven track record
                of ensuring regulatory compliance and optimizing financial
                processes to reduce costs and improve efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-3">
          <hr className="border-black mb-2 border-b-2" />
          <div className="text-sm w-auto uppercase font-semibold mb-1">
            <h3>employment history</h3>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-x-[80px] mb-2">
            <div className="text-sm w-auto font-medium">
              <h5>Jan 2019 - Present</h5>
            </div>
            <div className=" text-sm mb-2 ml-4">
              <h3 className="text-md font-semibold mb-1 flex justify-between">
                Senior Accountant, ABC Financial Services
                <span className="ml-4 text-right text-gray-600">New York</span>
              </h3>

              <ul className="list-disc list-inside ml-4 text-sm">
                <li>Prepared financial statements and led monthly audits.</li>
                <li>
                  Streamlined financial reporting processes, reducing errors by
                  15%.
                </li>
                <li>
                  Managed a team of 3 junior accountants and provided training
                  on new accounting software.
                </li>
                <li>
                  Ensured compliance with local, state, and federal tax laws.
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-x-[80px]">
            <div className="text-sm w-auto font-medium">
              <h5>Nov 2014 - Dec 2018</h5>
            </div>
            <div className=" text-sm mb-2">
              <h3 className="text-md font-semibold mb-1 flex justify-between">
                Staff Accountant, Dubone Partnership{" "}
                <span className="ml-4 text-right text-gray-600">Germany</span>
              </h3>
              <ul className="list-disc list-inside ml-4 text-sm">
                <li>Prepared annual budgets and financial forecasts.</li>
                <li>Assisted in tax preparation for corporate clients.</li>
                <li>
                  Reconciled financial discrepancies by collecting and analyzing
                  account information.
                </li>
                <li>
                  Implemented accounting policies and procedures to improve
                  efficiency.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-3">
          <hr className="border-black mb-2 border-b-2" />
          <div className="text-sm w-auto uppercase font-semibold mb-1">
            <h3>Education</h3>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-x-[80px] mb-1">
            <div className="text-sm w-auto font-medium">
              <h5>Nov 2013 - July 2015</h5>
            </div>
            <div className="text-sm mb-2">
              <h3 className="text-md font-semibold mb-1 flex justify-between">
                Master of Accountancy, St. Joseph College{" "}
                <span className="ml-4 text-right text-gray-600">New York</span>
              </h3>
              <ul className="list-disc list-inside ml-4 text-sm">
                <li>Gratuated with high honours</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-[auto_1fr] gap-x-[80px] mb-1">
            <div className="text-sm w-auto font-medium">
              <h5>Nov 2009 -July 2013</h5>
            </div>
            <div className="text-sm mb-2">
              <h3 className="text-md font-semibold mb-1 flex justify-between">
                Bachelor of Science in Accounting, XYZ University{" "}
                <span className="ml-4 text-right text-gray-600">Germany</span>
              </h3>
              <ul className="list-disc list-inside ml-4 text-sm">
                <li>Gratuated with high honours</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-3">
          <hr className="border-black mb-2 border-b-2" />
          <div className="grid grid-cols-[auto_1fr] gap-x-[170px]">
            <div className="text-sm w-auto uppercase font-semibold">
              <h3>skills</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {/* First Column with 3 Skills */}
              <div className="space-y-1 ">
                <p className="flex justify-between">
                  Financial Reporting{" "}
                  <span className="ml-4 text-right text-gray-600">Expert</span>
                </p>
                <p className="flex justify-between">
                  Auditing
                  <span className="ml-4 text-right text-gray-600">Expert</span>
                </p>
                <p className="flex justify-between">
                  Tax Compliance
                  <span className="ml-4 text-right text-gray-600">Expert</span>
                </p>
              </div>
              {/* Second Column with 2 Skills */}
              <div className="space-y-1">
                <p className="flex justify-between">
                  Budgeting & Forecasting
                  <span className="ml-4 text-right text-gray-600">Expert</span>
                </p>
                <p className="flex justify-between">
                  Account Reconciliation
                  <span className="ml-4 text-right text-gray-600">Expert</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reference */}
        <section className="mb-3">
          <hr className="border-black mb-2 border-b-2" />
          <div className="grid grid-cols-[auto_1fr] gap-x-[130px]">
            <div className="text-sm w-auto uppercase font-semibold">
              <h3>references</h3>
            </div>
            <div className="space-y-4">
              <div className="text-sm uppercase mb-1">
                <h3 className="font-medium">John Doe</h3>
                <p>Chief Financial Officer, ABC Financial Services</p>
                <p>Email: johndoe@example.com</p>
              </div>
              <div className="text-sm uppercase mb-1">
                <h3 className="font-medium">Jane Smith</h3>
                <p>Senior Accountant, Dubone Partnership</p>
                <p>Email: janesmith@example.com</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Template9;
