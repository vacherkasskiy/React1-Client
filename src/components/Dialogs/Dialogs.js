import Dialog from "./Dialog";
import "../../styles/Dialogs/Dialogs.css"

function Dialogs(props) {
    let dialogs = props.store.getDialogsData();

    return (
        <div className="dialogs">
            {dialogs.map(x => <Dialog obj={x}/>)}
        </div>
    );
}

export default Dialogs;