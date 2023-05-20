import "../../styles/Profile/Profile_preview.css";
import avatar from "../../pictures/man.png"

function Profile_preview() {
    return(
        <div className={"profile-preview"}>
            <img src={avatar} alt="" className={"profile-preview__avatar"}/>
            <div className={"profile-preview__info"}>
                <p className={"info__name"}>Cherkasskiy Vitaliy</p>
                <div className={"info__main-info"}>
                    <div className={"main-info__section"}>
                        <p className={"property"}>Date of birth:</p>
                        <p className={"value"}>4th September</p>
                    </div>
                    <div className={"main-info__section"}>
                        <p className={"property"}>City:</p>
                        <p className={"value"}>Moscow</p>
                    </div>
                    <div className={"main-info__section"}>
                        <p className={"property"}>Education:</p>
                        <p className={"value"}>HSE '25</p>
                    </div>
                    <div className={"main-info__section"}>
                        <p className={"property"}>Website:</p>
                        <a href="https://github.com/vacherkasskiy">
                            <p className={"value"}>
                                https://github.com/vacherkasskiy
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile_preview;