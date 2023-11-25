import "./Footer.css";
import linkedin from "../../assets/linkedin.svg"
import github from "../../assets/github.svg"
import behance from "../../assets/behance.svg"

export default function Footer() {
    return(
        <footer className="footer__container">
            <div className="footer__info-wrapper">
                <h6>© 2023 Alessandro Cei. All rights are reserved. Design Luisa Pinto</h6>
                <div className="footer__info-links">
                    <a href="https://www.linkedin.com/in/alessandro-cei" target="_blank"><img src={linkedin} alt="Footer's Linkedin link" /></a>
                    <a href="https://github.com/Alessandro-Cei" target="_blank"><img src={github} alt="Footer's Github link" /></a>
                    <a href="https://www.behance.net/alessandrocei" target="_blank"><img src={behance} alt="Footer's Behance link" /></a>
                </div>
            </div>
        </footer>
    )
}