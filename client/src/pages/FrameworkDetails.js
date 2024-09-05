import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import api from "../services/api";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import RatingForm from "../components/RatingForm";
import RatingsList from "../components/RatingList";

const DetailsContainer = styled.div`
  padding: 24px;
`;

const FrameworkDetails = () => {
  const { id } = useParams();
  const [framework, setFramework] = useState(null);
  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFrameworkDetails = useCallback(async () => {
    try {
      const [frameworkResponse, ratingsResponse] = await Promise.all([
        api.get(`/frameworks/${id}`),
        api.get(`/frameworks/${id}/ratings`),
      ]);
      setFramework(frameworkResponse.data);
      setRatings(ratingsResponse.data);
      setLoading(false);
    } catch (err) {
      setError("Error fetching framework details");
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchFrameworkDetails();
  }, [fetchFrameworkDetails]);

  const handleRatingAdded = () => {
    fetchFrameworkDetails();
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!framework) return null;

  return (
    <DetailsContainer>
      <h1>{framework.name}</h1>
      <p>Version: {framework.version}</p>
      <p>Performance Score: {framework.performanceScore}</p>
      <p>
        User Rating:{" "}
        {framework.userRating ? framework.userRating.toFixed(1) : "N/A"}/5
      </p>
      <RatingForm frameworkId={id} onRatingAdded={handleRatingAdded} />
      <RatingsList ratings={ratings} />
    </DetailsContainer>
  );
};

export default FrameworkDetails;
