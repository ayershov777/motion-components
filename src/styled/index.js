import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import cardWidth from '../utils/cardWidth';

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
    width: ${props => props.n * cardWidth}px;
    height: 80vh;
`;

const Card = styled(motion.div)`
    display: inline-block;
    margin: 12px;
    height: 30vh;
    width: 30vh;
    border: 1px solid black;
`;

export default {
    Navbar,
    NavLink,
    Container,
    Buttons,
    Button,
    Slider,
    Card
}
