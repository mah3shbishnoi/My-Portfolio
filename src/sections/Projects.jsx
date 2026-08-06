import React from 'react';
import './Projects.css';
import Reveal from '../components/Reveal';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Real-Time Barge-In Detection for Voice AI",
      description: "Engineered a real-time voice AI pipeline that eliminates conversational latency during user interruptions. Integrated Silero VAD to continuously monitor audio input, instantly halting TTS playback the exact moment user speech is detected to create a seamless and natural conversational flow.",
      tags: ["Python", "Silero VAD", "Groq Whisper", "LLM APIs", "Edge TTS"],
      github: "https://github.com/mah3shbishnoi/real-time-barge-in-detection",
      demo: ""
    },
    {
      id: 2,
      title: "License Key Management System",
      description: "Built a software license management system to generate and validate keys, controlling application access based on credentials. Implemented device-specific validation by associating activated licenses with the system's NIC MAC address to restrict usage.",
      tags: ["C#", ".NET Framework", "MVC", "MySQL"],
      github: "https://github.com/mah3shbishnoi",
      demo: ""
    },
    {
      id: 3,
      title: "GUI Resume Builder",
      description: "Developed a desktop-based resume builder using Tkinter for data entry and management. Implemented automated Word and PDF generation using python-docx and ReportLab, integrating Pillow for image handling to structure user information beautifully.",
      tags: ["Python", "Tkinter", "python-docx", "ReportLab", "JSON"],
      github: "https://github.com/mah3shbishnoi/Resume-Builder-Using-Py-Tkinter",
      demo: ""
    },
    {
      id: 4,
      title: "Interactive Developer Portfolio",
      description: "Designed and engineered a highly premium, dark-mode ready developer portfolio. Built with React and modern CSS features like glassmorphism, responsive grids, and IntersectionObserver for smooth scroll-reveal micro-animations.",
      tags: ["React", "JavaScript", "CSS3", "Vite"],
      github: "https://github.com/mah3shbishnoi/My-Portfolio",
      demo: "https://mah3shbishnoi.github.io/My-Portfolio"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <Reveal>
          <div className="projects-header">
            <h2 className="section-title">Projects.</h2>
            <p className="section-subtitle">Selected personal and academic work.</p>
          </div>
        </Reveal>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.15} className="project-card">
              <div className="project-card-inner">
                <div className="project-top">
                  <div className="folder-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/></svg>
                  </div>
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="External Link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
                
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;