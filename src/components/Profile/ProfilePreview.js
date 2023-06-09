import "../../styles/Profile/ProfilePreview.css";
import {NavLink} from "react-router-dom";
import ProfileStatus from "./Posts/ProfileStatus";

function ProfilePreview(props) {
    let userData = props.userData;

    return (
        <div className={"profile-preview"}>
            <NavLink to={`/profile/${userData.id}`}>
                <img src={userData.image} alt="" className={"profile-preview__avatar"}/>
            </NavLink>
            <div className={"profile-preview__info"}>
                <p className={"info__name"}>{userData.name}</p>
                <ProfileStatus
                    flag={props.flag}
                    id={userData.id}
                    status={userData.status} />
                <div className={"info__main-info"}>
                    <div className={"main-info__section"}>
                        <p className={"property"}>Date of birth:</p>
                        <p className={"value"}>{userData.birthday}</p>
                    </div>
                    <div className={"main-info__section"}>
                        <p className={"property"}>City:</p>
                        <p className={"value"}>{userData.city}</p>
                    </div>
                    <div className={"main-info__section"}>
                        <p className={"property"}>Education:</p>
                        <p className={"value"}>{userData.education}</p>
                    </div>
                    <div className={"main-info__section"}>
                        <p className={"property"}>Website:</p>
                        <a href={userData.website}>
                            <p className={"value"}>
                                {userData.website}
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePreview;