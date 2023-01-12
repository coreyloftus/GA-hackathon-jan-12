//SIDE BAR COMPONENT
import "../Styling/Components.css"
import { Link } from "react-router-dom"
const Nav = (props) => {
    return (
        <div className="Navbar-Top">
            <nav>
                <Link to="/">
                    <p>Hackathon Memerator</p>
                </Link>
                <Link to="/auth">
                    <p>Login / Signup</p>
                </Link>
            </nav>
        </div>
    )
}

export default Nav
