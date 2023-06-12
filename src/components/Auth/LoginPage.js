import "../../styles/Auth/LoginPage.css";
import React from 'react';

function LoginPage(props) {
    let loginInput = React.createRef();
    let passwordInput = React.createRef();

    const login = () => {
        let loginValue = loginInput.current.value;
        let passwordValue = passwordInput.current.value;
        props.onClickLogin(loginValue, passwordValue);
    };

    return(
        <div className={"login_page"}>
            <form action="" className={"login__form"}>
                <div className="form__section">
                    <label htmlFor={"login"}>Login</label>
                    <input ref={loginInput} name={"login"} type="text"/>
                </div>
                <div className="form__section">
                    <label htmlFor={"password"}>Password</label>
                    <input ref={passwordInput} name={"password"} type="password"/>
                </div>
                <button onClick={login} type={"button"}>Login</button>
            </form>
        </div>
    );
}

export default LoginPage;