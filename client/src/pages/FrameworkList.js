// src/components/FrameworkList.js
import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const FrameworkCard = styled(motion.div)`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.surface},
    ${({ theme }) => theme.colors.background}
  );
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const FrameworkLogo = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary}20;
  margin-right: 1rem;
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transform: translateX(-100%);
    animation: shimmer 1.5s infinite;
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`;

const FrameworkInfo = styled.div`
  flex: 1;
`;

const FrameworkName = styled.h3`
  font-size: 1.2rem;
  margin: 0 0 0.5rem 0;
  color: ${({ theme }) => theme.colors.text};
`;

const FrameworkScore = styled.p`
  font-size: 0.9rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.text}80;
`;

const SelectionIndicator = styled(motion.div)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textLight};
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FrameworkList = ({
  frameworks,
  selectedFrameworks,
  onToggleFramework,
}) => {
  return (
    <ListContainer className="framework-list">
      <AnimatePresence>
        {frameworks.map((framework) => (
          <FrameworkCard
            key={framework.id}
            onClick={() => onToggleFramework(framework.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <FrameworkLogo
              src={`${
                process.env.PUBLIC_URL
              }/images/${framework.name.toLowerCase()}-logo.png`}
              alt={`${framework.name} logo`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `${process.env.PUBLIC_URL}/images/placeholder-logo.png`;
              }}
            />
            <FrameworkInfo>
              <FrameworkName>{framework.name}</FrameworkName>
              <FrameworkScore>
                Performance: {framework.performanceScore}
              </FrameworkScore>
              <FrameworkScore>
                Popularity: {framework.popularity}
              </FrameworkScore>
              <FrameworkScore>
                Ecosystem: {framework.ecosystemScore}
              </FrameworkScore>
            </FrameworkInfo>
            {selectedFrameworks.includes(framework.id) && (
              <SelectionIndicator
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <FaCheck />
              </SelectionIndicator>
            )}
          </FrameworkCard>
        ))}
      </AnimatePresence>
    </ListContainer>
  );
};

export default FrameworkList;
