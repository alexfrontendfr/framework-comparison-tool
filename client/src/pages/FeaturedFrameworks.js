import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const FeaturedContainer = styled.div`
  margin-top: ${({ theme }) => theme.space[4]}px;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.space[3]}px;
  color: ${({ theme }) => theme.colors.text};
`;

const FrameworkList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FrameworkItem = styled(motion.li)`
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.primary}20;
  border-radius: 8px;
  padding: ${({ theme }) => theme.space[3]}px;
  margin-bottom: ${({ theme }) => theme.space[2]}px;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  box-shadow: ${({ theme }) => theme.shadows.small};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const FrameworkName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
`;

const FeaturedFrameworks = ({
  frameworks,
  selectedFrameworks,
  onToggleFramework,
}) => {
  return (
    <FeaturedContainer className="featured-frameworks">
      <Title>Featured Frameworks</Title>
      <FrameworkList>
        {frameworks.map((framework) => (
          <FrameworkItem
            key={framework.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onToggleFramework(framework.id)}
          >
            <FrameworkName>{framework.name}</FrameworkName>
          </FrameworkItem>
        ))}
      </FrameworkList>
    </FeaturedContainer>
  );
};

export default FeaturedFrameworks;
