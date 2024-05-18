import { Link } from "react-router-dom";
import Container from "../../Components/Shared/Container";
import SignInForm from "./SignInForm";
import SocialLogIn from "../../Components/Shared/SocialLogIn";

const SignIn = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="w-full md:w-1/2 2xl:w-2/5 mx-auto my-10 space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-4xl md:text-5xl font-medium">Sign in</h2>
            <p>
              Don&apos;t have an account?{" "}
              <Link to="/signUp" className="underline">
                Sign up
              </Link>
            </p>
          </div>
          {/* signup form start  */}
          <div>
            <SignInForm />
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

export default SignIn;
