import ComponentLeft from "./Components/ComponentLeft";
import ComponentRight from "./Components/ComponentRight";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import ScrollableComponent from "./Components/ScrollableComponent";

import ScrollableComponentsText from "../texts/ScrollableComponents.json";
import cardsArray from "../texts/cards.json";

export default function app() {
    return (
        <main className="global_app">
            <Navbar />
            <Home />

            <div className="components">
                <ComponentRight />
                <ComponentLeft />
                <ScrollableComponent title={ScrollableComponentsText[1].title} cards={cardsArray[0]} />
            </div>

        </main> 
    )
}
