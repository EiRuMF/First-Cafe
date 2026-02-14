import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./protectRoute";
// Layout
import MainLayout from "@/layouts/mainLayout";
import BlankLayout from "@/layouts/blankLayout";
// Verify
import Login from "@/pages/Login/index";
import Register from "@/pages/Login/register";
// Pages
import Home from "@/pages/Home/index";
import Cart from "@/pages/Cart/index";
import Profile from "@/pages/Profile";

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
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Home />
           </ProtectedRoute>
        ),
      },
    ],
  },

  {
    element: <MainLayout />,
    children: [
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
