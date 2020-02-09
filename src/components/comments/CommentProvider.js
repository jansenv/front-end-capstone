import React, { useState, useEffect } from "react"

export const CommentContext = React.createContext()

export const CommentProvider = (props) => {
    const [comments, setComments] = useState([])

    const getComments = () => {
        return fetch("http://localhost:8088/comments")
            .then(res => res.json())
            .then(setComments)
    }

    const addComment = comment => {
        return fetch("http://localhost:8088/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(comment)
        })
            .then(getComments)
    }

    const updateComment = comment => {
        return fetch(`http://localhost:8088/comments/${comment.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(comment)
        })
            .then(getComments)
    }

    const deleteComment = comment => {
        return fetch(`http://localhost:8088/comments/${comment.id}`, {
            method: "DELETE"
        })
            .then(getComments)
    }

    useEffect(() => {
        getComments()
    }, [])

    useEffect(() => {
        console.log("****  COMMENT APPLICATION STATE CHANGED  ****")
    }, [comments])

    return (
        <CommentContext.Provider value={{
            comments, addComment, updateComment, deleteComment
        }}>
            {props.children}
        </CommentContext.Provider>
    )
}