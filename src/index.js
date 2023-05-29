import reportWebVitals from './reportWebVitals';
import "./styles/null.css";
import "./styles/main.css";
import ReactDOM from "react-dom/client";
import {GetData, subscribe} from "./data/data";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

const root = ReactDOM.createRoot(document.getElementById('root'));

let Render = () => {
    let data = GetData();

    window.data = data;

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Header/>
                <Sidebar/>
                <Content data={data}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}

subscribe(Render);

Render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
