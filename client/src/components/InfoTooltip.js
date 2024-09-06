import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import styled from "styled-components";

const TooltipTrigger = styled.span`
  margin-left: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  cursor: help;
`;

const InfoTooltip = ({ id, content }) => (
  <>
    <TooltipTrigger data-tooltip-id={id}>
      <FaInfoCircle />
    </TooltipTrigger>
    <Tooltip id={id} place="top" effect="solid">
      {content}
    </Tooltip>
  </>
);

export default InfoTooltip;
