export class DialogData {
    constructor(img, name, latestMessage, id) {
        this.img = img;
        this.name = name;
        this.latestMessage = latestMessage;
        this.id = id;
    }
}

export class MessageData {
    constructor(isOwner, text, dateTime, dialogId) {
        this.isOwner = isOwner;
        this.text = text;
        this.dateTime = dateTime;
        this.dialogId = dialogId;
    }
}

export class PostData {
    constructor(message, name, img) {
        this.message = message;
        this.name = name;
        this.img = img;
    }
}

export class UserData {
    constructor(id, name, birthday, city, education, website, image, isFollowed) {
        this.id = id;
        this.name = name;
        this.birthday = birthday;
        this.city = city;
        this.education = education;
        this.website = website;
        this.image = image;
        this.isFollowed = isFollowed;
    }
}

export class NewMessage {
    constructor(text, userId) {
        this.text = text;
        this.userId = userId;
    }
}

export class NewPost {
    constructor(text, userId) {
        this.text = text;
        this.userId = userId;
    }
}