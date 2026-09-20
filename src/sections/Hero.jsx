import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = `> MAH3SH.init()
Initializing developer profile...

> load_skills()
["Python", "React", "AI/ML", "C++"]

> get_status()
"Available for internships"

> _`;

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(timer);
      }
    }, 40);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="status-pill">
          <div className="status-avatar">
            <img src="images/profile.jpg" alt="Mahesh Saran" />
          </div>
          <div className="status-indicator"></div>
          <span>Available for opportunities</span>
        </div>
        
        <h1 className="hero-title">Mahesh Saran.</h1>
        <h2 className="hero-subtitle">Software Engineer & AI/ML Student.</h2>
        <p className="hero-description">
          I believe ideas become clearer and stronger as we work on them. 
          Currently looking for internship opportunities and exciting AI-related projects.
        </p>
        <div className="hero-links">
          <a href="https://github.com/mah3shbishnoi" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/mahesh-saran" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href="#experience">View Work ↓</a>
        </div>
      </div>
      
      <div className="hero-terminal-container">
        <div className="glass-terminal">
          <div className="terminal-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <span className="terminal-title">bash — mah3sh@portfolio:~</span>
          </div>
          <div className="terminal-body">
            <pre><code>{text}</code></pre>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;