import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import College from "../Pages/College/College";
import Admission from "../Pages/Admission/Admission";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/college", element: <College /> },
      { path: "/admission", element: <Admission /> },
      { path: "/login", element: <Login /> },
      { path: "/registration", element: <Registration /> },
    ],
  },
]);
