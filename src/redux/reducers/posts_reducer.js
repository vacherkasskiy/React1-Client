import {commands} from "../store";
import {NewPost, PostData} from "../models";

export const updateNewPostActionCreator = (text, userId) => {
    return {
        type: commands.UPDATE_NEW_POST,
        data: {
            text: text,
            userId: userId,
        },
    };
};

export const addNewPostActionCreator = (text, name, img) => {
    return {
        type: commands.ADD_NEW_POST,
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

let initialState = {
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

export function postsReducer(state = initialState, action) {

    if (action.type === commands.UPDATE_NEW_POST) {
        updateNewPost(state, action.data.text, action.data.userId);
    }

    else if (action.type === commands.ADD_NEW_POST) {
        addNewPost(state, action.data.text, action.data.name, action.data.img);
    }

    return state;
}