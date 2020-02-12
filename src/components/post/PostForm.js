import React, { useState, useEffect, useContext } from "react"
import { PostContext } from "./PostProvider"
import "./PostForm.css"
import { Button } from "@material-ui/core"
import { TopicContext } from "../topic/TopicProvider"

export default props => {
    const { posts, addPost, updatePost } = useContext(PostContext)
    const { topics } = useContext(TopicContext)
    const [postsArray, setPosts] = useState({})
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

    const editMode = props.match.params.hasOwnProperty("postId")

    const handleControlledInputChange = (e) => {

        const newPosts = Object.assign({}, postsArray)
        newPosts[e.target.name] = e.target.value
        setPosts(newPosts)
    }

    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'react-capstone')
        setLoading(true)
        const res = await fetch(
            'http://api.cloudinary.com/v1_1/doemj2kcq/image/upload',
            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json()

        setImage(file.secure_url)
        setLoading(false)
    }

    const setDefaults = () => {
        if (editMode) {
            const postId = parseInt(props.match.params.postId)
            const selectedPosts = posts.find(p => p.id === postId) || {}
            setPosts(selectedPosts)
        }
    }

    useEffect(() => {
        setDefaults()
    }, [posts])

    const createNewPost = () => {
        if (editMode) {
            updatePost({
                id: postsArray.id,
                title: postsArray.title,
                description: postsArray.description,
                code: postsArray.code,
                topicId: parseInt(postsArray.topicId),
                userId: parseInt(localStorage.getItem("activeUser"))
            })
                .then(() => props.history.push("/"))
        } else {
            addPost({
                id: postsArray.id,
                title: postsArray.title,
                img: image,
                description: postsArray.description,
                code: postsArray.code,
                timestamp: Date.now(),
                topicId: parseInt(postsArray.topicId),
                userId: parseInt(localStorage.getItem("activeUser"))
            })
                .then(() => props.history.push("/"))
        }
    }


    return (
        <form className="postForm">
            <h2 className="postForm__title">{editMode ? "Edit Post" : "Submit a Post"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="topic">topic: </label>
                    <select
                        defaultValue={postsArray.topicId}
                        name="topicId"
                        onChange={handleControlledInputChange}
                        required>
                        <option>Please select a topic...</option>
                        {topics.map(topic =>
                            <option key={topic.id} value={topic.id}>{topic.name}</option>)}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">title: </label>
                    <input type="text" name="title" required className="form-control"
                        proptype="varchar"
                        placeholder=""
                        defaultValue={postsArray.title}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="img">upload image: </label>
                    <input type="file" name="file" required className="form-control"
                        proptype="varchar"
                        placeholder="Upload an image"
                        defaultValue={postsArray.img}
                        onChange={uploadImage}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">description: </label>
                    <input type="text" name="description" required className="form-control"
                        proptype="varchar"
                        placeholder=""
                        defaultValue={postsArray.description}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="code">code: </label>
                    <textarea name="code" required className="form-control"
                        proptype="varchar"
                        placeholder=""
                        defaultValue={postsArray.code}
                        onChange={handleControlledInputChange}>
                    </textarea>
                </div>
            </fieldset>

            <Button color="primary" variant="contained" type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    createNewPost()
                }}
                className="btn btn-primary">
                {editMode ? "Save Update" : "Add Post"}
            </Button>

        </form>
    )
}