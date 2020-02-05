import React, { useContext } from "react"
import "./CSSPosts.css"
import CSSPosts from "./CSSPosts"
import { PostContext } from "../general/PostProvider"

export default () => {
    const { posts } = useContext(PostContext)

    return (
        <div className="posts">
            <h2>Posts in #CSS</h2>

        {
            posts.map(post => <CSSPosts key={post.id} post={post} />)
        }
        </div>
    )
}