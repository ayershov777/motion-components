import styled, { keyframes } from "styled-components";
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
  overflow-x: hidden;
  width: ${({ n, cardWidth, selectedCardWidth }) =>
    (n - 1) * cardWidth + selectedCardWidth}px;
  height: 100vh;
`;

/* card section */
/* Card border gradient motion */
const gradientAnimation = keyframes` 
  0% {
    background-position: 15% 0%;
  }
  50% {
    background-position: 85% 100%;
  }
  100% {
    background-position: 15% 0%;
  }
`;

const frameEnter = keyframes`
  0% {
    clip-path: polygon(0% 100%, 3px 100%, 3px 3px, calc(100% - 3px) 3px, calc(100% - 3px) calc(100% - 3px), 3px calc(100% - 3px), 3px 100%, 100% 100%, 100% 0%, 0% 0%);
  }
  25% {
    clip-path: polygon(0% 100%, 3px 100%, 3px 3px, calc(100% - 3px) 3px, calc(100% - 3px) calc(100% - 3px), calc(100% - 3px) calc(100% - 3px), calc(100% - 3px) 100%, 100% 100%, 100% 0%, 0% 0%);
  }
  50% {
    clip-path: polygon(0% 100%, 3px 100%, 3px 3px, calc(100% - 3px) 3px, calc(100% - 3px) 3px, calc(100% - 3px) 3px, calc(100% - 3px) 3px, calc(100% - 3px) 3px, 100% 0%, 0% 0%);
  }
  75% {
    -webkit-clip-path: polygon(0% 100%, 3px 100%, 3px 3px, 3px 3px, 3px 3px, 3px 3px, 3px 3px, 3px 3px, 3px 0%, 0% 0%);
  }
  100% {
    -webkit-clip-path: polygon(0% 100%, 3px 100%, 3px 100%, 3px 100%, 3px 100%, 3px 100%, 3px 100%, 3px 100%, 3px 100%, 0% 100%);
  }
`;

const Card = styled(motion.div)`
  position: relative;
  -webkit-box-flex: 0;
  box-sizing: border-box;
  display: inline-block;
  background-color: #333;
  overflow: hidden;
  border-radius: 4px;
  margin: 0 ${({ cardMargin }) => cardMargin}px;
  height: ${({ cardInnerWidth }) => cardInnerWidth}px;
  width: ${({ cardInnerWidth }) => cardInnerWidth}px;
  box-shadow: rgba(0, 0, 0, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
    inset rgba(255, 255, 255, 0.5) 0 0 0 6px;
  -webkit-transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 4px;
    background: linear-gradient(120deg, #00f260, #0575e6, #00f260);
    background-size: 300% 300%;
    clip-path: polygon(
      0% 100%,
      3px 100%,
      3px 3px,
      calc(100% - 3px) 3px,
      calc(100% - 3px) calc(100% - 3px),
      3px calc(100% - 3px),
      3px 100%,
      100% 100%,
      100% 0%,
      0% 0%
    );
    animation: frameEnter 1s forwards ease-in-out reverse,
      ${gradientAnimation} 4s ease-in-out infinite;
  }
`;

const CardBg = styled.div`
  opacity: 0.5;
  position: absolute;
  top: -10px;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  -webkit-transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95),
    opacity 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95),
    opacity 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  pointer-events: none;
`;

const CardInfo = styled.div`
  padding: 20px;
  position: absolute;
  bottom: 0;
  color: #fff;
  -webkit-transform: translateY(40%);
  transform: translateY(40%);
  -webkit-transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);

  p {
    opacity: 0;
    text-shadow: black 0 2px 3px;
    -webkit-transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  * {
    position: relative;
    z-index: 1;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;

    right: 0;
    bottom: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(transparent),
      to(rgba(0, 0, 0, 0.6))
    );
    background-image: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.6) 100%
    );
    background-blend-mode: overlay;
    opacity: 0;
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
    -webkit-transition: 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transition: 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }

  h1 {
    font-family: "Playfair Display";
    font-size: 36px;
    font-weight: 700;
    text-shadow: rgba(0, 0, 0, 0.5) 0 10px 10px;
  }
`;

const CardWrap = styled.div`
  margin: 10px;
  -webkit-transform: perspective(1000px);
  transform: perspective(600px);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  cursor: pointer;

  &:hover {
    ${CardInfo} {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      p {
        opacity: 1;
        -webkit-transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
      }
      &::after {
        -webkit-transition: 5s cubic-bezier(0.23, 1, 0.32, 1);
        transition: 5s cubic-bezier(0.23, 1, 0.32, 1);
        opacity: 1;
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
    }

    ${CardBg} {
      -webkit-transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1),
        opacity 5s cubic-bezier(0.23, 1, 0.32, 1);
      transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1),
        opacity 5s cubic-bezier(0.23, 1, 0.32, 1);
      opacity: 0.8;
    }
    
    ${Card} {
        -webkit-transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1),
        box-shadow 2s cubic-bezier(0.23, 1, 0.32, 1);
        transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1),
        box-shadow 2s cubic-bezier(0.23, 1, 0.32, 1);
        box-shadow: rgba(255, 255, 255, 0.2) 0 0 40px 5px, white 0 0 0 1px,
        rgba(0, 0, 0, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
        inset white 0 0 0 6px;
  }
`;

export default {
  Navbar,
  NavLink,
  Container,
  Buttons,
  Button,
  Slider,
  Card,
  CardWrap,
  CardBg,
  CardInfo,
};
