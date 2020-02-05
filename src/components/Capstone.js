import React from "react"
import { Route, Redirect } from "react-router-dom"
import SideBar from "./sidebar/SideBar"
import ApplicationViews from "./ApplicationViews"
import "./Capstone.css"
import Register from "./auth/Register"
import Login from "./auth/Login"

export default () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("activeUser")) {
                return (
                    <>
                        <Route render={props => <SideBar {...props} />} />
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