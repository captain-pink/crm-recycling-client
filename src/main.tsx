import "./global/style/index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";

import { client } from "./api/client.ts";
import App from "./app.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
