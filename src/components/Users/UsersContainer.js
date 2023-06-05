import {connect} from "react-redux";
import {
    setCurrentPageActionCreator,
    setUsersActionCreator,
    setUsersAmountActionCreator
} from "../../redux/reducers/user_reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";

class UsersAPIContainer extends React.Component {
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

    render() {
        const { pages } = this.state;

        return (
            <Users
                pages={pages}
                pageOnClick={this.props.setCurrentPage}
                currentPage={this.props.currentPage}
                users={this.props.users}
            />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.user.users,
        currentPage: state.user.usersPage.currentPage,
        pageCapacity: state.user.usersPage.pageCapacity,
        usersAmount: state.user.usersPage.usersAmount,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        setUsersAmount: (usersAmount) => {
            let setUsersAmountAction = setUsersAmountActionCreator(usersAmount);
            dispatch(setUsersAmountAction);
        },
        setCurrentPage: (page) => {
            let setCurrentPageAction = setCurrentPageActionCreator(page);
            dispatch(setCurrentPageAction);
        },
        setUsers: (users) => {
            let setUsersAction = setUsersActionCreator(users);
            dispatch(setUsersAction);
        },
    };
};

let UsersContainer =
    connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);

export default UsersContainer;