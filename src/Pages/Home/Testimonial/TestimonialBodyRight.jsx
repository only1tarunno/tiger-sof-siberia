import TestimonialCard from "./TestimonialCard";

const TestimonialBodyRight = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-10 w-full lg:w-[60%]">
      <TestimonialCard />
      <TestimonialCard />
    </div>
  );
};

export default TestimonialBodyRight;
