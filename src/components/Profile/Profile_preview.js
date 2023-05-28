import "../../styles/Profile/Profile_preview.css";
import avatar from "../../pictures/man.png"

function Profile_preview(props) {

    return (
        <div className={"profile-preview"}>
            <img src={avatar} alt="" className={"profile-preview__avatar"}/>
            <div className={"profile-preview__info"}>
                <p className={"info__name"}>{props.data.name}</p>
                <div className={"info__main-info"}>
                    <div className={"main-info__section"}>
                        <p className={"property"}>Date of birth:</p>
                        <p className={"value"}>{props.data.birthday}</p>
                    </div>
                    <div className={"main-info__section"}>
                        <p className={"property"}>City:</p>
                        <p className={"value"}>{props.data.city}</p>
                    </div>
                    <div className={"main-info__section"}>
                        <p className={"property"}>Education:</p>
                        <p className={"value"}>{props.data.education}</p>
                    </div>
                    <div className={"main-info__section"}>
                        <p className={"property"}>Website:</p>
                        <a href={props.data.website}>
                            <p className={"value"}>
                                {props.data.website}
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile_preview;