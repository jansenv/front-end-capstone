import React, { useState } from 'react'
import Button from '@material-ui/core/Button';

export default props => {
    const [postsArray, setPosts] = useState({})
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <Button color="primary" onClick={() => setCount(count + 1)}>Updoot</Button>
        </div>
    )
}