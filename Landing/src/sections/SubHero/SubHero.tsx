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
    const [pictureOpacity, setPictureOpacity] = useState(1);
    const [loadedPictures, setLoadedPictures] = useState(0)

    useEffect(() => {
        for (let i=0; i<pictures.length; i++) {
            const img = new Image();
            img.src = pictures[i];
            img.onload = () => {
                setLoadedPictures((prev) => prev + 1);
                console.log(pictures[i]);
                console.log(loadedPictures);
            }
        }
    }, []);
    useEffect(() => {
      const timeout = setTimeout(() => {
        setPictureOpacity(0);
        setTimeout(() => {
            setPictureIndex((prevIndex) => (prevIndex + 1) % pictures.length);
            setTimeout(() => {
                setPictureOpacity(1);
            }, 250);
        }, 250); 
      }, 4000);
      return () => clearTimeout(timeout);
    }, [pictureIndex, pictures]);

    return(
        <div className="subhero__container">
            {loadedPictures == pictures.length ? 
                <img src={pictures[pictureIndex]} alt="Picture of the Developer in action" className="subhero__picture"
                style={{
                    opacity: pictureOpacity,
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