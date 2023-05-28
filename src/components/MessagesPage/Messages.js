import {useParams} from "react-router-dom";
import "../../styles/Messages/Messages.css";
import Message from "./Message";
import NewMessage from "./NewMessage";

function Messages(props) {
    let {dialogId} = useParams();

    return (
        <div className="messages_wrapper">
            <div className="messages">
                {props.data.map(x => (x.dialogId === dialogId ? <Message obj={x}/> : ""))}
            </div>
            <NewMessage/>
        </div>
    );
}

export default Messages;