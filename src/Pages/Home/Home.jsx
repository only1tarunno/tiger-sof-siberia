import BottomFooter from "../../Components/Footer/BottomFooter";
import Footer from "../../Components/Footer/Footer";
import HomePageNav from "../../Components/Navbar/HomePageNav";
import AboutUsSection from "./AboutUsSection";
import Banner from "./Banner";
import BlogCards from "./BlogCards";
import CTASection from "./CTASection";
import Statistics from "./Chart/Statistics";
import Ribon from "./Ribon";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <HomePageNav />
      <Banner />
      <AboutUsSection />
      <BlogCards />
      <Ribon />
      <Statistics />
      <Testimonial />
      <CTASection />
      <Footer />
      <BottomFooter />
    </>
  );
};

export default Home;
