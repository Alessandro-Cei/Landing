import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./Contacts.css";
import symbol from "../../assets/contacts.svg";
import baloon1 from "../../assets/baloon1.svg";
import baloon2 from "../../assets/baloon2.svg";
import doodle from "../../assets/doodle.svg";
import ContactForm from "./subcomponents/ContactForm";

export default function Contacts() {

    return(
        <>
            <div className="contacts__background">
                <div>
                    <img src={baloon1} alt="Contacts section's background decoration"  style={{
                        marginRight: "15%",
                        width: "50%"
                    }}/>
                </div>
                <div>
                    <img src={baloon2} alt="Contacts section's background decoration" style={{
                        marginLeft: "40%",
                    }}/>
                    <img src={doodle} alt="Contacts section's background decoration" style={{
                        filter: "invert(100%) sepia(0%) saturate(7500%) hue-rotate(153deg) brightness(119%) contrast(104%)",
                        opacity: "0.15",
                        marginLeft: "40%"
                    }}/>
                </div>
            </div>
            <div className="contacts__container">
                <div className="contacts__upper-side">
                    <img className="contacts__symbol" src={symbol} alt="contacts section's title symbol" />
                    <SectionTitle color='#FFA14F' title='Contact me' subtitle='Do you have an idea? Let’s have a chat.'/>
                </div>
                <div className="contacts__lower-side">
                    <ContactForm/>
                </div>
            </div>
        </>
        
    )
}