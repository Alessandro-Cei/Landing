import './NavBar.css'
import Logo from '../Logo/Logo'

export default function NavBar() {
    return (
      <nav className="navbar">
        <div className="navbar__logo">
            <Logo size={100} opacity="100%"/>
        </div>
        <div className="navbar__links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
      </nav>
    )
}