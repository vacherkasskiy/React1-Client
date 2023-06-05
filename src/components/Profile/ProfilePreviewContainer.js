import {connect} from "react-redux";
import ProfilePreview from "./ProfilePreview";

let mapStateToProps = (state) => {
    return {
        userData: state.user.currentUser,
    }
}

let mapDispatchToProps = (dispatch) => {
};

const ProfilePreviewContainer =
    connect(mapStateToProps, mapDispatchToProps)(ProfilePreview);

export default ProfilePreviewContainer;