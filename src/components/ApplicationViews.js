import React from "react"
import { Route, Link } from "react-router-dom"
import PostList from "./topic-general/PostList"
import { PostProvider } from "./topic-general/PostProvider"
import { UserProvider } from "./users/UserProvider"
import CreatePost from "./post-submission/CreatePost"
import { TopicProvider } from "./topic/TopicProvider"
import SideBar from "./sidebar/SideBar"

export default (props) => {
    return (
        <>
            <TopicProvider>
                <UserProvider>
                    <PostProvider>
                        <Route
                            render={props => <SideBar {...props} />}
                        />
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