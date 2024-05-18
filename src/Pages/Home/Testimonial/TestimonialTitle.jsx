import { FaChevronRight } from "react-icons/fa";

const TestimonialTitle = () => {
  return (
    <div className="flex items-center lg:items-baseline justify-between mb-10">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Results</h2>
        <p className="text-base lg:text-xl font-bold">
          We support countries&lsquo; poverty reduction strategies
        </p>
      </div>
      <div className="lg:mt-auto w-64 lg:w-72 text-end">
        <button className="btn text-xs lg:text-base text-[#232F3E] border border-white bg-white uppercase rounded hover:bg-[#e4e3e3]  hover:border-[#FF9900]">
          What We Do
          <span>
            <FaChevronRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default TestimonialTitle;
