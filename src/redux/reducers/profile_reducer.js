import {NewPost, PostData} from "../models";
import {getUserRequest} from "../../api/profileAPI";

const UPDATE_NEW_POST = "UPDATE_NEW_POST";
const ADD_NEW_POST = "ADD_NEW_POST";
const SET_PROFILE_DATA = "SET_PROFILE_DATA";
const SET_IS_FETCHING = "SET_IS_FETCHING";

export const updateNewPostActionCreator = (text, userId) => {
    return {
        type: UPDATE_NEW_POST,
        data: {
            text: text,
            userId: userId,
        },
    };
};

export const addNewPostActionCreator = (text, name, img) => {
    return {
        type: ADD_NEW_POST,
        data: {
            text: text,
            name: name,
            img: img,
        },
    };
};

export const setProfileDataActionCreator = (user) => {
    return {
        type: SET_PROFILE_DATA,
        data: {
            user: user,
        },
    };
};

export const toggleIsFetchingActionCreator = (isFetching) => {
    return {
        type: SET_IS_FETCHING,
        data: {
            isFetching: isFetching,
        }
    }
}

function updateNewPost(state, text, userId) {
    return {
        ...state,
        newPosts: state.newPosts.map(x => {
            if (x.userId === userId) {
                return {...x, text: text};
            }
            return x;
        })
    };
}

function addNewPost(state, text, name, img) {
    let stateCopy = {
        ...state,
        posts: [...state.posts],
    };
    let newPost = new PostData(
        text,
        name,
        img
    );
    stateCopy.posts.push(newPost);

    return stateCopy;
}

function setUserData(state, user) {
    return {
        ...state,
        user: user,
    }
}

const setIsFetching = (state, isFetching) => {
    return {
        ...state,
        isFetching: isFetching,
    }
};

export const setUserDataThunk = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFetchingActionCreator(true));
        getUserRequest(userId)
            .then(data => {
                dispatch(setProfileDataActionCreator(data));
                dispatch(toggleIsFetchingActionCreator(false));
            });
    };
}

let initialState = {
    isFetching: false,
    user: null,
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
};

export function profileReducer(state = initialState, action) {

    if (action.type === UPDATE_NEW_POST) {
        return updateNewPost(state, action.data.text, action.data.userId);
    }

    if (action.type === ADD_NEW_POST) {
        return addNewPost(state, action.data.text, action.data.name, action.data.img);
    }

    if (action.type === SET_PROFILE_DATA) {
        return setUserData(state, action.data.user);
    }

    if (action.type === SET_IS_FETCHING) {
        return setIsFetching(state, action.data.isFetching);
    }

    return state;
}