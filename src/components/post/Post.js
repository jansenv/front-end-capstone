import React from "react"
import "./Post.css"

export default ({ post }) => (
    <section className="post">
        <h3 className="post__title">{post.title}</h3>
        <div className="post__author">Submitted by {post.userId}</div>
    </section>
)