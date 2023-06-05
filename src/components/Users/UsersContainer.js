import {connect} from "react-redux";
import {
    followActionCreator,
    setCurrentPageActionCreator,
    setUsersActionCreator,
    setUsersAmountActionCreator, unfollowActionCreator
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

    follow = (userId) => {
        axios
            .patch(`https://localhost:7072/users/follow_user/` + userId)
            .then(response => {
                if (response.status === 200) {
                    this.props.follow(userId);
                }
            });
    }

    unfollow = (userId) => {
        axios
            .patch(`https://localhost:7072/users/unfollow_user/` + userId)
            .then(response => {
                if (response.status === 200) {
                    this.props.unfollow(userId);
                }
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
                onFollow={this.follow}
                onUnFollow={this.unfollow}
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
        follow: (userId) => {
            let followAction = followActionCreator(userId);
            dispatch(followAction);
        },
        unfollow: (userId) => {
            let unfollowAction = unfollowActionCreator(userId);
            dispatch(unfollowAction);
        }
    };
};

let UsersContainer =
    connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);

export default UsersContainer;