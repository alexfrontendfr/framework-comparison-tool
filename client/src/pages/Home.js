import React from "react";
import { Typography, Button, Grid, Paper } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import FadeIn from "../components/FadeIn";

const Home = () => {
  return (
    <FadeIn>
      <div style={{ marginTop: "2rem" }}>
        <Typography variant="h4" gutterBottom>
          Welcome to the Framework Comparison Tool
        </Typography>
        <Typography variant="body1" paragraph>
          Compare popular frontend frameworks and make informed decisions for
          your next project.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={RouterLink}
          to="/comparison"
          style={{ marginBottom: "2rem" }}
        >
          Start Comparing
        </Button>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper style={{ padding: "1rem" }}>
              <Typography variant="h6" gutterBottom>
                Comprehensive Data
              </Typography>
              <Typography variant="body2">
                Get detailed information on performance, learning curve, and
                community support.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper style={{ padding: "1rem" }}>
              <Typography variant="h6" gutterBottom>
                Visual Comparisons
              </Typography>
              <Typography variant="body2">
                Compare frameworks side-by-side with interactive charts and
                graphs.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper style={{ padding: "1rem" }}>
              <Typography variant="h6" gutterBottom>
                Stay Updated
              </Typography>
              <Typography variant="body2">
                Access the latest information on framework versions and trends.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </FadeIn>
  );
};

export default Home;
