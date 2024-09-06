import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFrameworks } from "../redux/frameworksSlice";
import styled from "styled-components";
import motion from "framer-motion";
import Joyride, { STATUS } from "react-joyride";
import { FaSearch } from "react-icons/fa";
import FeaturedFrameworks from "../components/FeaturedFrameworks";
import FrameworkList from "../components/FrameworkList";
import ComparisonChart from "../components/ComparisonChart";
import ComparisonTable from "../components/ComparisonTable";
import ComparisonOverlay from "../components/ComparisonOverlay";
import ErrorBoundary from "../components/ErrorBoundary";
import LoadingSpinner from "../components/LoadingSpinner";
import SelectionLimit from "../components/SelectionLimit";
import ComparisonCard from "../components/ComparisonCard";
import api from "../services/api";

const PageContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
  padding: 2rem;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled(motion.aside)`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 1rem;
  }
`;

const MainContent = styled(motion.main)`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  font-size: 1rem;
  outline: none;

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}40;
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.primary};
`;

const CompareButton = styled(motion.button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  background-color: ${({ theme }) => theme.colors.error};
  color: white;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const ComparisonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
`;

const Comparison = () => {
  const dispatch = useDispatch();
  const { frameworks, status, error } = useSelector(
    (state) => state.frameworks
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFrameworks, setFilteredFrameworks] = useState([]);
  const [selectedFrameworks, setSelectedFrameworks] = useState([]);
  const [showComparison, setShowComparison] = useState(false);
  const [runTour, setRunTour] = useState(true);
  const [localError, setLocalError] = useState(null);

  useEffect(() => {
    const fetchFrameworksData = async () => {
      try {
        const response = await api.get("/frameworks");
        dispatch(fetchFrameworks(response.data));
      } catch (error) {
        console.error("Error fetching frameworks:", error);
        setLocalError(error.message || "Failed to fetch frameworks");
      }
    };

    fetchFrameworksData();
  }, [dispatch]);

  useEffect(() => {
    if (frameworks.length > 0) {
      setFilteredFrameworks(frameworks);
    }
  }, [frameworks]);

  const handleSearch = useCallback(
    (event) => {
      const { value } = event.target;
      setSearchTerm(value);
      const filtered = frameworks.filter((framework) =>
        framework.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredFrameworks(filtered);
    },
    [frameworks]
  );

  const handleFrameworkToggle = useCallback((frameworkId) => {
    setSelectedFrameworks((prev) => {
      if (prev.includes(frameworkId)) {
        return prev.filter((id) => id !== frameworkId);
      } else if (prev.length < 2) {
        return [...prev, frameworkId];
      }
      return prev;
    });
  }, []);

  const handleCompare = useCallback(() => {
    setShowComparison(true);
  }, []);

  const handleCloseComparison = useCallback(() => {
    setShowComparison(false);
  }, []);

  const handleJoyrideCallback = (data) => {
    const { status } = data;
    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      setRunTour(false);
    }
  };

  const steps = [
    {
      target: ".search-input",
      content: "Search for specific frameworks using this search bar",
      disableBeacon: true,
    },
    {
      target: ".featured-frameworks",
      content: "Browse through our featured frameworks here",
    },
    {
      target: ".framework-list",
      content: "Click on frameworks to add them to your comparison (max 2)",
    },
    {
      target: ".compare-button",
      content: "Click here to compare your selected frameworks",
    },
  ];

  return (
    <ErrorBoundary>
      <PageContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ContentContainer>
          <Sidebar
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SearchContainer>
              <SearchIcon />
              <SearchInput
                className="search-input"
                type="text"
                placeholder="Search frameworks..."
                value={searchTerm}
                onChange={handleSearch}
              />
            </SearchContainer>
            <FeaturedFrameworks
              frameworks={frameworks.slice(0, 5)}
              selectedFrameworks={selectedFrameworks}
              onToggleFramework={handleFrameworkToggle}
            />
          </Sidebar>
          <MainContent
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {status === "loading" && <LoadingSpinner />}
            {(status === "failed" || localError) && (
              <ErrorMessage>Error: {error || localError}</ErrorMessage>
            )}
            {status === "succeeded" && frameworks.length > 0 && (
              <>
                <SelectionLimit current={selectedFrameworks.length} max={2} />
                {selectedFrameworks.length > 0 && (
                  <>
                    <ComparisonContainer>
                      {selectedFrameworks.map((id) => (
                        <ComparisonCard
                          key={id}
                          framework={frameworks.find((f) => f.id === id)}
                        />
                      ))}
                    </ComparisonContainer>
                    {selectedFrameworks.length === 2 && (
                      <>
                        <CompareButton
                          className="compare-button"
                          onClick={handleCompare}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Compare Selected Frameworks
                        </CompareButton>
                        <ComparisonChart
                          frameworks={selectedFrameworks.map((id) =>
                            frameworks.find((f) => f.id === id)
                          )}
                        />
                        <ComparisonTable
                          frameworks={selectedFrameworks.map((id) =>
                            frameworks.find((f) => f.id === id)
                          )}
                        />
                      </>
                    )}
                  </>
                )}
                <FrameworkList
                  frameworks={filteredFrameworks}
                  selectedFrameworks={selectedFrameworks}
                  onToggleFramework={handleFrameworkToggle}
                />
              </>
            )}
          </MainContent>
        </ContentContainer>
        <ComparisonOverlay
          isOpen={showComparison}
          onClose={handleCloseComparison}
          frameworks={selectedFrameworks.map((id) =>
            frameworks.find((f) => f.id === id)
          )}
        />
        <Joyride
          steps={steps}
          run={runTour}
          continuous={true}
          showSkipButton={true}
          callback={handleJoyrideCallback}
          styles={{
            options: {
              zIndex: 10000,
              primaryColor: "#3498db",
              textColor: "#2c3e50",
              backgroundColor: "#ffffff",
              arrowColor: "#ffffff",
            },
          }}
        />
      </PageContainer>
    </ErrorBoundary>
  );
};

export default Comparison;
