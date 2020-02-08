import React, { useContext } from "react"
import "./Post.css"
import { PostContext } from "./PostProvider"
import { UserContext } from "../users/UserProvider"

export default (props) => {
    const { posts } = useContext(PostContext)
    const { users } = useContext(UserContext)

    const chosenPostId = parseInt(props.match.params.postId, 10)

    const post = posts.find(p => p.id === chosenPostId) || {}
    const user = users.find(u => u.id === post.userId) || {}

    console.log(user)

    return (
        <section className="post">
            <img src={require(`../../images/${post.img}`)} />
            <h3 className="post__title">
                {post.title}
            </h3>
            <div className="post__author">Submitted by {user.username}</div>
            <div className="post__description">Details: {post.description}</div>
            <div className="post__code">Code: {post.code}</div>
        </section>
    )
}