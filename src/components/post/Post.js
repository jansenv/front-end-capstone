import React, { useContext } from "react"
import "./Post.css"
import { PostContext } from "./PostProvider"
import { Link } from "react-router-dom"
import { Button } from "@material-ui/core"
import Vote from "../votes/VoteButton"



export default ({ history, post, topic, user }) => {

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
            <div className="postDiv">
                <div className="post__topic">topic: <strong>{topic.name}</strong></div>
                <div className="post__author">Posted by {user.username}</div>
                <h3 className="post__title">
                    <Link to={`/${post.id}`}>
                        {post.title}
                    </Link>
                </h3>
                <Link to={`/${post.id}`}>
                <img src={post.img} alt="there should be a pic here or something ain't right" />
                </Link>
                {LoggedInUserButtons()}
            </div>
            <div className="voteDiv">
                <Vote />
            </div>
        </section>
    }

    return RenderPosts()

}