import Profile from "./Profile/Profile";
import {Route, Routes} from "react-router-dom";
import Dialogs from "./Dialogs/Dialogs";
import Messages from "./MessagesPage/Messages";

function Content() {
    return (
        <div className={"content"}>
            <Routes>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/messages'} element={<Dialogs/>}/>
                <Route path="/messages/:dialogId" element={<Messages />} />
            </Routes>
        </div>
    );
}

export default Content;