import React from "react"
import Post from "./post/Post"
import "./Capstone.css"
import { TopicProvider } from "./topic/TopicProvider"
import TopicList from "./topic/TopicList"
import { PostProvider } from "./post/PostProvider"
import PostList from "./post/PostList"

export default () => (
    <>
        <h2>CodeSnips</h2>

        <TopicProvider>
            <TopicList />
        </TopicProvider>

        <PostProvider>
            <PostList />
        </PostProvider>
        
    </>
)