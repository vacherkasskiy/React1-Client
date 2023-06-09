import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./Dialogs/DialogsContainer";
import MessagesContainer from "./MessagesPage/MessagesContainer";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import "../styles/Content.css";

function Content() {
    return (
        <div className={"content"}>
            <Routes>
                <Route path={'/profile/:profileId'} element={<ProfileContainer />}/>
                <Route path={'/messages'} element={<DialogsContainer/>}/>
                <Route path="/messages/:dialogId" element={<MessagesContainer/>}/>
                <Route path="/users" element={<UsersContainer/>}/>
            </Routes>
        </div>
    );
}

export default Content;