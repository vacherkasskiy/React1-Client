import "../../../styles/Profile/ProfileStatus.css";
import React from 'react';
import {connect} from "react-redux";
import {setStatusThunk} from "../../../redux/reducers/profile_reducer";
import ProfileStatus from "./ProfileStatus";

class ProfileStatusContainer extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    };
    toggleEditMode = (editMode) => {
        this.setState({editMode: editMode});
    }
    setStatus = (status) => {
        this.setState({status: status});
    }
    render() {
        return <ProfileStatus
            flag={this.props.flag}
            id={this.props.id}
            editMode={this.state.editMode}
            status={this.state.status}
            setStatus={this.setStatus}
            toggleEditMode={this.toggleEditMode}
            setStatusThunk={this.props.setStatusThunk}
        />;
    }
}

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        setStatusThunk: (userId, status) => {
            dispatch(setStatusThunk(userId, status));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileStatusContainer);