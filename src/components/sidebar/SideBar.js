import React, { useContext } from "react"
import { Link } from "react-router-dom"
import "./SideBar.css"
import { TopicContext } from "../topic/TopicProvider"

export default (props) => {

    const { topics } = useContext(TopicContext)

    const ArrayOfTopicNames = topics.map(
        topic => topic.name
    )

    const ABCSortedArrayOfTopicNames = ArrayOfTopicNames.sort(function (a, b) {
        let nameA = a.toLowerCase(), nameB = b.toLowerCase();
        if (nameA < nameB) //sort string ascending
            return -1;
        if (nameA > nameB)
            return 1;
        return 0; //default return value (no sorting)
    })

    function ListTopicsAlphabetically() {
        const topicsList = ABCSortedArrayOfTopicNames.map(
            topic =>
                <button className={(`sidebar__${topic}`)}>
                    #{topic}
                </button>
        )
        return topicsList
    }

    return (
        <div className="sidebar">
            <button className="sidebar__all">
                #all
            </button>
            {ListTopicsAlphabetically()}
        </div>
    )
}