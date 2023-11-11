import { createBrowserRouter } from "react-router-dom";
import { SignUpPage } from "../page";

export const APP_ROUTER = createBrowserRouter([
  {
    path: "/",
    lazy: async () => {
      const { SignUpPage: Component } = await import("../page/sign-up");

      return { Component };
    },
  },
  {
    path: "/sign-up",
    Component: SignUpPage,
  },
]);
