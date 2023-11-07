import './NavBar.css'
import Logo from '../Logo/Logo'

export default function NavBar() {
    return (
      <nav className="navbar">
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
    )
}