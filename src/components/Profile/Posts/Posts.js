import "../../../styles/Profile/Posts/Posts.css";
import Post from "./Post";
import React from "react";
import avatar from "../../../pictures/man.png"

function Posts(props) {
    let newPostTextarea = React.createRef();
    let updateNewPostValue = () => {
        let value = newPostTextarea.current.value;

        props.onUpdatePostValue(value, 1);
    };
    let createNewPost = () => {
        let value = newPostTextarea.current.value;

        props.onUpdatePostValue("", 1);
        props.onAddPost(value, props.userName, avatar);
    };

    return (
        <div className={"posts"}>
            <h1 className={"posts__header"}>Posts</h1>
            <textarea
                ref={newPostTextarea}
                placeholder={"New post..."}
                className={"posts__new-post"}
                value={props.newPostText}
                onChange={updateNewPostValue}
            ></textarea>
            <button onClick={createNewPost} className={"posts__save-post"}>Post</button>
            {props.posts.map(x => <Post obj={x}/>)}
        </div>
    );
}

export default Posts;