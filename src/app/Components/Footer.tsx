export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p className="copyright">2023 - 2024 © GillanCodes. Tous droits réservés.</p>
                <p className="compagny">OdsAv - Siret: 987377561 00012</p>
                <div className="buttons">
                    <a href="https://fr.linkedin.com/in/sylvie-odsav" target="_BLANK">
                        <img src="/icons/linkedin.png" alt="Linkedin" className="icon" />
                    </a>
                    <a href="mailto:contact.odsav@laposte.net">
                        <img src="/icons/email.png" alt="Linkedin" className="icon" />
                    </a>
                    <a href="http://malt.com" target="_BLANK">
                        <img src="/icons/malt.svg" alt="Malt" className="icon" />
                    </a>
                </div>
            </div>
        </footer>
    )
}
