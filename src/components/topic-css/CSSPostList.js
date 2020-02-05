import React, { useContext } from "react"
import "./CSSPosts.css"
import CSSPosts from "./CSSPosts"
import { PostContext } from "../topic-general/PostProvider"
import { UserContext } from "../users/UserProvider"

export default () => {
    const { posts } = useContext(PostContext)
    const { users } = useContext(UserContext)

    const filteredPosts = posts.filter(post => post.topicId === 2)

    return (
        <div className="posts">
            <h2>Posts in #css</h2>

            {
                filteredPosts.map(post => {
                    const foundedUser = users.find(u => u.id === post.userId) || {}

                    return <CSSPosts
                        key={post.id}
                        user={foundedUser}
                        post={post} />
                    
                })}
        </div>
    )
}