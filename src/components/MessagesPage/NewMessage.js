import "../../styles/Messages/NewMessage.css";
import React from "react";
import {AddNewMessage} from "../../data/data";

function NewMessage(props) {
    let newMessageTextarea = React.createRef();
    let createNewMessage = () => {
        let value = newMessageTextarea.current.value;

        AddNewMessage(
            true,
            value,
            "20:05",
            "" + props.dialogId,
            props.data.length
        );
    };

    return (
        <div className="new_message">
            <textarea ref={newMessageTextarea} name="" id="" cols="30" rows="10"></textarea>
            <button onClick={createNewMessage}>Send</button>
        </div>
    );
}

export default NewMessage;