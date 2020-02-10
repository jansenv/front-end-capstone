import React, { useContext } from "react"
import "../post/Post.css"
import { UserContext } from "../users/UserProvider"
import { TopicContext } from "../topic/TopicProvider"
import Post from "../post/Post"
import { PostContext } from "../post/PostProvider"
import Topic from "../topic/Topic"


export default (props) => {
  const { posts } = useContext(PostContext)
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

  function filterPostsByTopicId(topicNum) {

    const FilteredPosts = posts.filter(post =>
      post.topicId === topicNum)

    return FilteredPosts
  }

  let topicNum = 2;

  if (topicNum === 0) {

    return (
      <>
        <div className="posts">
          <h2>Filtered Posts</h2>

          <button onClick={() => props.history.push("/create")}>
            Create Post
          </button>

          {
            filterPostsByTopicId(2).map(post => {
              const foundedUser = users.find(u => u.id === post.userId) || {}

              return <Post key={post.id} user={foundedUser} post={post} {...props} />
            })}
        </div>
      </>
    )

  } else {

    return (
      <>
        <div className="sidebar">
          <h2>Directory</h2>

          {
            topics.map(topic => {
              return <Topic key={topic.id} topic={topic} {...props} />
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

              return <Post key={post.id} post={post} user={foundedUser} {...props} />
            })}
        </div>
      </>
    )
  }
}