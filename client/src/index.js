// src/index.js
import React from "react";
import BrowserRouter from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import App from "./App";
import store from "./redux/store";
import GlobalStyle from "./globalStyles";
import theme from "./theme";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter basename="/framework-comparison-tool">
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
