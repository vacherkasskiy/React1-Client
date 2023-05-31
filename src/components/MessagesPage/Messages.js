import {useParams} from "react-router-dom";
import "../../styles/Messages/Messages.css";
import Message from "./Message";
import NewMessage from "./NewMessage";

function Messages(props) {
    let {dialogId} = useParams();
    let messages = props.store.getState().messagesPage.messages;

    return (
        <div className="messages_wrapper">
            <div className="messages">
                {messages.map(x => (x.dialogId === dialogId ? <Message obj={x}/> : ""))}
                <NewMessage
                    store={props.store}
                    dialogId={dialogId}
                />
            </div>
        </div>
    );
}

export default Messages;