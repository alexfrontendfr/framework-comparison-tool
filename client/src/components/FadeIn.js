import React from "react";
import { Fade } from "";

const FadeIn = ({ children }) => (
  <Fade in={true} timeout={1000}>
    <div>{children}</div>
  </Fade>
);

export default FadeIn;
