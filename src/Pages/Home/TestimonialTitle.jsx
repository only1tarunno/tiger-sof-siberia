import { FaChevronRight } from "react-icons/fa";

const TestimonialTitle = () => {
  return (
    <div className="flex items-baseline justify-between mb-5">
      <div>
        <h2 className="text-2xl font-bold">Results</h2>
        <p className="text-xl font-bold">
          We support countries&lsquo; poverty reduction strategies
        </p>
      </div>
      <div className="mt-auto w-72 text-end">
        <button className="btn text-[#232F3E] border border-white bg-white uppercase rounded hover:bg-[#e4e3e3]  hover:border-[#FF9900]">
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
