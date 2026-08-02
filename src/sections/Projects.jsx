import React from 'react';
import { ExternalLink } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Software License Management System",
      description: "Developed a licensing system for Anand Rathi IT Pvt. Ltd. using .NET MVC and MySQL. Implemented device-specific validation by binding activated keys to the system's NIC MAC address.",
      tags: ["C#", ".NET", "MVC", "MySQL"],
      github: "", // Internship project usually private
      live: "",
      isFeatured: true,
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee57d5?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Python Maze Game",
      description: "Interactive maze game developed during training at JIET with collision detection, asynchronous programming, and custom graphics rendering.",
      tags: ["Python", "Pygame", "asyncio"],
      github: "", // Add link if available
      live: "",
      isFeatured: false,
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A premium, glassmorphic personal portfolio built from scratch with custom CSS animations and React.",
      tags: ["React", "CSS", "Vite"],
      github: "https://github.com/mah3shbishnoi",
      live: "#",
      isFeatured: false,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Selected Work.</h2>
        
        <div className="bento-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`bento-card ${project.isFeatured ? 'featured' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="card-image-wrapper">
                <img src={project.image} alt={project.title} className="card-image" />
                <div className="card-overlay"></div>
                <div className="card-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="card-link-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="card-link-btn">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="card-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;