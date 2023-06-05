import React from "react";
import axios from "axios";
import User from "./User";
import "../../styles/Users/Users.css";

class Users extends React.Component {
    state = {
        users: [],
        usersAmount: 0,
        pages: [],
        currentPage: 1,
    }

    sendAPIRequest() {
        axios
            .get("https://localhost:7072/users/get_users?skip=" +
                ((this.props.currentPage - 1) * this.props.pageCapacity ) +
                "&amount=" +
                this.props.pageCapacity)

            .then(response => {
                const users = response.data.users;
                const usersAmount = response.data.usersAmount;

                this.props.setUsersAmount(usersAmount);
                const pages = Array.from({ length: Math.ceil(usersAmount / this.props.pageCapacity) }, (_, i) => i + 1);

                this.setState({users, usersAmount, pages});
            });
    }

    componentDidMount() {
        this.sendAPIRequest();
    }

    pageOnClick(x) {
        this.props.setCurrentPage(x);
        this.setState({ currentPage: x }, () => {
            this.sendAPIRequest();
        });
    }

    render() {
        const { users, pages } = this.state;

        return (
            <div className="users">
                <div className="pages__buttons">
                    {pages.map(x => <div onClick={() => this.pageOnClick(x)} className={(x === this.props.currentPage ? "active" : "")}>{x}</div>)}
                </div>
                {users.map(x => <User data={x}/>)}
            </div>
        );
    }
}

export default Users;