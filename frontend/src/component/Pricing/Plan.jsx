const Plan = () => {
  const plans = [
    {
      title: "Basic Plan",
      price: "$0",
      validity: "Valid for 3 days",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        " Feature 4",
        " Feature 5",
      ],
    },
    {
      title: "Standard Plan",
      price: "$29",
      validity: "Valid for 30 days",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        " Feature 4",
        " Feature 5",
      ],
    },
    {
      title: "Premium Plan",
      price: "$99",
      validity: "Valid for 90 days",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        " Feature 4",
        " Feature 5",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-6 max-w-1330px mx-auto bg-[#EFF6FE] px-9 ">
      {plans.map((plan, index) => (
        <div
          key={index}
          className="bg-[#FAFBFD] p-6 rounded-lg shadow-lg w-full max-w-sm md:w-80 flex flex-col justify-between"
        >
          <div className="flex flex-col items-start mb-4">
            <h2 className="text-xl font-bold text-[#1F284F]">{plan.title}</h2>
            <p className="text-2xl font-bold">{plan.price}</p>
            <p className="text-sm text-[#575757]">{plan.validity}</p>
          </div>
          <ul className="list-disc list-inside mb-6">
            {plan.features.map((feature, i) => (
              <li key={i} className="text-[#575757]">
                {feature}
              </li>
            ))}
          </ul>
          <button className="bg-[#0070F0] text-white py-2 px-4 rounded-lg mt-auto ">
            Select Plan
          </button>
        </div>
      ))}
    </div>
  );
};

export default Plan;
