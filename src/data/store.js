import {DialogData, MessageData, NewMessage, NewPost, PostData, UserData} from "./models";

let render = () => {
};

export let subscribe = (renderDOM) => {
    render = renderDOM;
}

let store = {
    _dialogsData: [
        new DialogData(
            "https://assets.wired.com/photos/w_1720/wp-content/uploads/2019/01/Culture_GeeksGuide_Bezos.jpg",
            "Jeff Bezos",
            "Some text right here",
            1),
        new DialogData(
            "https://cdn1.tenchat.ru/static/vbc-gostinder/user-picture/0f109e74-e513-40ef-a21f-7df492f192e7.jpeg",
            "Elon Musk",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda magni saepe veritatis. Ad animi, assumenda atque consequuntur, deserunt, distinctio esse estLorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda magni saepe veritatis",
            2),
        new DialogData(
            "https://media.cnn.com/api/v1/images/stellar/prod/230124093557-bill-gates-file-081822.jpg?c=16x9&q=h_720,w_1280,c_fill",
            "Bill Gates",
            "How are you? :)",
            3)
    ],
    _messagesData: [
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
    _newMessages: [
        new NewMessage("", 1)
    ],
    _postsData: [
        new PostData(
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda magni saepe veritatis. Ad animi, assumenda atque consequuntur, deserunt, distinctio esse est libero mollitia nobis numquam odit officia quam rerum saepe!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda magni saepe veritatis. Ad animi, assumenda atque consequuntur, deserunt, distinctio esse est libero mollitia nobis numquam odit officia quam rerum saepe!",
            "Jeff Bezos",
            "https://assets.wired.com/photos/w_1720/wp-content/uploads/2019/01/Culture_GeeksGuide_Bezos.jpg"
        ),
        new PostData(
            "We need frontend developers at SpaceX bro. Mind to hop in?",
            "Elon Musk",
            "https://cdn1.tenchat.ru/static/vbc-gostinder/user-picture/0f109e74-e513-40ef-a21f-7df492f192e7.jpeg"
        ),
        new PostData(
            "Idk what to write here...",
            "Bill Gates",
            "https://media.cnn.com/api/v1/images/stellar/prod/230124093557-bill-gates-file-081822.jpg?c=16x9&q=h_720,w_1280,c_fill"
        )
    ],
    _newPosts: [
        new NewPost("", 1)
    ],
    _userData: new UserData(
        "Cherkasskiy Vitaliy",
        "4th September",
        "Moscow",
        "HSE '25",
        "https://github.com/vacherkasskiy"
    ),

    _updateNewMessage(text, userId) {
        this._newMessages.find(x => x.userId === userId).text = text;
        render();
    },

    _addNewMessage(text, dialogId) {
        let newMessage = new MessageData(
            true,
            text,
            "20:07",
            dialogId,
        );

        this._messagesData.push(newMessage);
        render();
    },

    _updateNewPost(text, userId) {
        this._newPosts.find(x => x.userId === userId).text = text;
        render();
    },

    _addNewPost(text, name, img) {
        let newPost = new PostData(
            text,
            name,
            img
        );

        this._postsData.push(newPost);
        render();
    },

    getDialogsData() {
        return this._dialogsData;
    },

    getMessagesData() {
        return {
            messagesData: this._messagesData,
            newMessagesData: this._newMessages,
        };
    },

    getPostsData() {
        return {
            postsData: this._postsData,
            newPostsData: this._newPosts,
        };
    },

    getUserData() {
        return this._userData;
    },

    dispatch(action) {
        if (action.command === "UPDATE_NEW_MESSAGE") {
            this._updateNewMessage(action.data.text, action.data.userId);
        }

        else if (action.command === "ADD_NEW_MESSAGE") {
            this._addNewMessage(action.data.text, action.data.dialogId);
        }

        else if (action.command === "UPDATE_NEW_POST") {
            this._updateNewPost(action.data.text, action.data.userId);
        }

        else if (action.command === "ADD_NEW_POST") {
            this._addNewPost(action.data.text, action.data.name, action.data.img);
        }
    },
}

export default store;