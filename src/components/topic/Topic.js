import React from "react"
import "./Topic.css"

export default ({ topic }) => (
    <section className="topic">
        <h3 className="topic__name">{topic.name}</h3>
    </section>
)