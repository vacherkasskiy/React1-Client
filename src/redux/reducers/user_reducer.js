import {UserData} from "../models";

let initialState = new UserData(
    "Cherkasskiy Vitaliy",
    "4th September",
    "Moscow",
    "HSE '25",
    "https://github.com/vacherkasskiy"
);

export function userReducer(state = initialState, action) {

    // commands here
    return state;

}