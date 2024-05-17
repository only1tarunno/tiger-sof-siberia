import fb from "../../assets/fb.svg";
import tw from "../../assets/twitter.svg";
import insta from "../../assets/insta.png";
import linkid from "../../assets/linkid.svg";

const SocialIcon = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[#FF9900]">JOIN US ON</span>
      <span>
        <img src={fb} className="w-9" alt="" />
      </span>
      <span>
        <img src={linkid} className="w-9" alt="" />
      </span>
      <span>
        <img src={insta} className="w-9" alt="" />
      </span>
      <span>
        <img src={tw} className="w-9" alt="" />
      </span>
    </div>
  );
};

export default SocialIcon;
