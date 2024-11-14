const Score = ({ score }) => {
  // Determine score label based on score percentage
  const getScoreLabel = (score) => {
    if (score < 50) return "Poor";
    if (score < 75) return "Good";
    if (score < 90) return "Very Good";
    return "Excellent";
  };

  return (
    <div className="p-4 h-[170px] bg-slate-600 rounded-md flex items-center">
      {/* Left: Circular Progress Bar */}
      <div
        className="relative flex items-center justify-center w-28 h-20 rounded-full border-[8px] border-slate-300 mr-4"
        style={{
          borderTopColor:
            score >= 90
              ? "green"
              : score >= 75
              ? "blue"
              : score >= 50
              ? "yellow"
              : "red",
          transform: `rotate(${(score / 100) * 180}deg)`,
        }}
      >
        <span className="absolute text-xl font-bold text-white">{score}%</span>
      </div>

      {/* Right: Score Label and Description */}
      <div>
        <p className="text-white font-semibold text-lg">
          {getScoreLabel(score)}
        </p>
        <p className="text-sm text-gray-300 mt-1">
          Your ATS resume score measures how well your resume matches the job
          description.
        </p>
      </div>
    </div>
  );
};

export default Score;
