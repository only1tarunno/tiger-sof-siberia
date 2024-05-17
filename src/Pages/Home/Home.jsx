import Footer from "../../Components/Footer/Footer";
import HomePageNav from "../../Components/Navbar/HomePageNav";
import AboutUsSection from "./AboutUsSection";
import Banner from "./Banner";
import BlogCards from "./BlogCards";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <>
      <HomePageNav />
      <Banner />
      <AboutUsSection />
      <BlogCards />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
