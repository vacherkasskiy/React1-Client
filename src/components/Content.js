import Profile from "./Profile/Profile";
import {Route, Routes} from "react-router-dom";
import Dialogs from "./Dialogs/Dialogs";

function Content() {
    return (
        <div className={"content"}>
            <Routes>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/messages'} element={<Dialogs/>}/>
            </Routes>
        </div>
    );
}

export default Content;