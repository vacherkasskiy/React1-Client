import {GetData} from "./data/data";
import ReactDOM from "react-dom/client";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

const root = ReactDOM.createRoot(document.getElementById('root'));

function Render() {
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

export default Render;