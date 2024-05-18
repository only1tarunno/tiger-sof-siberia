import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";

const SocialLogIn = () => {
  return (
    <>
      <div className="divider">OR</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="w-full py-3 px-2 flex gap-2 rounded-[50px] justify-center items-center  border border-[#1e2835] text-[#1e2835] bg-transparent hover:bg-[#1e2835] hover:text-white cursor-pointer">
          <span>
            <img src={facebook} className="w-5" alt="" />
          </span>
          <p className="font-medium">Sign up with Facebook</p>
        </div>
        <div className="w-full py-3 px-2 flex gap-2 rounded-[50px] justify-center items-center border border-[#1e2835] text-[#1e2835] bg-transparent hover:bg-[#1e2835] hover:text-white cursor-pointer">
          <span>
            <img src={google} className="w-5" alt="" />
          </span>
          <p className="font-medium">Sign up with Google</p>
        </div>
      </div>
    </>
  );
};

export default SocialLogIn;
