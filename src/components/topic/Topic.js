import React, { useContext } from "react"
import "./Topic.css"
import PostList from "../post/PostList"


export default ({ props, topic }) => {

    function RenderTopics() {
        return <button onClick={() => <PostList topic={topic.topicId} />} id={`${topic.id}`}>
            {topic.name}
        </button>
    }

    return RenderTopics()

}