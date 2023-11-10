import "./Projects.css";
import symbol from "../../assets/projects.svg"
import sakhi1 from "../../assets/sakhi1.png"
import sakhi2 from "../../assets/sakhi2.png"
import hakulele1 from "../../assets/hakulele1.png"
import hakulele2 from "../../assets/hakulele2.png"
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useState } from "react";
import SkillsGrid from "./components/SkillsGrid";
import BarefootCollege from "./components/BarefootCollege";
import Hakulele from "./components/Hakulele";

export default function Projects () {

    const [category, setCategory] = useState(0)
    return(
        <div className="projects__container">
            <div className="projects__upper-side">
            <img className="projects__symbol" src={symbol} alt="Sauce section's title symbol" />
            <div>
                <SectionTitle color='#CDA1FF' title='Projects' subtitle='Each of them is a sweet child of mine (pun intended).'/>
                <h4  className="projects__text">
                    Every project has a <span style={{color: "#CDA1FF", fontWeight: "bold"}}>whole universe</span> behind it. 
                    <br/>
                    Stories, needs, findings and solutions.
                    <br/>
                    <br/>
                    When they come to life, it is the most fullfilling thing for a developer: 
                    knowing that what you have written in those lines of code... has made 
                    somebody’s life easier.                     
                </h4>
            </div>
            </div>
            <div className="projects__lower-side">
                <nav className="projects__navbar">
                    <button style={{
                        color: category == 0 ? "#1F1F23" : "#CDA1FF",
                        backgroundColor: category == 0 ? "#CDA1FF" : "#1F1F23"
                    }} onClick={() => setCategory(0)}>
                        Barefoot Suite
                    </button>
                    <button style={{
                        color: category == 1 ? "#1F1F23" : "#CDA1FF",
                        backgroundColor: category == 1 ? "#CDA1FF" : "#1F1F23"
                    }} onClick={() => setCategory(1)}>
                        Hakulele
                    </button>
                </nav>
                <div style={{marginTop: "10px"}} className="single-project">
                    {category == 0 ? <BarefootCollege/> : <Hakulele/>}
                    <div className="single-project-visuals">
                        <SkillsGrid skills={
                            category == 0 ? ["SwiftUI", "VoiceOver", "iOS", "TestFlight", "UIKit", 
                                            "iPadOS", "On Site Usability Testing", "Accessibility", 
                                            "DocC", "FileMaker", "APIs", "AVFoundation", "CoreData", 
                                            "Animations"] 
                                            :
                                            ["SwiftUI", "App Store Connect", "TestFlight", "JSONDecoder",
                                             "iPadOS", "AVFoundation", "Haptic Feedback",
                                              "On Site Usability Testing", "Animations", "iOS", "Native Components"]
                        }/>
                        <div className="single-project-images">
                            <img style={{position: "relative", right: "0%", top: "0px", zIndex:"0"}} src={
                                category == 0 ? sakhi1 : hakulele1
                            } alt="" />
                            <img style={{position: "relative", right: "20%", top: "15vh", zIndex:"1"}} src={
                                category == 0 ? sakhi2 : hakulele2
                            } alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}