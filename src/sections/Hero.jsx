import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Mahesh Saran.</h1>
        <h2 className="hero-subtitle">Software Engineer & AI/ML Student.</h2>
        <p className="hero-description">
          I believe ideas become clearer and stronger as we work on them.
        </p>
        <div className="hero-links">
          <a href="https://github.com/mah3shbishnoi" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/mahesh-saran" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href="#projects">View Work ↓</a>
        </div>
      </div>
    </section>
  );
};
export default Hero;