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
  const { posts } = useContext(PostContext)
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
    setPosts(newPost)
  }

  const filteredPostsByTopic = posts.filter(post => post.topicId === parseInt(postsObject.topicId)) || []
  // array vs. state

  if (postsObject.topicId === undefined) {
    return <>

      <main id="main">
        <div className="sidebar">
          <h2 className="topicsHeaders">Topics</h2>
          {
            topics.map(topic => {
              return <Button color="primary" variant="contained" key={topic.id} name="topicId" value={topic.id} onClick={handleControlledInputChange}>
                {topic.name}
              </Button>
            })}
        </div>

        <div className="posts">

          <Button id="CreatePostButton" color="secondary" variant="contained" onClick={() => props.history.push("/create")}>
            Create a Post
          </Button>

          {
            sortedPostsArray.map(post => {
              const foundedTopic = topics.find(t => t.id === post.topicId) || {}
              const foundedUser = users.find(u => u.id === post.userId) || {}

              return < Post key={post.id} post={post} topic={foundedTopic} user={foundedUser} {...props} />
            })}
        </div>
      </main>

    </>

  } else if (postsObject.topicId === "1") {
    return <>

      <main id="main">
        <div className="sidebar">
          <h2 className="topicsHeaders">Topics</h2>
          {
            topics.map(topic => {
              return <Button color="primary" variant="contained" key={topic.id} name="topicId" value={topic.id} onClick={handleControlledInputChange}>
                {topic.name}
              </Button>
            })}
        </div>

        <div className="posts">

          <Button id="CreatePostButton" color="secondary" variant="contained" onClick={() => props.history.push("/create")}>
            Create a Post
          </Button>

          {
            sortedPostsArray.map(post => {
              const foundedTopic = topics.find(t => t.id === post.topicId) || {}
              const foundedUser = users.find(u => u.id === post.userId) || {}

              return < Post key={post.id} post={post} topic={foundedTopic} user={foundedUser} {...props} />
            })}
        </div>
      </main>

    </>
  } else {

    return (

      <>

        <main id="main">
          <div className="sidebar">
            <h2 className="topicsHeaders">Topics</h2>
            {
              topics.map(topic => {
                return <Button color="primary" variant="contained" key={topic.id} name="topicId" value={topic.id} onClick={handleControlledInputChange}>
                  {topic.name}
                </Button>
              })}
          </div>

          <div className="posts">

            <Button id="CreatePostButton" color="secondary" variant="contained" onClick={() => props.history.push("/create")}>
              Create a Post
            </Button>

            {
              sortArrayByMostRecent(filteredPostsByTopic).map(post => {
                const foundedTopic = topics.find(t => t.id === post.topicId) || {}
                const foundedUser = users.find(u => u.id === post.userId) || {}

                return < Post key={post.id} post={post} topic={foundedTopic} user={foundedUser} {...props} />
              })}
          </div>
        </main>

      </>
    )
  }
}