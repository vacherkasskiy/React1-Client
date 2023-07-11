import "../styles/Sidebar.css";
import {NavLink} from "react-router-dom";
import profilePic from "../pictures/Navbar/user.png";
import messagesPic from "../pictures/Navbar/message.png";
import usersPic from "../pictures/Navbar/group.png";
import newsPic from "../pictures/Navbar/news.png";
import musicPic from "../pictures/Navbar/music.png";
import settingsPic from "../pictures/Navbar/settings.png";

function Sidebar() {
    return (
        <div className={"sidebar"}>
            <NavLink to={'/profile/1'} className={"sidebar__section"}>
                <div>
                    <img src={profilePic} alt=""/>
                    Profile
                </div>
            </NavLink>
            <NavLink to={'/messages'} className={"sidebar__section"}>
                <div>
                    <img src={messagesPic} alt=""/>
                    Messages
                </div>
            </NavLink>
            <NavLink to={'/users'} className={"sidebar__section"}>
                <div>
                    <img src={usersPic} alt=""/>
                    Users
                </div>
            </NavLink>
            <NavLink to={'/news'} className={"sidebar__section"}>
                <div>
                    <img src={newsPic} alt=""/>
                    News
                </div>
            </NavLink>
            <NavLink to={'/music'} className={"sidebar__section"}>
                <div>
                    <img src={musicPic} alt=""/>
                    Music
                </div>
            </NavLink>
            <NavLink to={'/settings'} className={"sidebar__section"}>
                <div>
                    <img src={settingsPic} alt=""/>
                    Settings
                </div>
            </NavLink>
        </div>
    );
}

export default Sidebar;