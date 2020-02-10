import React, { useContext } from "react"
import "./Topic.css"


export default ({ topic }) => {

    console.log("topic on topic.js", topic)

    function RenderTopics() {
        return <button id={`${topic.id}`}>
            {topic.name}
        </button>
    }

    return RenderTopics()

}