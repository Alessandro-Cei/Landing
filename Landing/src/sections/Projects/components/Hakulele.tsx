import hakulele from "../../../assets/hakulele.svg"

export default function Hakulele() {
    return(
        <div className="single-project-description">
                        <div style={{display: "flex", alignItems: "center", paddingTop: "5%"}}>
                            <img style={{width: "5vw"}} src={hakulele} alt="SakhiApp's icon"/>
                            <h2 style={{color: "#CDA1FF", fontFamily: "Rubrik-Bold", paddingLeft: "3%"}}>Hakulele</h2>
                        </div>
                        <h4>
                            It is an useful tool for every beginner at playing the ukulele. The app was 
                            developed starting from an <span>actual personal struggle</span>: the chords are a lot 
                            and it is <span>very easy to get lost</span> among them (especially if you don’t have a 
                            music theory knowledge). Then, all the useful things are dislocated in 
                            different places, websites and apps. 
                            <br/>
                            <br/>
                            Hakulele has everything a new ukulele musician needs for starting playing 
                            the Hawaiian instrument. 
                            <br/>
                            <br/>
                            <span style={{fontWeight: "bold", fontSize: "x-large"}}>The Tuner</span>
                            <br/>
                            The main feature is the ukulele tuner. The user can choose between a 
                            <span> static or a dynamic one.</span> With the static, you can listen to the right pitch 
                            of every chord and train your ears. 
                            <br/>
                            <br/>
                            Otherwise, the dynamic tuner actively listens to what you are playing, 
                            recognizing the played chord and informing you about the state of its 
                            tuning. The <span>visual representation of the headstock</span> helps you to find the 
                            right tuner key.
                            <br/>
                            <br/>
                            <span style={{fontWeight: "bold", fontSize: "x-large"}}>The Chords Tab List</span>
                            <br/>
                            The other feature is focused on the Chords Tab library, divided by musical 
                            scales. From a picker, you can <span>choose the scale</span> and all its chords (from C 
                            to B) are visualised in the view. Every chord has its own tab which displays  
                            <span> how to place the fingers</span> on the fretboard.
                        </h4>
                    </div>
    )
}