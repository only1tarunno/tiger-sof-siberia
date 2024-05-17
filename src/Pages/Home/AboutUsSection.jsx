import Container from "../../Components/Shared/Container";
import aboutImg from "../../assets/about-us.jpg";

const AboutUsSection = () => {
  return (
    <div className=" -mt-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 shadow-lg">
          <div className="bg-white flex flex-col justify-center px-5 py-10 md:px-16 space-y-6 order-2 md:order-1">
            <h3>About Us</h3>
            <h2 className="text-5xl max-w-xl">
              Short Headline for Company About Section Will Be Here
            </h2>
            <p className="max-w-[550px]">
              This part will introduce you or your business to website visitors.
              We&lsquo;ll write about you, your organization, the products or
              services you offer, and why your company exists.
            </p>
            <div>
              <button className="btn bg-[#232F3E] border border-[#232F3E] text-white uppercase rounded hover:bg-[#151c25] hover:border-[#FF9900]">
                Call to Action
              </button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img src={aboutImg} className="w-full" alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUsSection;
