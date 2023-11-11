import "./Experiences.css";
import symbol from "../../assets/experiences.svg"
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useState } from "react";

const experiences:string[] = [
    "WorkWorkWorkWorkWorkWorkWorkWorkWorkWorkWorkWorkWorkWorkWorkWorkWorkWorkWorkWorkWorkWorkWorkWork",
    "Education Education Education Education Education Education Education Education Education Education Education Education Education Education Education Education Education Education Education Education Education Education Education Education Education Education Education Education Education Education",
    "Apple Developer AcademyApple Developer AcademyApple Developer AcademyApple Developer AcademyApple Developer Academy",
    "Barefoot CollegeBarefoot CollegeBarefoot CollegeBarefoot CollegeBarefoot CollegeBarefoot CollegeBarefoot College"
]

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
                    <a href="src/assets/Cei Alessandro CV ENG.pdf" target="_blank">View full CV</a>
                </div>
            </div>
            <div className="experiences__lower-side">
                <nav className="experiences__navbar">
                    <button style={{
                        color: category == 0 ? "#1F1F23" : "#B9F08D",
                        backgroundColor: category == 0 ? "#B9F08D" : "#1F1F23"
                    }} onClick={() => setCategory(0)}>
                        Work
                    </button>
                    <button style={{
                        color: category == 1 ? "#1F1F23" : "#B9F08D",
                        backgroundColor: category == 1 ? "#B9F08D" : "#1F1F23"
                    }} onClick={() => setCategory(1)}>
                        Education
                    </button>
                    <button style={{
                        color: category == 2 ? "#1F1F23" : "#B9F08D",
                        backgroundColor: category == 2 ? "#B9F08D" : "#1F1F23"
                    }} onClick={() => setCategory(2)}>
                        Apple Developer Academy
                    </button>
                    <button style={{
                        color: category == 3 ? "#1F1F23" : "#B9F08D",
                        backgroundColor: category == 3 ? "#B9F08D" : "#1F1F23"
                    }} onClick={() => setCategory(3)}>
                        Barefoot College
                    </button>
                </nav>
                <h4>
                    {experiences[category]}
                </h4>
            </div>
        </div>
        
    )

}