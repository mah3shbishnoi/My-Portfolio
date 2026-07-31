import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2 className="section-title">About Me.</h2>
        <div className="about-grid">
          <div className="about-image-container">
            <div className="glass-portrait">
              <img src="/images/about-profile.jpg" alt="Mahesh Saran Portrait" />
            </div>
          </div>
          <div className="about-text">
            <h3>Hi! I'm Mahesh and I'm a Software Engineer</h3>
            <p>
              Resourceful and dedicated student with excellent analytical skills and a demonstrated commitment to achieving complex technical goals. Strong problem-solving abilities with proven success in full-stack development and machine learning projects.
            </p>
            <p>
              Well-rounded and professional team player dedicated to continuing academic pursuits and contributing to impactful AI-related projects. Currently looking for internship opportunities and skilled in programming languages such as Python, C++, and modern frameworks like React.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;