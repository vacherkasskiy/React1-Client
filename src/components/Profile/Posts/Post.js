import "../../../styles/Profile/Posts/Post.css";

function Post(props) {
    return (
        <div className={"post"}>
            <img className={"post__avatar"} src={props.obj.img} alt=""/>
            <p className={"post__text"}><span>{props.obj.name}</span>{props.obj.message}</p>
        </div>
    );
}

export default Post;