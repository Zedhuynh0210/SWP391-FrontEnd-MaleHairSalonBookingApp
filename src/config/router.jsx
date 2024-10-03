import { createBrowserRouter } from "react-router-dom";
import HomePage from "../page/home";
import LoginPage from "../page/login";
import Register from "../page/register";
import Member from "../page/member";
import DashBoard from "../page/dashboard";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path:"login",
    element: <LoginPage/>
  },
  {
    path:"register",
    element: <Register/>
  },
  {
    path:"member",
    element: <Member/>
  },
  {
    path:"dashboard",
    element: <DashBoard/>
  }

]);
