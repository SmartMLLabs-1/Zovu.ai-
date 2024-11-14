export default function ResumeNeed() {
  const atsPoints = [
    " Today’s job market relies on automated systems to screen resumes. Ensure your resume is tailored to pass both technology and human reviews.",
    " Our ATS checker provides crucial feedback to help you craft a resume that meets automated criteria and stands out to recruiters.",
    "Use our resume builder to develop a top-performing resume that impresses hiring managers and increases your chances of landing the job.",
  ];

  return (
    <div className="flex flex-col items-center py-12 px-4 bg-[#EFF6FE] text-white ">
      <div
        className="bg-[#1F384F] p-8  shadow-lg max-w-3xl w-full"
        style={{ borderRadius: "16px 0px 16px 0px" }}
      >
        <h3 className="text-xl md:text-3xl font-bold text-left mb-6">
          Why you should use an ATS resume checker
        </h3>
        <ul className="text-sm md:text-base list-disc list-inside text-left space-y-4 ">
          {atsPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
