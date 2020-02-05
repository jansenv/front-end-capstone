import React from "react"
import { Route } from "react-router-dom"
import { PostProvider } from "./post/PostProvider"
import PostList from "./post/PostList"

export default (props) => {
    return (
        <>
            <PostProvider>
                <Route exact path="/">
                    <PostList />
                </Route>
            </PostProvider>
        </>
    )
}