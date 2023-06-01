import "../../styles/Messages/NewMessage.css";
import React from "react";

function NewMessage(props) {
    let newMessageTextarea = React.createRef();
    let updateNewMessageValue = () => {
        let value = newMessageTextarea.current.value;

        props.onUpdateNewMessage(value, 1);
    }
    let createNewMessage = () => {
        let value = newMessageTextarea.current.value;

        props.onUpdateNewMessage("", 1);
        props.onCreateNewMessage(value, props.dialogId);
    };

    return (
        <div className="new_message">
            <textarea
                ref={newMessageTextarea}
                onChange={updateNewMessageValue}
                value={props.newMessage.text}
            ></textarea>
            <button onClick={createNewMessage}>Send</button>
        </div>
    );
}

export default NewMessage;