import React, { useContext } from "react"
import "./Topic.css"
import { TopicContext } from "./TopicProvider"
import Topic from "./Topic"

export default () => {
    const { topics } = useContext(TopicContext)

    return (
        <div className="topics">
            <h2>Topics</h2>

        {
            topics.map(top => <Topic key={top.id} topic={top} />)
        }
        </div>
    )
}