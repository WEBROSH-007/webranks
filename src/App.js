import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import HomePage from './components/home';
import WebDevelopmentServices from './components/webdevservices';
import SEOServicesPage from './components/seopgae';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/webdevservices" element={<WebDevelopmentServices />} />
        <Route path="/seoservices" element={<SEOServicesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
