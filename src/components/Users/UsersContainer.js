import {connect} from "react-redux";
import {
    followActionCreator,
    setCurrentPageActionCreator,
    setIsFetchingActionCreator,
    setUsersActionCreator,
    setUsersAmountActionCreator,
    unfollowActionCreator,
} from "../../redux/reducers/users_reducer";
import React from "react";
import Users from "./Users";
import {followUser, getUsers, unfollowUser} from "../../api/usersAPI";

class UsersAPIContainer extends React.Component {
    state = {
        pages: []
    }

    sendAPIRequest() {
        this.props.setIsFetching(true);

        getUsers(this.props.currentPage, this.props.pageCapacity)
            .then(data => {
                const users = data.users;
                const usersAmount = data.usersAmount;

                const pages = [];
                for (let i = 1; i <= Math.ceil(usersAmount / this.props.pageCapacity); ++i) {
                    pages.push(i);
                }

                this.props.setUsersAmount(usersAmount);
                this.props.setUsers(users);
                this.props.setIsFetching(false);

                this.setState({pages: pages});
            });
    }


    follow = (userId) => {
        if (followUser(userId) === 200) {
            this.props.follow(userId);
        }
    }

    unfollow = (userId) => {
        if (unfollowUser(userId) === 200) {
            this.props.unfollow(userId);
        }
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
        const {pages} = this.state;

        return (
            <Users
                pages={pages}
                pageOnClick={this.props.setCurrentPage}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onFollow={this.follow}
                onUnFollow={this.unfollow}
                isFetching={this.props.isFetching}
            />
        );
    }
}

let mapStateToProps = (state) => {
    debugger;
    return {
        users: state.user.users,
        currentPage: state.user.usersPage.currentPage,
        pageCapacity: state.user.usersPage.pageCapacity,
        usersAmount: state.user.usersPage.usersAmount,
        isFetching: state.user.usersPage.isFetching,
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
        },
        setIsFetching: (isFetching) => {
            let setIsFetchingAction = setIsFetchingActionCreator(isFetching);
            dispatch(setIsFetchingAction);
        }
    };
};

let UsersContainer =
    connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);

export default UsersContainer;