import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./index.css";
import App from "./App";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./error/Error";

const theme = extendTheme({
  colors: {
    brand: {
      headerColor: "#161b22",
      bodyColor: "#0D1117",
      borderColor: "#30363D",
      btnColor: "#21262D",
      proColor: "#A371F7",
      proBorderColor: "#8957E5",
      textColor: "#58A6FF",
      textColor2: "#C9D1D9",
      grayColor: "#8b949e",
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          // reset the state of your app so the error doesn't happen again
        }}
      >
        <App />
      </ErrorBoundary>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
