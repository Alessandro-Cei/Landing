import './App.css'
import NavBar from './NavBar/NavBar'
import Hero from '../sections/Hero/Hero'
import SubHero from '../sections/SubHero/SubHero'
import PillsGrid from './PillsGrid/PillsGrid'

function App() {

  return (
    <div id="site__container">
    	<Hero/>
      <NavBar/>
      <SubHero/>
      <PillsGrid/>
    </div>
  )
  
}

export default App
