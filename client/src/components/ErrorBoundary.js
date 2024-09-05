// src/components/ErrorBoundary.js
import React from "react";
import styled from "styled-components";

const ErrorContainer = styled.div`
  padding: 2rem;
  background-color: #ffebee;
  border-radius: 10px;
  margin: 2rem auto;
  max-width: 600px;
`;

const ErrorTitle = styled.h1`
  color: #c62828;
`;

const ErrorMessage = styled.p`
  color: #333;
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorTitle>Something went wrong</ErrorTitle>
          <ErrorMessage>
            {this.state.error && this.state.error.toString()}
          </ErrorMessage>
          <ErrorMessage>
            Please try refreshing the page or contact support if the problem
            persists.
          </ErrorMessage>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
