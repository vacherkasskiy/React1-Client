import React from 'react';
import axios from "axios";
import {connect} from "react-redux";
import ProfilePreview from "./ProfilePreview";
import Posts from "./Posts/Posts";
import {setProfileDataActionCreator} from "../../redux/reducers/profile_reducer";
import Preloader from "../Preloader";
import {useLocation, useNavigate, useParams} from "react-router-dom";

function withRouter(Component) {
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
    sendAPIRequest(userId) {
        axios
            .get(`https://localhost:7072/users/get_user/${userId}`)
            .then(response => {
                if (response.status === 200) {
                    let user = response.data;
                    this.props.setProfileData(user);
                }
            })
    }

    componentDidMount() {
        this.sendAPIRequest(this.profileId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.sendAPIRequest(this.profileId);
    }

    render() {
        if (!this.props.userData) {
            return(
                <Preloader />
            );
        } else {
            return (
                <>
                    <ProfilePreview
                        userData={this.props.userData}
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
    let postsData = state.profilePage;
    let posts = postsData.posts;
    let userData = state.profilePage.user;

    return {
        userData: userData,
        posts: posts,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        setProfileData: (user) => {
            let action = setProfileDataActionCreator(user);
            dispatch(action);
        }
    }
};

const ProfileContainer =
    connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileAPIContainer));

export default ProfileContainer;