// src/components/DarkModeToggle.js
import React from "react";
import styled from "styled-components";
import { FaSun, FaMoon } from "react-icons/fa";

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <ToggleButton onClick={toggleDarkMode}>
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </ToggleButton>
  );
};

export default DarkModeToggle;
