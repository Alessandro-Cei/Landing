import "./Projects.css";
import symbol from "../../assets/projects.svg";
import barefoot1 from "../../assets/barefoot1.png";
import barefoot2 from "../../assets/barefoot2.png";
import barefoot3 from "../../assets/barefoot3.png";
import hakulele1 from "../../assets/hakulele1.png";
import hakulele2 from "../../assets/hakulele2.png";
import hakulele3 from "../../assets/hakulele3.png";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useState, useEffect } from "react";
import SkillsGrid from "./components/SkillsGrid";
import BarefootCollege from "./components/BarefootCollege";
import Hakulele from "./components/Hakulele";

export default function Projects () {

    const [category, setCategory] = useState(0);
    const [pictures, setPictures] = useState([barefoot1, barefoot2, barefoot3]);
    const [picturesStyles, setPicturesStyles] = useState(
        [
            { maxWidth: 'auto', maxHeight: '100%'},
            { maxWidth: '100%', maxHeight: 'auto'},
            { maxWidth: '100%', maxHeight: 'auto'}
        ]
    );
    const [pictureIndex, setPictureIndex] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setFadeOut(true);
        setTimeout(() => {
          const newIndex = (pictureIndex + 1) % pictures.length;
          setPictureIndex(newIndex);
          setFadeOut(false);
        }, 1000); 
      }, 4000); 
  
      return () => clearInterval(intervalId);
    }, [pictureIndex, pictures]);

    function changeCategory(num: number) {
        if (num == 0) {
            setCategory(0)
            setPictures([barefoot1, barefoot2, barefoot3])
            setPictureIndex(0)
            setPicturesStyles([
                { maxWidth: 'auto', maxHeight: '100%'},
                { maxWidth: '100%', maxHeight: 'auto'},
                { maxWidth: '100%', maxHeight: 'auto'}
            ])
        } else {
            setCategory(1)
            setPictureIndex(0)
            setPictures([hakulele1, hakulele2, hakulele3])
            setPicturesStyles([
                { maxWidth: 'auto', maxHeight: '100%'},
                { maxWidth: 'auto', maxHeight: '100%'},
                { maxWidth: 'auto', maxHeight: '100%'}
            ])
        }
    };
    
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
                    }} onClick={() => changeCategory(0)}>
                        Barefoot Suite
                    </button>
                    <button style={{
                        color: category == 1 ? "#1F1F23" : "#CDA1FF",
                        backgroundColor: category == 1 ? "#CDA1FF" : "#1F1F23"
                    }} onClick={() => changeCategory(1)}>
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
                            <img src={pictures[pictureIndex]} alt={`Image ${pictureIndex + 1}`} style={{
                                ...picturesStyles[pictureIndex],
                                opacity: fadeOut ? 0 : 1,
                                transition: 'opacity 0.5s ease-in-out',
                            }}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}