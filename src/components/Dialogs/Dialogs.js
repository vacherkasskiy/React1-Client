import Dialog from "./Dialog";
import "../../styles/Dialogs/Dialogs.css"

class DialogData {
    constructor(img, name, latestMessage, id) {
        this.img = img;
        this.name = name;
        this.latestMessage = latestMessage;
        this.id = id;
    }

}

function Dialogs() {
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

    return (
        <div className="dialogs">
            { dialogsData.map(x => <Dialog obj={x} />) }
        </div>
    );
}

export default Dialogs;