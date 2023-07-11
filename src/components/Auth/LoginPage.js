import "../../styles/Auth/LoginPage.css";
import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import axios from "axios";

function LoginPage() {
    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                password: "",
                repeatPassword: ""
            }}
            validationSchema={
                Yup.object({
                    name: Yup.string()
                        .min(4, "Name must contain at least 4 letters")
                        .max(20, "Name must contain no more than 20 letters")
                        .required(),
                    email: Yup.string()
                        .email("Invalid email address")
                        .required("Email address is required"),
                    password: Yup.string()
                        .min(6, "Password must contain at least 6 letters")
                        .required("Password is required"),
                    repeatPassword: Yup.string()
                        .oneOf([Yup.ref('password')], "Passwords must match")
                        .required("Password is required"),
                })
            }
            onSubmit={(values, {setFieldError}) => {
                axios.post("https://localhost:7072/auth/register", values)
                    .then(response => {
                        console.log("Success", response.data);
                    })
                    .catch(() => {
                        console.log("Failure");
                        setFieldError("email", "User with such email already exists");
                    });
                window.location.href = "http://localhost:3000/users";
            }}
        >
            <div className={"login_page"}>
                <Form className={"login__form"}>
                    <div className="form__section">
                        <label htmlFor="name">Name</label>
                        <Field as={"input"} name={"name"} type={"text"}/>
                        <ErrorMessage name={"name"}/>
                    </div>
                    <div className="form__section">
                        <label htmlFor={"email"}>Email</label>
                        <Field name={"email"} type={"email"}/>
                        <ErrorMessage name="email"/>
                    </div>
                    <div className="form__section">
                        <label htmlFor={"password"}>Password</label>
                        <Field name={"password"} type={"password"}/>
                        <ErrorMessage name="password"/>
                    </div>
                    <div className="form__section">
                        <label htmlFor="repeatPassword">Repeat password</label>
                        <Field name={"repeatPassword"} type={"password"}/>
                        <ErrorMessage name={"repeatPassword"}/>
                    </div>
                    <button type={"submit"}>Login</button>
                </Form>
            </div>
        </Formik>
    );
}

export default LoginPage;