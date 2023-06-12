import reportWebVitals from './reportWebVitals';
import "./styles/null.css";
import "./styles/main.css";
import ReactDOM from "react-dom/client";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import store from "./redux/redux-store";
import {Provider} from "react-redux";
import axios from "axios";
import LoginPageContainer from "./components/Auth/LoginPageContainer";

const root = ReactDOM.createRoot(document.getElementById('root'));

window.store = store;
window.users = axios
    .get("https://localhost:7072/users/get_users")
    .then(response => response.data);

let Render = () => {
    const location = window.location.pathname;

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    {location === '/login' ? null : (
                        <>
                            <Header />
                            <Sidebar />
                            <Content />
                        </>
                    )}
                    <Routes>
                        <Route path="/login" element={<LoginPageContainer/>} />
                    </Routes>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
}

Render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
