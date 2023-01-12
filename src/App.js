import "../src/Styling/App.css"

import { Routes, Route } from "react-router-dom"
import CreateMeme from "./Components/CreateMeme"
import MemeCarousel from "./Components/MemeCarousel"
import Nav from "./Components/Nav"
import Hero from "./Components/Home"
import { UserContext } from "./data"
import { useState } from "react"
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
                <div>
                    <Nav />
                    <MemeCarousel />
                </div>
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/meme/:id" element={<CreateMeme />} />
                    <Route path="/auth" element={<Auth />} />
                </Routes>
            </div>
        </UserInfo>
    )
}

export default App
