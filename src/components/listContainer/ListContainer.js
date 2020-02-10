import React, { useContext } from "react"
import { UserContext } from "../users/UserProvider"
import { TopicContext } from "../topic/TopicProvider"
import Post from "../post/Post"
import { PostContext } from "../post/PostProvider"
import "./ListContainer.css"
import { Link } from "react-router-dom"


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
      <div className="sidebar">
        <h2>Directory</h2>

        {
          topics.map(topic => {
            return <button key={topic.id}>
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

            function LoggedInUserButtons() {
              if (post.userId === parseInt(localStorage.getItem("activeUser"))) {
                  return (
                      <>
                      <button onClick={() => {
                          props.history.push(`/edit/${post.id}`)
                      }}>Edit</button>
      
                      <button onClick={() => {
                          deletePost(post)
                              .then(() => {
                                  props.history.push("/")
                              })
                      }}>Delete</button>
                      </>
                  )
              }
          }

          function RenderPosts() {
            return <section className="post">
                <div>
                    {post.votes}
                </div>
                <img src={require(`../../images/${post.img}`)} />
                <h3 className="post__title">
                    <Link to={`/${post.id}`}>
                        {post.title}
                    </Link>
                </h3>
                <div className="post__author">Submitted by {foundedUser.username}</div>
                {LoggedInUserButtons()}
            </section>
        }
        return RenderPosts()
          })}
      </div>
    </>
  )
}