import { HiUserGroup } from "react-icons/hi";
import { LuClock4 } from "react-icons/lu";
import { FaSuitcase } from "react-icons/fa6";

const FeatureDescriptionSidebar = () => {
  return (
    <div className="w-full text-[#111111] lg:w-[265px] space-y-10 order-1 lg:order-2">
      <div className="space-y-5">
        <h3 className="text-xl">Job details</h3>
        <ul>
          <li className="flex items-center gap-3 border-t border-b border-[#E8E8E8] p-3 hover:text-[#0073A8] [&>span]:hover:text-[#0073A8]">
            <span className="text-[#C05719] text-xl">
              <HiUserGroup />
            </span>
            Qiyorie Corporation
          </li>
          <li className="flex items-center gap-3 border-t border-b border-[#E8E8E8] p-3 hover:text-[#0073A8] [&>span]:hover:text-[#0073A8]">
            <span className="text-[#C05719] text-xl">
              <LuClock4 />
            </span>
            2022-2023
          </li>
          <li className="flex items-start gap-3 border-t border-b border-[#E8E8E8] p-3 [&>span]:hover:text-[#0073A8] hover:text-[#0073A8]">
            <span className="text-[#C05719] text-xl mt-2 ">
              <FaSuitcase />
            </span>
            UI/UX Mobile & Website Design, Web & Mobile App Development
          </li>
        </ul>
      </div>
      <div className="space-y-5">
        <div>
          <h3 className="text-xl">Table of Contents</h3>
          <p>Based on your recent activity, you may be interested in:</p>
        </div>
        <ul>
          <li className=" border-t border-b border-[#E8E8E8] p-3 text-[#0073A8] hover:text-[#111]">
            Client Background
          </li>
          <li className=" border-t border-b border-[#E8E8E8] p-3 text-[#0073A8] hover:text-[#111]">
            Challenge Faced
          </li>
          <li className=" border-t border-b border-[#E8E8E8] p-3 text-[#0073A8] hover:text-[#111]">
            Solution Provide
          </li>
          <li className=" border-t border-b border-[#E8E8E8] p-3 text-[#0073A8] hover:text-[#111]">
            Implementation Process
          </li>
          <li className=" border-t border-b border-[#E8E8E8] p-3 text-[#0073A8] hover:text-[#111]">
            Results and Outcomes
          </li>
          <li className=" border-t border-b border-[#E8E8E8] p-3 text-[#0073A8] hover:text-[#111]">
            Conclusion
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FeatureDescriptionSidebar;
