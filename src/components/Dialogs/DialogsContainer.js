import {connect} from "react-redux";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage
    }
};

let mapDispatchToProps = (dispatch) => {};

const DialogsContainer =
    connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;