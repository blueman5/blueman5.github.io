import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import RatingCards from './components/sections/RatingCards';
import Features from './components/sections/Features';
import DownloadSection from './components/sections/DownloadSection';
import GetStarted from './components/sections/GetStarted';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <Hero />
      <RatingCards />
      <Features />
      <DownloadSection />
      <GetStarted />
    </div>
  );
}

export default App;