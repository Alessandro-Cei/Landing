import './NavBar.css'
import logo from "../../assets/logo.svg"
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
          <div className="navbar__logo-container">
            <img className="navbar__logo-icon" src={logo} alt="The logo's icon"/>
            <div className="navbar__logo-logotype">
                <h1>Alessandro Cei</h1>
                <h3>iOS Developer</h3>
            </div>
        </div>
        <div className="navbar__links">
        <Link to="sauce__section" smooth={true} duration={500} offset={-(window.innerHeight * 0.15)}>My sauce</Link>
        <Link to="experiences__section" smooth={true} duration={500} offset={-(window.innerHeight * 0.15)}>Experiences</Link>
        <Link to="projects__section" smooth={true} duration={500} offset={-(window.innerHeight * 0.15)}>Projects</Link>
        <Link to="contacts__section" smooth={true} duration={500} offset={-(window.innerHeight * 0.05)}>Contacts</Link>
        </div>
      </nav>
    </>
    
  )
}