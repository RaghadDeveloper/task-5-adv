import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AppLayout from "./components/AppLayout";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/singup",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="products" replace />,
      },
      {
        path: "/products",
        children: [
          {
            index: true,
            element: <Products />,
          },
          {
            path: ":id",
            element: <ProductDetails />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
