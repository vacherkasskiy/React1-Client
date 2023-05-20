import "../../styles/Content.css";
import ProfilePreview from "./Profile_preview";
import Posts from "./Posts/Posts";

function Profile() {
    return(
        <div className={"content"}>
            <ProfilePreview/>
            <Posts/>
        </div>
    );
}

export default Profile;