import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const SignUpForm = () => {
  const [showpass, setshowpass] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleLogin} className="loginForm">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-full my-4 p-3 rounded focus:outline-none border bg-transparent border-[rgba(255,255,255,.2)] text-white"
        />
        <div className="relative">
          <input
            type={showpass ? "text" : "password"}
            placeholder="password"
            name="pass"
            className="w-full p-3 rounded focus:outline-none border bg-transparent border-[rgba(255,255,255,.2)] text-white"
          />
          <span
            onClick={() => setshowpass(!showpass)}
            className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer text-white"
          >
            {showpass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
          </span>
        </div>
        <input
          type="submit"
          value="LogIn"
          className="w-full rounded my-4 py-3 cursor-pointer text-xl bg-[#3a1e77] hover:bg-[#281a47] border-[#3a1e77] hover:text-white text-white"
        />
      </form>
    </>
  );
};

export default SignUpForm;
