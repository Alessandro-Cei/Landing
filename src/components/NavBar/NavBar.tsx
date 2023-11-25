import './NavBar.css'
import logo from "../../assets/logo.svg"
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';


export default function NavBar() {

  const [fixed, setFixed] = useState(false);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);
  const isMobile = width <= 767;
  const isTablet = !(isMobile) && (height > width);

  function fixNavbar() {
    if (window.scrollY > window.innerHeight) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
  }

  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      window.addEventListener("scroll", fixNavbar);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
          window.removeEventListener('scroll', fixNavbar);
      }
  }, [])

  return (
    <>
      <div className='navbar__placeholder'/>
      <nav className={fixed ? 'navbar navbar__fixed' : 'navbar'}>
          <div className="navbar__logo-container">
            <img className="navbar__logo-icon" src={logo} alt="The logo's icon"/>
            <div className="navbar__logo-logotype">
                <h1>Alessandro Cei</h1>
                <h3>Mobile Developer</h3>
            </div>
        </div>
        <div className="navbar__links">
        <Link to="sauce__section" smooth={true} duration={500} offset={isTablet ? -(window.innerHeight * 0.12) : -(window.innerHeight * 0.15)}>My sauce</Link>
        <Link to="experiences__section" smooth={true} duration={500} offset={isTablet ? -(window.innerHeight * 0.12) : -(window.innerHeight * 0.15)}>Experiences</Link>
        <Link to="projects__section" smooth={true} duration={500} offset={isTablet ? -(window.innerHeight * 0.12) : -(window.innerHeight * 0.15)}>Projects</Link>
        <Link to="contacts__section" smooth={true} duration={500} offset={isTablet ? -(window.innerHeight * 0.02) : -(window.innerHeight * 0.05)}>Contacts</Link>
        </div>
      </nav>
    </>
    
  )
}