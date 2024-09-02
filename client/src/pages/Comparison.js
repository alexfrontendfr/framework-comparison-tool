import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Typography, Grid, Paper, Button } from "@material-ui/core";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { fetchFrameworks } from "../redux/frameworksSlice";
import LoadingSpinner from "../components/LoadingSpinner";
import FadeIn from "../components/FadeIn";

const Comparison = ({ setSnackbar }) => {
  const dispatch = useDispatch();
  const { frameworks, status, error } = useSelector(
    (state) => state.frameworks
  );
  const frameworkLogos = {
    React: "/images/react-logo.webp",
    Vue: "/images/vue-logo.webp",
    Angular: "/images/angular-logo.webp",
    Svelte: "/images/svelte-logo.webp",
  };

  const chartData = useMemo(() => {
    return frameworks.map((framework) => ({
      name: framework.name,
      performanceScore: framework.performanceScore,
    }));
  }, [frameworks]);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchFrameworks());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <LoadingSpinner message="Loading frameworks..." />;
  }

  if (status === "failed") {
    setSnackbar({ open: true, message: error, severity: "error" });
    return null;
  }

  return (
    <FadeIn>
      <div style={{ marginTop: "2rem" }}>
        <Typography variant="h4" gutterBottom>
          Framework Comparison
        </Typography>
        <Paper style={{ padding: "1rem", marginBottom: "2rem" }}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="performanceScore"
                fill="#8884d8"
                name="Performance Score"
              />
            </BarChart>
          </ResponsiveContainer>
        </Paper>
        <Grid container spacing={3}>
          {frameworks.map((framework) => (
            <Grid item xs={12} sm={6} md={4} key={framework._id}>
              <Paper style={{ padding: "1rem" }}>
                <img
                  src={frameworkLogos[framework.name]}
                  alt={`${framework.name} logo`}
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "contain",
                  }}
                />
                <Typography variant="h6" gutterBottom>
                  {framework.name}
                </Typography>
                <Button
                  component={RouterLink}
                  to={`/framework/${framework._id}`}
                  variant="outlined"
                  color="primary"
                  style={{ marginTop: "1rem" }}
                >
                  View Details
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </FadeIn>
  );
};

export default Comparison;
