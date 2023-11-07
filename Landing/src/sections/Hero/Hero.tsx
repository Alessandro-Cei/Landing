import "./Hero.css"
import Logo from "../../components/Logo/Logo"
import OneLiner from "./components/OneLiner/OneLiner"
import hero from "../../assets/hero.png"

export default function Hero() {
    return(
        <div className="hero__container">
            <div className="hero__left-side">
                <Logo size={250} opacity="60%"/>
                <OneLiner/>
            </div>
            <img className="hero__right-side" src={hero} alt="Developer's picture"/>
		</div> 
    )
}