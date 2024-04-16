import componentsText from "../../texts_prod/components.json";

export default function Navbar() {
    return (
        <nav className="main_nav">
            <div className="logo_container">
                <a href="#home">
                    <img src="/imgs/SlLogo.jpg" alt="Logo" className="logo" />
                </a>
            </div>
            <div className="buttons">
                {componentsText[0].map((comp, key) => {
                   return (
                        <a className="_button" href={`#${comp.title.split(' ').join('').toLowerCase()}`} key={key}>{comp.title}</a>
                   )
                })}
                <a className="_button" href="#contactme" >Me Contacter</a>
            </div>
        </nav>
    )
}
