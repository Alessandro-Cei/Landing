import './NavBar.css'
import Logo from '../Logo/Logo'
import { useState } from 'react';

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
          <a href="#">My sauce</a>
          <a href="#">Experiences</a>
          <a href="#">Projects</a>
          <a href="#">Contacts</a>
        </div>
      </nav>
    </>
    
  )
}