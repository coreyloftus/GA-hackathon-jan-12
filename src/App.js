import "../src/Styling/App.css"
import { Routes, Route } from "react-router-dom"
import CreateMeme from "./Components/CreateMeme"
import MemeCarousel from "./Components/MemeCarousel"
import Nav from "./Components/Nav"
import Hero from "./Components/Hero"

function App() {
    return (
        <div className="App">
            <div> 
            <Nav />
            <Hero />
            <MemeCarousel />
            </div>
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/meme/:id" element={<CreateMeme />} />
            </Routes>
        </div>
    )
}

export default App
