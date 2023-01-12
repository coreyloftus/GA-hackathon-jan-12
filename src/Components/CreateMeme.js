// SHOW PAGE CREATE MEME PAGE
import React from "react"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import "../Styling/Components.css"

//MEME COMPONENT
const CreateMeme = (props) => {
    const [meme, setMeme] = useState("");
    const [editForm, setEditForm] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()

    //HANDLE-CHANGE
    const handleChange = (e) => {
        setEditForm({...editForm, [e.target.name]: e.target.value})
    }


    //GET MEME - MEME/:ID - NEEDS BACK END URL 
    const getMeme = async () => {
        try {
            const response = await fetch()
            const foundMeme = await response.json();
            setMeme(foundMeme)
            setEditForm(foundMeme)
        } catch (err) {
            console.error(err);
        }
    }

    //UPDATE MEME - NEEDS BACK END URL IN FETCH
    const updateMeme = async (e) => {
        e.preventDefault();
        try {
            const options = {
                method: "PUT",
                headers: { "Conent-Type": "application/json" },
                body: JSON.stringify(editForm)
            }
            const response = await fetch(options)
            const updatedMeme = await response.json()
            setMeme(updatedMeme)
        } catch (err) {
            console.error(err)
        }
    }

    //DELETE ROUTE - NEEDS BACK END URL IN FETCH
    const deleteMeme = async (e) => {
        try {
            const options = { method: "DELETE" };
            const response = await fetch(options)
            navigate("/")
        } catch (err) {
            console.error(err)
        }
    }

    const loaded = () => {
        return (
            <div>
                <input 
                    name = "content"
                    className="commentName commentInput"
                    type="text"
                    value={editForm.content}
                    placeholder=""
                    onChange={handleChange}
                />

                <input 
                    name = "image"
                    className="commentName commentInput"
                    type="text"
                    value={editForm.image}
                    placeholder=""
                    onChange={handleChange}
                />

                <input
                    name = "user"
                    className="commentName commentInput"
                    type="text"
                    value={editForm.user}
                    placeholder=""
                    onChange={handleChange}
                />



            </div>
        )
    }


    //USEEFFECT
    useEffect(() => {
        getMeme();
    }, [])
    return (
        <div>
            <h2>Create Meme</h2>
        </div>
    )
}

export default CreateMeme