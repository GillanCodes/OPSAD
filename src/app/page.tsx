import DOMPurify from 'isomorphic-dompurify';

import ComponentLeft from "./Components/ComponentLeft";
import ComponentRight from "./Components/ComponentRight";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import ScrollableComponent from "./Components/ScrollableComponent";

import componentsText from "../texts/components.json";
import cardsArray from "../texts/cards.json";
import Footer from "./Components/Footer";
import ContactForm from "./Components/ContactForm";
import Offers from './Components/Offers';

function s(t:string | undefined){
    t = t + "";
    return DOMPurify.sanitize(t);
}

export default function app() {
    return (
        <main className="global_app">
            <Navbar />
            <Home />

            <div className="components">
                {componentsText[0].map((comp) => {
                    switch(comp.type){
                            case "left":
                                return <ComponentLeft title={s(comp.title)} text={s(comp.text)} url={comp.url} id={comp.title.split(' ').join('').toLocaleLowerCase()}  />
                            case "right":
                                return <ComponentRight title={s(comp.title)} text={s(comp.text)} url={comp.url} id={comp.title.split(' ').join('').toLocaleLowerCase()} />
                            case "scrollable":
                                return <ScrollableComponent title={comp.title} cards={cardsArray[0]} id={comp.title.split(' ').join('').toLocaleLowerCase()} />
                            case "offers":
                                return <Offers title={comp.title} offers={comp.offers} id={comp.title.split(' ').join('').toLocaleLowerCase()} />
                            default:
                                break
                        }
                })}
            </div>
            <ContactForm />
            <Footer />
        </main> 
    )
}
