import "../../styles/Content.css";
import PostsContainer from "./Posts/PostsContainer";
import ProfilePreviewContainer from "./ProfilePreviewContainer";

function Profile() {
    return (
        <div className={"content"}>
            <ProfilePreviewContainer/>
            <PostsContainer/>
        </div>
    );
}

export default Profile;