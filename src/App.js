import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import CarouselDemoPage from "./components/CarouselDemoPage";
import styled from "styled-components";
import { FloatNav } from "./components/FloatNav";
import { VoyagerSlider } from "./components";

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



  return (
    <Router>
      <FloatNav />
      <AnimatePresence exitBeforeEnter onExitComplete>
        <Switch>
          <Route exact path="/default">
            <CarouselDemoPage vpSize={vpSize} />
          </Route>
          <Route path="/">
            <VoyagerSlider />
          </Route>
        </Switch>
      </AnimatePresence>
    </Router>
  );
}

export default App;
