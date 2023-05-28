import "../../styles/Content.css";
import ProfilePreview from "./Profile_preview";
import Posts from "./Posts/Posts";

function Profile(props) {
    return (
        <div className={"content"}>
            <ProfilePreview data={props.userData}/>
            <Posts data={props.postsData}/>
        </div>
    );
}

export default Profile;