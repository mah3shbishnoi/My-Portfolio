import React from 'react';
import './Skills.css';
import Reveal from '../components/Reveal';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
      ),
      skills: ["Java", "Python", "C", "C++", "C#", "SQL", "Bash", "Shell", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "Software & Tools",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
      ),
      skills: ["Git", "GitHub", "Linux", "Windows", "macOS", "Visual Studio", "VS Code", "Android Studio", ".NET", "Microsoft Office"]
    },
    {
      title: "AI & Machine Learning",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>
      ),
      skills: ["Machine Learning", "Deep Learning", "Natural Language Processing"]
    },
    {
      title: "Computer Science",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
      ),
      skills: ["Object-Oriented Programming (OOP)", "Data Structures", "Algorithms"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <Reveal>
          <div className="skills-header">
            <h2 className="section-title">Skills</h2>
          </div>
        </Reveal>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <Reveal key={index} delay={index * 0.15} className="skill-card">
              <div className="skill-card-inner">
                <div className="skill-category-header">
                  <div className="skill-icon">
                    {category.icon}
                  </div>
                  <h3>{category.title}</h3>
                </div>
                
                <div className="skill-pills">
                  {category.skills.map(skill => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
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
export default Skills;