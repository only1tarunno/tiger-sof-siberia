import HomePageNav from "../Components/Navbar/HomePageNav";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const HomeLayout = () => {
  return (
    <>
      <HomePageNav />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
