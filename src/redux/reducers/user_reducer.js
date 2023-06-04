import {UserData} from "../models";

let initialState = {
    currentUser: new UserData(
        "Cherkasskiy Vitaliy",
        "4th September",
        "Moscow",
        "HSE '25",
        "https://github.com/vacherkasskiy",
        "https://res.cloudinary.com/jerrick/image/upload/c_scale,f_jpg,q_auto/jrsbekxaroxa3r7wxvfc.jpg",
    ),
};

export function userReducer(state = initialState, action) {

    // commands here
    return state;
}