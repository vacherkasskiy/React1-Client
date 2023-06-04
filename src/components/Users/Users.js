import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";

function Users(props) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get("https://localhost:7072/users/get_users")
            .then(response => {
                setUsers(response.data);
            })
    }, []);

    return (
        <div className="users">
            {/*{props.users.map(x => <User data={x} />}*/}
            {users.map(x => <User data={x}/>)}
        </div>
    );
}

export default Users;
