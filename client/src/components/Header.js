import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Framework Comparison Tool
        </Typography>
        <Button
          color="inherit"
          component={RouterLink}
          to="/"
          aria-label="Go to home page"
        >
          Home
        </Button>
        <Button
          color="inherit"
          component={RouterLink}
          to="/comparison"
          aria-label="Go to framework comparison page"
        >
          Compare
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
