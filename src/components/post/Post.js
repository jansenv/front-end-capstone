import React, { useContext, useState, useEffect } from "react"
import "./Post.css"
import { PostContext } from "./PostProvider"
import { Link } from "react-router-dom"
import Upvote from "../upvote/Upvote"
import { Button } from "@material-ui/core"



export default ({ history, post, user }) => {

    const { deletePost } = useContext(PostContext)

    function LoggedInUserButtons() {
        if (post.userId === parseInt(localStorage.getItem("activeUser"))) {
            return (
                <>
                <Button color="primary" variant="contained" onClick={() => {
                    history.push(`/edit/${post.id}`)
                }}>Edit</Button>

                <Button color="primary" variant="contained" onClick={() => {
                    deletePost(post)
                        .then(() => {
                            history.push("/")
                        })
                }}>Delete</Button>
                </>
            )
        }
    }

    function RenderPosts() {
        return <section className="post">
            <Upvote />
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