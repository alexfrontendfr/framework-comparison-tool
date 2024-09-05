// ComparisonTable.js

import React from "react";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
`;

const Th = styled.th`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.5rem;
  text-align: left;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 0.5rem;
`;

const ComparisonTable = ({ frameworks }) => {
  const features = [
    "name",
    "version",
    "performanceScore",
    "learningCurve",
    "communitySupport",
    "documentation",
  ];

  return (
    <Table>
      <thead>
        <tr>
          <Th>Feature</Th>
          {frameworks.map((framework) => (
            <Th key={framework.id}>{framework.name}</Th>
          ))}
        </tr>
      </thead>
      <tbody>
        {features.map((feature) => (
          <tr key={feature}>
            <Td>{feature}</Td>
            {frameworks.map((framework) => (
              <Td key={framework.id}>{framework[feature]}</Td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ComparisonTable;
