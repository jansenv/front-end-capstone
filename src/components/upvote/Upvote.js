import React, { useState } from 'react'
import { Button } from "reactstrap";

export default props => {
    const [postsArray, setPosts] = useState({})
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <Button color="danger" onClick={() => setCount(count + 1)}>Updoot</Button>
        </div>
    )
}