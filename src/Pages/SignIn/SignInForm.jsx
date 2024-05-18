import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const SignInForm = () => {
  const [showpass, setshowpass] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleLogin} className="space-y-8">
      <div className="space-y-2">
        <label htmlFor="email">Enter your email address</label>
        <input
          type="email"
          placeholder="abc@gmail.com"
          name="email"
          id="email"
          className="w-full  p-3 rounded-lg focus:outline-none border bg-transparent border-[#e8e8e8] text-[#1e2835]"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="pass">Enter your password</label>
        <div className="relative">
          <input
            type={showpass ? "text" : "password"}
            placeholder="********"
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
        <input
          type="submit"
          value="Sign in"
          className="rounded-[50px] border border-[#e4e3e3] bg-[#e4e3e3] text-[#1e2835] hover:text-white hover:bg-[#1e2835] cursor-pointer focus-visible:bg-[#1e2835] focus-visible:outline-none w-full py-3"
        />
      </div>
    </form>
  );
};

export default SignInForm;