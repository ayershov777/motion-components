import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = styled.div`
  color: black;
  font-family: "Cabin Medium";
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10vh;
  background-color: white;
`;

const NavLink = styled(Link)`
  font-size: 24pt;
  text-decoration: none;
  color: black;
  text-transform: uppercase;
`;

const Container = styled.div`
  overflow-x: hidden;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  font-size: 24pt;
  margin: 12px 32px;
`;

const Slider = styled(motion.div)`
  display: flex;
  align-items: center;
  overflow-x: hidden;
  width: ${({ n, cardWidth, selectedCardWidth }) =>
    (n - 1) * cardWidth + selectedCardWidth}px;
  height: 60vh;
`;

const Card = styled(motion.div)`
  display: inline-block;
  margin: ${({ cardMargin }) => cardMargin}px;
  height: ${({ cardInnerHeight }) => cardInnerHeight};
  width: ${({ cardInnerWidth }) => cardInnerWidth};
  border: ${({ cardBorderWidth }) => cardBorderWidth}px solid black;
`;

export default {
  Navbar,
  NavLink,
  Container,
  Buttons,
  Button,
  Slider,
  Card,
};
