import componentsText from "../../texts/components.json";

export default function Navbar() {
    return (
        <nav className="main_nav">
            <div className="logo_container">
                <img src="/dev/logo.jpg" alt="Logo" className="logo" />
            </div>
            <div className="buttons">
                {componentsText[0].map((comp, key) => {
                   return (
                        <a className="_button" href={`#${comp.title.split(' ').join('').toLowerCase()}`}>{comp.title}</a>
                   )
                })}
                <a className="_button" href="#contactme" >Me Contacter</a>
            </div>
        </nav>
    )
}
