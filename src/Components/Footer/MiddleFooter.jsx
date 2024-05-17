import { BsGlobe2 } from "react-icons/bs";

const MiddleFooter = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      <div className="space-y-4">
        <h6 className="text-[#FF9900] text-lg">Find Careers</h6>

        <ul className="text-white space-y-2">
          <li>
            <a className="hover:text-[#FF9900]" href="#">
              Job Categories
            </a>
          </li>
          <li>
            <a className="hover:text-[#FF9900]" href="#">
              Teams
            </a>
          </li>
          <li>
            <a className="hover:text-[#FF9900]" href="#">
              Locations
            </a>
          </li>
          <li>
            <a className="hover:text-[#FF9900]" href="#">
              US and EU Military recruiting
            </a>
          </li>
          <li>
            <a className="hover:text-[#FF9900]" href="#">
              Warehouse and Hourly Jobs
            </a>
          </li>
        </ul>
      </div>
      <div className="space-y-4">
        <h6 className="text-[#FF9900] text-lg">Working At Amazon</h6>

        <ul className="text-white space-y-2">
          <li>
            <a className="hover:text-[#FF9900]" href="#">
              Culture
            </a>
          </li>
          <li>
            <a className="hover:text-[#FF9900]" href="#">
              Benefits
            </a>
          </li>
          <li>
            <a className="hover:text-[#FF9900]" href="#">
              Amazon Newsletter
            </a>
          </li>
          <li>
            <a className="hover:text-[#FF9900]" href="#">
              Diversity at Amazon
            </a>
          </li>
          <li>
            <a className="hover:text-[#FF9900]" href="#">
              Our leadership principles
            </a>
          </li>
        </ul>
      </div>
      <div className="space-y-4">
        <h6 className="text-[#FF9900] text-lg">Help</h6>

        <ul className="text-white space-y-2">
          <li>
            <a className="hover:text-[#FF9900]" href="#">
              FAQ
            </a>
          </li>
          <li>
            <a className="hover:text-[#FF9900]" href="#">
              Interview tips
            </a>
          </li>
          <li>
            <a className="hover:text-[#FF9900]" href="#">
              Review application status
            </a>
          </li>
          <li>
            <a className="hover:text-[#FF9900]" href="#">
              Disability accommodations
            </a>
          </li>
          <li>
            <a className="hover:text-[#FF9900]" href="#">
              EU background checks
            </a>
          </li>
        </ul>
      </div>
      <div className="self-center ">
        <div className="relative">
          <select className="select ps-16 rounded-sm border border-white bg-transparent text-white focus-visible:border-white focus-visible:bg-[#1e2835] w-full max-w-xs">
            <option value="en">English</option>
            <option value="en">English</option>
            <option value="en">English</option>
            <option value="en">English</option>
          </select>
          <BsGlobe2 className="text-white text-2xl absolute left-5 top-1/2 -translate-y-1/2" />
        </div>
      </div>
    </div>
  );
};

export default MiddleFooter;
