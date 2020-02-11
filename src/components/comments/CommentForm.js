import React, { useContext, useEffect, useState } from "react"
import { CommentContext } from "./CommentProvider"
import { Button } from "@material-ui/core"


export default (props) => {
    const { comments, updateComment, addComment } = useContext(CommentContext)
    const [comment, setComment] = useState({})

    const editMode = props.match.params.hasOwnProperty("commentId")

    const handleControlledInputChange = (event) => {
        const newComment = Object.assign({}, comment)
        newComment[event.target.name] = event.target.value
        console.log("targetvalue", comment)
        setComment(newComment)
    }

    const setDefaults = () => {
        if (editMode) {
            const commentId = parseInt(props.match.params.commentId)
            const selectedComment = comments.find(c => c.id === commentId) || {}
            setComment(selectedComment)
        }
    }

    useEffect(() => {
        setDefaults()
    }, [comments])

    const createNewComment = () => {
        if (editMode) {
            updateComment({
                text: comment.commentArea,
            })
        } else {
            addComment({
              userId: parseInt(localStorage.getItem("activeUser")),
              text: comment.commentArea,
              postId: parseInt(props.match.params.postId, 10)
          })
        }
    }

    return (
        <form className="commentForm">
            <h2 className="commentForm__title">{editMode ? "Edit Comment" : "Add Comment"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="commentArea">Comment: </label>
                    <textarea 
                        name="commentArea" 
                        required 
                        className="form-control"
                        proptype="varchar"
                        placeholder=""
                        defaultValue={comment.text}
                        onChange={handleControlledInputChange}
                    ></textarea>
                </div>
            </fieldset>

            <Button color="primary" variant="contained" type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    createNewComment()
                }}
                className="btn btn-primary">
                {editMode ? "Update Comment" : "Add Comment"}
            </Button>

        </form>
    )
}