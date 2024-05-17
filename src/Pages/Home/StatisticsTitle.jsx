import { FaChevronRight } from "react-icons/fa";

const StatisticsTitle = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-5">
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-bold">Data</h2>
          <p className="text-base lg:text-xl font-bold">
            We engage the development community with real-world statistics
          </p>
          <div className="flex items-center gap-10">
            <div className="w-full lg:w-[652px]">
              <select className="select rounded-sm border border-[#1e2835] bg-[#1e2835] text-white focus-visible:[#1e2835] focus-visible:bg-[#1e2835] focus-visible:outline-none w-full ">
                <option value="en">IDA trends</option>
                <option value="en">IDA trends</option>
                <option value="en">IDA trends</option>
                <option value="en">IDA trends</option>
              </select>
            </div>

            <div className="hidden lg:flex gap-3">
              <span className="text-[#000000] font-bold">Browse Data</span>
              <span className="text-[#232F3E] border-r border-[#E5E5E5] pr-3">
                By Country
              </span>
              <span className="text-[#232F3E]">By Indicator</span>
            </div>
          </div>
        </div>
        <div className="hidden lg:block w-72 text-end">
          <button className="btn text-[#232F3E] border border-[#f2f2f2] bg-[#f2f2f2] uppercase rounded hover:bg-[#e4e3e3]  hover:border-[#FF9900]">
            View More Data
            <span>
              <FaChevronRight />
            </span>
          </button>
        </div>
      </div>
      <hr className=" my-5 lg:my-10" />
      <div className="flex flex-row items-center lg:block gap-3 mb-10 lg:mb-16">
        <div className="flex flex-col md:flex-row lg:items-center justify-between gap-3">
          <p className=" text-base lg:text-xl font-bold">
            Poverty rate in IDA countries
          </p>
          <div className="text-xs lg:hidden flex gap-3">
            <span className="text-[#000000] font-bold">Browse Data</span>
            <span className="text-[#232F3E] border-r border-[#E5E5E5] pr-3">
              By Country
            </span>
            <span className="text-[#232F3E]">By Indicator</span>
          </div>
          <p className="text-xs lg:text-base w-full lg:max-w-md">
            In 30 years, the poverty rate has halved in countries supported by
            the World Bank&apos;s International Development Association (IDA).
          </p>
        </div>
        <div className="block lg:hidden w-72 text-end">
          <button className="btn text-xs text-[#232F3E] border border-[#f2f2f2] bg-[#f2f2f2] uppercase rounded hover:bg-[#e4e3e3]  hover:border-[#FF9900]">
            View More Data
          </button>
        </div>
      </div>
    </>
  );
};

export default StatisticsTitle;
