import SubPageNav from "../Components/Navbar/SubPageNav";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";

const SubpageLayouts = () => {
  return (
    <>
      <SubPageNav />
      <Outlet />
      <Footer />
    </>
  );
};

export default SubpageLayouts;
