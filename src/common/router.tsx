import { createBrowserRouter } from "react-router-dom";
import { SignUpPage } from "../page";

export const APP_ROUTER = createBrowserRouter([
  {
    path: "/",
    lazy: async () => {
      const { Dashboard: Component } = await import("../page/dashboard");

      return { Component };
    },
  },
  {
    path: "/sign-up",
    Component: SignUpPage,
  },
]);
