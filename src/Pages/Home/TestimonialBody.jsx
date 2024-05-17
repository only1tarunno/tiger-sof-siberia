import TestimonialBodyLeft from "./TestimonialBodyLeft";
import TestimonialBodyRight from "./TestimonialBodyRight";

const TestimonialBody = () => {
  return (
    <div className="bg-white flex flex-col lg:flex-row items-center py-10">
      <TestimonialBodyLeft />
      <TestimonialBodyRight />
    </div>
  );
};

export default TestimonialBody;
