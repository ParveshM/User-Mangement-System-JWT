import { createBrowserRouter } from "react-router-dom";
import {
  Signup,
  Home,
  ProfileSection,
  AdminDashboard,
  EditUser,
  AddUser,
  ErrorPage,
} from "../pages/index";
import ProtectedRoute from "./ProtectedRoutes";
import IsNotLoggedIn from "./isNotLogged";
import { LoginForm } from "../components";
import AdminRoute from "./AdminRoute";
import { lazy } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />,
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <ProfileSection />,
      </ProtectedRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <IsNotLoggedIn>
        <Signup />,
      </IsNotLoggedIn>
    ),
  },
  {
    path: "/login",
    element: (
      <IsNotLoggedIn>
        <LoginForm url={"/login"} navigated={"/"} title={"Sign in"} />,
      </IsNotLoggedIn>
    ),
  },
  {
    path: "/admin/login",
    element: (
      <LoginForm
        url={"/admin/login"}
        navigated={"/admin/dashboard"}
        title={"Admin"}
      />
    ),
  },
  {
    path: "/admin/dashboard",
    element: (
      <AdminRoute>
        <AdminDashboard />
      </AdminRoute>
    ),
  },
  {
    path: "/admin/edit_user/:id",
    element: (
      <AdminRoute>
        <EditUser />
      </AdminRoute>
    ),
  },
  {
    path: "/admin/add_new_user",
    element: (
      <AdminRoute>
        <AddUser />
      </AdminRoute>
    ),
  },
]);

export default router;
