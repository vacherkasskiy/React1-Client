import "../../styles/Messages/NewMessage.css";
import React from "react";
import {MessageData} from "../../data/data";
import render from "../../render";

function NewMessage(props) {
    let newMessageTextarea = React.createRef();
    let createNewMessage = () => {
        let value = newMessageTextarea.current.value;

        props.data.push(new MessageData(
            true,
            value,
            "20:05",
            "" + props.dialogId,
            props.data.length
        ));

        render();
    };

    return (
        <div className="new_message">
            <textarea ref={newMessageTextarea} name="" id="" cols="30" rows="10"></textarea>
            <button onClick={createNewMessage}>Send</button>
        </div>
    );
}

export default NewMessage;