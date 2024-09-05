import React from "react";
import styled from "styled-components";

const RatingsContainer = styled.div`
  margin-top: 24px;
`;

const RatingItem = styled.div`
  background-color: white;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const RatingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const RatingsList = ({ ratings }) => {
  return (
    <RatingsContainer>
      <h3>User Ratings</h3>
      {ratings.map((rating) => (
        <RatingItem key={rating._id}>
          <RatingHeader>
            <strong>{rating.user}</strong>
            <span>Score: {rating.score}/5</span>
          </RatingHeader>
          {rating.comment && <p>{rating.comment}</p>}
        </RatingItem>
      ))}
    </RatingsContainer>
  );
};

export default RatingsList;
