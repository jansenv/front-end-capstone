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
                <li className="sidebar__item">
                    <Link className="sidebar__link" to={`/${topic}`}>#{topic}</Link>
                </li>
        )
        return topicsList
    }

    return (
        <ul className="sidebar">
            <li className="sidebar__item active">
                <Link className="sidebar__link" to="/">#all</Link>
            </li>
            {ListTopicsAlphabetically()}
        </ul>
    )
}