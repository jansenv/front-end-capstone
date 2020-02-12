import React, { useContext } from "react"
import { PostContext } from "./PostProvider"
import { UserContext } from "../users/UserProvider"
import { CommentContext } from "../comments/CommentProvider"
import { Button } from "@material-ui/core"

export default (props) => {
    const { comments, updateComment, deleteComment } = useContext(CommentContext)
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
        <section className="postDetails">
            <section className="post">
                <img src={post.img} />
                <h3 className="post__title">
                    {post.title}
                </h3>
                <div className="post__author">Submitted by {userWhoPosted.username}</div>
                <div className="post__description">Details: {post.description}</div>
                <div className="post__code">Code: {post.code}</div>
            </section>
            <section className="comments">
                {sortedComments}
            </section>
        </section>
    )
}