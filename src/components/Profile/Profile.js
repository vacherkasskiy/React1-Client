import "../../styles/Content.css";
import ProfilePreview from "./ProfilePreview";
import PostsContainer from "./Posts/PostsContainer";

function Profile(props) {
    let userData = props.store.getState().user;

    return (
        <div className={"content"}>
            <ProfilePreview userData={userData}/>
            <PostsContainer store={props.store}/>
        </div>
    );
}

export default Profile;