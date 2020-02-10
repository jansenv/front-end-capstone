import React, { useContext } from "react"
import { UserContext } from "../users/UserProvider"
import { TopicContext } from "../topic/TopicProvider"
import { PostContext } from "../post/PostProvider"
import "./ListContainer.css"
import "../post/Post.css"
import Post from "../post/Post"


export default (props) => {
  const { posts, deletePost } = useContext(PostContext)
  const { topics } = useContext(TopicContext)
  const { users } = useContext(UserContext)

  // function sendTopicToPostList() {
  //      <PostList key={topic.id} topic={topic}/>
  // }

  function sortArrayByMostRecent(array) {
    array.sort(
      function (a, b) {
        return new Date(b.timestamp) - new Date(a.timestamp)
      })
    return array
  }

  const sortedPosts = sortArrayByMostRecent(posts)

  return (
    
    <>

    <main>
      <div className="sidebar">
        <h2>Directory</h2>
        {
          topics.map(topic => {
            return <button key={topic.id} value={topic.id} onClick={(event) => {
              console.log("value of button", event.target.value)
              topic.posts.map()
            }}>
              {topic.name}
            </button>
          })}
      </div>

      <div className="posts">
        <h2>All posts</h2>

        <button onClick={() => props.history.push("/create")}>
          Create Post
        </button>

        {
          sortedPosts.map(post => {
            const foundedUser = users.find(u => u.id === post.userId) || {}

            return < Post key={post.id} post={post} user={foundedUser} />
          })}
      </div>
    </main>

    </>
  )
}