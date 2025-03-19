import {Link} from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <div className='navbar'>
      <div className='navbar_container'>
        <div className='navbar_logo'> 
          <img src='./src/assets/logo/KTI_Logo_White.png'></img>
        </div>
        <div className='navbar_hamburger' onClick={toggleNavbar}>
          <img src='./src/assets/navbar/hamburger.svg'></img>
        </div>
        <div className={`navbar_links ${isOpen ? 'open' : ''}`}>
          <Link to="/">
          <span className='home'>Home</span>
          </Link>
          <Link to="/solutions">Solutions</Link>
          <Link to="/stories">Stories</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar