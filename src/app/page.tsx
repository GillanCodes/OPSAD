import ComponentLeft from "./Components/ComponentLeft";
import ComponentRight from "./Components/ComponentRight";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

export default function app() {
    return (
        <main className="global_app">
            <Navbar />
            <Home />

            <div className="components">
                <ComponentRight />
                <ComponentLeft />
            </div>

        </main> 
    )
}
