import LoginPage from "./LoginPage";
import React from 'react';
import {loginUser} from "../../api/authAPI";

class LoginPageContainer extends React.Component {
    login = (login, password) => {
        loginUser(login, password); // COOKIES DO NOT SAVE
    }

    render() {
        return(
            <LoginPage
                onClickLogin={this.login}
            />
        );
    }
}

export default LoginPageContainer;