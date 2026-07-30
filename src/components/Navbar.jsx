import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRefs = useRef({});

  const links = ['Home', 'About', 'Projects', 'Skills', 'Certifications', 'Contact'];

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
              key={link}
              ref={el => navRefs.current[link] = el}
              onClick={() => setActive(link)}
            >
              <a 
                href={`#${link.toLowerCase()}`}
                className={active === link ? 'active' : ''}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;