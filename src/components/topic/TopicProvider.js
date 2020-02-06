import React, { useState, useEffect } from "react"

export const TopicContext = React.createContext()

export const TopicProvider = (props) => {
    const [topics, setTopics] = useState([])

    const getTopics = () => {
        return fetch("http://localhost:8088/topics")
            .then(res => res.json())
            .then(setTopics)
    }

    useEffect(() => {
        getTopics()
    }, [])

    useEffect(() => {
        console.log("****  TOPIC APPLICATION STATE CHANGED  ****")
    }, [topics])

    return (
        <TopicContext.Provider value={{
            topics
        }}>
            {props.children}
        </TopicContext.Provider>
    )
}