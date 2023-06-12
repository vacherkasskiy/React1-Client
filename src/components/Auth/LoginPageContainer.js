import LoginPage from "./LoginPage";
import React from 'react';
import axios from "axios";

class LoginPageContainer extends React.Component {
    login = (login, password) => {
        axios
            .post(`http://localhost:5072/auth/login?Login=${login}&Password=${password}`,
                { withCredentials: true })
            .then(response => {
                if (response.status === 200) {
                    //window.location.href = '/profile';
                    console.log(response);
                    axios
                        .get('http://localhost:5072/auth/get',
                            {withCredentials: true})
                        .then(response => {
                            console.log(response);
                        })
                        .catch(error => {
                            console.log(error);
                        })
                }
            })
            .catch(error => {
                console.log(error);
            });
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