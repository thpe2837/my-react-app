import React from 'react';

import Home from './pages/Home';
import Activities from './pages/Activities';
import Communities from './pages/Communities';
import History from './pages/History';
import AboutUs from './pages/AboutUs';

import Header from './components/Header';
import Footer from './components/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
    	<Header />
    	<Routes>
    		<Route exact path="/" element={<Home />} />
			<Route exact path="/home" element={<Home />} />
			<Route path="/activities" element={<Activities />} />
			<Route path="/communities" element={<Communities />} />
			<Route path="/history" element={<History />} />
			<Route path="/about" element={<AboutUs />} />
    	</Routes>
    	<Footer />
    </Router>
  );
}

export default App;