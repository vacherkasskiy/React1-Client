import "../../styles/Dialogs/Dialog.css"
import {NavLink} from "react-router-dom";

function Dialog(props) {
    return (
        <NavLink to={"" + props.obj.id}>
            <div className={"dialog"}>
                <img className={"dialog__avatar"} src={props.obj.img} alt=""/>
                <div className="dialog__body">
                    <p className="dialog__name">{props.obj.name}</p>
                    <p className="dialog__text">{props.obj.latestMessage}</p>
                </div>
            </div>
        </NavLink>
    );
}

export default Dialog;