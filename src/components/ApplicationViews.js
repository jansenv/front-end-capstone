import React from "react"
import { Route, Link } from "react-router-dom"
import PostList from "./post/PostList"
import { PostProvider } from "./post/PostProvider"
import { UserProvider } from "./users/UserProvider"
import { TopicProvider } from "./topic/TopicProvider"
import PostForm from "./post/PostForm"
import PostDetails from "./post/PostDetails"
import { CommentProvider } from "./comments/CommentProvider"
import CommentForm from "./comments/CommentForm"

export default (props) => {
    return (
        <>
            <CommentProvider>
                <TopicProvider>
                    <UserProvider>
                        <PostProvider>
                            {
                                localStorage.getItem("activeUser")
                                    ? <p className="logout__text">
                                        <Link className="logout__link"
                                            to=""
                                            onClick={e => {
                                                e.preventDefault()
                                                localStorage.removeItem("activeUser")
                                                props.history.push("/")
                                            }}>Sign Out
                                        </Link></p> : ""}
                            <Route exact path="/"
                                render={props => <PostList {...props} />}
                            />
                            <Route path="/create"
                                render={props => <PostForm {...props} />}
                            />
                            <Route path="/edit/:postId(\d+)"
                                render={props => <PostForm {...props} />}
                            />
                            <Route path="/:postId(\d+)"
                                render={props => <PostDetails {...props} />}
                            />
                            <Route exact path="/:postId(\d)+"
                                render={props => <CommentForm {...props} />}
                            />
                        </PostProvider>
                    </UserProvider>
                </TopicProvider>
            </CommentProvider>
        </>
    )
}