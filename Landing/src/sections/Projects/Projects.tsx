import "./Projects.css";
import { useState, useEffect, useRef, ReactElement } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SkillsGrid from "./components/SkillsGrid";
import BarefootCollege from "./components/BarefootCollege";
import Hakulele from "./components/Hakulele";
import Alessandrocei from "./components/Alessandrocei";
import symbol from "../../assets/projects.svg";
import barefoot1 from "../../assets/barefoot1.webp";
import barefoot2 from "../../assets/barefoot2.webp";
import barefoot3 from "../../assets/barefoot3.webp";
import hakulele1 from "../../assets/hakulele1.webp";
import hakulele2 from "../../assets/hakulele2.webp";
import hakulele3 from "../../assets/hakulele3.webp";
import alecei1 from "../../assets/alecei1.webp";
import alecei2 from "../../assets/alecei2.webp";
import alecei3 from "../../assets/alecei3.webp";

export default function Projects () {

    const projects:ReactElement[] = [<BarefootCollege/>, <Hakulele/>, <Alessandrocei/>];
    const skills:string[][] = [
        ["UIKit", "VoiceOver", "iOS", "iPadOS", "SwiftUI", "On Site Usability Testing", "Accessibility", "FileMaker", "APIs", "Completion Handlers", "Async/Await", "CoreData", "Animations"],
        ["SwiftUI", "App Store Connect", "TestFlight", "JSONDecoder", "iPadOS", "AVFoundation", "AudioKit", "Haptic Feedback", "iOS", "HIG", "On Site Usability Testing", "Animations"],
        ["Web Development", "React", "Vite", "Typescript", "Responsive", "Vercel", "Deployment", "Email.js", "Environment", "Animations", "Hooks", "Libraries"]
    ];
    const pictures:string[][] = [[barefoot1, barefoot2, barefoot3], [hakulele1, hakulele2, hakulele3], [alecei1, alecei2, alecei3]];
    const [projectIndex, setProjectIndex] = useState<number | null>(null);
    const [pictureIndex, setPictureIndex] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);
    const [loadedPictures, setLoadedPictures] = useState(false)
    const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
    const [picturesStyles, setPicturesStyles] = useState([
            { maxWidth: 'auto', maxHeight: '100%'},
            { maxWidth: '100%', maxHeight: 'auto'},
            { maxWidth: '100%', maxHeight: 'auto'}
    ]);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setFadeOut(true);
        setTimeout(() => {
          const newIndex = (pictureIndex + 1) % pictures[projectIndex ?? 0].length;
          setPictureIndex(newIndex);
          setFadeOut(false);
        }, 500); 
      }, 4000); 
      return () => clearInterval(intervalId);
    }, [pictureIndex, pictures]);
    
    useEffect(() => {
        if (projectIndex == null) {
            setProjectIndex(0)
        } else {
            loadPictures()
        }
    }, [projectIndex]);


    function loadPictures() {
        let promises: Promise<void>[] = pictures[projectIndex ?? 0].map(e => picturePromise(e))
        Promise.all(promises).then(() => setLoadedPictures(true));
    }
    
    function picturePromise(element: string) {
        return new Promise<void>(resolve => {
            const img = new Image();
            img.src = element;
            img.onload = () => resolve();
        });
    }
    
    function changeCategory(num: number) {
        setProjectIndex(num)
        setPictureIndex(0)
        switch(num) { 
            case 1: { 
                setPicturesStyles([
                    { maxWidth: 'auto', maxHeight: '100%'},
                    { maxWidth: 'auto', maxHeight: '100%'},
                    { maxWidth: 'auto', maxHeight: '100%'}
                ]) 
                break;
            } 
            case 2: { 
                setPicturesStyles([
                    { maxWidth: '100%', maxHeight: 'auto'},
                    { maxWidth: 'auto', maxHeight: '100%'},
                    { maxWidth: 'auto', maxHeight: '100%'}
                ])
                break;
            } 
            default: { 
                setPicturesStyles([
                    { maxWidth: 'auto', maxHeight: '100%'},
                    { maxWidth: '100%', maxHeight: 'auto'},
                    { maxWidth: '100%', maxHeight: 'auto'}
                ]) 
            } 
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
                        color: projectIndex == 0 ? "#1F1F23" : "#CDA1FF",
                        backgroundColor: projectIndex == 0 ? "#CDA1FF" : "#1F1F23",
                        fontFamily: "Inter Variable"
                    }} onClick={() => changeCategory(0)}>
                        Barefoot Suite
                    </button>
                    <button style={{
                        color: projectIndex == 1 ? "#1F1F23" : "#CDA1FF",
                        backgroundColor: projectIndex == 1 ? "#CDA1FF" : "#1F1F23",
                        fontFamily: "Inter Variable"
                    }} onClick={() => changeCategory(1)}>
                        Hakulele
                    </button>
                    <button style={{
                        color: projectIndex == 2 ? "#1F1F23" : "#CDA1FF",
                        backgroundColor: projectIndex == 2 ? "#CDA1FF" : "#1F1F23",
                        fontFamily: "Inter Variable"
                    }} onClick={() => changeCategory(2)}>
                        alessandrocei.it
                    </button>
                </nav>
                <div style={{marginTop: "10px"}} className="single-project">
                    {projects[projectIndex ?? 0]}
                    <div className="single-project-visuals">
                        <SkillsGrid skills={skills[projectIndex ?? 0]}/>
                        <div className="single-project-images">
                            {loadedPictures == true ?
                                <img 
                                src={pictures[projectIndex ?? 0][pictureIndex]} alt={`Image ${pictureIndex + 1}`} 
                                style={{
                                    ...picturesStyles[pictureIndex],
                                    opacity: pictureIndex === pictureIndex ? (fadeOut ? 0 : 1) : 0,
                                    transition: 'opacity 0.5s ease-in-out',
                                }} 
                                ref={(el) => (imagesRef.current[pictureIndex] = el)}
                                />
                            :
                                <div></div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}