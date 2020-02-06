import React, { useState } from "react"
import { PostContext } from "../topic-general/PostProvider"

export default props => {
    const { posts, addPost, updatePost } = useContext(PostContext)
    const [posts, setPosts] = useState({})

    const editMode = props.match.params.hasOwnProperty("postId")

    const handleControlledInputChange = (e) => {

        const newPosts = Object.assign({}, posts)
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
    events
    const createNewPost = () => {
            if (editMode) {
                updatePost({
                    id: posts.id,
                    title: posts.title,
                    description: posts.description,
                    code: posts.code,
                    topicId: posts.topicId,
                    userId: parseInt(localStorage.getItem("activeUser"))
                })
                    .then(() => props.history.push("/"))
            } else {
                addPost({
                  id: posts.id,
                  title: posts.title,
                  description: posts.description,
                  code: posts.code,
                  topicId: posts.topicId,
                  timestamp: Date.now(),
                  userId: parseInt(localStorage.getItem("activeUser"))
              })
                  .then(() => props.history.push("/"))
            }
        }
    

    return (
        <form className="eventForm">
            <h2 className="eventForm__name">{editMode ? "Edit Event" : "Add Event"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        proptype="varchar"
                        placeholder=""
                        defaultValue={Events.name}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="url">Location: </label>
                    <input type="text" name="location" required className="form-control"
                        proptype="varchar"
                        placeholder=""
                        defaultValue={Events.location}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="timestamp">Time: </label>
                    <input type="datetime-local" name="timestamp" required className="form-control"
                        proptype="varchar"
                        placeholder=""
                        defaultValue={Events.timestamp}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    createNewEvent()
                }}
                className="btn btn-primary">
                {editMode ? "Save Update" : "Add Event"}
            </button>

        </form>
    )
}