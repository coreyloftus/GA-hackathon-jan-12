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
        setEditForm({ ...editForm, [e.target.name]: e.target.value })
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
            const newMeme = await response.json()
            setMeme(newMeme)
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
    
    //LOADED FUNCTION 
    const loaded = () => {
        return (
            <div className="clickedMemeDiv">
                <section className="clickedMemeSection">
                    <div>
                        <img src="https://img.icons8.com/ios-filled/512/user-male-circle.png" />
                        <div>
                            <h2 className="showUser">{meme.user}</h2>
                            <img
                                className="deleteMemeIcon"
                                src="https://img.icons8.com/ios/512/delete-sign.png"
                                alt="delete"
                                onClick={deleteMeme}
                            />
                        </div>
                    </div>
                    <h2>{meme.content}</h2>
                    <img
                        className="tweetImage"
                        src={meme.image}
                        alt={meme.image}
                        width={400}
                    />
                </section>

                <div>
                    <form onSubmit={updateMeme} >
                        {/* CONTENT INPUT  */}
                        <input
                            name="content"
                            className="commentName commentInput"
                            type="text"
                            value={editForm.content}
                            placeholder=""
                            onChange={handleChange}
                        />
                        {/* IMAGE INPUT  */}
                        <input
                            name="image"
                            className="commentName commentInput"
                            type="text"
                            value={editForm.image}
                            placeholder=""
                            onChange={handleChange}
                        />
                        {/* USER INPUT */}
                        <input
                            name="user"
                            className="commentName commentInput"
                            type="text"
                            value={editForm.user}
                            placeholder=""
                            onChange={handleChange}
                        />
                    </form>
                </div>
            </div>
        )
    }

    //LOADING FUNCTION
    const loading = () => {
        return (
            <section className="loading">
                <h1>
                    Loading...
                    <span>
                        <img
                            className="spinner"
                            src="https://freesvg.org/img/1544764567.png"
                        />
                    </span>
                </h1>
            </section>
        );
    };

    //USEEFFECT
    useEffect(() => {
        getMeme();
    }, [])

    return (
        <div>
            meme ? loaded() : loading()
        </div>
    )
}

export default CreateMeme