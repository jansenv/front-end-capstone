import React, { useContext } from "react"
import { TopicContext } from "./TopicProvider"
import Topic from "./Topic"

export default (props) => {
    const { topics } = useContext(TopicContext)

    return (
        <div className="sidebar">
            <h2>Directory</h2>

            {
                topics.map(topic => {
                    return <Topic key={topic.id} topic={topic} {...props} />
                })}
        </div>
    )
}