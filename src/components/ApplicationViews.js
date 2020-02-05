import React from "react"
import { Route } from "react-router-dom"
import PostList from "./topic-general/PostList"
import CSSPostList from "./topic-css/CSSPostList"
import PetsPostList from "./topic-pets/PetsPostList"
import { PostProvider } from "./topic-general/PostProvider"
import { UserProvider } from "./users/UserProvider"

export default (props) => {
    return (
        <>
        <UserProvider>
            <PostProvider>
                <Route exact path="/">
                    <PostList />
                </Route>
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