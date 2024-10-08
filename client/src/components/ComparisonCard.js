import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import InfoTooltip from "./InfoTooltip";

const Card = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
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
const FrameworkInfo = styled.div`
  margin-top: 1rem;
  text-align: left;
  width: 100%;
`;

const InfoItem = styled.p`
  margin: 0.5rem 0;
`;

const ComparisonCard = ({ framework }) => {
  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Logo
        src={`${
          process.env.PUBLIC_URL
        }/images/${framework.name.toLowerCase()}-logo.png`}
        alt={`${framework.name} logo`}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `${process.env.PUBLIC_URL}/images/placeholder-logo.png`;
        }}
      />
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
      <FrameworkInfo>
        <InfoItem>
          <strong>Version:</strong> {framework.version}
        </InfoItem>
        <InfoItem>
          <strong>Learning Curve:</strong> {framework.learningCurve}
        </InfoItem>
        <InfoItem>
          <strong>Community Support:</strong> {framework.communitySupport}
        </InfoItem>
        <InfoItem>
          <strong>Documentation:</strong> {framework.documentation}
        </InfoItem>
      </FrameworkInfo>
    </Card>
  );
};

export default ComparisonCard;
