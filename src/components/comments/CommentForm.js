import React, { useContext, useEffect, useState } from "react"
import { CommentContext } from "./CommentProvider"
import { Button } from "@material-ui/core"
import "./CommentForm.css"


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
                id: comment.id,
                text: comment.commentArea,
            })
        } else {
            addComment({
                id: comment.id,
                userId: parseInt(localStorage.getItem("activeUser")),
                text: comment.commentArea,
                postId: parseInt(props.match.params.postId, 10)
            })
        }
    }

    return (
        <form className="commentForm">
            <h3 className="commentForm__title">{editMode ? "Edit Comment" : "Add Comment"}</h3>
            <fieldset>
                <div className="form-group">
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
                    if (editMode === true) {
                        props.history.goBack()
                    }
                }}
                className="btn btn-primary">
                {editMode ? "Submit" : "Submit"}
            </Button>

        </form>
    )
}