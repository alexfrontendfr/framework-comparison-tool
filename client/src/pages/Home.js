// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaChartBar,
  FaSearch,
  FaCodeBranch,
  FaArrowRight,
} from "react-icons/fa";
import LogoTicker from "../components/LogoTicker";
import ScrollAnimation from "../components/ScrollAnimation";

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
  padding-top: 6rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.primary}10,
      ${({ theme }) => theme.colors.secondary}10
    );
    z-index: -1;
    filter: blur(10px);
    transform: scale(1.1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
    padding-top: 4rem;
  }
`;

const HeroContent = styled.div`
  flex: 1;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1rem;
  }
`;

const CTAButton = styled(motion(Link))`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  color: ${({ theme }) => theme.colors.textLight};
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  svg {
    margin-left: 0.5rem;
  }
`;

const HeroImage = styled(motion.img)`
  max-width: 50%;
  height: auto;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1));

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 80%;
    margin-top: 2rem;
  }
`;

const FeatureSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const FeatureCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px) rotateY(5deg);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const TestimonialSection = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 4rem 0;
  text-align: center;
`;

const TestimonialTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text};
`;

const TestimonialCarousel = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const TestimonialCard = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const features = [
  {
    icon: <FaChartBar />,
    title: "Visual Comparisons",
    description:
      "Compare frameworks side-by-side with intuitive charts and graphs.",
  },
  {
    icon: <FaSearch />,
    title: "Comprehensive Data",
    description:
      "Access detailed information on performance, popularity, and ecosystem.",
  },
  {
    icon: <FaCodeBranch />,
    title: "Stay Updated",
    description: "Get the latest information on framework updates and trends.",
  },
];

const testimonials = [
  {
    name: "John Doe",
    role: "Senior Developer",
    text: "This tool has been invaluable in helping our team choose the right framework for our projects.",
  },
  {
    name: "Jane Smith",
    role: "Tech Lead",
    text: "The comparison features are comprehensive and easy to use. Highly recommended!",
  },
  {
    name: "Mike Johnson",
    role: "Freelance Developer",
    text: "I use this tool for all my client projects. It saves me hours of research time.",
  },
];

const Home = () => {
  return (
    <>
      <HomeContainer>
        <Hero>
          <HeroContent>
            <HeroTitle
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Compare Frameworks with Ease
            </HeroTitle>
            <HeroDescription
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Make informed decisions for your next project with our
              comprehensive comparison tool. Analyze performance, popularity,
              and ecosystem of various frameworks in one place.
            </HeroDescription>
            <CTAButton
              to="/comparison"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Start Comparing <FaArrowRight />
            </CTAButton>
          </HeroContent>
          <HeroImage
            src={`${process.env.PUBLIC_URL}/images/hero-image.svg`}
            alt="Framework comparison illustration"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
        </Hero>

        <LogoTicker />
        <ScrollAnimation>
          <FeatureSection>
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </FeatureCard>
            ))}
          </FeatureSection>
        </ScrollAnimation>
      </HomeContainer>

      <TestimonialSection>
        <HomeContainer>
          <TestimonialTitle>What Developers Say</TestimonialTitle>
          <TestimonialCarousel>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index}>
                <p>"{testimonial.text}"</p>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </TestimonialCard>
            ))}
          </TestimonialCarousel>
        </HomeContainer>
      </TestimonialSection>
    </>
  );
};

export default Home;
