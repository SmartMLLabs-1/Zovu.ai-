import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { IoCloseSharp } from "react-icons/io5";

const ForgotPswd = () => {
  const [email, setEmail] = useState("");
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setShowOtpModal(true);
  };

  // OTP handling with backspace
  const handleOtpChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next box if a digit is entered
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Assuming OTP verification is successful
    alert(`OTP entered: ${otp.join("")}`);
    setShowOtpModal(false);
    navigate("/new-password"); // Redirect to NewPswd page
  };

  const handleResendEmail = () => {
    setOtp(new Array(6).fill("")); // Clear OTP fields
    alert("OTP resent to your email!");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Side */}
      <div className="hidden md:flex bg-[#EFF6FE] lg:w-[45%] md:w-1/2 justify-center items-center p-8">
        <div className="max-w-md lg:pl-20">
          <img src="/logo.png" alt="Logo" className="mb-4 h-[30px]" />
          <h2
            className="text-[48px] font-bold mb-2"
            style={{ lineHeight: "50px" }}
          >
            Forgot your password?
          </h2>
          <p
            className="mb-4 text-[32px] font-medium"
            style={{ lineHeight: "40px" }}
          >
            No worries! Enter your email to reset it.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="bg-white lg:w-[55%] md:w-1/2 w-full flex justify-center items-center p-8">
        <div className="w-full max-w-md mx-auto text-center">
          <div className="h-screen flex items-center justify-center">
            <div className="w-full max-w-md">
              <h2 className="text-2xl font-bold mb-6">Reset Password</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-left mb-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                    className="w-full p-3 mt-1 border border-[#B7BFC7] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full p-3 bg-blue-500 text-white rounded-[30px] hover:bg-blue-600 transition"
                >
                  Send Reset Link
                </button>

                <div className="flex items-center justify-between my-4">
                  <div className="border-t border-gray-400 flex-grow mr-3"></div>
                  <span className="text-sm text-gray-500">or with</span>
                  <div className="border-t border-gray-400 flex-grow ml-3"></div>
                </div>

                {/* Login with Google button */}
                <button
                  type="button"
                  className="w-full p-3 bg-white border border-gray-500 text-gray-700 rounded-[30px] font-semibold flex items-center justify-center hover:bg-gray-200 transition"
                >
                  <FcGoogle className="text-xl mr-2 items-start" />
                  Login with Google
                </button>
              </form>
              <p className="mt-4">
                Remembered your password?{" "}
                <Link to="/signin" className="font-semibold">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* OTP Modal */}
      {showOtpModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 md:p-0">
          <div className="bg-white p-8  rounded-md shadow-md max-w-sm w-full text-center relative">
            <button
              onClick={() => setShowOtpModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              <IoCloseSharp size={24} />
            </button>
            <h2 className="text-lg font-semibold mb-4">Enter OTP</h2>
            <form onSubmit={handleOtpSubmit} className="space-y-4">
              <div className="flex justify-center space-x-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    id={`otp-${index}`}
                    value={digit}
                    onChange={(e) => handleOtpChange(e.target.value, index)}
                    onKeyDown={(e) => handleBackspace(e, index)}
                    className="w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ))}
              </div>
              <button
                type="submit"
                className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition mt-4"
              >
                Verify OTP
              </button>
            </form>
            <div className="mt-4">
              <p className="text-gray-500">
                Haven’t got the email yet?{" "}
                <button
                  onClick={handleResendEmail}
                  className="text-blue-500 font-semibold hover:underline"
                >
                  Resend email
                </button>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPswd;
