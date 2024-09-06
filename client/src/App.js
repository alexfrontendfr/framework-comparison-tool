import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyle from "./globalStyles";
import Header from "./components/Header";
import Home from "./pages/Home";
import Comparison from "./pages/Comparison";
import FrameworkDetails from "./pages/FrameworkDetails";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <ErrorBoundary>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/comparison" element={<Comparison />} />
            <Route path="/framework/:id" element={<FrameworkDetails />} />
          </Routes>
        </ErrorBoundary>
      </Router>
    </ThemeProvider>
  );
}

export default App;
