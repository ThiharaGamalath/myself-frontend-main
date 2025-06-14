import './index.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Cursor from './components/Cursor';
import SkillsSection from './components/SkillsSection';

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000')
      .then(response => response.text())
      .then(data => setMessage(data));
  }, []);

  return (
    <Router>
      <div>
        <Cursor />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/skillssection" element={<SkillsSection />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Navbar />
        <About />
        <SkillsSection />
        <Project />
        <Contact />
        <Footer />

        <div className="p-8">
          <h1 className="text-xl font-bold">{message}</h1>
        </div>
      </div>
    </Router>
  );
};

export default App;
