//SIDE BAR COMPONENT
import "../Styling/Components.css"
import img from "../Assets/me-gusta-face.png"
import { Link } from "react-router-dom"

const Nav = (props) => {
    return (
        <div className="Navbar-Top">
            <Link to="/">
                <img src={img} />
                <p>Hackathon Memerator</p>
            </Link>
            <nav>
                <Link to="/meme/:id">
                    <p>MEME SHOW PAGE</p>
                </Link>
                <Link to="/auth">
                    <p>Login / Signup</p>
                </Link>
            </nav>
        </div>
    )
}

export default Nav
