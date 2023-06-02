import {useParams} from "react-router-dom";
import "../../styles/Messages/Messages.css";
import Message from "./Message";
import NewMessageContainer from "./NewMessageContainer";

function Messages(props) {
    let {dialogId} = useParams();

    return (
        <div className="messages_wrapper">
            <div className="messages">
                {props.messages.map(x => (x.dialogId === dialogId ? <Message obj={x}/> : ""))}
                <NewMessageContainer dialogId={dialogId}/>
            </div>
        </div>
    );
}

export default Messages;