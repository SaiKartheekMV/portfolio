import './Navbar.css';
import logo from '../assets/logo.png';
import message1 from '../assets/message1.png';
import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar" data-aos="fade-down">
      <img src={logo} alt="my logo" className="logo" data-aos="fade-left" data-aos-delay="200" />

      {/* Burger Button */}
      <div className="burger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
      </div>

      <div className={`Menu ${isOpen ? 'active' : ''}`}>
        <Link to="intro" smooth={true} duration={500} className="menuList" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="about" smooth={true} duration={500} offset={-window.innerHeight / 2 + 95} className="menuList" onClick={toggleMenu}>
          About
        </Link>
        <Link to="skills" smooth={true} duration={500} className="menuList" onClick={toggleMenu}>
          Skills
        </Link>
        <Link to="projects" smooth={true} duration={500} className="menuList" onClick={toggleMenu}>
          Projects
        </Link>
        <Link to="certifications" smooth={true} duration={500} offset={-window.innerHeight / 2 + 95} className='menuList' onClick={toggleMenu}>
        Certifications
        </Link>
      </div>

      <Link to="contact" smooth={true} duration={500} className="contactBtn">
        <img src={message1} alt="Contact Icon" className="contactImg" />
        Contact Me
      </Link>
    </nav>
  );
};

export default Navbar;
