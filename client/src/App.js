// src/App.js
import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyle from "./globalStyles";
import Header from "./components/Header";
import Home from "./pages/Home";
import Comparison from "./pages/Comparison";
import FrameworkDetails from "./pages/FrameworkDetails";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="/framework/:id" element={<FrameworkDetails />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
