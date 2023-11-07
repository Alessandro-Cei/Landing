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

    useEffect(() => {
      const timeout = setTimeout(() => {
        setPictureOpacity(0);
        setTimeout(() => {
            setPictureIndex((prevIndex) => (prevIndex + 1) % pictures.length);
            setPictureOpacity(1);
        }, 250); 
      }, 4000);
      return () => clearTimeout(timeout);
    }, [pictureIndex, pictures]);

    return(
        <div className="subhero__container">
            <img src={pictures[pictureIndex]} alt="Picture of the Developer in action" className="subhero__picture"
                style={{
                    opacity: pictureOpacity,
                    transition: 'opacity 0.25s ease-in-out'
                }}
            />
            <div className="subhero__description">
                <h2>iOS Development at its human finest</h2>
                <h3>iOS Development at its human finestiOS Development at its human finest iOS Development at its human finest iOS Development at its human finestiOS Development at its human finest iOS Development at its human finest iOS Development at its human finestiOS Development at its human finest iOS Development at its human finest iOS Development at its human finestiOS Development at its human finest iOS Development at its human finest iOS Development at its human finestiOS Development at its human finest iOS Development at its human finest iOS Development at its human finestiOS Development at its human finest iOS Development at its human finest iOS Development at its human finestiOS Development at its human finest</h3>
            </div>
        </div>
    )
}