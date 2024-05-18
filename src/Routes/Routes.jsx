import { createBrowserRouter } from "react-router-dom";
import ComingSoon from "../Pages/ComingSoon.jsx/ComingSoon";
import Home from "../Pages/Home/Home";
import Feature from "../Pages/Feature/Feature";
import SubpageLayouts from "../Layouts/SubpageLayouts";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";

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
        element: <Feature />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
