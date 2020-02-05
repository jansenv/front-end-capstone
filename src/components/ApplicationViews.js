import React from "react"
import { Route } from "react-router-dom"
import { PostProvider } from "./general/PostProvider"
import PostList from "./general/PostList"
import CSSPostList from "./css/CSSPostList"

export default (props) => {
    return (
        <>
            <PostProvider>
                <Route exact path="/">
                    <PostList />
                </Route>
                <Route path="/css">
                    <CSSPostList />
                </Route>
            </PostProvider>
        </>
    )
}