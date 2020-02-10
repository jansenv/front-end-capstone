import React, { useContext } from "react"
import "./Topic.css"
import PostList from "../post/PostList"


export default ({ topic }) => {

    console.log("topic on topic.js", topic)

    function RenderTopics() {
        return <button onClick={() => <PostList key={topic.id} topic={topic}/>} id={`${topic.id}`}>
            {topic.name}
        </button>
    }

    return RenderTopics()

}