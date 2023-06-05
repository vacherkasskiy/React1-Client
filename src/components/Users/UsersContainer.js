import {connect} from "react-redux";
import Users from "./Users";
import {setCurrentPageActionCreator, setUsersAmountActionCreator} from "../../redux/reducers/user_reducer";

let mapStateToProps = (state) => {
    return {
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
    };
};

let UsersContainer =
    connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;