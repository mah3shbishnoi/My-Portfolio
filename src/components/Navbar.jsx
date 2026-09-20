import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRefs = useRef({});
  const isClickScrolling = useRef(false);
  const clickScrollTimeout = useRef(null);

  const links = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Work', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Resume', id: 'resume' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (linkName, linkId) => {
    setActive(linkName);
    isClickScrolling.current = true;
    
    if (linkId === 'resume') {
      window.location.hash = 'resume';
    } else {
      if (window.location.hash === '#resume') {
        window.location.hash = '';
        setTimeout(() => {
          const section = document.getElementById(linkId);
          if (section) section.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const section = document.getElementById(linkId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    
    if (clickScrollTimeout.current) {
      clearTimeout(clickScrollTimeout.current);
    }
    const unlockScroll = () => {
      isClickScrolling.current = false;
      window.removeEventListener('scrollend', unlockScroll);
    };
    
    window.addEventListener('scrollend', unlockScroll);
    clickScrollTimeout.current = setTimeout(unlockScroll, 1500);
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return;
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (const link of links) {
        if (link.id === 'resume') continue;
        
        const section = document.getElementById(link.id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActive(link.name);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Move Slider
  useEffect(() => {
    const activeElement = navRefs.current[active];
    if (activeElement) {
      setIndicatorStyle({
        left: activeElement.offsetLeft,
        width: activeElement.offsetWidth,
      });
    }
  }, [active]);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <a href="#home">MAH3SH</a>
      </div>
      
      <div className="nav-links-container">
        <div className="nav-indicator" style={indicatorStyle} />
        <ul className="nav-links">
          {links.map((link) => (
            <li 
              key={link.name}
              ref={el => navRefs.current[link.name] = el}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.name, link.id);
              }}
            >
              <a 
                href={`#${link.id}`}
                className={active === link.name ? 'active' : ''}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;