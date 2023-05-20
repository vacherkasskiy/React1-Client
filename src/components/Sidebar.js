import "../styles/Sidebar.css";
import {NavLink} from "react-router-dom";

function Sidebar() {
    return (
        <div className={"sidebar"}>
            <NavLink to={'/profile'} className={"sidebar__section"}>Profile</NavLink>
            <NavLink to={'/messages'} className={"sidebar__section"}>Messages</NavLink>
            <a className={"sidebar__section"}>News</a>
            <a className={"sidebar__section"}>Music</a>
            <a className={"sidebar__section"}>Settings</a>
        </div>
    );
}

export default Sidebar;