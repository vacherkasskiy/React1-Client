import {MessageData, NewMessage} from "../models";

const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";
const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE";

export const updateNewMessageActionCreator = (text, userId) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        data: {
            text: text,
            userId: userId,
        },
    };
};

export const addNewMessageActionCreator = (text, dialogId) => {
    return {
        type: ADD_NEW_MESSAGE,
        data: {
            text: text,
            dialogId: dialogId,
        },
    };
};

function updateNewMessage(state, text, userId) {
    return {
        ...state,
        newMessages: state.newMessages.map(x => {
            if (x.userId === userId) {
                return {...x, text: text};
            }
            return x;
        }),
    };
}

function addNewMessage(state, text, dialogId) {
    let stateCopy = {
        ...state,
        messages: [...state.messages],
    };
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

    if (action.type === UPDATE_NEW_MESSAGE) {
        return updateNewMessage(state, action.data.text, action.data.userId);
    }

    if (action.type === ADD_NEW_MESSAGE) {
        return addNewMessage(state, action.data.text, action.data.dialogId);
    }

    return state;
}