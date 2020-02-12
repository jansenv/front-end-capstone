import React, { useState, useContext } from 'react'
import Button from '@material-ui/core/Button';
import { PostContext } from '../post/PostProvider';

export default props => {
    const [votesObject, setVotes] = useState({})
    const { posts } = useContext(PostContext)
    const [count, setCount] = useState(0);

    const handleControlledInputChange = (e) => {

        const newVotes = Object.assign({}, votesObject)
        newVotes[e.target.name] = e.target.value
        setVotes(newVotes)
    }

    return (
        <div>
            <p>{votesObject}</p>
            <button color="primary" variant="contained" name="votesCount" value={posts.votes} onClick={handleControlledInputChange}>Updoot</button>
        </div>
    )
}