import React, { useContext } from "react"
import "./PetsPosts.css"
import PetsPosts from "./PetsPosts"
import { PostContext } from "../topic-general/PostProvider"

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