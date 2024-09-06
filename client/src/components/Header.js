import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link, NavLink as RouterNavLink } from "react-router-dom";
import { FaCode, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import DarkModeToggle from "./DarkModeToggle";
import { ThemeContext } from "../contexts/ThemeContext";

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: ${({ theme }) => theme.colors.textLight};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const MobileNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.5rem;
`;

const NavLink = styled(RouterNavLink)`
  color: ${({ theme }) => theme.colors.textLight};
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.textLight};
    transition: width 0.3s ease;
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1.5rem;
  cursor: pointer;
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo to="/">
          <FaCode />
          Framework Comparison
        </Logo>
        <Nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/comparison">Compare</NavLink>
          <DarkModeToggle
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
          />
        </Nav>
        <MobileMenuButton onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
        <AnimatePresence>
          {mobileMenuOpen && (
            <MobileNav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <NavLink to="/" end onClick={toggleMobileMenu}>
                Home
              </NavLink>
              <NavLink to="/comparison" onClick={toggleMobileMenu}>
                Compare
              </NavLink>
              <DarkModeToggle
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
              />
            </MobileNav>
          )}
        </AnimatePresence>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
