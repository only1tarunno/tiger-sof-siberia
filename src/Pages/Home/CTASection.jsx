import Container from "../../Components/Shared/Container";

const CTASection = () => {
  return (
    <div className="py-10 md:py-20 bg-[#005276]">
      <Container>
        <div className=" max-w-2xl space-y-8">
          <h2 className="text-white text-4xl md:text-5xl ">
            Come build the future with us
          </h2>
          <p className="text-white">
            Our mission is to be Earth&apos;s most customer-centric company.
            This is what unites Amazonians across teams and geographies as we
            are all striving to delight our customers and make their lives
            easier, one innovative product, service, and idea at a time.
          </p>
          <button className="btn text-white border border-white bg-transparent uppercase rounded hover:bg-[#232F3E]  hover:border-[#232F3E]">
            Learn about working at Amazon
          </button>
        </div>
      </Container>
    </div>
  );
};

export default CTASection;
