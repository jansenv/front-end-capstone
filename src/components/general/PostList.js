import React, { useContext } from "react"
import "./Post.css"
import { PostContext } from "./PostProvider"
import Post from "./Post"

export default () => {
    const { posts } = useContext(PostContext)

    return (
        <div className="posts">
            <h2>Posts in #general</h2>

        {
            posts.map(post => <Post key={post.id} post={post} />)
        }
        </div>
    )
}