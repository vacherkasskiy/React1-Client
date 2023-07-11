import ProfilePreview from "../Profile/ProfilePreview";
import "../../styles/Users/User.css";

function User(props) {
    return (
        <div className="user">
            <ProfilePreview userData={props.data}/>
            <button
                disabled={!props.isButtonEnabled}
                onClick={() => (props.data.isFollowed ? props.onUnFollow(props.data.id) : props.onFollow(props.data.id))}
                className={"user__follow" + (props.data.isFollowed ? " active" : "")}>
                {props.data.isFollowed ? "Unfollow" : "Follow"}
            </button>
        </div>
    );
}

export default User;