import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/comparison" component={Comparison} />
          <Route path="/framework/:id" component={FrameworkDetails} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
