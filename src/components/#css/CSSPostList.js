import React, { useContext } from "react"
import "./CSSPosts.css"
import CSSPosts from "./CSSPosts"
import { PostContext } from "../#general/PostProvider"

export default () => {
    const { posts } = useContext(PostContext)

    const filteredPosts = posts.filter(post => post.topicId === 2)

    return (
        <div className="posts">
            <h2>Posts in #css</h2>

        {
            filteredPosts.map(post => <CSSPosts key={post.id} post={post} />)
        }
        </div>
    )
}