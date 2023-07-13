import {createSelector} from "reselect";

export const getUser = (state) => {
    return state.user.currentUser;
};

export const getNewPosts = (state) => {
    return state.profilePage.newPosts;
};

export const getNewPostText =
    createSelector(getNewPosts, (newPosts) => {
        return newPosts.find(x => x.userId === 1).text;
    });