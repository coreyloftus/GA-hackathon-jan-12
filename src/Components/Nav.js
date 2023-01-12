import { Link } from "react-router-dom"
const Nav = (props) => {
    return (
        <nav>
            <Link to="/">
                <p>Hackathon Memerator</p>
            </Link>
            <Link to="/auth">
                <p>Login / Signup</p>
            </Link>
        </nav>
    )
}

export default Nav
