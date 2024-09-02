import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Chip,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import LoadingSpinner from "../components/LoadingSpinner";
import FadeIn from "../components/FadeIn";

const FrameworkDetails = ({ setSnackbar }) => {
  const { id } = useParams();
  const [framework, setFramework] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFrameworkDetails = async () => {
      try {
        const response = await axios.get(`/api/frameworks/${id}`);
        setFramework(response.data);
        setLoading(false);
      } catch (err) {
        setSnackbar({
          open: true,
          message: "Error fetching framework details",
          severity: "error",
        });
        setLoading(false);
      }
    };

    fetchFrameworkDetails();
  }, [id, setSnackbar]);

  if (loading) return <LoadingSpinner message="Loading framework details..." />;
  if (!framework) return null;

  return (
    <FadeIn>
      <Paper style={{ padding: "2rem", marginTop: "2rem" }}>
        <Typography variant="h4" gutterBottom>
          {framework.name}
        </Typography>
        <Chip
          label={`Version: ${framework.version}`}
          style={{ marginBottom: "1rem" }}
        />
        <Typography variant="body1" paragraph>
          {framework.description}
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Performance Score"
              secondary={framework.performanceScore}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Learning Curve"
              secondary={framework.learningCurve}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Community Support"
              secondary={<Rating value={framework.communitySupport} readOnly />}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Job Market Demand"
              secondary={<Rating value={framework.jobMarketDemand} readOnly />}
            />
          </ListItem>
        </List>
        <Typography variant="body2" color="textSecondary">
          Last Updated: {new Date(framework.lastUpdated).toLocaleDateString()}
        </Typography>
      </Paper>
    </FadeIn>
  );
};

export default FrameworkDetails;
