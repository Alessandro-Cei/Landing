import "./Hero.css";
import OneLiner from "./subcomponents/OneLiner/OneLiner";
import hero from "../../assets/hero.webp";
import chevron from "../../assets/chevron.svg";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import logo from "../../assets/logo.svg";

export default function Hero() {

    const [width, setWidth] = useState<number>(window.innerWidth);
    const [height, setHeight] = useState<number>(window.innerHeight);
    const isMobile = width <= 767;
    const isTablet = !(isMobile) && (height > width);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, [])

    return(
        <div className="hero__container">
            <div className="hero__left-side">
                <div className="hero__logo-container">
                    <img className="hero__logo-icon" src={logo} alt="The logo's icon"/>
                    <div className="hero__logo-logotype">
                        <h1>Alessandro Cei</h1>
                        <h3>Mobile Developer</h3>
                    </div>
                </div>
                <OneLiner/>
                <Link to="subhero__section" smooth={true} duration={500} offset={isMobile ? 0 : (isTablet ? -(window.innerHeight * 0.07) : -(window.innerHeight * 0.1))}>
                    <div className="chevron">
                        <img src={chevron} alt="Hero section's scroll button" />
                        <img src={chevron} alt="Hero section's scroll button" />
                    </div>
                </Link>
            </div>
            <img className="hero__right-side" src={hero} alt="Developer's picture"/>
		</div> 
    )
}