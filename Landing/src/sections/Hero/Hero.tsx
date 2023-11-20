import "./Hero.css";
import OneLiner from "./components/OneLiner/OneLiner";
import hero from "../../assets/hero.png";
import chevron from "../../assets/chevron.svg";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import logo from "../../assets/logo.svg"
export default function Hero() {

    const [width, setWidth] = useState<number>(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    
    const isMobile = width <= 576;

    return(
        <div className="hero__container">
            <div className="hero__left-side">
                <div className="hero__logo-container">
                    <img className="hero__logo-icon" src={logo} alt="The logo's icon"/>
                    <div className="hero__logo-logotype">
                        <h1>Alessandro Cei</h1>
                        <h3>iOS Developer</h3>
                    </div>
                </div>
                <OneLiner/>
                <Link to="subhero__section" smooth={true} duration={500} offset={isMobile ? 0 : (-(window.innerHeight * 0.1))}>
                    <div className="chevron">
                        <img src={chevron} alt="" />
                        <img src={chevron} alt="" />
                    </div>
                </Link>
            </div>
            <img className="hero__right-side" src={hero} alt="Developer's picture"/>
		</div> 
    )
}