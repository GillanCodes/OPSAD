import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

export default function app() {
    return (
        <main className="global_app">
            <Navbar />
            <Home />
        </main> 
    )
}
