import { createBrowserRouter } from "react-router-dom";
import ComingSoon from "../Pages/ComingSoon.jsx/ComingSoon";
import Home from "../Pages/Home/Home";
import SubpageLayouts from "../Layouts/SubpageLayouts";
import BlogDetails from "../Pages/BlogDetails.jsx/BlogDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ComingSoon />,
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
