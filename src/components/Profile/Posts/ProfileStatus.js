import React, {createRef} from "react";

function ProfileStatus(props) {
    let statusInput = createRef();

    if (!props.flag) {
        return (<></>);
    }
    else if (props.editMode || props.status === null) {
        return (
            <div className={"status"}>
                <input
                    ref={statusInput}
                    onInput={() => props.setStatus(statusInput.current.value)}
                    autoFocus={true}
                    onBlur={() => {
                        props.toggleEditMode(false);
                        props.setStatusThunk(props.id, props.status);
                    }}
                    defaultValue={props.status}
                    className="status__text"></input>
            </div>
        );
    } else {
        return (
            <div className={"status"}>
                <p
                    onClick={() => props.toggleEditMode(true)}
                    className="status__text">{props.status}</p>
            </div>
        );
    }
}

export default ProfileStatus;