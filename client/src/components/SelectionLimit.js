import React from "react";
import styled from "styled-components";

const LimitContainer = styled.div`
  margin-bottom: 1rem;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.text};
`;

const SelectionLimit = ({ current, max }) => (
  <LimitContainer>
    Selected: {current}/{max} (Max: {max})
  </LimitContainer>
);

export default SelectionLimit;
