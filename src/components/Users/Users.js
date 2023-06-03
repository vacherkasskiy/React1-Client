import User from "./User";

function Users(props) {
    return (
        <div className={"users"}>
            {props.users.map(x => <User data={x}/>)}
        </div>
    );
}

export default Users;