import { InMemoryCache, HttpLink, ApolloClient } from "@apollo/client";
import { persistCache, SessionStorageWrapper } from "apollo3-cache-persist";

const cache = new InMemoryCache();

export const SessionStorage = new SessionStorageWrapper(window.sessionStorage);

await persistCache({
  cache,
  storage: SessionStorage,
});

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_API_URL || "http://localhost:3001/graphql",
  credentials: "include",
  fetchOptions: {
    mode: "cors",
  },
});

export const client = new ApolloClient({
  cache,
  link: httpLink,
});
