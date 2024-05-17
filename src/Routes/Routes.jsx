import { createBrowserRouter } from "react-router-dom";
import ComingSoon from "../Pages/ComingSoon.jsx/ComingSoon";
import Home from "../Pages/Home/Home";
import Feature from "../Pages/Feature/Feature";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ComingSoon />,
  },

  {
    path: "/feature",
    element: <Feature />,
  },
]);

export default router;
