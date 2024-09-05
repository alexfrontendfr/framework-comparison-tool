// src/components/FeaturedFrameworks.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const FeaturedContainer = styled.div`
  margin-top: 2rem;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const FrameworkList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FrameworkItem = styled(motion.li)`
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.primary}20;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

const FrameworkName = styled.h3`
  font-size: 1rem;
  margin: 0;
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
