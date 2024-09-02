import React from "react";
import { CircularProgress, Typography, Box } from "@material-ui/core";

const LoadingSpinner = ({ message = "Loading..." }) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    height="50vh"
  >
    <CircularProgress size={60} thickness={4} />
    <Typography variant="h6" style={{ marginTop: "1rem" }}>
      {message}
    </Typography>
  </Box>
);

export default LoadingSpinner;
