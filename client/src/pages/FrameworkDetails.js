import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import ComparisonChart from "../components/ComparisonChart";
import FeedbackForm from "../components/FeedbackForm";
import InfoTooltip from "../components/InfoTooltip";

const DetailsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const FrameworkTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

const DetailsSection = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
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

const FrameworkDetails = () => {
  const { id } = useParams();
  const [framework, setFramework] = useState(null);

  useEffect(() => {
    // Fetch framework details from your API
    // For now, we'll use mock data
    const mockFramework = {
      id,
      name: "React",
      version: "17.0.2",
      performanceScore: 95,
      popularity: 98,
      ecosystemScore: 97,
      learningCurve: 7,
      communitySupport: 9,
      description: "A JavaScript library for building user interfaces",
      pros: ["Large ecosystem", "Strong community support", "Flexible"],
      cons: [
        "Steep learning curve for beginners",
        "Requires additional libraries for full functionality",
      ],
    };
    setFramework(mockFramework);
  }, [id]);

  const handleFeedbackSubmit = (feedbackData) => {
    // Send feedback to your API
    console.log("Feedback submitted:", feedbackData);
  };

  if (!framework) {
    return <div>Loading...</div>;
  }

  return (
    <DetailsContainer>
      <FrameworkTitle>{framework.name}</FrameworkTitle>
      <DetailsSection>
        <SectionTitle>Overview</SectionTitle>
        <p>{framework.description}</p>
      </DetailsSection>
      <DetailsSection>
        <SectionTitle>Key Metrics</SectionTitle>
        <FeatureList>
          <FeatureItem>
            <span>
              Performance Score{" "}
              <InfoTooltip
                id="performance"
                content="A measure of the framework's speed and efficiency"
              />
            </span>
            <span>{framework.performanceScore}</span>
          </FeatureItem>
          <FeatureItem>
            <span>
              Popularity{" "}
              <InfoTooltip
                id="popularity"
                content="Based on GitHub stars, npm downloads, and community engagement"
              />
            </span>
            <span>{framework.popularity}</span>
          </FeatureItem>
          <FeatureItem>
            <span>
              Ecosystem Score{" "}
              <InfoTooltip
                id="ecosystem"
                content="Reflects the availability of plugins, tools, and third-party libraries"
              />
            </span>
            <span>{framework.ecosystemScore}</span>
          </FeatureItem>
        </FeatureList>
      </DetailsSection>
      <DetailsSection>
        <SectionTitle>Pros and Cons</SectionTitle>
        <h3>Pros</h3>
        <ul>
          {framework.pros.map((pro, index) => (
            <li key={index}>{pro}</li>
          ))}
        </ul>
        <h3>Cons</h3>
        <ul>
          {framework.cons.map((con, index) => (
            <li key={index}>{con}</li>
          ))}
        </ul>
      </DetailsSection>
      <DetailsSection>
        <SectionTitle>Comparison</SectionTitle>
        <ComparisonChart frameworks={[framework]} />
      </DetailsSection>
      <DetailsSection>
        <SectionTitle>Leave Feedback</SectionTitle>
        <FeedbackForm onSubmit={handleFeedbackSubmit} />
      </DetailsSection>
    </DetailsContainer>
  );
};

export default FrameworkDetails;
