import React from "react"
import Post from "./post/Post"
import "./Capstone.css"
import { TopicProvider } from "./topic/TopicProvider"
import TopicList from "./topic/TopicList"

export default () => (
    <>
        <h2>CodeSnips</h2>

        <h2>Topics</h2>
        <TopicProvider>
            <TopicList />
        </TopicProvider>
        
        <article className="posts">
            <Post />
            <Post />
            <Post />
        </article>
    </>
)