import Profile from "./Profile/Profile";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./Dialogs/DialogsContainer";
import MessagesContainer from "./MessagesPage/MessagesContainer";
import UsersContainer from "./Users/UsersContainer";

function Content() {
    return (
        <div className={"content"}>
            <Routes>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/messages'} element={<DialogsContainer/>}/>
                <Route path="/messages/:dialogId" element={<MessagesContainer/>}/>
                <Route path="/users" element={<UsersContainer/>}/>
            </Routes>
        </div>
    );
}

export default Content;