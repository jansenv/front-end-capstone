import React from 'react'
import { Button } from '@material-ui/core'

class Vote extends React.Component {
    // Initial state of the component.
    state = { vote: 0, score: 0 }

    // Method to change the state of the component, which the UI reflects "live".
    vote(type) {
        this.setState(state => ({
            vote: state.vote === type ? 0 : type
        }))
    }

    // How the UI should look based on the state.
    render() {
        const { vote , score } = this.state
        return (
            <main>
                <Button color="primary" variant="contained" className={vote === 1 ? 'active' : undefined} onClick={() => this.vote(1)}>
                    Upvote
                </Button>
                <h1>{score + vote}</h1>
                <Button color="primary" variant="contained" className={vote === -1 ? 'active' : undefined} onClick={() => this.vote(-1)}>
                    Downvote
                </Button>
            </main>
        )
    }
}

export default Vote;