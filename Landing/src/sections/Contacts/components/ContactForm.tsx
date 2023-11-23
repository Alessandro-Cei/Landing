import "./ContactForm.css";
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha"
import { env } from "process";

export default function ContactForm() {

  const form:any = useRef();
  const captcha:any = useRef();
  /*const site:string = "SITE_KEY"*/
  const [token, setToken] = useState()
  /*const service:string = env.SERVICE_ID ?? ""
  const template:string = env.TEMPLATE_ID ?? ""
  const key:string = env.PUBLIC_KEY ?? ""*/

  const sendEmail = (e:any) => {
    e.preventDefault();

    const params = {
        'name': form.current.name.value,
        'email': form.current.email.value,
        'topic': form.current.topic.value,
        'message': form.current.message.value,
        'g-recaptcha-response': token
    }
    

    emailjs.send('SERVICE_ID', 'TEMPLATE_ID', params, 'PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
          captcha.current.reset()
          form.current.reset()
          setToken(undefined)
      }, (error) => {
          console.log(error.text);
          captcha.current.reset()
          setToken(undefined)
      });
  };

  function onChange(value: any) {
    setToken(value)
  }
    useEffect(() => {
        console.log(env.SERVICE_ID)
        console.log(env.TEMPLATE_ID)
        console.log(env.PUBLIC_KEY)
    }, [])
  return (
    <form ref={form} onSubmit={sendEmail}>
        <div className="form-inner-group-container">
            <div className="form-inner-group">
                <input type="text" name="name" placeholder="Name"/>
            </div>
            <div className="form-inner-group">
                <input type="email" name="email" placeholder="Email"/>
            </div>
        </div>
        <input type="text" name="topic" placeholder="Topic"/>
        <label style={{marginLeft: "2px", color: "#747474"}}>Message</label>
        <textarea name="message"/>
        <div className="submit-group">
            <ReCAPTCHA sitekey="SITE_KEY" ref={captcha} size="normal" theme="dark" className="recaptcha" onChange={
                onChange
            }/>
            {token != undefined ? <button type="submit" className="submit-button">Send</button> : <button disabled type="submit" className="submit-button">Send</button>}
        </div>
        {token}
    </form>
  )

}