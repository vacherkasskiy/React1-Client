import "../../../styles/Profile/Posts/Posts.css";
import Post from "./Post";
import React from "react";
import avatar from "../../../pictures/man.png"

function Posts(props) {
    let postsData = props.store.getPostsData();
    let posts = postsData.postsData;
    let newPost = postsData.newPostsData.find(x => x.userId === 1);
    let userData = props.store.getUserData();

    let newPostTextarea = React.createRef();
    let updateNewPostValue = () => {
        let value = newPostTextarea.current.value;

        props.store.dispatch(
            {
                command: "UPDATE_NEW_POST",
                data: {
                    text: value,
                    userId: 1,
                },
            }
        );
    };
    let createNewPost = () => {
        let value = newPostTextarea.current.value;

        props.store.dispatch(
            {
                command: "UPDATE_NEW_POST",
                data: {
                    text: "",
                    userId: 1,
                },
            }
        );

        props.store.dispatch(
            {
                command: "ADD_NEW_POST",
                data: {
                    text: value,
                    name: userData.name,
                    img: avatar,
                },
            }
        );
    };

    return (
        <div className={"posts"}>
            <h1 className={"posts__header"}>Posts</h1>
            <textarea
                ref={newPostTextarea}
                placeholder={"New post..."}
                className={"posts__new-post"}
                value={newPost.text}
                onChange={updateNewPostValue}
            ></textarea>
            <button onClick={createNewPost} className={"posts__save-post"}>Post</button>
            {posts.map(x => <Post obj={x}/>)}
        </div>
    );
}

export default Posts;