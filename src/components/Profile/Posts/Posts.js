import "../../../styles/Profile/Posts/Posts.css";
import Post from "./Post";
import React from "react";
import {PostData} from "../../../data/data";
import avatar from "../../../pictures/man.png"
import render from "../../../render";

function Posts(props) {
    let newPostTextarea = React.createRef();
    let createNewPost = () => {
        let value = newPostTextarea.current.value;

        props.postsData.push(new PostData(
            value,
            props.userData.name,
            avatar
        ));

        render();
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