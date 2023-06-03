import {addNewMessageActionCreator, updateNewMessageActionCreator} from "../../redux/reducers/messages_reducer";
import NewMessage from "./NewMessage";
import {connect} from "react-redux";

let mapStateToProps = (state, ownProps) => {
    let newMessage = state.messagesPage.newMessages.find(x => x.userId === 1);

    return {
        newMessageText: newMessage.text,
        dialogId: ownProps.dialogId,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        onUpdateNewMessage: (value, userId) => {
            let updateMessageAction = updateNewMessageActionCreator(value, userId);
            debugger
            dispatch(updateMessageAction);
        },
        onCreateNewMessage: (value, dialogId) => {
            let addMessageAction = addNewMessageActionCreator(value, dialogId);
            dispatch(addMessageAction);
        }
    };
};

const NewMessageContainer =
    connect(mapStateToProps, mapDispatchToProps)(NewMessage);

export default NewMessageContainer;