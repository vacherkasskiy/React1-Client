import {connect} from "react-redux";
import {
    followThunk,
    setCurrentPageActionCreator,
    setUsersThunk,
    unfollowThunk,
} from "../../redux/reducers/users_reducer";
import React from "react";
import Users from "./Users";

class UsersAPIContainer extends React.Component {
    follow = (userId) => {
        this.props.followThunk(userId);
    }

    unfollow = (userId) => {
        this.props.unfollow(userId);
    }

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageCapacity);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.currentPage !== this.props.currentPage) {
            this.props.getUsersThunk(this.props.currentPage, this.props.pageCapacity);
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
        setCurrentPage: (page) => {
            dispatch(setCurrentPageActionCreator(page));
        },
        getUsersThunk: (currentPage, pageCapacity) => {
            dispatch(setUsersThunk(currentPage, pageCapacity));
        },
        followThunk: (userId) => {
            dispatch(followThunk(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowThunk(userId));
        },
    };
};

let UsersContainer =
    connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);

export default UsersContainer;