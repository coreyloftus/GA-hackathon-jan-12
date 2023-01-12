import "../src/Styling/App.css"
import { Routes, Route } from "react-router-dom"
import CreateMeme from "./Components/CreateMeme"
import MemeCarousel from "./Components/MemeCarousel"
import Nav from "./Components/Nav"
import Hero from "./Components/Home"

function App() {
    const { Provider: UserInfo } = UserContext
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)
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
