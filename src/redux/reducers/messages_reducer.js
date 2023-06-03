import {commands} from "../store";
import {MessageData, NewMessage} from "../models";

export const updateNewMessageActionCreator = (text, userId) => {
    return {
        type: commands.UPDATE_NEW_MESSAGE,
        data: {
            text: text,
            userId: userId,
        },
    };
};

export const addNewMessageActionCreator = (text, dialogId) => {
    return {
        type: commands.ADD_NEW_MESSAGE,
        data: {
            text: text,
            dialogId: dialogId,
        },
    };
};

function updateNewMessage(state, text, userId) {
    let stateCopy = {...state};
    stateCopy.newMessages = [...state.newMessages];
    stateCopy.newMessages.find(x => x.userId === userId).text = text;

    return stateCopy;
}

function addNewMessage(state, text, dialogId) {
    let stateCopy = {...state};
    stateCopy.messages = [...state.messages];
    let newMessage = new MessageData(
        true,
        text,
        "20:07",
        dialogId,
    );
    stateCopy.messages.push(newMessage);

    return stateCopy;
}

let initialState = {
    messages: [
        new MessageData(
            false,
            "Some text here",
            Date.now(),
            "1",
            1
        ),
        new MessageData(
            false,
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda magni saepe veritatis. Ad animi, assumenda atque consequuntur, deserunt, distinctio esse est libero mollitia nobis numquam odit officia quam rerum saepe!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda magni saepe veritatis. Ad animi, assumenda atque consequuntur, deserunt, distinctio esse est libero mollitia nobis numquam odit officia quam rerum saepe!",
            Date.now(),
            "1",
            2
        ),
        new MessageData(
            false,
            "Some text here",
            Date.now(),
            "2",
            3
        ),
        new MessageData(
            true,
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda magni saepe veritatis. Ad animi, assumenda atque consequuntur, deserunt, distinctio esse est libero mollitia nobis numquam odit officia quam rerum saepe!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda magni saepe veritatis. Ad animi, assumenda atque consequuntur, deserunt, distinctio esse est libero mollitia nobis numquam odit officia quam rerum saepe!",
            Date.now(),
            "2",
            4
        ),
        new MessageData(
            false,
            "Let's have a walk!",
            Date.now(),
            "3",
            5
        ),
    ],
    newMessages: [
        new NewMessage("", 1)
    ],
};

export function messagesReducer(state = initialState, action) {

    if (action.type === "UPDATE_NEW_MESSAGE") {
        return updateNewMessage(state, action.data.text, action.data.userId);
    }

    if (action.type === "ADD_NEW_MESSAGE") {
        return  addNewMessage(state, action.data.text, action.data.dialogId);
    }
}