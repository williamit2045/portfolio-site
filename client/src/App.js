

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact'; // Import Contact component

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-black text-white">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} /> {/* Add the Contact route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

