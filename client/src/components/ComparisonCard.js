import React from "react";
import styled from "styled-components";
import InfoTooltip from "./InfoTooltip";

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const FeatureName = styled.span`
  font-weight: 500;
`;

const FeatureValue = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

const ComparisonCard = ({ framework }) => {
  return (
    <Card>
      <Title>{framework.name}</Title>
      <FeatureList>
        <FeatureItem>
          <FeatureName>
            Performance Score
            <InfoTooltip
              id={`performance-${framework.id}`}
              content="A measure of the framework's speed and efficiency"
            />
          </FeatureName>
          <FeatureValue>{framework.performanceScore}</FeatureValue>
        </FeatureItem>
        <FeatureItem>
          <FeatureName>
            Popularity
            <InfoTooltip
              id={`popularity-${framework.id}`}
              content="Based on GitHub stars, npm downloads, and community engagement"
            />
          </FeatureName>
          <FeatureValue>{framework.popularity}</FeatureValue>
        </FeatureItem>
        <FeatureItem>
          <FeatureName>
            Ecosystem Score
            <InfoTooltip
              id={`ecosystem-${framework.id}`}
              content="Reflects the availability of plugins, tools, and third-party libraries"
            />
          </FeatureName>
          <FeatureValue>{framework.ecosystemScore}</FeatureValue>
        </FeatureItem>
      </FeatureList>
    </Card>
  );
};

export default ComparisonCard;
