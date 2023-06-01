import React from "react";
import {addNewMessageActionCreator, updateNewMessageActionCreator} from "../../redux/reducers/messages_reducer";
import NewMessage from "./NewMessage";

function NewMessageContainer(props) {
    let newMessage = props.store.getState().messagesPage.newMessages.find(x => x.userId === 1);

    let onUpdateNewMessage = (value, userId) => {
        let updateMessageAction = updateNewMessageActionCreator(value, userId);

        props.store.dispatch(updateMessageAction);
    }
    let onCreateNewMessage = (value, dialogId) => {
        let addMessageAction = addNewMessageActionCreator(value, dialogId);

        props.store.dispatch(addMessageAction);
    };

    return (
        <NewMessage
            newMessage={newMessage}
            onUpdateNewMessage={onUpdateNewMessage}
            onCreateNewMessage={onCreateNewMessage}
            dialogId={props.dialogId}
        />
    );
}

export default NewMessageContainer;