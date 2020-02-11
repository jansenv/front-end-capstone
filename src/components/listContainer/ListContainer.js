import React, { useContext, useState } from "react"
import { UserContext } from "../users/UserProvider"
import { TopicContext } from "../topic/TopicProvider"
import { PostContext } from "../post/PostProvider"
import "./ListContainer.css"
import "../post/Post.css"
import Post from "../post/Post"
import Button from '@material-ui/core/Button';



export default (props) => {
  const [postsArray, setPosts] = useState({})
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



  return (

    <>

    <main id="main">
      <div className="sidebar">
        <h2>Directory</h2>
        {
          topics.map(topic => {
            return <button color="primary" variant="contained" key={topic.id} value={topic.id} onClick={(event) => {
              console.log("value of button", event.target.value)
            }}>
              {topic.name}
            </button>
          })}
      </div>

      <div className="posts">
        <h2 className="PostsHeader">All posts</h2>

        <Button id="CreatePostButton" color="secondary" variant="contained" onClick={() => props.history.push("/create")}>
          Submit a Post
        </Button>

        {
          sortedPostsArray.map(post => {
            const foundedUser = users.find(u => u.id === post.userId) || {}

            return < Post key={post.id} post={post} user={foundedUser} {...props} />
          })}
      </div>
    </main>

    </>
  )
}