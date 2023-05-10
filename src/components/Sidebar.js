import "../styles/Sidebar.css";

function Sidebar() {
    return(
        <div className={"sidebar"}>
            <p className={"sidebar__section"}>Profile</p>
            <p className={"sidebar__section"}>Messages</p>
            <p className={"sidebar__section"}>News</p>
            <p className={"sidebar__section"}>Music</p>
            <p className={"sidebar__section"}>Settings</p>
        </div>
    );
}

export default Sidebar;