import './NavBar.css'
import Logo from '../Logo/Logo'
import { useState } from 'react';
import { Link } from 'react-scroll';


export default function NavBar() {

  const [fixed, setFixed] = useState(false);
  function fixNavbar() {
    if (window.scrollY > window.innerHeight) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }
  window.addEventListener("scroll", fixNavbar)

  return (
    <>
      <div className='navbar__placeholder'/>
      <nav className={fixed ? 'navbar navbar__fixed' : 'navbar'}>
        <div className="navbar__logo">
          <Logo size={1.1} opacity="100%"/>
        </div>
        <div className="navbar__links">
        <Link to="sauce__section" smooth={true} duration={500} offset={-(window.innerHeight * 0.15)}>My sauce</Link>
        <Link to="experiences__section" smooth={true} duration={500} offset={-(window.innerHeight * 0.15)}>Experiences</Link>
        <Link to="hero__section" smooth={true} duration={500}>Projects</Link>
        <Link to="hero__section" smooth={true} duration={500}>Contacts</Link>
        </div>
      </nav>
    </>
    
  )
}