import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AppLayout from "./components/AppLayout";

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
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
