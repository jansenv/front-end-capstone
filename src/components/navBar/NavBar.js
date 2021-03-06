import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import { Button } from "@material-ui/core"

export default (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/"><img className="logoImg" src={require(`../../images/Logo.svg`)}></img></Link>
            </li>

            {
                localStorage.getItem("activeUser")
                    ? <Button id="logOutButton" variant="contained" className="logout__link"
                        to=""
                        component={Link}
                        onClick={e => {
                            e.preventDefault()
                            localStorage.removeItem("activeUser")
                            props.history.push("/")
                        }}>Sign Out
                    </Button> : ""}
        </ul>
    )
}