import { IoSearchOutline } from "react-icons/io5";
import Links from "./Links";
import Container from "../Shared/Container";

const SubPageNav = () => {
  return (
    <Container>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">Navbar Title</div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal items-center">
                {/* Navbar menu content here */}
                <Links />
                <form
                  onClick={(e) => e.preventDefualt()}
                  className="flex justify-between items-center border-b border-red-400 pb-1"
                  id="searchBar"
                >
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent focus-visible:outline-none  md:w-auto "
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
  );
};

export default SubPageNav;
