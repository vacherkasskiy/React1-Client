import {messagesReducer} from "./reducers/messages_reducer";
import {profileReducer} from "./reducers/profile_reducer";
import {combineReducers, legacy_createStore as createStore} from "redux";
import {dialogsReducer} from "./reducers/dialogs_reducer";
import {usersReducer} from "./reducers/users_reducer";

let reducers = combineReducers({
    messagesPage: messagesReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    user: usersReducer,
});

let store = createStore(reducers);

export default store;