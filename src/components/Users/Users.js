import React from "react";
import axios from "axios";
import User from "./User";

class Users extends React.Component {
    users = [];

    componentDidMount() {
        axios
            .get("https://localhost:7072/users/get_users")
            .then(response => {
                this.users = response.data;
                this.forceUpdate();
            });
    }

    render() {
        return (
            <div className="users">
                {this.users.map(x => <User data={x}/>)}
            </div>
        );
    }
}

export default Users;