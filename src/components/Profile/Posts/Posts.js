import "../../../styles/Profile/Posts/Posts.css";
import Post from "./Post";

function Posts(props) {

    return (
        <div className={"posts"}>
            <h1 className={"posts__header"}>Posts</h1>
            <textarea placeholder={"New post..."} className={"posts__new-post"}></textarea>
            <button className={"posts__save-post"}>Post</button>
            {props.data.map(x => <Post obj={x}/>)}
        </div>
    );
}

export default Posts;