import { useNavigate } from "react-router-dom"
import { useState } from "react"
import "../Styling/Components.css"

const RegisterForm = ({ signUp }) => {
    const initialState = { username: "", password: "" }
    const [input, setInput] = useState(initialState)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const createdUserToken = await signUp(input)

        if (createdUserToken) {
            navigate("/people")
        } else {
            navigate("/")
        }
        setInput(initialState)
    }

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="Register">
                <h1>Register</h1>
                <div className="RegisterForm">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">
                            <input id="username" name="username" placeholder="username" value={input.username} onChange={handleChange} />
                        </label>
                        <label htmlFor="password">
                            <input id="password" name="password" placeholder="password" value={input.password} onChange={handleChange} />
                        </label>
                        <input type="submit" value="Sign Up" />
                    </form>
                </div>
            </div>
        </>
    )
}
export default RegisterForm
