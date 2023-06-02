import {addNewPostActionCreator, updateNewPostActionCreator} from "../../../redux/reducers/posts_reducer";
import {connect} from "react-redux";
import Posts from "./Posts";

let mapStateToProps = (state) => {
    let postsData = state.profilePage;
    let posts = postsData.posts;
    let newPost = postsData.newPosts.find(x => x.userId === 1);
    let userData = state.user;

    return {
        userName: userData.name,
        newPostText: newPost.text,
        posts: posts,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        onUpdatePostValue: (value, userId) => {
            let updatePostAction = updateNewPostActionCreator(value, userId);
            dispatch(updatePostAction);
        },
        onAddPost: (value, userName, avatar) => {
            let addPostAction = addNewPostActionCreator(value, userName, avatar);
            dispatch(addPostAction);
        },
    };
};

const PostsContainer =
    connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;