import Profile from "./Profile/Profile";
import {Route, Routes} from "react-router-dom";
import Dialogs from "./Dialogs/Dialogs";
import Messages from "./MessagesPage/Messages";

function Content(props) {
    return (
        <div className={"content"}>
            <Routes>
                <Route path={'/profile'} element={<Profile
                    store={props.store}
                />}/>
                <Route path={'/messages'} element={<Dialogs
                    store={props.store}
                />}/>
                <Route path="/messages/:dialogId" element={<Messages
                    store={props.store}
                />}/>
            </Routes>
        </div>
    );
}

export default Content;