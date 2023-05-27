import {useParams} from "react-router-dom";
import "../../styles/Messages/Messages.css";
import Message from "./Message";
import NewMessage from "./NewMessage";

function Messages() {
    let { id } = useParams();
    return(
        <div className="messages_wrapper">
            <div className="messages">
                <Message
                    owner={false}
                    text={"Some text here"}
                />
                <Message
                    owner={false}
                    text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda magni saepe veritatis. Ad animi, assumenda atque consequuntur, deserunt, distinctio esse est libero mollitia nobis numquam odit officia quam rerum saepe!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda magni saepe veritatis. Ad animi, assumenda atque consequuntur, deserunt, distinctio esse est libero mollitia nobis numquam odit officia quam rerum saepe!"}
                />
                <Message
                    owner={true}
                    text={"Some text here"}
                />
                <Message
                    owner={true}
                    text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda magni saepe veritatis. Ad animi, assumenda atque consequuntur, deserunt, distinctio esse est libero mollitia nobis numquam odit officia quam rerum saepe!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda magni saepe veritatis. Ad animi, assumenda atque consequuntur, deserunt, distinctio esse est libero mollitia nobis numquam odit officia quam rerum saepe!"}
                />
                <Message
                    owner={true}
                    text={"Let's have a walk!"}
                />
            </div>
            <NewMessage />
        </div>
    );
}

export default Messages;