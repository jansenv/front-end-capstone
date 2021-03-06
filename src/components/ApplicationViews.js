import React from "react"
import { Route, Link } from "react-router-dom"
import { PostProvider } from "./post/PostProvider"
import { UserProvider } from "./users/UserProvider"
import { TopicProvider } from "./topic/TopicProvider"
import PostForm from "./post/PostForm"
import PostDetails from "./post/PostDetails"
import { CommentProvider } from "./comments/CommentProvider"
import CommentForm from "./comments/CommentForm"
import ListContainer from "./listContainer/ListContainer"
import theme from '../ThemeProvider';
import { ThemeProvider, Button } from "@material-ui/core"



export default (props) => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CommentProvider>
                    <TopicProvider>
                        <UserProvider>
                            <PostProvider>
                                
                                <Route exact path="/"
                                    render={props => <ListContainer {...props} />}
                                />
                                <Route path="/create"
                                    render={props => <PostForm {...props} />}
                                />
                                <Route path="/edit/:postId(\d+)"
                                    render={props => <PostForm {...props} />}
                                />
                                <Route exact path="/:postId(\d+)"
                                    render={props => <PostDetails {...props} />}
                                />
                                <Route exact path="/editComment/:commentId(\d+)"
                                    render={props => <CommentForm {...props} />}
                                />
                            </PostProvider>
                        </UserProvider>
                    </TopicProvider>
                </CommentProvider>
            </ThemeProvider>
        </>
    )
}