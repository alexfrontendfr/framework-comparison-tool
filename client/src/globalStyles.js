// src/globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&family=Roboto:wght@400;500&display=swap');

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme?.fonts?.body || "'Roboto', sans-serif"};
    background-color: ${({ theme }) => theme?.colors?.background || "#f9f9f9"};
    color: ${({ theme }) => theme?.colors?.text || "#2c3e50"};
    line-height: ${({ theme }) => theme?.lineHeights?.body || 1.5};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) =>
      theme?.fonts?.heading || "'Poppins', sans-serif"};
    margin-top: 0;
    line-height: ${({ theme }) => theme?.lineHeights?.heading || 1.2};
  }

  h1 {
    font-size: ${({ theme }) => theme?.fontSizes?.xxlarge || "2rem"};
  }

  h2 {
    font-size: ${({ theme }) => theme?.fontSizes?.xlarge || "1.5rem"};
  }

  h3 {
    font-size: ${({ theme }) => theme?.fontSizes?.large || "1.25rem"};
  }

  p {
    margin-bottom: ${({ theme }) => theme?.space?.[3] || "16px"};
  }

  a {
    color: ${({ theme }) => theme?.colors?.primary || "#3498db"};
    text-decoration: none;
    transition: ${({ theme }) =>
      theme?.transitions?.default || "all 0.3s ease"};

    &:hover {
      color: ${({ theme }) => theme?.colors?.secondary || "#2ecc71"};
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme?.breakpoints?.mobile || "480px"}) {
    h1 {
      font-size: ${({ theme }) => theme?.fontSizes?.xlarge || "1.5rem"};
    }

    h2 {
      font-size: ${({ theme }) => theme?.fontSizes?.large || "1.25rem"};
    }

    h3 {
      font-size: ${({ theme }) => theme?.fontSizes?.medium || "1rem"};
    }
  }
`;

export default GlobalStyle;
