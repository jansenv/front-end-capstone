import React, { useContext } from "react"
import "./Topic.css"
import PostList from "../post/PostList"


export default ({ topic }) => {

    debugger

    function RenderTopics() {
        return <button onClick={() => <PostList key={topic.id} topic={topic} />} id={`${topic.id}`}>
            {topic.name}
        </button>
    }

    return RenderTopics()

}