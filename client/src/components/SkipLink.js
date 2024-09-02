import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  skipLink: {
    position: "absolute",
    top: "-40px",
    left: 0,
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(1),
    zIndex: 100,
    "&:focus": {
      top: 0,
    },
  },
}));

const SkipLink = () => {
  const classes = useStyles();

  return (
    <a href="#main-content" className={classes.skipLink}>
      Skip to main content
    </a>
  );
};

export default SkipLink;
