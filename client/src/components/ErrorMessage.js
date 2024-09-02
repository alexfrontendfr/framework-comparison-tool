import React from "react";
import { Typography, Paper } from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";

const ErrorMessage = ({ message }) => (
  <Paper
    style={{ padding: "1rem", marginTop: "2rem", backgroundColor: "#ffcdd2" }}
  >
    <Typography
      variant="h6"
      color="error"
      style={{ display: "flex", alignItems: "center" }}
    >
      <ErrorIcon style={{ marginRight: "0.5rem" }} />
      Error
    </Typography>
    <Typography variant="body1">{message}</Typography>
  </Paper>
);

export default ErrorMessage;
