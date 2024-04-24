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
                    <a href="mailto:contact.odsav@gmail.com">
                        <img src="/icons/email.png" alt="Linkedin" className="icon" />
                    </a>
                    <a href="https://www.malt.fr/profile/sylvielegros" target="_BLANK">
                        <img src="/icons/malt.svg" alt="Malt" className="icon" />
                    </a>
                    <a href="https://www.instagram.com/odsav.fr/" target="_BLANK">
                        <img src="/icons/instagram.svg" alt="Instagram" className="icon" />
                    </a>
                </div>
            </div>
        </footer>
    )
}
