import Dialog from "./Dialog";
import "../../styles/Dialogs/Dialogs.css"

function Dialogs(props) {
    return (
        <div className="dialogs">
            {props.data.map(x => <Dialog obj={x}/>)}
        </div>
    );
}

export default Dialogs;