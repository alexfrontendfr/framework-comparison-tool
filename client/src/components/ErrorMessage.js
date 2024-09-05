import React from "react";
import styled from "styled-components";

const ErrorContainer = styled.div`
  background-color: #ffebee;
  color: #c62828;
  padding: 16px;
  border-radius: 4px;
  margin-bottom: 16px;
`;

const ErrorMessage = ({ message }) => (
  <ErrorContainer>
    <strong>Error:</strong> {message}
  </ErrorContainer>
);

export default ErrorMessage;
