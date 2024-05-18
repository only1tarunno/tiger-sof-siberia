import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";
import Swal from "sweetalert2";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const SocialLogIn = () => {
  const { googleSingin, faceBookSingin } = useAuth();

  const handleGoogleLogin = () => {
    googleSingin()
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Thank You",
          text: "Google Login was Succesful",
          showConfirmButton: false,
          timer: 1500,
        });

        const userInfo = {
          name: result.user?.displayName,
          email: result.user?.email,
        };

        axios
          .post("https://tiger-sof-siberia-back.vercel.app/user", userInfo)
          .then(() => {});
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops",
          text: "Google Login is Incomplete",
        });
      });
  };

  const handleFaceBookLogin = () => {
    faceBookSingin()
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Thank You",
          text: "Facebook Login was Succesful",
          showConfirmButton: false,
          timer: 1500,
        });

        const userInfo = {
          name: result.user?.displayName,
          email: result.user?.email,
        };

        axios
          .post("https://tiger-sof-siberia-back.vercel.app/user", userInfo)
          .then(() => {});
      })
      .catch((err) => {
        console.log(err.message);
        Swal.fire({
          icon: "error",
          title: "Oops",
          text: "Facebook Login is Incomplete",
        });
      });
  };

  return (
    <>
      <div className="divider">OR</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div
          onClick={handleFaceBookLogin}
          className="w-full py-3 px-2 flex gap-2 rounded-[50px] justify-center items-center  border border-[#1e2835] text-[#1e2835] bg-transparent hover:bg-[#1e2835] hover:text-white cursor-pointer"
        >
          <span>
            <img src={facebook} className="w-5" alt="" />
          </span>
          <p className="font-medium">Sign up with Facebook</p>
        </div>
        <div
          onClick={handleGoogleLogin}
          className="w-full py-3 px-2 flex gap-2 rounded-[50px] justify-center items-center border border-[#1e2835] text-[#1e2835] bg-transparent hover:bg-[#1e2835] hover:text-white cursor-pointer"
        >
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
