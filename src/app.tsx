import { RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { __DEV__ } from "@apollo/client/utilities/globals";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

import { APP_ROUTER } from "./common/router";

if (__DEV__) {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#283841',
    }
  },
  typography: {
    fontFamily: "Roboto",
  },
  components: {},
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={APP_ROUTER} />
    </ThemeProvider>
  );
}

export default App;
