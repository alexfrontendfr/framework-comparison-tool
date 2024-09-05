import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFrameworks } from "../redux/frameworksSlice";
import styled from "styled-components";
import theme from "../theme";
import { motion, AnimatePresence } from "framer-motion";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Joyride, { STATUS } from "react-joyride";
import { FaSearch, FaInfoCircle } from "react-icons/fa";
import FeaturedFrameworks from "../components/FeaturedFrameworks";
import FrameworkList from "../components/FrameworkList";
import ComparisonChart from "../components/ComparisonChart";
import ComparisonTable from "../components/ComparisonTable";
import ComparisonOverlay from "../components/ComparisonOverlay";
import ErrorBoundary from "../components/ErrorBoundary";
import LoadingSpinner from "../components/LoadingSpinner";
import SelectionLimit from "../components/SelectionLimit";

const PageContainer = styled.div`
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

const Sidebar = styled.aside`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 1rem;
  }
`;

const MainContent = styled.main`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

const InfoIcon = styled(FaInfoCircle)`
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 0.5rem;
  cursor: help;
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

  useEffect(() => {
    dispatch(fetchFrameworks());
  }, [dispatch]);

  useEffect(() => {
    setFilteredFrameworks(frameworks);
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

  if (status === "loading") {
    return <LoadingSpinner />;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  const selectedFrameworksData = frameworks.filter((framework) =>
    selectedFrameworks.includes(framework.id)
  );

  return (
    <ErrorBoundary>
      <PageContainer>
        <ContentContainer>
          <Sidebar>
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
          <MainContent>
            <SelectionLimit current={selectedFrameworks.length} max={2} />
            {selectedFrameworks.length === 2 && (
              <CompareButton
                className="compare-button"
                onClick={handleCompare}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Compare Selected Frameworks
                <Tippy content="Click to compare the selected frameworks">
                  <span>
                    <InfoIcon />
                  </span>
                </Tippy>
              </CompareButton>
            )}
            <FrameworkList
              frameworks={filteredFrameworks}
              selectedFrameworks={selectedFrameworks}
              onToggleFramework={handleFrameworkToggle}
            />
            <AnimatePresence>
              {showComparison && selectedFrameworks.length === 2 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ComparisonChart frameworks={selectedFrameworksData} />
                  <ComparisonTable frameworks={selectedFrameworksData} />
                </motion.div>
              )}
            </AnimatePresence>
          </MainContent>
        </ContentContainer>
        <ComparisonOverlay
          isOpen={showComparison}
          onClose={handleCloseComparison}
          frameworks={selectedFrameworksData}
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
              primaryColor: theme.colors.primary,
              textColor: theme.colors.text,
              backgroundColor: theme.colors.surface,
              arrowColor: theme.colors.surface,
            },
            tooltip: {
              fontSize: "14px",
              padding: "15px",
            },
            buttonNext: {
              backgroundColor: theme.colors.primary,
              fontSize: "14px",
              padding: "8px 15px",
            },
            buttonBack: {
              color: theme.colors.primary,
              fontSize: "14px",
              marginRight: "10px",
            },
          }}
        />
      </PageContainer>
    </ErrorBoundary>
  );
};

export default Comparison;
