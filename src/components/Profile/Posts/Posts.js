import "../../../styles/Profile/Posts/Posts.css";
import Post from "./Post";
import React from "react";
import avatar from "../../../pictures/man.png"
import {addNewPostActionCreator, updateNewPostActionCreator} from "../../../redux/reducers/posts_reducer";

function Posts(props) {
    let postsData = props.store.getState().profilePage;
    let posts = postsData.posts;
    let newPost = postsData.newPosts.find(x => x.userId === 1);
    let userData = props.store.getState().user;

    let newPostTextarea = React.createRef();
    let updateNewPostValue = () => {
        let value = newPostTextarea.current.value;
        let updatePostAction = updateNewPostActionCreator(value, 1);

        props.store.dispatch(updatePostAction);
    };
    let createNewPost = () => {
        let value = newPostTextarea.current.value;
        let updatePostAction = updateNewPostActionCreator("", 1);
        let addPostAction = addNewPostActionCreator(value, userData.name, avatar);

        props.store.dispatch(updatePostAction);
        props.store.dispatch(addPostAction);
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