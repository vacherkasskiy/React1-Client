import "../../styles/Messages/NewMessage.css";
import React from "react";
import {addNewMessageActionCreator, updateNewMessageActionCreator} from "../../data/store";

function NewMessage(props) {
    let newMessage = props.store.getMessagesData().newMessagesData.find(x => x.userId === 1);

    let newMessageTextarea = React.createRef();
    let updateNewMessageValue = () => {
        let value = newMessageTextarea.current.value;
        let updateMessageAction = updateNewMessageActionCreator(value, 1);

        props.store.dispatch(updateMessageAction);
    }
    let createNewMessage = () => {
        let value = newMessageTextarea.current.value;
        let updateMessageAction = updateNewMessageActionCreator("", 1);
        let addMessageAction = addNewMessageActionCreator(value, props.dialogId);

        props.store.dispatch(updateMessageAction);
        props.store.dispatch(addMessageAction);
    };

    return (
        <div className="new_message">
            <textarea
                ref={newMessageTextarea}
                onChange={updateNewMessageValue}
                value={newMessage.text}
            ></textarea>
            <button onClick={createNewMessage}>Send</button>
        </div>
    );
}

export default NewMessage;