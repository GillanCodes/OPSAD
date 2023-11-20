import ComponentLeft from "./Components/ComponentLeft";
import ComponentRight from "./Components/ComponentRight";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import ScrollableComponent from "./Components/ScrollableComponent";

export default function app() {
    return (
        <main className="global_app">
            <Navbar />
            <Home />

            <div className="components">
                <ComponentRight />
                <ComponentLeft />
                <ScrollableComponent />
            </div>

        </main> 
    )
}
