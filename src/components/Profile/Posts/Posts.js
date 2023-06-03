import "../../../styles/Profile/Posts/Posts.css";
import Post from "./Post";
import React from "react";
import NewPostContainer from "./NewPostContainer";

function Posts(props) {
    return (
        <div className={"posts"}>
            <h1 className={"posts__header"}>Posts</h1>
            <NewPostContainer />
            {props.posts.map(x => <Post obj={x}/>)}
        </div>
    );
}

export default Posts;