import "../src/Styling/App.css"
import CreateMeme from "./Components/CreateMeme"
import MemeCarousel from "./Components/MemeCarousel"
import Nav from "./Components/Nav"
import Hero from "./Components/Hero"

function App() {
    return (
        <div className="App">
            <Nav />
            <Hero />
            <CreateMeme />
            <MemeCarousel />
        </div>
    )
}

export default App
