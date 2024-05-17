import { FaChevronRight } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

const TestimonialBodyLeft = () => {
  return (
    <div className="px-10 py-5 lg:py-16 w-full lg:w-[40%] lg:border-r border-[#E6E6E6] space-y-4">
      <p>
        Access the World Bank&lsquo;s portfolio of more than 12,000 development
        projects, including current and historical data since 1947.
      </p>
      <form
        onClick={(e) => e.preventDefault()}
        className="relative"
        id="searchBar"
      >
        <input
          type="text"
          placeholder="Search projects"
          className="bg-transparent border w-full py-2 px-4 border-[#D4D4D4] focus-visible:outline-none   placeholder:text-[#757575] placeholder:text-base"
        />
        <button className="text-2xl text-[#EC553A] absolute top-1/2 -translate-y-1/2 right-3">
          <IoSearchOutline />
        </button>
      </form>
      <h5 className="font-bold text-base leading-none flex items-center gap-2">
        All Projects
        <span className="text-sm">
          <FaChevronRight />
        </span>
      </h5>
      <div className="flex gap-2">
        <span>By Country</span>
        <span className="border-r border-l border-[#E6E6E6] px-2">
          By Sector
        </span>
        <span>By Theme</span>
      </div>
      <hr />
      <p>Results from Projects and Operations</p>
    </div>
  );
};

export default TestimonialBodyLeft;
