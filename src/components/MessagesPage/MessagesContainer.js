import {connect} from "react-redux";
import Messages from "./Messages";

let mapStateToProps = (state) => {
    let messages = state.messagesPage.messages;

    return {
        messages: messages
    };
};

let mapDispatchToProps = (dispatch) => {};

const MessagesContainer =
    connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;