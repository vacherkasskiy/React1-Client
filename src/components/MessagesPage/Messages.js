import {useParams} from "react-router-dom";
import "../../styles/Messages/Messages.css";
import Message from "./Message";
import NewMessage from "./NewMessage";

function Messages(props) {
    let {dialogId} = useParams();

    return (
        <div className="messages_wrapper">
            <div className="messages">
                {props.messagesData.map(x => (x.dialogId === dialogId ? <Message obj={x}/> : ""))}
                <NewMessage
                    messagesData={props.messagesData}
                    dialogId={dialogId}
                    newMessages={props.newMessages}
                />
            </div>
        </div>
    );
}

export default Messages;