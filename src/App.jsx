import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import FooterDock from './components/FooterDock';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import ResumeViewer from './sections/ResumeViewer';
import './App.css';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        {currentHash === '#resume' ? (
          <ResumeViewer />
        ) : (
          <>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
          </>
        )}
      </main>
      <FooterDock />
    </div>
  );
}
export default App;