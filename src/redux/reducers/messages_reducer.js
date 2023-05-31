import {commands} from "../store";
import {MessageData} from "../models";

export const updateNewMessageActionCreator = (text, userId) => {
    return {
        command: commands.UPDATE_NEW_MESSAGE,
        data: {
            text: text,
            userId: userId,
        },
    };
};

export const addNewMessageActionCreator = (text, dialogId) => {
    return {
        command: commands.ADD_NEW_MESSAGE,
        data: {
            text: text,
            dialogId: dialogId,
        },
    };
};

function updateNewMessage(state, text, userId) {
    state.newMessages.find(x => x.userId === userId).text = text;
}

function addNewMessage(state, text, dialogId) {
    let newMessage = new MessageData(
        true,
        text,
        "20:07",
        dialogId,
    );

    state.messages.push(newMessage);
}

export function messagesReducer(state, action) {

    if (action.command === "UPDATE_NEW_MESSAGE") {
        updateNewMessage(state, action.data.text, action.data.userId);
    }

    else if (action.command === "ADD_NEW_MESSAGE") {
        addNewMessage(state, action.data.text, action.data.dialogId);
    }
}