import SubPageNav from "../Components/Navbar/SubPageNav";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import BottomFooter from "../Components/Footer/BottomFooter";

const SubpageLayouts = () => {
  return (
    <>
      <SubPageNav />
      <Outlet />
      <Footer />
      <BottomFooter />
    </>
  );
};

export default SubpageLayouts;
