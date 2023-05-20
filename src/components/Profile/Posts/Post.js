import "../../../styles/Profile/Posts/Post.css";

function Post(props) {
    return (
        <div className={"post"}>
            <img className={"post__avatar"} src={props.img} alt=""/>
            <p className={"post__text"}><span>{props.name}</span>{props.message}</p>
        </div>
    );
}

export default Post;