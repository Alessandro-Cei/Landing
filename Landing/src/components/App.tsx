import './App.css'
import NavBar from './NavBar/NavBar'
import Hero from '../sections/Hero/Hero'
import SubHero from '../sections/SubHero/SubHero'
import PillsGrid from './PillsGrid/PillsGrid'
import Sauce from '../sections/Sauce/Sauce'
import Experiences from '../sections/Experiences/Experiences'
import Projects from '../sections/Projects/Projects'
import Contacts from '../sections/Contacts/Contacts'

function App() {

  return (
    <div id="site__container">
      <section id='hero__section'>
        <Hero/>
      </section>
      <NavBar/>
      <SubHero/>
      <PillsGrid/>
      <section id='sauce__section'>
        <Sauce/>
      </section>
      <section id='experiences__section'>
        <Experiences/>
      </section>
      <section id='projects__section'>
        <Projects/>
      </section>
      <section id='contacts__section'>
        <Contacts/>
      </section>
    </div>
  )
  
}

export default App
