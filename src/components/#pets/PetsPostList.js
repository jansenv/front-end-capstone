import React, { useContext } from "react"
import "./PetsPosts.css"
import { PostContext } from "../#general/PostProvider"
import PetsPosts from "./PetsPosts"

export default () => {
    const { posts } = useContext(PostContext)

    const filteredPosts = posts.filter(post => post.topicId === 3)

    return (
        <div className="posts">
            <h2>Posts in #pets</h2>

        {
            filteredPosts.map(post => <PetsPosts key={post.id} post={post} />)
        }
        </div>
    )
}