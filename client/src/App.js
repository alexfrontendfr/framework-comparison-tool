import React, { useState, Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { Container, Snackbar, Typography } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import Header from "./components/Header";
import LoadingSpinner from "./components/LoadingSpinner";
import SkipLink from "./components/SkipLink";

const Home = lazy(() => import("./pages/Home"));
const Comparison = lazy(() => import("./pages/Comparison"));
const FrameworkDetails = lazy(() => import("./pages/FrameworkDetails"));

function App() {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "info",
  });

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <>
      <SkipLink />
      <Header />
      <Container id="main-content">
        <Typography
          variant="h1"
          style={{ position: "absolute", left: "-9999px" }}
        >
          Framework Comparison Tool
        </Typography>
        <Suspense fallback={<LoadingSpinner />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/comparison"
              render={(props) => (
                <Comparison {...props} setSnackbar={setSnackbar} />
              )}
            />
            <Route
              path="/framework/:id"
              render={(props) => (
                <FrameworkDetails {...props} setSnackbar={setSnackbar} />
              )}
            />
          </Switch>
        </Suspense>
      </Container>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default App;
