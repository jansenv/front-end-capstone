import React, { useState, useEffect } from "react"

export const TopicContext = React.createContext()

export const TopicProvider = (props) => {
    const [topics, setTopics] = useState([])

    const getTopics = () => {
        return fetch("http://localhost:8088/topics")
            .then(res => res.json())
            .then(setTopics)
    }

    const addTopic = topic => {
        return fetch("http://localhost:8088/topics", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(topic)
        })
            .then(getTopics)
    }

    useEffect(() => {
        getTopics()
    }, [])

    useEffect(() => {
        console.log("****  TOPIC APPLICATION STATE CHANGED  ****")
    }, [topics])

    return (
        <TopicContext.Provider value={{
            topics, addTopic
        }}>
            {props.children}
        </TopicContext.Provider>
    )
}