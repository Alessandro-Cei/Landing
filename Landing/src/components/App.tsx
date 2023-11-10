import './App.css'
import NavBar from './NavBar/NavBar'
import Hero from '../sections/Hero/Hero'
import SubHero from '../sections/SubHero/SubHero'
import PillsGrid from './PillsGrid/PillsGrid'
import Sauce from '../sections/Sauce/Sauce'
import Experiences from '../sections/Experiences/Experiences'
import Projects from '../sections/Projects/Projects'

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
      
      {/*<SectionTitle color='#FFA14F' symbol='contacts' title='Contacts' subtitle='Do you have an idea? Let’s have a chat.'/>*/}
    </div>
  )
  
}

export default App
