import {UserData} from "../models";

const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_AMOUNT = "SET_USERS_AMOUNT";
const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

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
}

export let unfollowActionCreator = (userId) => {
    return {
        type: UNFOLLOW,
        data: {
            userId: userId,
        },
    };
}

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
    return {
        ...state,
        usersPage: {
            ...state.usersPage,
            usersAmount: usersAmount,
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
    },
};

export function userReducer(state = initialState, action) {
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

    return state;
}