import './OneLiner.css'
import { useState, useRef, useEffect, SetStateAction } from 'react'
import Typed from 'typed.js'

const dynamicText:string[] = ["what I have experienced in my life.", "all the challenges I've been through.", "all the passions and things I cultivate", "the people I have met during my path.", "all the sleepless nights solving errors."];
const colors:string[] = ["#6CE0FF", "#CDA1FF", "#FFA14F", "#B9F08D", "#D9C668"];

export default function OneLiner() {

    const [index, setIndex] = useState(0);
    const dynamicSpan = useRef(null);

    useEffect(() => {
        const typed = new Typed(dynamicSpan.current, {
          strings: dynamicText,
          typeSpeed: 50,
          backSpeed: 20,
          loop: true,
          loopCount: Infinity,
          smartBackspace: false,
          backDelay: 2000,
          preStringTyped: (arrayPos: SetStateAction<number>) => {
            setIndex(arrayPos)
          }
        });
        return () => {
          // Destroy Typed instance during cleanup to stop animation
          typed.destroy();
        };
    }, []);    

    return(
        <>
            <h1 className="oneliner__container">
                <span className="oneliner__static-text">_Every line of code<br/>is made out of </span>
                <span ref={dynamicSpan} className="oneliner__dynamic-text" style={{
                  color: colors[index]
                }}></span>
            </h1>
        </>
    )
    
}




