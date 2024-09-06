// src/App.js
import React, { useContext } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider, ThemeContext } from "./contexts/ThemeContext";
import { lightTheme, darkTheme } from "./theme";
import GlobalStyle from "./globalStyles";
import Header from "./components/Header";
import Home from "./pages/Home";
import Comparison from "./pages/Comparison";
import FrameworkDetails from "./pages/FrameworkDetails";
import ErrorBoundary from "./components/ErrorBoundary";
import BackToTop from "./components/BackToTop";

function ThemedApp() {
  const { isDarkMode } = useContext(ThemeContext);
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <Router>
        <ErrorBoundary>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/comparison" element={<Comparison />} />
            <Route path="/framework/:id" element={<FrameworkDetails />} />
          </Routes>
          <BackToTop />
        </ErrorBoundary>
      </Router>
    </StyledThemeProvider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

export default App;
