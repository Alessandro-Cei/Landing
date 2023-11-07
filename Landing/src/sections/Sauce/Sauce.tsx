import "./Sauce.css"
import picture1 from "../../assets/sauce1.png"
import picture2 from "../../assets/sauce2.png"
import picture3 from "../../assets/sauce3.png"
import picture4 from "../../assets/sauce4.png"
import picture5 from "../../assets/sauce5.png"
import { useState, useEffect } from "react"

const pictures:string[] = [picture1, picture2, picture3, picture4, picture5];

export default function Sauce() {

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
        <div className="sauce__container">
            <img src={pictures[pictureIndex]} alt="Picture of the Developer in action" className="sauce__picture"
                style={{
                    opacity: pictureOpacity,
                    transition: 'opacity 0.25s ease-in-out'
                }}
            />
            <div className="sauce__description">
                <h2>iOS Development at its human finest</h2>
                <h3>iOS Development at its human finestiOS Development at its human finest iOS Development at its human finest iOS Development at its human finestiOS Development at its human finest iOS Development at its human finest iOS Development at its human finestiOS Development at its human finest iOS Development at its human finest iOS Development at its human finestiOS Development at its human finest iOS Development at its human finest iOS Development at its human finestiOS Development at its human finest iOS Development at its human finest iOS Development at its human finestiOS Development at its human finest iOS Development at its human finest iOS Development at its human finestiOS Development at its human finest</h3>
            </div>
        </div>
    )
}