import { createBrowserRouter } from "react-router-dom";

export const APP_ROUTER = createBrowserRouter([
  {
    path: "/",
    lazy: async () => {
      const { LoginPage: Component } = await import("../page/login/index");

      return { Component };
    },
  },
]);
