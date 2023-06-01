import React from "react";
import {addNewPostActionCreator, updateNewPostActionCreator} from "../../../redux/reducers/posts_reducer";
import Posts from "./Posts";

function PostsContainer(props) {
    let postsData = props.store.getState().profilePage;
    let posts = postsData.posts;
    let newPost = postsData.newPosts.find(x => x.userId === 1);
    let userData = props.store.getState().user;

    let onUpdatePostValue = (value, userId) => {
        let updatePostAction = updateNewPostActionCreator(value, userId);
        props.store.dispatch(updatePostAction);
    };
    let createNewPost = (value, userName, avatar) => {
        let addPostAction = addNewPostActionCreator(value, userName, avatar);
        props.store.dispatch(addPostAction);
    };

    return (
        <Posts
            userName={userData.name}
            newPostText={newPost.text}
            posts={posts}
            onUpdatePostValue={onUpdatePostValue}
            onAddPost={createNewPost}
            dialogId={props.dialogId}
        />
    );
}

export default PostsContainer;