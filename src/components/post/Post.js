import React, { useContext, useState, useEffect } from "react"
import "./Post.css"
import { PostContext } from "./PostProvider"
import { Link } from "react-router-dom"
import Upvote from "../upvote/Upvote"


export default ({ history, post, user }) => {

    const { deletePost } = useContext(PostContext)

    function LoggedInUserButtons() {
        if (post.userId === parseInt(localStorage.getItem("activeUser"))) {
            return (
                <>
                <button onClick={() => {
                    history.push(`/edit/${post.id}`)
                }}>Edit</button>

                <button onClick={() => {
                    deletePost(post)
                        .then(() => {
                            history.push("/")
                        })
                }}>Delete</button>
                </>
            )
        }
    }

    function RenderPosts() {
        return <section className="post">
            <Upvote />
            <div>
                {post.votes}
            </div>
            <img src={require(`../../images/${post.img}`)} />
            <h3 className="post__title">
                <Link to={`/${post.id}`}>
                    {post.title}
                </Link>
            </h3>
            <div className="post__author">Submitted by {user.username}</div>
            {LoggedInUserButtons()}
        </section>
    }

    return RenderPosts()

}