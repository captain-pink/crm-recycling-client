import { createBrowserRouter } from "react-router-dom";

export const APP_ROUTER = createBrowserRouter([
  {
    path: "/",
    lazy: async () => {
      const { LandingPage: Component } = await import("../page/landing");

      return { Component };
    },
  },
  {
    path: "/dashboard",
    lazy: async () => {
      const { Dashboard: Component } = await import("../page/dashboard");

      return { Component };
    },
  },
  {
    path: "/sign-up",
    lazy: async () => {
      const { SignUpPage: Component } = await import("../page/sign-up");

      return { Component };
    },
  },
  {
    path: "/login",
    lazy: async () => {
      const { LoginPage: Component } = await import("../page/login");

      return { Component };
    },
  },
  {
    path: "/recycle",
    lazy: async () => {
      const { RecycleDevicePage: Component } = await import(
        "../page/recycle-device"
      );

      return { Component };
    }
  }
]);
