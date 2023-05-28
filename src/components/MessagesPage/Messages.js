import {useParams} from "react-router-dom";
import "../../styles/Messages/Messages.css";
import Message from "./Message";
import NewMessage from "./NewMessage";

class MessageData {
    constructor(isOwner, text, dateTime, dialogId, id) {
        this.isOwner = isOwner;
        this.text = text;
        this.dateTime = dateTime;
        this.dialogId = dialogId;
        this.id = id;
    }
}

function Messages() {
    let { dialogId } = useParams();

    let messagesData = [
        new MessageData(
            false,
            "Some text here",
            Date.now(),
            "1",
            1
        ),
        new MessageData(
            false,
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda magni saepe veritatis. Ad animi, assumenda atque consequuntur, deserunt, distinctio esse est libero mollitia nobis numquam odit officia quam rerum saepe!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda magni saepe veritatis. Ad animi, assumenda atque consequuntur, deserunt, distinctio esse est libero mollitia nobis numquam odit officia quam rerum saepe!",
            Date.now(),
            "1",
            2
        ),
        new MessageData(
            false,
            "Some text here",
            Date.now(),
            "2",
            3
        ),
        new MessageData(
            true,
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda magni saepe veritatis. Ad animi, assumenda atque consequuntur, deserunt, distinctio esse est libero mollitia nobis numquam odit officia quam rerum saepe!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda magni saepe veritatis. Ad animi, assumenda atque consequuntur, deserunt, distinctio esse est libero mollitia nobis numquam odit officia quam rerum saepe!",
            Date.now(),
            "2",
            4
        ),
        new MessageData(
            false,
            "Let's have a walk!",
            Date.now(),
            "3",
            5
        )
    ];

    return(
        <div className="messages_wrapper">
            <div className="messages">
                { messagesData.map(x => (x.dialogId === dialogId ? <Message obj={x} /> : "")) }
            </div>
            <NewMessage />
        </div>
    );
}

export default Messages;