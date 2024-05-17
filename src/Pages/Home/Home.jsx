import Footer from "../../Components/Footer/Footer";
import HomePageNav from "../../Components/Navbar/HomePageNav";
import AboutUsSection from "./AboutUsSection";
import Banner from "./Banner";

const Home = () => {
  return (
    <>
      <HomePageNav />
      <Banner />
      <AboutUsSection />
      <Footer />
    </>
  );
};

export default Home;
