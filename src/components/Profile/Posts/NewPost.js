import "../../../styles/Profile/Posts/NewPost.css";
import React from "react";

function NewPost(props) {
    let newPostTextarea = React.createRef();

    let updateNewPostValue = () => {
        let value = newPostTextarea.current.value;

        props.onUpdatePostValue(value, 1);
    };
    let createNewPost = () => {
        let value = newPostTextarea.current.value;

        props.onUpdatePostValue("", 1);
        props.onAddPost(value, props.user.name, props.user.image);
    };

    return (
        <div>
            <textarea
                ref={newPostTextarea}
                placeholder={"New post..."}
                className={"posts__new-post"}
                value={props.newPostText}
                onChange={updateNewPostValue}
            ></textarea>
            <button onClick={createNewPost} className={"posts__save-post"}>Post</button>
        </div>
    );
}

export default NewPost;