import { createBrowserRouter } from "react-router-dom";
import { SignUpPage } from "../page";
import { LoginPage } from "../page/login";
import { Dashboard } from "../page/dashboard";

export const APP_ROUTER = createBrowserRouter([
  {
    path: "/",
    Component: Dashboard,
  },
  {
    path: "/manufacturer-dashboard",
    Component: Dashboard,
  },
  {
    path: "/sign-up",
    Component: SignUpPage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
]);
