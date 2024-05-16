import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Firstpage from './components/Firstpage'; 
import Aboutus from './components/Aboutus';
import Dashboard from './components/Dashboard';
import DayScholarTemplate from './components/DayScholartemplate';
// import Basicinfo from './components/BasicInfo'
// import Registermain from './components/Registermain';
// import Login from './components/Login';
// import Demographics from './components/Demographics';
// import Preferences from './components/Preferences';
// import BasicInfo from './components/BasicInfo';
// import AdditionalInfo from './components/AdditionalInfo';
// import FinalRegister from './components/FinalRegister';
// Import your Aboutus componen
// Import your Firstpage component
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes for each page/component */}
        <Route path="/" element={<Firstpage />} /> {/* Route for Firstpage component */}
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Route for Dashboard component */}
        <Route path="/dayscholartemplate" element={<DayScholarTemplate />} /> {/* Route for DayScholarTemplate component */}
        {/* <Route path="/register" element={<Registermain/>}/>
        <Route path="/basic-info" element={<Basicinfo/>} /> 
        <Route path="/demographics" element={<Demographics/>} />
        <Route path="/preferences" element={<Preferencess/>} />
        <Route path="/additional-info" element={<AdditionalInfo/>} />
        <Route path="/final" element={<FinalRegister/>} /> */} 
        {/* <Route path="/register" element={<Registermain/>}/>
        <Route path="/basic-info" element={<Basicinfo/>} /> 
        <Route path="/demographics" element={<Demographics/>} />
        <Route path="/preferences" element={<Preferencess/>} />
        <Route path="/additional-info" element={<AdditionalInfo/>} />
        <Route path="/final" element={<FinalRegister/>} />
        <Route path="/login" element={<Login />} />
        {/* You can add more routes here as needed */}
        {/* <Route path='/basic-info'element={<Basicinfo/>}/> */}
        {/* <Route path="/register" element={<Registermain/>}/> */}
        <Route path="/login" element={<Login />}/>
      </Routes>
    </Router>
  );
};

export default App;
