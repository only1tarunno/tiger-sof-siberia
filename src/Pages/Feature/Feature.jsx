import BottomFooter from "../../Components/Footer/BottomFooter";
import Footer from "../../Components/Footer/Footer";
import FeaturePageNav from "../../Components/Navbar/FeaturePageNav";
import FeatureBanner from "./FeatureBanner";
import FeatureDescription from "./FeatureDescription/FeatureDescription";

const Feature = () => {
  return (
    <>
      <FeaturePageNav />
      <FeatureBanner />
      <FeatureDescription />
      <Footer />
      <BottomFooter />
    </>
  );
};

export default Feature;
