import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FrameworkCardSkeleton } from "./SkeletonLoader";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`;

const FrameworkCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.surface};
  border: 2px solid
    ${({ theme, selected }) =>
      selected ? theme.colors.primary : "transparent"};
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const FrameworkName = styled.h3`
  font-size: 1.1rem;
  margin: 0 0 0.5rem 0;
`;

const FrameworkDescription = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text}80;
  margin: 0;
`;

const FrameworkList = ({
  frameworks,
  selectedFrameworks,
  onToggleFramework,
  loading,
}) => {
  if (loading) {
    return (
      <ListContainer>
        {[...Array(6)].map((_, index) => (
          <FrameworkCardSkeleton key={index} />
        ))}
      </ListContainer>
    );
  }

  return (
    <ListContainer>
      <AnimatePresence>
        {frameworks.map((framework) => (
          <FrameworkCard
            key={framework.id}
            selected={selectedFrameworks.includes(framework.id)}
            onClick={() => onToggleFramework(framework.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <FrameworkName>{framework.name}</FrameworkName>
            <FrameworkDescription>
              Performance: {framework.performanceScore}
              <br />
              Popularity: {framework.popularity}
              <br />
              Ecosystem: {framework.ecosystemScore}
            </FrameworkDescription>
          </FrameworkCard>
        ))}
      </AnimatePresence>
    </ListContainer>
  );
};

export default FrameworkList;
