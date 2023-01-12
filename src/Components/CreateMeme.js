// SHOW PAGE CREATE MEME PAGE
import React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "../Styling/Components.css"

//MEME COMPONENT
const CreateMeme = (props) => {
    const [meme, setMeme] = useState("");
    const [editForm, setEditForm] = useState([])
    const { id } = useParams()

    //GET MEME - MEME/:ID
    const getMeme = async () => {
        try{
            const response = await fetch()
            const foundMeme = await response.json();
            setMeme(foundMeme)
            setEditForm(foundMeme)
        } catch (err){
            console.error(err);
        }
    }

    //UPDATE MEME
    const updateMeme = async (e) =>{
        e.preventDefault();
        try{
            const options = {
                method: "PUT", 
                headers: {"Conent-Type": "application/json"},
                body: JSON.stringify(editForm)
            }
            const response = await fetch()
            const updatedMeme = await response.json()
            setMeme(updatedMeme)
        }catch(err){
            console.error(err)
        }
    }

    
    //USEEFFECT
    useEffect(() => {

    }, [])
    return (
        <div>
            <h2>Create Meme</h2>
        </div>
    )
}

export default CreateMeme