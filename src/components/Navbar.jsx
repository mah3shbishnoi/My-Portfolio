import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRefs = useRef({});

  const links = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Work', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Resume', id: 'resume' },
    { name: 'Contact', id: 'contact' }
  ];

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
              onClick={() => setActive(link.name)}
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