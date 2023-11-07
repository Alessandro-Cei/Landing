import "./Sauce.css"
import picture1 from "../../assets/sauce1.png"
import picture2 from "../../assets/sauce2.png"
import picture3 from "../../assets/sauce3.png"
import picture4 from "../../assets/sauce4.png"
import picture5 from "../../assets/sauce5.png"
import { useState, useEffect } from "react"

const pictures:string[] = [picture1, picture2, picture3, picture4, picture5];

export default function Sauce() {

    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setIndex((prevIndex) => (prevIndex + 1) % pictures.length);
        }, 3000); 
        return () => clearInterval(interval);
    }, []);

    return(
        <div className="sauce__container">
            <img className="sauce__picture" src={pictures[index]} alt=""/>
            <div className="sauce__description">
                <h2>iOS Development at its human finest</h2>
                <h3>iOS Development at its human finestiOS Development at its human finest iOS Development at its human finest iOS Development at its human finestiOS Development at its human finest iOS Development at its human finest iOS Development at its human finestiOS Development at its human finest iOS Development at its human finest iOS Development at its human finestiOS Development at its human finest iOS Development at its human finest iOS Development at its human finestiOS Development at its human finest iOS Development at its human finest iOS Development at its human finestiOS Development at its human finest iOS Development at its human finest iOS Development at its human finestiOS Development at its human finest</h3>
            </div>
        </div>
    )
}