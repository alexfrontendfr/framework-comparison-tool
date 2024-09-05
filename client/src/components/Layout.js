import React from "react";
import styled from "styled-components";
import { theme } from "../theme";

const LayoutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: ${theme.breakpoints.tablet}) {
    padding: 0 32px;
  }
`;

const Layout = ({ children }) => <LayoutContainer>{children}</LayoutContainer>;

export default Layout;
