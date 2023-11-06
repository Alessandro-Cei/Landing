import './OneLiner.css'
import { useState } from 'react'
import Typed from 'typed.js'
import React from 'react';

export default function OneLiner() {

    const dynamicText:[string, string, string, string, string] = ["what I have experienced in my life.", "all the challenges I've been through.", "all the passions and things I cultivate", "the people I have met during my path.", "all the sleepless nights solving errors."]
    const colors:[string, string, string, string, string] = ["#6CE0FF", "#CDA1FF", "#FFA14F", "#B9F08D", "#D9C668"]
    const [index, setIndex] = useState(0)
    let spanColor = {
        color: colors[index]
    };
    const dynamicSpan = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(dynamicSpan.current, {
          strings: dynamicText,
          typeSpeed: 50,
          backSpeed: 20,
          loop: true,
          loopcount: Infinity,
          smartBackspace: false,
          backDelay: 2000,
          preStringTyped: (arrayPos: React.SetStateAction<number>, _self: any) => {
            setIndex(arrayPos)
          },
        });
        return () => {
          // Destroy Typed instance during cleanup to stop animation
          typed.destroy();
        };
    }, []);    

    return(
        <>
            <h1 id="container">
                <span id="static">_Every line of code<br/>is made out of </span>
                <span ref={dynamicSpan} id="dynamic" style={spanColor}></span>
            </h1>
        </>
    )
    
}




