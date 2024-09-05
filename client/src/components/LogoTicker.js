// src/components/LogoTicker.js
import React from "react";
import styled, { keyframes } from "styled-components";
import { assetUrl } from "../utils/assetUrl";

const moveLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const TickerContainer = styled.div`
  width: 100%;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};
  padding: 1rem 0;
  margin: 2rem 0;
`;

const TickerContent = styled.div`
  display: flex;
  animation: ${moveLeft} 30s linear infinite;
  &:hover {
    animation-play-state: paused;
  }
`;

const LogoWrapper = styled.div`
  flex-shrink: 0;
  width: 100px;
  margin: 0 1rem;
  img {
    width: 100%;
    height: auto;
  }
`;

const frameworks = [
  "react",
  "vue",
  "angular",
  "svelte",
  "ember",
  "backbone",
  "jquery",
  "nextjs",
  "nuxtjs",
  "gatsby",
];

const LogoTicker = () => {
  return (
    <TickerContainer>
      <TickerContent>
        {[...frameworks, ...frameworks].map((framework, index) => (
          <LogoWrapper key={index}>
            <img
              src={assetUrl(`/images/${framework}-logo.png`)}
              alt={`${framework} logo`}
            />
          </LogoWrapper>
        ))}
      </TickerContent>
    </TickerContainer>
  );
};

export default LogoTicker;
