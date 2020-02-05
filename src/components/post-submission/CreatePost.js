import React from "react"

export default props => {
    const { events, addEvent, updateEvent } = useContext(EventContext)
    const [Events, setEvents] = useState({})

    const editMode = props.match.params.hasOwnProperty("eventId")

    const handleControlledInputChange = (e) => {

        const newEvents = Object.assign({}, Events)
        newEvents[e.target.name] = e.target.value
        setEvents(newEvents)
    }

    const setDefaults = () => {
        if (editMode) {
            const eventId = parseInt(props.match.params.eventId)
            const selectedEvents = events.find(e => e.id === eventId) || {}
            setEvents(selectedEvents)
        }
    }

    useEffect(() => {
        setDefaults()
    }, [events])

    const createNewEvent = () => {
            if (editMode) {
                updateEvent({
                    id: Events.id,
                    name: Events.name,
                    location: Events.location,
                    timestamp: Events.timestamp,
                    userId: parseInt(localStorage.getItem("activeUser"))
                })
                    .then(() => props.history.push("/events"))
            } else {
                addEvent({
                  id: Events.id,
                  name: Events.name,
                  location: Events.location,
                  timestamp: Events.timestamp,
                  userId: parseInt(localStorage.getItem("activeUser"))
              })
                  .then(() => props.history.push("/events"))
            }
        }
    

    return (
        <form className="eventForm">
            <h2 className="eventForm__name">{editMode ? "Edit Event" : "Add Event"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        proptype="varchar"
                        placeholder=""
                        defaultValue={Events.name}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="url">Location: </label>
                    <input type="text" name="location" required className="form-control"
                        proptype="varchar"
                        placeholder=""
                        defaultValue={Events.location}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="timestamp">Time: </label>
                    <input type="datetime-local" name="timestamp" required className="form-control"
                        proptype="varchar"
                        placeholder=""
                        defaultValue={Events.timestamp}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    createNewEvent()
                }}
                className="btn btn-primary">
                {editMode ? "Save Update" : "Add Event"}
            </button>

        </form>
    )
}