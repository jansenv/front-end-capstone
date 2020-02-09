import React, { useContext } from "react"
import "./Post.css"
import { PostContext } from "./PostProvider"
import { UserContext } from "../users/UserProvider"
import { CommentContext } from "../comments/CommentProvider"

export default (props) => {
    const { comments } = useContext(CommentContext)
    const { posts } = useContext(PostContext)
    const { users } = useContext(UserContext)

    const chosenPostId = parseInt(props.match.params.postId, 10)

    const post = posts.find(p => p.id === chosenPostId) || {}
    const userWhoPosted = users.find(u => u.id === post.userId) || {}
    const postComments = comments.filter(c => c.postId === chosenPostId) || {}
    const sortedComments = postComments.map(comment => {
        return <p key={comment.id}>
            {comment.text}
            <br/>
            {comment.user.username}
            </p>
    })

    console.log(sortedComments)

    return (
        <section className="postDetails">
            <section className="post">
                <img src={require(`../../images/${post.img}`)} />
                <h3 className="post__title">
                    {post.title}
                </h3>
                <div className="post__author">Submitted by {userWhoPosted.username}</div>
                <div className="post__description">Details: {post.description}</div>
                <div className="post__code">Code: {post.code}</div>
            </section>
            <section className="comments">
                Comments
                {sortedComments}
            </section>
        </section>
    )
}