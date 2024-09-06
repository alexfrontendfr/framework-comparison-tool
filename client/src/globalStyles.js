import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&family=Roboto:wght@400;500&display=swap');

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 14px;
    }
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: ${({ theme }) => theme.lineHeights.body};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    margin-top: 0;
    line-height: ${({ theme }) => theme.lineHeights.heading};
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }

  p {
    margin-bottom: ${({ theme }) => theme.space[3]}px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.default};

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    h1 {
      font-size: ${({ theme }) => theme.fontSizes.xlarge};
    }

    h2 {
      font-size: ${({ theme }) => theme.fontSizes.large};
    }

    h3 {
      font-size: ${({ theme }) => theme.fontSizes.medium};
    }
  }
`;

export default GlobalStyle;
