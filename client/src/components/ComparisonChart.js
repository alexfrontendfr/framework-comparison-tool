// src/components/ComparisonChart.js (continued)
import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";

const ChartContainer = styled.div`
  width: 100%;
  height: 400px;
  margin-bottom: 2rem;
`;

const ComparisonChart = ({ frameworks }) => {
  const data = [
    {
      subject: "Performance",
      A: frameworks[0]?.performanceScore,
      B: frameworks[1]?.performanceScore,
    },
    {
      subject: "Popularity",
      A: frameworks[0]?.popularity,
      B: frameworks[1]?.popularity,
    },
    {
      subject: "Ecosystem",
      A: frameworks[0]?.ecosystemScore,
      B: frameworks[1]?.ecosystemScore,
    },
    {
      subject: "Learning Curve",
      A: frameworks[0]?.learningCurve,
      B: frameworks[1]?.learningCurve,
    },
    {
      subject: "Community Support",
      A: frameworks[0]?.communitySupport,
      B: frameworks[1]?.communitySupport,
    },
  ];

  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar
            name={frameworks[0]?.name}
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Radar
            name={frameworks[1]?.name}
            dataKey="B"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default ComparisonChart;
