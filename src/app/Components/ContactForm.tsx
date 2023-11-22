export default function ContactForm() {
    return (
        <div className="contact-form">
            <span className="target" id="contactme"></span>
            <div className="container">
                <h3 className="__title">Contactez moi !</h3>
                <form>
                    <div className="field">
                        <input type="text" className="input" placeholder="Nom" />
                        <input type="text" className="input" placeholder="Prénom" />
                    </div>
                    <div className="field">
                         <input type="text" className="input full-width" placeholder="Entreprise" />
                    </div> 
                    <div className="field">
                        <input type="email" className="input" placeholder="email@exemple.com" />
                        <input type="text" className="input" placeholder="Numero de téléphone" />
                    </div> 
                    <textarea className="textarea" placeholder="Votre demande"></textarea>
                    <button className="submit-btn">Envoyer</button>
                </form>

            </div>

        </div>
    )
}
