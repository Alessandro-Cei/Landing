import './App.css'
import Logo from './Logo/Logo'
import OneLiner from './OneLiner/OneLiner'
import hero from '../assets/hero2.png'
import NavBar from './NavBar/NavBar'

function App() {

  return (
    <div id="site">
    	<div id="hero">
			  <div id="innerHero">
          <Logo size={250} opacity="60%"></Logo>
          <OneLiner></OneLiner>
			  </div>
			  <img id="heroImg" src={hero} alt=""/>
		  </div> 
      <NavBar></NavBar>
    </div>
  )
  
}

export default App
