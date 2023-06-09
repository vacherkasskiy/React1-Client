import {connect} from "react-redux";
import {addNewPostActionCreator, updateNewPostActionCreator} from "../../../redux/reducers/profile_reducer";
import NewPost from "./NewPost";

let mapStateToProps = (state) => {
    let postsData = state.profilePage;
    let userData = state.user.currentUser;
    let newPost = postsData.newPosts.find(x => x.userId === 1);

    return {
        newPostText: newPost.text,
        user: userData,
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

const NewPostContainer =
    connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;