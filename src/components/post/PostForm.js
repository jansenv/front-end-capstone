import React, { useState, useEffect, useContext } from "react"
import { PostContext } from "./PostProvider"
import "./PostForm.css"
import { TopicContext } from "../topic/TopicProvider"

export default props => {
    const { posts, addPost, updatePost } = useContext(PostContext)
    const { topics } = useContext(TopicContext)
    const [postsArray, setPosts] = useState({})
    const [topicsArray, setTopics] = useState({})

    const editMode = props.match.params.hasOwnProperty("postId")

    const handleControlledInputChange = (e) => {

        const newPosts = Object.assign({}, postsArray)
        newPosts[e.target.name] = e.target.value
        setPosts(newPosts)
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
                    title: postsArray.title,
                    description: postsArray.description,
                    code: postsArray.code,
                    topicId: postsArray.topicId,
                    userId: parseInt(localStorage.getItem("activeUser"))
                })
                    .then(() => props.history.push("/"))
            } else {
                addPost({
                  id: postsArray.id,
                  title: postsArray.title,
                  img: postsArray.img,
                  description: postsArray.description,
                  code: postsArray.code,
                  timestamp: Date.now(),
                  topicId: postsArray.topicId,
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
                    <input type="text" name="topic" required autoFocus className="form-control"
                        proptype="varchar"
                        placeholder=""
                        defaultValue={postsArray.topicId}
                        onChange={handleControlledInputChange}
                    />
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
                    <label htmlFor="img">image: </label>
                    <input type="text" name="img" required className="form-control"
                        proptype="varchar"
                        placeholder=""
                        defaultValue={postsArray.img}
                        onChange={handleControlledInputChange}
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
                    <input type="text" name="code" required className="form-control"
                        proptype="varchar"
                        placeholder=""
                        defaultValue={postsArray.code}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    createNewPost()
                }}
                className="btn btn-primary">
                {editMode ? "Save Update" : "Add Post"}
            </button>

        </form>
    )
}