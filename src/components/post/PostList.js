import React, { useContext } from "react"
import "./Post.css"
import { PostContext } from "./PostProvider"
import Post from "./Post"
import { UserContext } from "../users/UserProvider"

export default (props) => {
    const { posts } = useContext(PostContext)
    const { users } = useContext(UserContext)

    const sortedPosts = posts.sort(
        function (a, b) {
            return new Date(b.timestamp) - new Date(a.timestamp)
        })
    
    console.log(sortedPosts)


    return (
        <div className="posts">
            <h2>All posts</h2>

            <button onClick={() => props.history.push("/create")}>
                Create Post
            </button>

            {
                sortedPosts.map(post => {
                    const foundedUser = users.find(u => u.id === post.userId) || {}

                    return <Post key={post.id} user={foundedUser} post={post} {...props} />
                })}
        </div>
    )
}