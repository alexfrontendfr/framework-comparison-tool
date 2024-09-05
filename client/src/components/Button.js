import styled from "styled-components";
import { theme } from "../theme";

const Button = styled.button`
  background-color: ${theme.colors.primary};
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.colors.secondary};
  }

  &:focus {
    outline: 3px solid ${theme.colors.secondary};
    outline-offset: 2px;
  }
`;

export default Button;
