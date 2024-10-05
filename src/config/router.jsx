import { createBrowserRouter } from "react-router-dom";
import HomePage from "../page/home";
import LoginPage from "../page/login";
import Register from "../page/register";
import Member from "../page/member";
import Dashboard from "../components/dashboard";
import Manage from "../page/admin/manage-user";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path:"/login",
    element: <LoginPage/>
  },
  {
    path:"/register",
    element: <Register/>
  },
  {
    path:"/member",
    element: <Member/>
  },
  {
    path:"/dashboard",
    element: <Dashboard/>
  },
  {
    path:"/manage",
    element: <Manage/>
  }

]);
