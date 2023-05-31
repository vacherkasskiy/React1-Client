import {commands} from "../store";
import {PostData} from "../models";

export const updateNewPostActionCreator = (text, userId) => {
    return {
        command: commands.UPDATE_NEW_POST,
        data: {
            text: text,
            userId: userId,
        },
    };
};

export const addNewPostActionCreator = (text, name, img) => {
    return {
        command: commands.ADD_NEW_POST,
        data: {
            text: text,
            name: name,
            img: img,
        },
    };
};

function updateNewPost(state, text, userId) {
    state.newPosts.find(x => x.userId === userId).text = text;
}

function addNewPost(state, text, name, img) {
    let newPost = new PostData(
        text,
        name,
        img
    );

    state.posts.push(newPost);
}

export function postsReducer(state, action) {

    if (action.command === commands.UPDATE_NEW_POST) {
        updateNewPost(state, action.data.text, action.data.userId);
    }

    else if (action.command === commands.ADD_NEW_POST) {
        addNewPost(state, action.data.text, action.data.name, action.data.img);
    }
}