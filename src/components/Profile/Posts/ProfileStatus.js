import "../../../styles/Profile/ProfileStatus.css";
import React from 'react';
import {connect} from "react-redux";
import {toggleEditModeActionCreator} from "../../../redux/reducers/profile_reducer";
import {setStatusRequest} from "../../../api/profileAPI";

class ProfileStatus extends React.Component {
    statusValue = React.createRef();
    onBlur = () => {
        this.props.toggleEditMode(false);
        setStatusRequest(this.props.id, this.statusValue.current.value)
            .then(() => {
                this.forceUpdate();
            });
    }
    onClick = () => {
        this.props.toggleEditMode(true);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.editMode !== this.props.editMode) {
            this.forceUpdate();
        }
    }

    render() {
        if (!this.props.flag) {
            return (<></>);
        }
        else if (this.props.editMode || this.props.status === null) {
            return (
                <div className={"status"}>
                    <input
                        ref={this.statusValue}
                        autoFocus={true}
                        onBlur={() => this.onBlur()}
                        defaultValue={this.props.status}
                        className="status__text"></input>
                </div>
            );
        } else {
            return (
                <div className={"status"}>
                    <p
                        onClick={() => this.onClick()}
                        className="status__text">{this.props.status}</p>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        editMode: state.profilePage.editMode,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleEditMode: (editMode) => {
            dispatch(toggleEditModeActionCreator(editMode));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileStatus);