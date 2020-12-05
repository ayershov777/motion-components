import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar';
import CarouselDemoPage from './components/CarouselDemoPage';

function App() {
  const [vpSize, setVpSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleResize = () => {
    requestAnimationFrame(() => setVpSize({
      width: window.innerWidth,
      height: window.innerHeight
    }));
  };

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">Home</Route>
        <Route path="/carousel">
          <CarouselDemoPage vpSize={vpSize} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
