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
  height: 90vh;
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
  position: absolute;
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 10000px;
  height: 100%;
  margin-top: -10vh;
`;

const Card = styled(motion.div)`
  box-sizing: border-box;
  display: inline-block;
  margin: 0 ${({ cardMargin }) => cardMargin}px;
  height: ${({ cardInnerWidth }) => cardInnerWidth}px;
  width: ${({ cardInnerWidth }) => cardInnerWidth}px;
  border: 1px solid black;
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
