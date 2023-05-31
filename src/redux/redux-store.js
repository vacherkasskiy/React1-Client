import {messagesReducer} from "./reducers/messages_reducer";
import {postsReducer} from "./reducers/posts_reducer";
import {combineReducers, legacy_createStore as createStore} from "redux";
import {dialogsReducer} from "./reducers/dialogs_reducer";
import {userReducer} from "./reducers/user_reducer";

let reducers = combineReducers({
    messagesPage: messagesReducer,
    profilePage: postsReducer,
    dialogsPage: dialogsReducer,
    user: userReducer,
});

let store = createStore(reducers);

export default store;