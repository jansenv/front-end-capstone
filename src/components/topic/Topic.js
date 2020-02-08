import React, { useContext } from "react"
import "./Topic.css"
import PostList from "../post/PostList"


export default ({ topic }) => {

    function RenderTopics() {
        return <button id={`${topic.id}`}>
            {topic.name}
        </button>
    }

    return RenderTopics()

}