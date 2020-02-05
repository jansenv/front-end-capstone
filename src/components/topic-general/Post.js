import React from "react"
import "./Post.css"

export default ({post, user}) => (
    <section className="post">
        <img src={require(`../../images/${post.img}`)}/>
        <h3 className="post__title">{post.title}</h3>
        <div className="post__author">Submitted by {user.username}</div>
    </section>
)