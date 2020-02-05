import React from "react"
import { Link } from "react-router-dom"
import "./SideBar.css"

export default (props) => {
    return (
        <ul className="sidebar">
            <li className="sidebar__item">
                <Link className="sidebar__link" to="/css">#css</Link>
            </li>
            <li className="sidebar__item active">
                <Link className="sidebar__link" to="/">#general</Link>
            </li>
            <li className="sidebar__item">
                <Link className="sidebar__link" to="/pets">#pets</Link>
            </li>
            <li className="sidebar__item">
                <Link className="sidebar__link" to="/terminal">#terminal</Link>
            </li>
        </ul>
    )
}