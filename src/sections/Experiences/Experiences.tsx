import "./Experiences.css";
import symbol from "../../assets/experiences.svg"
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { ReactElement, useState } from "react";
import pdf from "../../../public/Cei Alessandro CV ENG.pdf"
import Education from "./subcomponents/Education";
import AdaStudent from "./subcomponents/AdaStudent";
import Pier from "./subcomponents/Pier";

const experiences:ReactElement[] = [<Education/>, <AdaStudent/>, <Pier/>];

export default function Experiences() {

    const [category, setCategory] = useState(0)

    return(
        <div className="experiences__container">
            <div className="experiences__upper-side">
                <img className="experiences__symbol" src={symbol} alt="Sauce section's title symbol" />
                <div>
                    <SectionTitle color='#B9F08D' title='Experiences' subtitle='It has been a long journey and other things will come.'/>
                    <h4  className="experiences__text">You can not summarize an entire life in a resumé: its shades, opportunities, 
                        struggles, improvements and failures too.  
                        <br/>
                        <br/>
                        I want to tell you my story in the most natural way as possible:
                        <br/>
                        <span style={{color: "#B9F08D", fontWeight: "bold"}}>with my words.</span>
                    </h4>
                </div>
                <div className="experiences__cv-button-container">
                    <a href={pdf} target="_blank">View full CV</a>
                </div>
            </div>
            <div className="experiences__lower-side">
                <nav className="experiences__navbar">
                    <button style={{
                        color: category == 0 ? "#1F1F23" : "#B9F08D",
                        backgroundColor: category == 0 ? "#B9F08D" : "#1F1F23",
                        fontFamily: "Inter Variable"
                    }} onClick={() => setCategory(0)}>
                        Education
                    </button>
                    <button style={{
                        color: category == 1 ? "#1F1F23" : "#B9F08D",
                        backgroundColor: category == 1 ? "#B9F08D" : "#1F1F23",
                        fontFamily: "Inter Variable"
                    }} onClick={() => setCategory(1)}>
                        Apple Developer Academy
                    </button>
                    <button style={{
                        color: category == 2 ? "#1F1F23" : "#B9F08D",
                        backgroundColor: category == 2 ? "#B9F08D" : "#1F1F23",
                        fontFamily: "Inter Variable"
                    }} onClick={() => setCategory(2)}>
                        Barefoot College
                    </button>
                </nav>
                {experiences[category]}
            </div>
        </div>
    );

}