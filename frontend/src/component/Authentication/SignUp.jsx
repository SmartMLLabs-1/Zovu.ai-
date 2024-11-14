import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Oops! The passwords don’t match");
      return;
    }

    setError("");

    //  add your sign-up logic here
    try {
      const response = await fetch("http://127.0.0.1:8000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          username:username,
          email:email,
          password:password,
          confirmPassword:confirmPassword
        })
      })

      if (!response.ok) {
        const errrorData = await response.json()
        throw new Error(errrorData.detail || "An error in signup")
      }

      const data = await response.json()
      console.log("Signup successfull",data)
      //console.log(data)
      //localStorage.setItem("Resume_ai-user",JSON.stringify(data))
      navigate("/",{replace:true})

    } catch (error) {
      console.error("signup error:", error)
      setError("An error occurred. Please try again later.")
    }
  };
    const handleGoogleSignUp = () => {
      window.location.href = "http://127.0.0.1:8000/auth/googleLogin"
    }

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Side */}
      <div className="hidden md:flex bg-[#EFF6FE] lg:w-[45%] md:w-1/2 justify-center items-center p-8">
        <div className="max-w-md lg:pl-20">
          <img src="/logo.png" alt="Logo" className="mb-4 h-[30px]" />
          <h2
            className="text-[32px] font-bold mb-4"
            style={{ lineHeight: "40px" }}
          >
            We are your{" "}
            <span className="font-medium">
              Career <br /> Partner
            </span>
          </h2>
          <p className="mb-4 max-w-[350px]">
            Join us to elevate your job search, build your career, and more.
            Create a free account today and get started!
          </p>
          <p className="max-w-[350px]">
            We’re creating a service that puts your career front and center,
            powered by AI.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="bg-white lg:w-[55%] md:w-1/2 w-full flex justify-center items-center p-8">
        <div className="w-full max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Create a personal account</h2>
          <form className="space-y-4" onSubmit={handleSignUp}>
            <div className="text-left">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Email Id
              </label>
              <input
                type="text"
                id="emailId"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter mail Id"
                className="w-full p-3 mt-1 border border-[#B7BFC7] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="text-left">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="w-full p-3 mt-1 border border-[#B7BFC7] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="text-left">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative w-full mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
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
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="relative w-full mt-1">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm password"
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

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full p-3 bg-blue-500 text-white rounded-[30px] font-semibold hover:bg-blue-600 transition"
            >
              Sign Up
            </button>

            {/* "Or with" line */}
            <div className="flex items-center justify-between my-4">
              <div className="border-t border-gray-300 flex-grow mr-3"></div>
              <span className="text-sm text-gray-500">or with</span>
              <div className="border-t border-gray-300 flex-grow ml-3"></div>
            </div>

            {/* Signup with Google button */}
            <button
              type="button"
              className="w-full p-3 bg-white border border-gray-300 text-gray-700 rounded-[30px] font-semibold flex items-center justify-center hover:bg-gray-100 transition"
              onClick={handleGoogleSignUp}
            >
              <FcGoogle className="text-xl mr-2" /> {/* Google icon */}
              Signup with Google
            </button>
          </form>
          <p className="mt-4">
            Already have an account?{" "}
            <Link to="/signin" className="font-semibold">
              Log in
            </Link>
          </p>
          <p className="text-xs mt-2">
            By signing up, you agree to Resume.ai{" "}
            <a href="#" className="underline">
              <br /> Terms and Conditions.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
