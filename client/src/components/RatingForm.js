import React, { useState } from "react";
import styled from "styled-components";
import theme from "../theme";
import api from "../services/api";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 1rem;
  border: 1px solid ${theme.colors.primary};
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 8px;
  font-size: 1rem;
  border: 1px solid ${theme.colors.primary};
  border-radius: 4px;
  resize: vertical;
`;

const Button = styled.button`
  background-color: ${theme.colors.primary};
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.colors.secondary};
  }
`;

const RatingForm = ({ frameworkId, onRatingAdded }) => {
  const [user, setUser] = useState("");
  const [score, setScore] = useState(5);
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post(`/frameworks/${frameworkId}/ratings`, {
        user,
        score,
        comment,
      });
      onRatingAdded();
      setUser("");
      setScore(5);
      setComment("");
    } catch (error) {
      console.error("Error adding rating:", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Your name"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        required
      />
      <Input
        type="number"
        min="1"
        max="5"
        value={score}
        onChange={(e) => setScore(parseInt(e.target.value))}
        required
      />
      <TextArea
        placeholder="Your comment (optional)"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button type="submit">Submit Rating</Button>
    </Form>
  );
};

export default RatingForm;
