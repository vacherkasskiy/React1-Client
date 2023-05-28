import "../../styles/Profile/Profile_preview.css";
import avatar from "../../pictures/man.png"

class UserData {
    constructor(name, birthday, city, education, website) {
        this.name = name;
        this.birthday = birthday;
        this.city = city;
        this.education = education;
        this.website = website;
    }

}

function Profile_preview() {

    let user = new UserData(
        "Cherkasskiy Vitaliy",
        "4th September",
        "Moscow",
        "HSE '25",
        "https://github.com/vacherkasskiy"
    );

    return(
        <div className={"profile-preview"}>
            <img src={avatar} alt="" className={"profile-preview__avatar"}/>
            <div className={"profile-preview__info"}>
                <p className={"info__name"}>{user.name}</p>
                <div className={"info__main-info"}>
                    <div className={"main-info__section"}>
                        <p className={"property"}>Date of birth:</p>
                        <p className={"value"}>{user.birthday}</p>
                    </div>
                    <div className={"main-info__section"}>
                        <p className={"property"}>City:</p>
                        <p className={"value"}>{user.city}</p>
                    </div>
                    <div className={"main-info__section"}>
                        <p className={"property"}>Education:</p>
                        <p className={"value"}>{user.education}</p>
                    </div>
                    <div className={"main-info__section"}>
                        <p className={"property"}>Website:</p>
                        <a href={user.website}>
                            <p className={"value"}>
                                {user.website}
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile_preview;