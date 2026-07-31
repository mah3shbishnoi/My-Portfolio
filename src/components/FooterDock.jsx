import React, { useState, useEffect } from 'react';
import { Home, Folder, FileText, Sun, Moon } from 'lucide-react';
import './FooterDock.css';

const FooterDock = () => {
  const [theme, setTheme] = useState('light');

  // Toggle Theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="footer-dock">
      <div className="dock-container">
        <a href="#home" className="dock-item" title="Home">
          <Home size={20} strokeWidth={1.5} />
        </a>
        <a href="#projects" className="dock-item" title="Projects">
          <Folder size={20} strokeWidth={1.5} />
        </a>
        <a href="#resume" className="dock-item" title="Resume">
          <FileText size={20} strokeWidth={1.5} />
        </a>
        <div className="dock-divider"></div>
        <a href="https://github.com/mah3shbishnoi" target="_blank" rel="noopener noreferrer" className="dock-item" title="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
        <a href="https://www.linkedin.com/in/mahesh-saran" target="_blank" rel="noopener noreferrer" className="dock-item" title="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
        <a href="https://x.com/mah3shbishnoi" target="_blank" rel="noopener noreferrer" className="dock-item" title="X (Twitter)">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
        </a>
        <div className="dock-divider"></div>
        <button className="dock-item theme-toggle-btn" onClick={toggleTheme} title="Toggle Theme">
          {theme === 'light' ? <Moon size={20} strokeWidth={1.5} /> : <Sun size={20} strokeWidth={1.5} />}
        </button>
      </div>
    </div>
  );
};
export default FooterDock;