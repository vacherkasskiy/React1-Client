import {connect} from "react-redux";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        users: state.user.users,
    };
};

let mapDispatchToProps = (dispatch) => {

};

let UsersContainer =
    connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;