import reportWebVitals from './reportWebVitals';
import './styles/null.css';
import './styles/main.css';
import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import axios from 'axios';
import LoginPage from "./components/Auth/LoginPage";

window.store = store;
window.users = axios.get('https://localhost:7072/users/get_users').then(response => response.data);

const Render = () => {
    const location = window.location.pathname;

    ReactDOM.render(
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
                        <Route path="/login" element={<LoginPage />} />
                        <Route
                            path="/"
                            element={
                                location === '/' ? (
                                    <Navigate to="/profile/1" />
                                ) : (
                                    <>
                                        <Header />
                                        <Sidebar />
                                        <Content />
                                    </>
                                )
                            }
                        />
                    </Routes>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

Render();

reportWebVitals();
