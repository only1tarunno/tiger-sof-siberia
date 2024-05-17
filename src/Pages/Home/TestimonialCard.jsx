import avatar from "../../assets/avatar.png";
import { IoStarSharp } from "react-icons/io5";

const TestimonialCard = () => {
  return (
    <div className="text-center border py-5 px-8 border-[#DEDEDE] space-y-5">
      <div>
        <img src={avatar} className="mx-auto" alt="" />
      </div>
      <div className="space-y-4">
        <h4 className="font-bold text-base text-[#232F3E]">James Pattinson</h4>
        <div className="flex items-center justify-center text-lg gap-1">
          <IoStarSharp className="text-[#FF7A00]" />
          <IoStarSharp className="text-[#FF7A00]" />
          <IoStarSharp className="text-[#FF7A00]" />
          <IoStarSharp className="text-[#FF7A00]" />
          <IoStarSharp className="text-[#C4C4C4]" />
        </div>
        <p>
          “Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus
          tortor donec ipsum consequat semper consequat adipiscing ultrices.”
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
