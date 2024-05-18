import { IoSearchOutline } from "react-icons/io5";
import Links from "./Links";
import Container from "../Shared/Container";
import logo from "../../assets/logo-white.png";
import { RxHamburgerMenu } from "react-icons/rx";

const SubPageNav = () => {
  return (
    <div className="bg-[#232F3E] py-2">
      <Container>
        <div className="drawer relative z-50">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="w-full navbar">
              <div className="flex-1 px-2 mx-2">
                <img src={logo} className="w-32 md:w-44" alt="Logo" />
              </div>
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn text-white bg-transparent text-2xl border-none p-0"
                >
                  <RxHamburgerMenu />
                </label>
              </div>
              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal items-center text-white">
                  {/* Navbar menu content here */}
                  <Links />
                  <form
                    onClick={(e) => e.preventDefault()}
                    className="flex justify-between items-center border-b border-white pb-1"
                    id="searchBar"
                  >
                    <input
                      type="text"
                      placeholder="SEARCH"
                      className="bg-transparent focus-visible:outline-none  md:w-auto placeholder:text-white placeholder:text-base"
                    />
                    <button className=" text-2xl">
                      <IoSearchOutline />
                    </button>
                  </form>
                </ul>
              </div>
            </div>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200">
              {/* Sidebar content here */}
              <Links />
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SubPageNav;
