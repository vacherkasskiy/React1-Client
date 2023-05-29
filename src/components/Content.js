import Profile from "./Profile/Profile";
import {Route, Routes} from "react-router-dom";
import Dialogs from "./Dialogs/Dialogs";
import Messages from "./MessagesPage/Messages";

function Content(props) {
    return (
        <div className={"content"}>
            <Routes>
                <Route path={'/profile'} element={<Profile
                    userData={props.data.userData}
                    postsData={props.data.postsData}
                    newPosts={props.data.newPosts}
                />}/>
                <Route path={'/messages'} element={<Dialogs
                    data={props.data.dialogsData}
                />}/>
                <Route path="/messages/:dialogId" element={<Messages
                    messagesData={props.data.messagesData}
                    newMessages={props.data.newMessages}
                />}/>
            </Routes>
        </div>
    );
}

export default Content;