import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./Contacts.css";
import symbol from "../../assets/contacts.svg"

export default function Contacts() {
    function sendMail() {
        alert("Message sent")
    }
    return(
        <>
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