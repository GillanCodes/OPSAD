'use client'

import emailjs from "@emailjs/browser";
import { useState } from "react";
import config from "../../config/config.json";

export default function ContactForm() {

    const [state, setState] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        corp: "",
        message : "",
    });

    const [load, setLoad] = useState(false);
    const [sended, setSended] = useState(false);

    const sendEmail = (e:any) => {
        e.preventDefault();
        setLoad(true);

        emailjs.send(config.SERVICE_ID, config.TEMPLATE_ID, state, config.PUBLIC_KEY).then((result) => {
            setSended(true)
        }, (error) => {
            setSended(false);
            setLoad(false);
        });
    }

    return (
        <>
            <div className="contact-form">
                <span className="target" id="contactme"></span>
                
                <div className="container">
                    <h3 className="__title">Contactez moi !</h3>
                    <form onSubmit={(e) => sendEmail(e)} className={sended ? "success" : ""}>
                        <div className="field">
                            <input type="text" className="input" placeholder="Nom" required onChange={(e) => setState({...state, surname:e.target.value})}/>
                            <input type="text" className="input" placeholder="Prénom" required onChange={(e) => setState({...state, name:e.target.value})}/>
                        </div>
                        <div className="field">
                            <input type="text" className="input full-width" placeholder="Entreprise" required onChange={(e) => setState({...state, corp:e.target.value})}/>
                        </div> 
                        <div className="field">
                            <input type="email" className="input" placeholder="email@exemple.com" required onChange={(e) => setState({...state, email:e.target.value})}/>
                            <input type="text" className="input" placeholder="Numero de téléphone" required onChange={(e) => setState({...state, phone:e.target.value})}/>
                        </div> 
                        <textarea className="textarea" placeholder="Votre demande" onChange={(e) => setState({...state, message:e.target.value})}></textarea>
                        {sended ? (
                            <input type="submit" value="Message envoyé !" className="submit-btn success" disabled  />
                        ) : (
                            <>
                                {load  ? (
                                    <input type="submit" value="Envoie en cours ..." className="submit-btn" disabled />
                                ) : (
                                    <input type="submit" value="Envoyer" className="submit-btn"  />
                                )}
                            </>
                        )}
                        
                        
                    </form>

                </div>

            </div>
        </>
        
    )
}
