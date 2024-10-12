import { createBrowserRouter } from "react-router-dom";
import HomePage from "../page/home";
import LoginPage from "../page/login";
import Register from "../page/register";
import Member from "../page/member";
import Dashboard from "../page/admin/dashboard";
import Services from "../page/admin/services";
import Users from "../page/admin/users";
import Admin from "../page/admin";
import Product from "../page/product";
import Service from "../page/service";
import Stylist from "../page/stylist/index";
import StylistProfile from "../page/stylist-detail";
import Contact from "../page/contact";
import Staff from "../page/staff";
import Booking from "../page/admin/booking";
import Stylists from "../page/admin/stylist";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "login",
        element: <LoginPage />,
    },
    {
        path: "register",
        element: <Register />,
    },
    {
        path: "member",
        element: <Member />,
    },
    {
        path: "admin",
        element: <Admin />,
        children: [
            {
                path: "dashboard",
                element: <Dashboard />, // Component cho trang Dashboard
            },
            {
                path: "booking",
                element: <Booking />, // Component cho trang Dashboard
            },
            {
                path: "services",
                element: <Services />, // Component cho trang Dashboard
            },
            {
                path: "users",
                element: <Users />, // Component cho trang Users
            },
            {
                path: "stylists",
                element: <Stylists />, // Component cho trang Users
            },
        ],
    },
    {
        path: "product",
        element: <Product />,
    },
    {
        path: "service",
        element: <Service />,
    },
    {
        path: "stylist",
        element: <Stylist />,
    },
    {
        path: "stylist/:id",
        element: <StylistProfile />,
    },
    {
        path: "contact",
        element: <Contact />,
    },
    {
        path: "staff",
        element: <Staff />,
    },
]);
