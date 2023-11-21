import ComponentLeft from "./Components/ComponentLeft";
import ComponentRight from "./Components/ComponentRight";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import ScrollableComponent from "./Components/ScrollableComponent";

import componentsText from "../texts/components.json";
import cardsArray from "../texts/cards.json";

export default function app() {
    return (
        <main className="global_app">
            <Navbar />
            <Home />

            <div className="components">
                {componentsText[0].map((comp) => {
                    switch(comp.type){
                            case "left":
                                return <ComponentLeft title={comp.title} text={comp.text} url={comp.url} />
                            case "right":
                                return <ComponentRight title={comp.title} text={comp.text} url={comp.url} />
                            case "scrollable":
                                return <ScrollableComponent title={comp.title} cards={cardsArray[0]} />
                            default:
                                break
                        }
                })}
            </div>

        </main> 
    )
}
