import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import ComingSoon from "../Pages/ComingSoon.jsx/ComingSoon";
import Home from "../Pages/Home/Home";
import SubpageLayouts from "../Layouts/SubpageLayouts";
import BlogDetails from "../Pages/BlogDetails.jsx/BlogDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ComingSoon />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },

  {
    path: "/",
    element: <SubpageLayouts />,
    children: [
      {
        path: "/feature",
        element: <BlogDetails />,
      },
    ],
  },
]);

export default router;
