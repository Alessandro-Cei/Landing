import logo from "../../../assets/logo.svg"
import github from "../../../assets/github.svg"


export default function Alessandrocei() {
    return(
        <div className="single-project-description">
            <div style={{display: "flex", alignItems: "center", paddingTop: "5%"}}>
                <img className="single-project-icon" src={logo} alt="SakhiApp's icon"/>
                <h2 style={{color: "#CDA1FF", fontFamily: "Rubrik-Bold", paddingLeft: "3%"}}>alessandrocei.it</h2>
            </div>
            <h4>
                I embarked on a journey to create my portfolio website from scratch, a project that required me to 
                rapidly <span>learn and apply new technologies</span>. Despite having no prior experience with <span>React, Vite, or TypeScript</span>, 
                I was determined to embrace this challenge.
                <br/>
                <br/>
                I began with extensive planning and research, gathering resources, tutorials, and documentation. 
                Official React and Vite documentation were instrumental in building my knowledge base.
                <br/>
                <br/>
                The development process was a gradual journey of breaking down the project into manageable tasks. 
                I started with a basic layout and progressively added components and features. Challenges arose, 
                but they became <span>valuable learning experiences</span> as I familiarized myself with React concepts and TypeScript's type system.
                <br/>
                <br/>
                To enrich the website's functionality, I integrated Email.js for a frontend-only contact form, 
                improving user interaction and engagement. Vercel facilitated immensely the site's deployment and allowed
                me to safely store tokens on their environment variables system.
                <br/>
                <br/>
                This project was not only about building a portfolio, but also about <span>my personal
                growth and the versatility of being a developer</span>. It showcases my ability to adapt, 
                learn and how programming is something cross-cutting, going beyond knowledge of individual frameworks, 
                as <span>many concepts are shared at the core of them</span>.
            </h4>
            <div className="footer__info-links" style={{marginTop: "2vh",}}>
                <a href="https://github.com/Alessandro-Cei/Landing" target="_blank"><img src={github} alt="Project's Behance page" style={{paddingLeft: "0px"}}/></a>
            </div>
        </div>
    )
}