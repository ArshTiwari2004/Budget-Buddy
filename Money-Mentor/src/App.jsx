import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Firstpage from './components/Firstpage'; 
import Aboutus from './components/Aboutus';
import Dashboard from './components/Dashboard';
import DayScholarTemplate from './components/DayScholartemplate';
// Import your Firstpage component

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes for each page/component */}
        <Route path="/" element={<Firstpage />} /> {/* Route for Firstpage component */}
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Route for Dashboard component */}
        <Route path="/dayscholartemplate" element={<DayScholarTemplate />} /> {/* Route for DayScholarTemplate component */}

        {/* You can add more routes here as needed */}
      </Routes>
    </Router>
  );
};

export default App;
