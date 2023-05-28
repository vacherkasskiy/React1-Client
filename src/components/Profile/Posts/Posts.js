import "../../../styles/Profile/Posts/Posts.css";
import Post from "./Post";

class PostData {
    constructor(message, name, img) {
        this.message = message;
        this.name = name;
        this.img = img;
    }

}

function Posts() {

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

    return (
        <div className={"posts"}>
            <h1 className={"posts__header"}>Posts</h1>
            <textarea placeholder={"New post..."} className={"posts__new-post"}></textarea>
            <button className={"posts__save-post"}>Post</button>
            <Post
                obj={postsData[0]}
            />
            <Post
                obj={postsData[1]}
            />
            <Post
                obj={postsData[2]}
            />
        </div>
    );
}

export default Posts;