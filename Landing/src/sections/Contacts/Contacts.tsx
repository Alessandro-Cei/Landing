import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./Contacts.css";
import symbol from "../../assets/contacts.svg";
import baloon1 from "../../assets/baloon1.svg";
import baloon2 from "../../assets/baloon2.svg";
import doodle from "../../assets/doodle.svg";

export default function Contacts() {
    function sendMail() {
        alert("Message sent")
    }
    return(
        <>
            <div className="contacts__background">
                <div>
                    <img src={baloon1} alt=""  style={{
                        marginRight: "15%",
                        width: "50%"
                    }}/>
                </div>
                <div>
                    <img src={baloon2} alt="" style={{
                        marginLeft: "40%",
                    }}/>
                    <img src={doodle} alt="" style={{
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
                    <form id="contact-form" onSubmit={sendMail} /*method="POST"*/>
                        <div className="form-group__name-email">
                            <input type="text" className="form-control" placeholder="Name*"/>
                            <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Email*"/>
                        </div>
                        <div className="form-group__topic">
                            <input type="text" className="topic" placeholder="Topic*"/>
                        </div>
                        <div className="form-group__message">
                            <label htmlFor="message" className="message">Message</label>
                            <textarea name="" className="message-area"></textarea>
                            <button type="submit" className="send-button">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
        
    )
}