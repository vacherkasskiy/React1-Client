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
    users: [
        new UserData(
            "Elon Musk",
            "30th November",
            "London",
            "WW2",
            "https://spacex.com",
            "https://cdn1.tenchat.ru/static/vbc-gostinder/user-picture/0f109e74-e513-40ef-a21f-7df492f192e7.jpeg"
        ),
        new UserData(
            "Jeff Bezos",
            "12 January",
            "New Mexico",
            "MIT",
            "https://amazon.com",
            "https://assets.wired.com/photos/w_1720/wp-content/uploads/2019/01/Culture_GeeksGuide_Bezos.jpg"
        ),
        new UserData(
            "Bill Gates",
            "28th October",
            "Washington",
            "MIT",
            "https://microsoft.com",
            "https://media.cnn.com/api/v1/images/stellar/prod/230124093557-bill-gates-file-081822.jpg?c=16x9&q=h_720,w_1280,c_fill"
        ),
        new UserData(
            "Cherkasskiy Vitaliy",
            "4th September",
            "Moscow",
            "HSE '25",
            "https://github.com/vacherkasskiy",
            "https://res.cloudinary.com/jerrick/image/upload/c_scale,f_jpg,q_auto/jrsbekxaroxa3r7wxvfc.jpg"
        ),
    ],
};

export function userReducer(state = initialState, action) {

    // commands here
    return state;

}