import "../../styles/Messages/NewMessage.css";
import React from "react";

function NewMessage(props) {
    let newMessage = props.store.getMessagesData().newMessagesData.find(x => x.userId === 1);

    let newMessageTextarea = React.createRef();
    let updateNewMessageValue = () => {
        let value = newMessageTextarea.current.value;

        props.store.dispatch(
            {
                command: "UPDATE_NEW_MESSAGE",
                data: {
                    text: value,
                    userId: 1,
                },
            }
        );
    }
    let createNewMessage = () => {
        let value = newMessageTextarea.current.value;

        props.store.dispatch(
            {
                command: "UPDATE_NEW_MESSAGE",
                data: {
                    text: "",
                    userId: 1,
                },
            }
        );

        props.store.dispatch(
            {
                command: "ADD_NEW_MESSAGE",
                data: {
                    text: value,
                    dialogId: props.dialogId,
                },
            }
        );
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