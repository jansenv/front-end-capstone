import React from "react"
import { Route, Link } from "react-router-dom"
import PostList from "./post/PostList"
import { PostProvider } from "./post/PostProvider"
import { UserProvider } from "./users/UserProvider"
import CreatePost from "./post-submission/CreatePost"
import { TopicProvider } from "./topic/TopicProvider"

export default (props) => {
    return (
        <>
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
                                        </Link></p>: ""}
                        <Route exact path="/"
                            render={props => <PostList {...props} />}
                        />
                        <Route path="/create"
                            render={props => <CreatePost {...props} />}
                        />
                    </PostProvider>
                </UserProvider>
            </TopicProvider>
        </>
    )
}