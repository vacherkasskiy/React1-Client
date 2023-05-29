import "../../styles/Messages/NewMessage.css";
import React from "react";
import {AddNewMessage, UpdateNewMessage} from "../../data/data";

function NewMessage(props) {
    let newMessageTextarea = React.createRef();
    let updateNewMessageValue = () => {
        let value = newMessageTextarea.current.value;

        UpdateNewMessage(
            value,
            1
        );
    }
    let createNewMessage = () => {
        let value = newMessageTextarea.current.value;

        UpdateNewMessage(
            "",
            1
        );

        AddNewMessage(
            value,
            "" + props.dialogId,
            props.messagesData.length
        );
    };

    return (
        <div className="new_message">
            <textarea
                ref={newMessageTextarea}
                onChange={updateNewMessageValue}
                value={props.newMessages.find(x => x.userId === 1).text}
            ></textarea>
            <button onClick={createNewMessage}>Send</button>
        </div>
    );
}

export default NewMessage;