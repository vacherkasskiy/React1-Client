import React from "react";
import axios from "axios";
import User from "./User";
import "../../styles/Users/Users.css";

class Users extends React.Component {
    state = {
        pages: []
    }
    sendAPIRequest() {
        axios
            .get(
                "https://localhost:7072/users/get_users?skip=" +
                ((this.props.currentPage - 1) * this.props.pageCapacity) +
                "&amount=" +
                this.props.pageCapacity
            )
            .then((response) => {
                const users = response.data.users;
                const usersAmount = response.data.usersAmount;

                const pages = [];
                for (let i = 1; i <= Math.ceil(usersAmount / this.props.pageCapacity); ++i) {
                    pages.push(i);
                }

                this.props.setUsersAmount(usersAmount);
                this.props.setUsers(users);

                this.setState({ pages: pages });
            });
    }

    componentDidMount() {
        this.sendAPIRequest();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.currentPage !== this.props.currentPage) {
            this.sendAPIRequest();
        }
    }

    pageOnClick(x) {
        this.props.setCurrentPage(x);
    }

    render() {
        const { pages } = this.state;

        return (
            <div className="users">
                <div className="pages__buttons">
                    {pages.map((x) => (
                        <div
                            key={x}
                            onClick={() => this.pageOnClick(x)}
                            className={x === this.props.currentPage ? "active" : ""}
                        >{x}</div>
                    ))}
                </div>
                {this.props.users.map((x) => (
                    <User key={x.id} data={x} />
                ))}
            </div>
        );
    }
}

export default Users;
