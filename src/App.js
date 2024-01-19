import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

import Home from './Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;