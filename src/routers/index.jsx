import { createBrowserRouter } from "react-router-dom";
// Layout
import MainLayout from "@/layouts/mainLayout";
import BlankLayout from "@/layouts/blankLayout";
// Verify
import Login from "@/pages/Login/index";
import Register from "@/pages/Login/register";
// Pages
import Home from "@/pages/Home/index";
import Cart from "@/pages/Cart/index";

export const router = createBrowserRouter([
  {
    element: <BlankLayout />,
    children: [{ path: "/login", element: <Login /> }],
  },
  {
    element: <BlankLayout />,
    children: [{ path: "/register", element: <Register /> }],
  },

  {
    element: <MainLayout />,
    children: [{ path: "/", element: <Home /> }],
  },

  {
    element: <MainLayout />,
    children: [{ path: "/cart", element: <Cart /> }],
  },
]);
