import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./Sauce.css";
import symbol from "../../assets/sauce.svg"
import image from "../../assets/sauce_image.svg"

export default function Sauce() {

    return(
        <div className="sauce__container">
            <img className="sauce__symbol" src={symbol} alt="Sauce section's title symbol" />
            <div>
                <SectionTitle color='#6CE0FF' title='My sauce' subtitle='Usually should be a secret, but not mine.'/>
                <h4  className="sauce__text">I prefer to introduce myself as a <span style={{color: "#6CE0FF", fontWeight: "bold"}}>humanist developer</span>, building up 
                    applications and products for people. With a human touch, of course. 
                    <br/>
                    <br/>
                    My background helps me to dig into the real roots of a need, investigating 
                    all around the topic and the actual usage. 
                    <br/>
                    <br/>
                    My natural attitude into observing behaviours and processes gives me the 
                    call for optimizing digital journeys and people’s everyday life. The right 
                    amount of nerdy flavour, a pinch of extravaganza, loads of curiosity, 
                    a spoonful of deep researches and commitment.
                    <br/>
                    <br/>
                    So, what is my secret sauce? <span style={{color: "#6CE0FF", fontWeight: "bold", textDecoration: "underline"}}>Helping human beings.</span>
                </h4>
            </div>
            <div className="sauce__image">
                <img src={image} alt="Sauce section's descriptive image"/>
            </div>
        </div>
    )

}