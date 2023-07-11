import React from 'react';
import {connect} from "react-redux";
import ProfilePreview from "./ProfilePreview";
import Posts from "./Posts/Posts";
import {setUserDataThunk} from "../../redux/reducers/profile_reducer";
import Preloader from "../Preloader";
import {useLocation, useNavigate, useParams} from "react-router-dom";

function withRouter() {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <ProfileAPIContainer
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileAPIContainer extends React.Component {
    profileId = this.props.router.params.profileId;

    componentDidMount() {
        this.props.setUserDataThunk(this.profileId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.profileId !== prevProps.router.params.profileId) {
            this.props.setUserDataThunk(this.profileId);
        }
    }

    render() {
        if (this.props.isFetching || !this.props.userData) {
            return(
                <Preloader />
            );
        } else {
            return (
                <>
                    <ProfilePreview
                        userData={this.props.userData}
                        flag={true}
                    />
                    <Posts
                        userName={this.props.userName}
                        posts={this.props.posts}
                    />
                </>
            );
        }
    }
}

let mapStateToProps = (state) => {
    return {
        userData: state.profilePage.user,
        posts: state.profilePage.posts,
        isFetching: state.profilePage.isFetching,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        setUserDataThunk: (userId) => {
            dispatch(setUserDataThunk(userId));
        },
    }
};

const ProfileContainer =
    connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileAPIContainer));

export default ProfileContainer;