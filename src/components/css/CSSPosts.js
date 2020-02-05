import React from "react"
import "./CSSPosts.css"

export default ({ post }) => (
    <section className="post">
        <img src={post.img}/>
        <h3 className="post__title">{post.title}</h3>
        <div className="post__author">Submitted by user {post.userId}</div>
    </section>
)