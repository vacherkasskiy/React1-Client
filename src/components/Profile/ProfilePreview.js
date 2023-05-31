import "../../styles/Profile/Profile_preview.css";
import avatar from "../../pictures/man.png"

function ProfilePreview(props) {
    let userData = props.store.getState().user;

    return (
        <div className={"profile-preview"}>
            <img src={avatar} alt="" className={"profile-preview__avatar"}/>
            <div className={"profile-preview__info"}>
                <p className={"info__name"}>{userData.name}</p>
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