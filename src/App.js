import React from 'react';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
    	<Header />
    	<Routes>
    		<Route path="/" element={<Home />} />
			<Route path="/" element={<Activities />} />
			<Route path="/" element={<Communities />} />
    	</Routes>
    	<Footer />
    </Router>
  );
}

export default App;