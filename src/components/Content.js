import "../styles/Content.css";
import ProfilePreview from "./Profile_preview";
import Posts from "./Posts";

function Content() {
    return(
        <div className={"content"}>
            <ProfilePreview/>
            <Posts/>
        </div>
    );
}

export default Content;