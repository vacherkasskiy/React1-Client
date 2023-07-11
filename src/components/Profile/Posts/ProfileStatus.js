import "../../../styles/Profile/ProfileStatus.css";
import React, {createRef} from 'react';
import {connect} from "react-redux";
import {setStatusThunk} from "../../../redux/reducers/profile_reducer";

class ProfileStatus extends React.Component {
    statusInput = createRef();
    state = {
        editMode: false,
        status: this.props.status
    };
    toggleEditMode = (editMode) => {
        this.setState({editMode: editMode});
    }
    setStatus = (status) => {
        this.setState({status: status});
    }
    render() {
        if (!this.props.flag) {
            return (<></>);
        }
        else if (this.state.editMode || this.state.status === null) {
            return (
                <div className={"status"}>
                    <input
                        ref={this.statusInput}
                        onInput={() => this.setStatus(this.statusInput.current.value)}
                        autoFocus={true}
                        onBlur={() => {
                            this.toggleEditMode(false);
                            this.props.setStatusThunk(this.props.id, this.state.status);
                        }}
                        defaultValue={this.state.status}
                        className="status__text"></input>
                </div>
            );
        } else {
            return (
                <div className={"status"}>
                    <p
                        onClick={() => this.toggleEditMode(true)}
                        className="status__text">{this.state.status}</p>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setStatusThunk: (userId, status) => {
            dispatch(setStatusThunk(userId, status));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileStatus);