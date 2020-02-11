import React, { useState } from 'react'

export default Upvote => {
    const [postsArray, setPosts] = useState({})
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Updoot</button>
        </div>
    )
}