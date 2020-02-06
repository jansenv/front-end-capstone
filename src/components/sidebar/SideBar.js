import React, { useContext } from "react"
import { Link } from "react-router-dom"
import "./SideBar.css"
import { TopicContext } from "../topic/TopicProvider"

export default (props) => {

    const { topics } = useContext(TopicContext)
    
    function ListTopics() {
        const topicsList = topics.map(
            topic =>
                <li className="sidebar__item">
                    <Link className="sidebar__link" to={`/${topic.name}`}>#{topic.name}</Link>
                </li>
        )
        return topicsList
    }

    return (
        <ul className="sidebar">
            <li className="sidebar__item active">
                <Link className="sidebar__link" to="/">#all</Link>
            </li>
            {ListTopics()}
            {
                localStorage.getItem("activeUser")
                    ? <li className="sidebar__item">
                        <Link className="sidebar__link"
                            to=""
                            onClick={e => {
                                e.preventDefault()
                                localStorage.removeItem("activeUser")
                                props.history.push("/")
                            }}
                        >Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
}