import React from "react"
import { Route } from "react-router-dom"
import PostList from "./topic-general/PostList"
import CSSPostList from "./topic-css/CSSPostList"
import PetsPostList from "./topic-pets/PetsPostList"
import { PostProvider } from "./topic-general/PostProvider"
import { UserProvider } from "./users/UserProvider"
import CreatePost from "./post-submission/CreatePost"

export default (props) => {
    return (
        <>
        <UserProvider>
            <PostProvider>
                <Route exact path="/"
                    render={props => <PostList {...props} />}
                />
                <Route path="/create" 
                    render={props => <CreatePost {...props} />}
                />
                <Route path="/css">
                    <CSSPostList />
                </Route>
                <Route path="/pets">
                    <PetsPostList />
                </Route>
            </PostProvider>
        </UserProvider>
        </>
    )
}