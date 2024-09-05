// src/App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home";
import Comparison from "./pages/Comparison";
import Header from "./components/Header";
import ErrorBoundary from "./components/ErrorBoundary";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ErrorBoundary>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comparison" element={<Comparison />} />
        </Routes>
        <BackToTop />
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
