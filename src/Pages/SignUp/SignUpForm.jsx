import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const [showpass, setshowpass] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleLogin} className="space-y-8">
        <div className="space-y-2">
          <label htmlFor="name">What should we call you</label>
          <input
            type="text"
            placeholder="Enter your profile name"
            name="email"
            id="email"
            className="w-full  p-3 rounded-lg focus:outline-none border bg-transparent border-[#e8e8e8] text-[#1e2835]"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email">What is your email</label>
          <input
            type="email"
            placeholder="Enter your email address"
            name="email"
            id="email"
            className="w-full  p-3 rounded-lg focus:outline-none border bg-transparent border-[#e8e8e8] text-[#1e2835]"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="pass">Choose a password</label>
          <div className="relative">
            <input
              type={showpass ? "text" : "password"}
              placeholder="Enter your password"
              name="pass"
              id="pass"
              className="w-full p-3 rounded-lg focus:outline-none border bg-transparent border-[#e8e8e8] text-[#1e2835]"
            />
            <span
              onClick={() => setshowpass(!showpass)}
              className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer text-[#1e2835]"
            >
              {showpass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
            </span>
          </div>
        </div>
        <div className="space-y-2">
          <p>
            By creating an account, you agree to the{" "}
            <Link to="/" className="underline">
              Terms of service
            </Link>{" "}
            and{" "}
            <Link to="/" className="underline">
              Privacy Policy
            </Link>
          </p>
          <input
            type="submit"
            value="Create an account"
            className="rounded-[50px] border border-[#e4e3e3] bg-[#e4e3e3] text-[#1e2835] hover:text-white hover:bg-[#1e2835] cursor-pointer focus-visible:bg-[#1e2835] focus-visible:outline-none w-full py-3"
          />
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
