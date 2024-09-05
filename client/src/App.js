// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
    <Router basename={process.env.REACT_APP_BASE_URL}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ErrorBoundary>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/comparison" element={<Comparison />} />
            </Routes>
            <BackToTop />
          </Router>
        </ErrorBoundary>
      </ThemeProvider>
    </Router>
  );
}

export default App;
