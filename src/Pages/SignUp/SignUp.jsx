import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import Container from "../../Components/Shared/Container";

const SignUp = () => {
  return (
    <div className="py-10 md:py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-medium">
            Create an account
          </h2>
          <p>
            Already have an account?{" "}
            <Link to="/signin" className="underline">
              Log in
            </Link>
          </p>
        </div>
        {/* signup form start  */}
        <div className="w-full md:w-1/2 mx-auto">
          <SignUpForm />
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
