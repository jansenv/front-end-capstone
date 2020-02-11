import React, { useContext, useState } from "react"
import { UserContext } from "../users/UserProvider"
import { TopicContext } from "../topic/TopicProvider"
import { PostContext } from "../post/PostProvider"
import "./ListContainer.css"
import "../post/Post.css"
import Post from "../post/Post"
import Button from '@material-ui/core/Button';



export default (props) => {
  const [postsObject, setPosts] = useState({})
  const { posts, deletePost } = useContext(PostContext)
  const { topics } = useContext(TopicContext)
  const { users } = useContext(UserContext)

  function sortArrayByMostRecent(array) {
    array.sort(
      function (a, b) {
        return new Date(b.timestamp) - new Date(a.timestamp)
      })
    return array
  }

  const sortedPostsArray = sortArrayByMostRecent(posts)

  const handleControlledInputChange = (evt) => {
    /*
        When changing a state object or array, always create a new one
        and change state instead of modifying current one
    */
    const newPost = Object.assign([], postsObject)
    newPost[evt.target.name] = evt.target.value
    console.log(newPost)
    setPosts(newPost)
  }

  const filteredPostsByTopic = posts.filter(post => post.topicId === parseInt(postsObject.topicId)) || []
  // array vs. state

  console.log(filteredPostsByTopic)



  return (

    <>

      <main id="main">
        <div className="sidebar">
          <h2>Directory</h2>
          {
            topics.map(topic => {
              return <button color="primary" variant="contained" key={topic.id} name="topicId" value={topic.id} onClick={handleControlledInputChange}>
                {topic.name}
              </button>
            })}
          {/* <select

            value={postsObject.topicId}
            name="topicId"

            id="topicId"
            className="form-control"
            onChange={handleControlledInputChange}

          >

            <option value="0">Select Topic</option>
            {topics.map(topic => (
              <option key={topic.id} value={topic.id}>
                {topic.name}
              </option>


            ))}
          </select> */}
        </div>

        <div className="posts">
          <h2 className="PostsHeader">All posts</h2>

          <Button id="CreatePostButton" color="secondary" variant="contained" onClick={() => props.history.push("/create")}>
            Submit a Post
        </Button>

          {}

          {
          filteredPostsByTopic.map(post => {
            const foundedUser = users.find(u => u.id === post.userId) || {}

            return < Post key={post.id} post={post} user={foundedUser} {...props} />
          })}
        </div>
      </main>

    </>
  )
}