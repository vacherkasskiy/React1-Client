import reportWebVitals from './reportWebVitals';
import "./styles/null.css";
import "./styles/main.css";
import ReactDOM from "react-dom/client";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import store from "./redux/redux-store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

let Render = () => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <Header />
                    <Sidebar />
                    <Content />
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
