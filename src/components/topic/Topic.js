import React, { useContext } from "react"
import "./Topic.css"
import PostList from "../post/PostList"


export default ({ topic }) => {

    // function sendTopicToPostList () {
    //     return <PostList key={topic.id} topic={topic} />
    // }

    function RenderTopics() {
    return <button id={`${topic.id}`}>
            {topic.name}
        </button>
    }

    return RenderTopics()

}