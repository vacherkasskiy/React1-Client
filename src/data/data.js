class Data {
    constructor(dialogsData, messagesData, postsData, userData) {
        this.dialogsData = dialogsData;
        this.messagesData = messagesData;
        this.postsData = postsData;
        this.userData = userData;
    }
}

class DialogData {
    constructor(img, name, latestMessage, id) {
        this.img = img;
        this.name = name;
        this.latestMessage = latestMessage;
        this.id = id;
    }
}

export class MessageData {
    constructor(isOwner, text, dateTime, dialogId, id) {
        this.isOwner = isOwner;
        this.text = text;
        this.dateTime = dateTime;
        this.dialogId = dialogId;
        this.id = id;
    }
}

export class PostData {
    constructor(message, name, img) {
        this.message = message;
        this.name = name;
        this.img = img;
    }
}

class UserData {
    constructor(name, birthday, city, education, website) {
        this.name = name;
        this.birthday = birthday;
        this.city = city;
        this.education = education;
        this.website = website;
    }
}

let dialogsData = [
    new DialogData(
        "https://assets.wired.com/photos/w_1720/wp-content/uploads/2019/01/Culture_GeeksGuide_Bezos.jpg",
        "Jeff Bezos",
        "Some text right here",
        1),
    new DialogData(
        "https://cdn1.tenchat.ru/static/vbc-gostinder/user-picture/0f109e74-e513-40ef-a21f-7df492f192e7.jpeg",
        "Elon Musk",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda magni saepe veritatis. Ad animi, assumenda atque consequuntur, deserunt, distinctio esse estLorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda magni saepe veritatis",
        2),
    new DialogData(
        "https://media.cnn.com/api/v1/images/stellar/prod/230124093557-bill-gates-file-081822.jpg?c=16x9&q=h_720,w_1280,c_fill",
        "Bill Gates",
        "How are you? :)",
        3)
];

let messagesData = [
    new MessageData(
        false,
        "Some text here",
        Date.now(),
        "1",
        1
    ),
    new MessageData(
        false,
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda magni saepe veritatis. Ad animi, assumenda atque consequuntur, deserunt, distinctio esse est libero mollitia nobis numquam odit officia quam rerum saepe!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda magni saepe veritatis. Ad animi, assumenda atque consequuntur, deserunt, distinctio esse est libero mollitia nobis numquam odit officia quam rerum saepe!",
        Date.now(),
        "1",
        2
    ),
    new MessageData(
        false,
        "Some text here",
        Date.now(),
        "2",
        3
    ),
    new MessageData(
        true,
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda magni saepe veritatis. Ad animi, assumenda atque consequuntur, deserunt, distinctio esse est libero mollitia nobis numquam odit officia quam rerum saepe!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda magni saepe veritatis. Ad animi, assumenda atque consequuntur, deserunt, distinctio esse est libero mollitia nobis numquam odit officia quam rerum saepe!",
        Date.now(),
        "2",
        4
    ),
    new MessageData(
        false,
        "Let's have a walk!",
        Date.now(),
        "3",
        5
    ),
];

let userData = new UserData(
    "Cherkasskiy Vitaliy",
    "4th September",
    "Moscow",
    "HSE '25",
    "https://github.com/vacherkasskiy"
);

let postsData = [
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
];

export function GetData() {
    return new Data(dialogsData, messagesData, postsData, userData);
}