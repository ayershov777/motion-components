import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import CarouselDemoPage from "./components/CarouselDemoPage";
import styled from "styled-components";

function App() {
  const [vpSize, setVpSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const [resizeTimeout, setResizeTimeout] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      console.log('resize');
      clearTimeout(resizeTimeout);
      const timeout = setTimeout(() => {
        setVpSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 200);
      setResizeTimeout(timeout);
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [resizeTimeout]);



  const Home = () => {
    const containerVariants = {
      hidden: {
        opacity: 0,
        x: "100vw",
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          delay: 0.5,
        },
      },
      exit: {
        x: "-100vw",
        transition: {
          ease: "easeInOut",
        },
      },
    };

    const Main = styled(motion.div)`
      overflow: hidden;
      width: 100vw;
      align-items: center;
      background: #111;
      background: radial-gradient(#1a1a1a, black);
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 45vh;
    `;

    const Center = styled.div`
      overflow: hidden;
      background-color: rgba(86, 86, 88, 0.3);
      width: 650px;
      height: 350px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border: white solid 2px;
    `;

    return (
      <Main>
        <Center
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          Home
        </Center>
      </Main>
    );
  };

  return (
    <Router>
      <Navbar />
      <AnimatePresence exitBeforeEnter onExitComplete>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/carousel">
            <CarouselDemoPage vpSize={vpSize} />
          </Route>
        </Switch>
      </AnimatePresence>
    </Router>
  );
}

export default App;
