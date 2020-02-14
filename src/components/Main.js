import React from "react"
import { Route, Redirect } from "react-router-dom"
import ApplicationViews from "./ApplicationViews"
import "./Main.css"
import Register from "./auth/Register"
import Login from "./auth/Login"
import NavBar from "./navBar/NavBar"

export default () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("activeUser")) {
                return (
                    <>
                        <Route render={props => <NavBar {...props} />} />
                        <Route render={props => <ApplicationViews {...props} />} />
                    </>
                )
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />
    </>
)