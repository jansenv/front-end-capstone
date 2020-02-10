import React, { useContext } from "react"
import "./Post.css"
import { PostContext } from "./PostProvider"
import Post from "./Post"
import { UserContext } from "../users/UserProvider"
import { TopicContext } from "../topic/TopicProvider"
import TopicList from "../topic/TopicList"

export default (props, topicNum) => {
    const { posts } = useContext(PostContext)
    const { topics } = useContext(TopicContext)
    const { users } = useContext(UserContext)

    console.log(topicNum)

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


    if (topicNum === 3) {

        return (
            <>
                <TopicList />
                <div className="posts">
                    <h2>Filtered Posts</h2>

                    <button onClick={() => props.history.push("/create")}>
                        Create Post
                        </button>

                    {
                        filterPostsByTopicId(3).map(post => {
                                const foundedUser = users.find(u => u.id === post.userId) || {}

                                return <Post key={post.id} user={foundedUser} post={post} {...props} />
                            })}
                </div>
            </>
        )

    } else {

        return (
            <>
                <TopicList />
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