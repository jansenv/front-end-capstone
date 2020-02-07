import React, { useContext } from "react"
import "./Post.css"
import { PostContext } from "./PostProvider"


export default ({ history, post, user }) => {

    const { deletePost } = useContext(PostContext)

    function RenderPosts() {
        return <section className="post">
            <img src={require(`../../images/${post.img}`)} />
            <h3 className="post__title">{post.title}</h3>
            <div className="post__author">Submitted by {user.username}</div>
            <button onClick={() => {
                history.push(`/edit/${post.id}`)
            }}>Edit</button>
            <button onClick={() => {
                deletePost(post)
                    .then(() => {
                        history.push("/")
                    })
            }}>Delete</button>
        </section>
    }

    return RenderPosts()

}