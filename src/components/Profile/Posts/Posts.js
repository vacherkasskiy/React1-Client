import "../../../styles/Profile/Posts/Posts.css";
import Post from "./Post";
import React from "react";
import {AddNewPost} from "../../../data/data";
import avatar from "../../../pictures/man.png"

function Posts(props) {
    let newPostTextarea = React.createRef();
    let createNewPost = () => {
        let value = newPostTextarea.current.value;

        AddNewPost(
            value,
            props.userData.name,
            avatar
        );
    };

    return (
        <div className={"posts"}>
            <h1 className={"posts__header"}>Posts</h1>
            <textarea ref={newPostTextarea} placeholder={"New post..."} className={"posts__new-post"}></textarea>
            <button onClick={createNewPost} className={"posts__save-post"}>Post</button>
            {props.postsData.map(x => <Post obj={x}/>)}
        </div>
    );
}

export default Posts;