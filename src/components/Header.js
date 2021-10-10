import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const visible = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  height: 116px;
  justify-content: space-between;
  padding: 6px 10px;
  align-items: center;
`;

const LogoContainer = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

const NaviContainer = styled.ul`
  display: flex;
`;

const NaviList = styled.li`
  font-size: 18px;
  font-weight: 300;
  &:last-child {
    margin-left: 40px;
  }
`;

const SLink = styled(Link)`
  text-decoration: none;
  &:link {
    color: white;
  }
  &:visited {
    color: white;
  }
`;

const SSpan = styled.span`
  padding: 5px 7px;
  position: relative;
  overflow: hidden;
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    left: 0;
    bottom: 0;
    opacity: 1;
    background-color: white;
    transition: width 0.8s;
  }
  &:hover:after {
    width: 100%;
  }
`;

const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <SLink to="/">RW Palettes</SLink>
      </LogoContainer>
      <NaviContainer>
        <NaviList>
          <SLink to={{ pathname: "https://flatuicolors.com/" }} target="_blank">
            <SSpan>Portfolio Inspiration</SSpan>
          </SLink>
        </NaviList>
        <NaviList>
          <SLink to={{ pathname: "https://github.com/" }} target="_blank">
            <SSpan>About</SSpan>
          </SLink>
        </NaviList>
      </NaviContainer>
    </Container>
  );
};

export default Header;
