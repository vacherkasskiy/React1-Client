import {connect} from "react-redux";
import {addNewPostActionCreator, updateNewPostActionCreator} from "../../../redux/reducers/profile_reducer";
import NewPost from "./NewPost";
import {getNewPostText, getUser} from "./NewPostSelectors";

let mapStateToProps = (state) => {
    return {
        newPostText: getNewPostText(state),
        user: getUser(state),
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