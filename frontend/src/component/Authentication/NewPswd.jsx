import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const NewPswd = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
            Reset <br /> Your Password
          </h2>
          <p
            className="mb-4 text-[32px] font-medium"
            style={{ lineHeight: "40px" }}
          >
            Choose a new password to secure your account
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="bg-white lg:w-[55%] md:w-1/2 w-full flex justify-center items-center p-8">
        <div className="w-full max-w-md mx-auto text-center">
          <div className="h-screen flex items-center justify-center">
            <div className="w-full max-w-md">
              <h2 className="text-2xl font-bold mb-6">Set a new password</h2>

              <form className="space-y-4">
                <div className="text-left">
                  <label
                    htmlFor="newPassword"
                    className="block text-sm font-medium text-gray-700"
                  >
                    New Password
                  </label>
                  <div className="relative w-full mt-1">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="newPassword"
                      placeholder="Enter new password"
                      className="w-full p-3 border border-[#B7BFC7] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <FaEye className="text-gray-500" />
                      ) : (
                        <FaEyeSlash className="text-gray-500" />
                      )}
                    </span>
                  </div>
                </div>

                <div className="text-left">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <div className="relative w-full mt-1">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      placeholder="Confirm new password"
                      className="w-full p-3 border border-[#B7BFC7] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                      onClick={toggleConfirmPasswordVisibility}
                    >
                      {showConfirmPassword ? (
                        <FaEye className="text-gray-500" />
                      ) : (
                        <FaEyeSlash className="text-gray-500" />
                      )}
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full p-3 bg-blue-500 text-white rounded-[30px] hover:bg-blue-600 transition"
                >
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPswd;
