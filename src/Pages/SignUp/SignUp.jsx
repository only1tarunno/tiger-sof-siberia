import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import Container from "../../Components/Shared/Container";
import SocialLogIn from "../../Components/Shared/SocialLogIn";

const SignUp = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="w-full md:w-1/2 2xl:w-2/5 mx-auto my-10 space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-4xl md:text-5xl font-medium">
              Create an account
            </h2>
            <p>
              Already have an account?{" "}
              <Link to="/sign-in" className="underline">
                Log in
              </Link>
            </p>
          </div>
          {/* signup form start  */}
          <div>
            <SignUpForm />
          </div>
          {/* social login start  */}
          <div>
            <SocialLogIn />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
