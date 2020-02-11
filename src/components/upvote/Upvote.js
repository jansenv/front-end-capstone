import React, { useState, useContext } from 'react'
import Button from '@material-ui/core/Button';
import { PostContext } from '../post/PostProvider';

export default props => {
    const [votesObject, setVotes] = useState({})
    const { posts } = useContext(PostContext)
    const [count, setCount] = useState(0);

    const handleControlledInputChange = (evt) => {
        /*
        When changing a state object or array, always create a new one
        and change state instead of modifying current one
        */
       const newVote = Object.assign([], votesObject)
       newVote[evt.target.name] = evt.target.value
       console.log(newVote)
       setVotes(newVote)
    }

    return (
        <div>
            <p>{count}</p>
            <button color="primary" variant="contained" name="votesCount" value={posts.votes} onClick={handleControlledInputChange}>Updoot</button>
        </div>
    )
}