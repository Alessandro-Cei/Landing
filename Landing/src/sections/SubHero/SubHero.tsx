import "./SubHero.css"
import picture1 from "../../assets/subhero1.png"
import picture2 from "../../assets/subhero2.png"
import picture3 from "../../assets/subhero3.png"
import picture4 from "../../assets/subhero4.png"
import picture5 from "../../assets/subhero5.png"
import { useState, useEffect } from "react"

const pictures:string[] = [picture1, picture2, picture3, picture4, picture5];

export default function SubHero() {

    const [pictureIndex, setPictureIndex] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);
    const [loadedPictures, setLoadedPictures] = useState(false)

    useEffect(() => {
        const intervalId = setInterval(() => {
          setFadeOut(true);
          setTimeout(() => {
            const newIndex = (pictureIndex + 1) % pictures.length;
            setPictureIndex(newIndex);
            setFadeOut(false);
          }, 500); 
        }, 4000); 
        return () => clearInterval(intervalId);
    }, [pictureIndex, pictures]);

    useEffect(() => {
        loadPictures()
    }, []);

    function loadPictures() {
        let promises: Promise<void>[] = pictures.map(e => picturePromise(e))
        Promise.all(promises).then(() => setLoadedPictures(true));
    }
    
    function picturePromise(element: string) {
        return new Promise<void>(resolve => {
            const img = new Image();
            img.src = element;
            img.onload = () => resolve();
        });
    }

    return(
        <div className="subhero__container">
            {loadedPictures == true ? 
                <img src={pictures[pictureIndex]} alt="Picture of the Developer in action" className="subhero__picture"
                style={{
                    opacity: pictureIndex === pictureIndex ? (fadeOut ? 0 : 1) : 0,
                    transition: 'opacity 0.25s ease-in-out'
                }}
                />
            :
                <div style={{width: "50%"}}></div>
            }
            <div className="subhero__description">
                <h1>iOS Development at its human finest</h1>
                <h3>
                It is not just a matter of writing code: software solutions are our way to improve life and processes, tools for people. 
                <br/>
                <br/>
                The focus has to be indeed on people, how software impacts our way to optimize our tasks, our fullfilment to every-day needs.
                </h3>
            </div>
        </div>
    )
}