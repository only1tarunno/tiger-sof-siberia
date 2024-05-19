import axios from "axios";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";

const SignUpForm = () => {
  const [showpass, setshowpass] = useState(false);
  const { createUser, updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const passwordValidation = (value) => {
    const minLength = /.{6,}/;
    const capitalLetter = /[A-Z]/;
    const numericDigit = /[0-9]/;
    const specialCharacter = /[!@#$%^&*(),.?":{}|<>]/;

    if (!minLength.test(value)) {
      return "Please enter at least 6 characters";
    }
    if (!capitalLetter.test(value)) {
      return "Please enter at least one capital letter";
    }
    if (!numericDigit.test(value)) {
      return "Please enter at least one numeric number";
    }
    if (!specialCharacter.test(value)) {
      return "Please enter at least one special character";
    }
    return true;
  };

  const onSubmit = async (data) => {
    const name = data?.name;
    const email = data?.email;
    const pass = data?.pass;

    createUser(email, pass)
      .then(() => {
        console.log();
        updateUserProfile(name).then(() => {
          // create user in data base
          const userInfo = {
            name,
            email,
          };
          axios
            .post("https://tiger-sof-siberia-back.vercel.app/user", userInfo)
            .then(() => {
              Swal.fire({
                icon: "success",
                title: "User created successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              reset();
            });
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops",
          text: err.message,
        });
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="space-y-2">
        <label htmlFor="name">What should we call you?</label>
        <input
          type="text"
          placeholder="Enter your profile name"
          {...register("name", {
            required: "Name is Required",
          })}
          id="name"
          className={`w-full  p-3 rounded-lg focus:outline-none border bg-transparent  text-[#1e2835]  ${
            errors.name ? "border-red-500" : "border-[#e8e8e8]"
          }`}
        />
        {!!errors?.name && (
          <div role="alert" className="text-red-600">
            {errors?.name?.message}
          </div>
        )}
      </div>
      <div className="space-y-2">
        <label htmlFor="email">What is your email?</label>
        <input
          type="email"
          placeholder="Enter your email address"
          {...register("email", {
            required: "Email is Required",
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
        <label htmlFor="pass">Choose a password</label>
        <div className="relative">
          <input
            type={showpass ? "text" : "password"}
            placeholder="Enter your password"
            {...register("pass", {
              required: "Pass is required",
              validate: passwordValidation,
            })}
            name="pass"
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
        {errors.pass && <p className="text-red-600">{errors.pass.message}</p>}
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
  );
};

export default SignUpForm;
