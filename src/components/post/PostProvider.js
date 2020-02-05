import React, { useState, useEffect } from "react"

export const PostContext = React.createContext()

export const PostProvider = (props) => {
    const [posts, setPosts] = useState([])

    const getPosts = () => {
        return fetch("http://localhost:8088/posts")
            .then(res => res.json())
            .then(setPosts)
    }

    const addPost = post => {
        return fetch("http://localhost:8088/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        })
            .then(getPosts)
    }

    useEffect(() => {
        getPosts()
    }, [])

    useEffect(() => {
        console.log("****  POST APPLICATION STATE CHANGED  ****")
    }, [posts])

    return (
        <PostContext.Provider value={{
            posts, addPost
        }}>
            {props.children}
        </PostContext.Provider>
    )
}