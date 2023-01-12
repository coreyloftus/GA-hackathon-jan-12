import "../src/Styling/App.css"
import { UserContext } from "./data"
import { useState } from "react"
import CreateMeme from "./Components/CreateMeme"
import MemeCarousel from "./Components/MemeCarousel"
import Nav from "./Components/Nav"
import Hero from "./Components/Hero"
import Auth from "./Components/Auth"

function App() {
    const { Provider: UserInfo } = UserContext
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)
    return (
        <UserInfo
            value={{
                isAuthenticated,
                setAuth: setIsAuthenticated,
                user: currentUser,
                setUser: setCurrentUser,
            }}>
            <div className="App">
                <Nav />
                <Hero />
                <CreateMeme />
                <MemeCarousel />
                <Auth />
            </div>
        </UserInfo>
    )
}

export default App
