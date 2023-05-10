import "../styles/Posts.css";

function Posts() {
    return (
        <div className={"posts"}>
            <h1 className={"posts__header"}>Posts</h1>
            <textarea placeholder={"New post..."} className={"posts__new-post"}></textarea>
            <button className={"posts__save-post"}>Save</button>
        </div>
    );
}

export default Posts;