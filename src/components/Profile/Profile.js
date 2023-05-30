import "../../styles/Content.css";
import ProfilePreview from "./ProfilePreview";
import Posts from "./Posts/Posts";

function Profile(props) {
    return (
        <div className={"content"}>
            <ProfilePreview store={props.store}/>
            <Posts
                store={props.store}
            />
        </div>
    );
}

export default Profile;