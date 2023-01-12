// SHOW PAGE CREATE MEME PAGE
import React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "../Styling/Components.css"

const CreateMeme = (props) => {
    const [meme, setMeme] = useState("");
    const [editForm, setEditForm] = useState([])
    const { id } = useParams()

    useEffect(() => {

    }, [])
    return (
        <div>
            <h2>Create Meme</h2>
        </div>
    )
}

export default CreateMeme