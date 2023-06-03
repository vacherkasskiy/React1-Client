import ProfilePreview from "../Profile/ProfilePreview";
import "../../styles/Users/User.css";
import {useState} from "react";

function User(props) {
    let [isFollowing, follow] = useState(false);

    let onclick = () => {
        follow(!isFollowing);
    }

    return (
        <div className="user">
            <ProfilePreview userData={props.data} />
            <button onClick={onclick} className={"user__follow" + (isFollowing ? " active" : "")}>
                {isFollowing ? "Unfollow" : "Follow"}
            </button>
        </div>
    );
}

export default User;