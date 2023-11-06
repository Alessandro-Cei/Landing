import './NavBar.css'
import Logo from '../Logo/Logo'

export default function NavBar() {
    return (
      <header className="navbar">
        <div className="navbar-logo">
            <Logo size={100} opacity="100%"></Logo>
        </div>
        <div className="navbar-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
      </header>
    )
}

/*
export default function NavBar() {
    
    return(
        <div id="navBarContainer">
            
            <ul>
                <li>My Sauce</li>
                <li>Experiences</li>
                <li>Projects</li>
                <li>Contacts</li>
            </ul>        
        </div>
    )

}
*/