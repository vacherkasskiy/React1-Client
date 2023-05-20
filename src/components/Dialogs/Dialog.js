import "../../styles/Dialogs/Dialog.css"

function Dialog(props) {
    return (
        <div className={"dialog"}>
            <img className={"dialog__avatar"} src={props.img} alt=""/>
            <div className="dialog__body">
                <p className="dialog__name">{props.name}</p>
                <p className="dialog__text">{props.latestMessage}</p>
            </div>
        </div>
    );
}

export default Dialog;