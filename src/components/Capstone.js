import React from "react"
import { Route } from "react-router-dom"
import SideBar from "./sidebar/SideBar"
import ApplicationViews from "./ApplicationViews"
import "./Capstone.css"

export default () => (
    <>
        <div className="body">
            <SideBar />
            <ApplicationViews />
        </div>
    </>
)