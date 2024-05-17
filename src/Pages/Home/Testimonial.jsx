import Container from "../../Components/Shared/Container";
import TestimonialBody from "./TestimonialBody";
import TestimonialTitle from "./TestimonialTitle";

const Testimonial = () => {
  return (
    <div className="py-10 md:py-20">
      <Container>
        <TestimonialTitle />
        <TestimonialBody />
      </Container>
    </div>
  );
};

export default Testimonial;
