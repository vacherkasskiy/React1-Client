import {connect} from "react-redux";
import Posts from "./Posts";

let mapStateToProps = (state) => {
    let postsData = state.profilePage;
    let posts = postsData.posts;
    let userData = state.user;

    return {
        userName: userData.name,
        posts: posts,
    };
};

let mapDispatchToProps = (dispatch) => {};

const PostsContainer =
    connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;