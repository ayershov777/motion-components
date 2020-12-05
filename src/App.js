import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar';
import CarouselDemoPage from './components/CarouselDemoPage';

function App() {
  const [vpWidth, setVpWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleResize = () => setVpWidth(window.innerWidth);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">Home</Route>
        <Route path="/carousel">
          <CarouselDemoPage vpWidth={vpWidth} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
