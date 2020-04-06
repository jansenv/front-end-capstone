import React, { useContext } from "react"
import { PostContext } from "./PostProvider"
import { UserContext } from "../users/UserProvider"
import { CommentContext } from "../comments/CommentProvider"
import { Button } from "@material-ui/core"
import "./PostDetails.css"
import CommentForm from "../comments/CommentForm"
import Prism from "prismjs";
import "../prism.css";

export default (props) => {
    const { comments, deleteComment } = useContext(CommentContext)
    const { posts } = useContext(PostContext)
    const { users } = useContext(UserContext)

    const chosenPostId = parseInt(props.match.params.postId, 10)

    const post = posts.find(p => p.id === chosenPostId) || {}
    const userWhoPosted = users.find(u => u.id === post.userId) || {}
    const postComments = comments.filter(c => c.postId === chosenPostId) || {}

    const sortedComments = postComments.map(comment => {

        function LoggedInUserButtons() {
            if (comment.userId === parseInt(localStorage.getItem("activeUser"))) {
                return (
                    <>
                        <Button color="primary" variant="contained" onClick={() => props.history.push(`/editComment/${comment.id}`)}>Edit</Button>
                        <Button color="primary" variant="contained" onClick={() => deleteComment(comment)}>Delete</Button>
                    </>
                )
            }
        }

        return <div key={comment.id}>
            <p>{comment.text}</p>
            <p>{comment.user.username}</p>
            {LoggedInUserButtons()}
        </div>
    })

    return (
        <section className="detailsAndComments">
            <section className="postDetails">
                <section className="postDetail">
                    <img src={post.img} alt="just did this to get rid of the yellow message" />
                    <h3 className="post__title">
                        {post.title}
                    </h3>
                    <div className="post__author">Submitted by <strong>{userWhoPosted.username}</strong></div>
                    <br></br>
                    <div className="post__description">{post.description}</div>
                    <h3>Code</h3>
                    <pre>
                        <code>
                            <div className="post__code">{post.code}</div>
                        </code>
                    </pre>
                </section>
                <h3>Comments</h3>
                <section className="comments">
                    {sortedComments}
                </section>
                {<CommentForm {...props} />}
            </section>
        </section>
    )
}