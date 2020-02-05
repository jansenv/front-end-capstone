import React from "react"
import Post from "./post/Post"
import "./Capstone.css"

export default () => (
    <>
        <h2>CodeSnips</h2>
        <article className="posts">
            <Post />
            <Post />
            <Post />
        </article>
    </>
)