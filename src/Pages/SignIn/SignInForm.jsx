import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const SignInForm = () => {
  const [showpass, setshowpass] = useState(false);
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const email = e?.email;
    const pass = e?.pass;
    login(email, pass)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "User log in sucess",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops",
          text: "Invalid username or password",
        });
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="space-y-2">
        <label htmlFor="email">Enter your email address</label>
        <input
          type="email"
          placeholder="abc@gmail.com"
          {...register("email", {
            required: "Enter your email",
          })}
          id="email"
          className={`w-full  p-3 rounded-lg focus:outline-none border bg-transparent  text-[#1e2835]  ${
            errors.email ? "border-red-500" : "border-[#e8e8e8]"
          }`}
        />
        {!!errors?.email && (
          <div role="alert" className="text-red-600">
            {errors?.email?.message}
          </div>
        )}
      </div>
      <div className="space-y-2">
        <label htmlFor="pass">Enter your password</label>
        <div className="relative">
          <input
            type={showpass ? "text" : "password"}
            placeholder="********"
            {...register("pass", {
              required: "Enter your password",
            })}
            id="pass"
            className={`w-full  p-3 rounded-lg focus:outline-none border bg-transparent  text-[#1e2835]  ${
              errors.pass ? "border-red-500" : "border-[#e8e8e8]"
            }`}
          />
          <span
            onClick={() => setshowpass(!showpass)}
            className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer text-[#1e2835]"
          >
            {showpass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
          </span>
        </div>
        {!!errors?.pass && (
          <div role="alert" className="text-red-600">
            {errors?.email?.message}
          </div>
        )}
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
