import {UserData} from "../models";

const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_AMOUNT = "SET_USERS_AMOUNT";
const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const TOGGLE_BUTTON = "TOGGLE_BUTTON";

export let setCurrentPageActionCreator = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        data: {
            page: page,
        },
    };
};

export let setUsersAmountActionCreator = (usersAmount) => {
    return {
        type: SET_USERS_AMOUNT,
        data: {
            usersAmount: usersAmount,
        },
    };
};

export let setUsersActionCreator = (users) => {
    return {
        type: SET_USERS,
        data: {
            users: users,
        },
    };
};

export let followActionCreator = (userId) => {
    return {
        type: FOLLOW,
        data: {
            userId: userId,
        },
    };
};

export let unfollowActionCreator = (userId) => {
    return {
        type: UNFOLLOW,
        data: {
            userId: userId,
        },
    };
};

export let setIsFetchingActionCreator = (isFetching) => {
    return {
        type: SET_IS_FETCHING,
        data: {
            isFetching: isFetching,
        },
    };
};

export let toggleButtonActionCreator = (buttonId, isButtonEnabled) => {
    return {
        type: TOGGLE_BUTTON,
        data: {
            buttonId: buttonId,
            isButtonEnabled: isButtonEnabled
        }
    }
};

let setCurrentPage = (state, page) => {
    return {
        ...state,
        usersPage: {
            ...state.usersPage,
            currentPage: page,
        }
    };
};

let setUsersAmount = (state, usersAmount) => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(usersAmount / state.usersPage.pageCapacity); ++i) {
        pages.push(i);
    }

    return {
        ...state,
        usersPage: {
            ...state.usersPage,
            usersAmount: usersAmount,
            pages: pages,
        }
    }
};

let setUsers = (state, users) => {
    return {
        ...state,
        users: users,
    }
}

let follow = (state, userId) => {
    return {
        ...state,
        users: state.users.map(x => {
            if (x.id === userId) {
                return {
                    ...x,
                    isFollowed: true,
                };
            }
            return x;
        }),
    };
};

let unfollow = (state, userId) => {
    return {
        ...state,
        users: state.users.map(x => {
            if (x.id === userId) {
                return {
                    ...x,
                    isFollowed: false,
                };
            }
            return x;
        }),
    };
};

let setIsFetching = (state, isFetching) => {
    return {
        ...state,
        usersPage: {
            ...state.usersPage,
            isFetching: isFetching,
        },
    };
};

let toggleButton = (state, buttonId, isButtonEnabled) => {
    if (isButtonEnabled) {
        return {
            ...state,
            usersPage: {
                ...state.usersPage,
                disabledButtonIdsArray: state.usersPage.disabledButtonIdsArray.filter(id=> id !== buttonId)
            }
        };
    } else {
        return {
            ...state,
            usersPage: {
                ...state.usersPage,
                disabledButtonIdsArray: [
                    ...state.usersPage.disabledButtonIdsArray,
                    buttonId
                ]
            }
        }
    }
};

let initialState = {
    currentUser: new UserData(
        0,
        "Cherkasskiy Vitaliy",
        "4th September",
        "Moscow",
        "HSE '25",
        "https://github.com/vacherkasskiy",
        "https://res.cloudinary.com/jerrick/image/upload/c_scale,f_jpg,q_auto/jrsbekxaroxa3r7wxvfc.jpg",
        false,
    ),
    users: [],
    usersPage: {
        currentPage: 1,
        pageCapacity: 5,
        usersAmount: 0,
        pages: [],
        isFetching: false,
        disabledButtonIdsArray: []
    },
};

export function usersReducer(state = initialState, action) {
    if (action.type === SET_USERS_AMOUNT) {
        return setUsersAmount(state, action.data.usersAmount);
    }

    if (action.type === SET_CURRENT_PAGE) {
        return setCurrentPage(state, action.data.page);
    }

    if (action.type === SET_USERS) {
        return setUsers(state, action.data.users);
    }

    if (action.type === FOLLOW) {
        return follow(state, action.data.userId)
    }

    if (action.type === UNFOLLOW) {
        return unfollow(state, action.data.userId)
    }

    if (action.type === SET_IS_FETCHING) {
        return setIsFetching(state, action.data.isFetching)
    }

    if (action.type === TOGGLE_BUTTON) {
        return toggleButton(state, action.data.buttonId, action.data.isButtonEnabled);
    }

    return state;
}