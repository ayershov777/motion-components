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
  height: 100vh;
`;

const Card = styled(motion.div)`
  box-sizing: border-box;
  display: inline-block;
  margin: 0 ${({ cardMargin }) => cardMargin}px;
  height: ${({ cardInnerWidth }) => cardInnerWidth}px;
  width: ${({ cardInnerWidth }) => cardInnerWidth}px;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
    inset rgba(255, 255, 255, 0.5) 0 0 0 6px;
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
