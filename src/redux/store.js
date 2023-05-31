import {DialogData, MessageData, NewMessage, NewPost, PostData, UserData} from "./models";
import {postsReducer} from "./reducers/posts_reducer";
import {messagesReducer} from "./reducers/messages_reducer";

export let commands = {
    UPDATE_NEW_MESSAGE: "UPDATE_NEW_MESSAGE",
    ADD_NEW_MESSAGE: "ADD_NEW_MESSAGE",
    UPDATE_NEW_POST: "UPDATE_NEW_POST",
    ADD_NEW_POST: "ADD_NEW_POST",
};

let store = {
    _state: {
        dialogsPage: [
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
        messagesPage: {
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
        },
        profilePage: {
            posts: [
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
            newPosts: [
                new NewPost("", 1)
            ],
        },

        user: new UserData(
            "Cherkasskiy Vitaliy",
            "4th September",
            "Moscow",
            "HSE '25",
            "https://github.com/vacherkasskiy"
        )
    },

    render() {
    },

    subscribe(renderDOM) {
        this.render = renderDOM;
    },

    getState() {
        return this._state;
    },

    dispatch(action) {

        postsReducer(this._state.profilePage, action);
        messagesReducer(this._state.messagesPage, action);
        // dialogsReducer
        // ...

        this.render();

    },
}

export default store;