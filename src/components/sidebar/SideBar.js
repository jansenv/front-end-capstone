import React from "react"
import { Link } from "react-router-dom"
import "./SideBar.css"

export default (props) => {
    return (
        <ul className="sidebar">
            <li className="sidebar__item">
                <Link className="sidebar__link" to="/css">CSS</Link>
            </li>
            <li className="sidebar__item active">
                <Link className="sidebar__link" to="/">General</Link>
            </li>
            <li className="sidebar__item">
                <Link className="sidebar__link" to="/pets">Pets</Link>
            </li>
            <li className="sidebar__item">
                <Link className="sidebar__link" to="/terminal">Terminal</Link>
            </li>
        </ul>
    )
}