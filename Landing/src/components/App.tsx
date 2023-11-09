import './App.css'
import NavBar from './NavBar/NavBar'
import Hero from '../sections/Hero/Hero'
import SubHero from '../sections/SubHero/SubHero'
import PillsGrid from './PillsGrid/PillsGrid'
import Sauce from '../sections/Sauce/Sauce'

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
      
      {/*<SectionTitle color='#B9F08D' symbol='experiences' title='Experiences' subtitle='It has been a long journey and other things will come.'/>
      <SectionTitle color='#CDA1FF' symbol='projects' title='Projects' subtitle='Each of them is a sweet child of mine (pun intended).'/>
    <SectionTitle color='#FFA14F' symbol='contacts' title='Contacts' subtitle='Do you have an idea? Let’s have a chat.'/>*/}
    </div>
  )
  
}

export default App
