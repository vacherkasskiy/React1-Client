export const getUserData = (state) => {
    return state.profilePage.user;
};

export const getPosts = (state) => {
    return state.profilePage.posts;
};

export const getIsFetching = (state) => {
    return state.profilePage.isFetching;
};