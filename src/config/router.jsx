import { createBrowserRouter } from "react-router-dom";
import HomePage from "../page/home";
import LoginPage from "../page/login";
import Register from "../page/register";
import Member from "../page/member";
import Dashboard from "../components/dashboard";
import UserManagement from "../page/admin/manage-user";
import ProductManagement from "../page/admin/manage-product"; 
import Product from "../page/product";
import ServiceManagement from "../page/admin/manage-service";
import Service from "../page/service";

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
    element: <Dashboard/>,
    children: [
      {
        path: "usermanagement",
        element: <UserManagement/>
      },
      {
        path: "productmanagement",
        element: <ProductManagement/>
      },
      {
        path: "servicemanagement",
        element: <ServiceManagement/>
      },
    ],
  },
  {
    path:"product",
    element: <Product/>
  },
  {
    path:"service",
    element: <Service/>
  }

]);
