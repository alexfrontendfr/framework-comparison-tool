// src/components/ComparisonOverlay.js
import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import ComparisonChart from "./ComparisonChart";
import ComparisonTable from "./ComparisonTable";

const OverlayContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const OverlayContent = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 2rem;
  border-radius: 8px;
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
`;

const ComparisonOverlay = ({ isOpen, onClose, frameworks }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <OverlayContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <OverlayContent
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <CloseButton onClick={onClose}>
              <FaTimes />
            </CloseButton>
            <ComparisonChart frameworks={frameworks} />
            <ComparisonTable frameworks={frameworks} />
          </OverlayContent>
        </OverlayContainer>
      )}
    </AnimatePresence>
  );
};

export default ComparisonOverlay;
