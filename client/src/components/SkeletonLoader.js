import React from "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

const SkeletonWrapper = styled.div`
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-repeat: no-repeat;
  background-size: 800px 104px;
  display: inline-block;
  position: relative;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${shimmer};
  animation-timing-function: linear;
`;

const SkeletonCard = styled(SkeletonWrapper)`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const SkeletonText = styled(SkeletonWrapper)`
  width: ${({ width }) => width || "100%"};
  height: 16px;
  margin-bottom: 8px;
`;

export const FrameworkCardSkeleton = () => (
  <SkeletonCard>
    <SkeletonText width="60%" />
    <SkeletonText width="80%" />
    <SkeletonText width="40%" />
  </SkeletonCard>
);

export const ComparisonCardSkeleton = () => (
  <SkeletonCard>
    <SkeletonText width="80%" />
    <SkeletonText width="60%" />
    <SkeletonText width="70%" />
    <SkeletonText width="50%" />
  </SkeletonCard>
);
