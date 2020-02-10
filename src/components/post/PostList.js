import React, { useContext } from "react"
import "./Post.css"
import { PostContext } from "./PostProvider"
import Post from "./Post"
import { UserContext } from "../users/UserProvider"
import TopicList from "../topic/TopicList"

export default (props, topic) => {
    const { posts } = useContext(PostContext)
    const { users } = useContext(UserContext)

    console.log(topic)

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
                <div className="posts">
                    <h2>All posts</h2>

                    <button onClick={() => props.history.push("/create")}>
                        Create Post
            </button>

                    {
                        sortedPosts.map(post => {
                            const foundedUser = users.find(u => u.id === post.userId) || {}

                            return <Post key={post.id} user={foundedUser} post={post} {...props} />
                        })}
                </div>
            </>
        )
    }
}