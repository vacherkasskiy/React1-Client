import {connect} from "react-redux";
import {
    followActionCreator,
    setCurrentPageActionCreator,
    setIsFetchingActionCreator,
    setUsersActionCreator,
    setUsersAmountActionCreator, toggleButtonActionCreator,
    unfollowActionCreator,
} from "../../redux/reducers/users_reducer";
import React from "react";
import Users from "./Users";
import {followUserRequest, getUsersRequest, unfollowUserRequest} from "../../api/usersAPI";

class UsersAPIContainer extends React.Component {
    sendAPIRequest() {
        this.props.setIsFetching(true);

        getUsersRequest(this.props.currentPage, this.props.pageCapacity)
            .then(data => {
                const users = data.users;
                const usersAmount = data.usersAmount;

                this.props.setUsersAmount(usersAmount);
                this.props.setUsers(users);
                this.props.setIsFetching(false);
            });
    }


    follow = (userId) => {
        this.props.toggleButton(userId, false);
        followUserRequest(userId)
            .then((status) => {
                if (status === 200) {
                    this.props.follow(userId);
                    this.props.toggleButton(userId, true);
                }
            });
    }

    unfollow = (userId) => {
        this.props.toggleButton(userId, false);
        unfollowUserRequest(userId)
            .then((status) => {
                if (status === 200) {
                    this.props.unfollow(userId);
                    this.props.toggleButton(userId, true);
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
        return (
            <Users
                pages={this.props.pages}
                pageOnClick={this.props.setCurrentPage}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onFollow={this.follow}
                onUnFollow={this.unfollow}
                isFetching={this.props.isFetching}
                disabledButtonIdsArray={this.props.disabledButtonIdsArray}
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
        isFetching: state.user.usersPage.isFetching,
        disabledButtonIdsArray: state.user.usersPage.disabledButtonIdsArray,
        pages: state.user.usersPage.pages,
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
        },
        toggleButton: (buttonId, isEnabled) => {
            let toggleButtonAction = toggleButtonActionCreator(buttonId, isEnabled);
            dispatch(toggleButtonAction);
        }
    };
};

let UsersContainer =
    connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);

export default UsersContainer;