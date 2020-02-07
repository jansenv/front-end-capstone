import React, { useContext } from "react"
import "./Topic.css"


export default ({ history, topic }) => {

    function RenderTopics() {
        return <button>
                    {topic.name}
                </button>
    }

    return RenderTopics()

}