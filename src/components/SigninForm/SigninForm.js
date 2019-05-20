import React, { useState } from "react";
import { Formik } from "formik";
import InputForm from "../InputForm/InputForm";
import MathQuote from "../MathQuote/MathQuote";
import "./SigninForm.scss";

export default function SigninForm() {
  const [singUpCredentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    repeatedPassword: ""
  });
  return (
    <div className="page">
      <section className="signin-container">
        <div className="form-box">
          <div className="signin-container__left">
            <MathQuote />
          </div>
          <div className="signin-container__right">
            <h1>Sign In</h1>
            <div className="signin-container__form">
              <Formik
                initialValues={{ ...singUpCredentials }}
                validate={values => {
                  let errors = {};
                  if (!values.email) {
                    errors.email = "Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  }
                  return errors;
                }}
                onSubmit={values => {
                  setCredentials({ ...values });
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting
                }) => (
                  <form onSubmit={handleSubmit}>
                    <InputForm
                      handleChange={handleChange}
                      value={values.name}
                      id="name"
                      name="name"
                      isValid={true}
                      label="Name"
                      type="text"
                    />
                    <InputForm
                      handleChange={handleChange}
                      value={values.email}
                      id="email"
                      name="email"
                      isValid={true}
                      label="Email"
                      type="text"
                    />
                    <InputForm
                      handleChange={handleChange}
                      value={values.password}
                      id="password"
                      name="password"
                      isValid={true}
                      label="Password"
                      type="password"
                    />
                    <InputForm
                      handleChange={handleChange}
                      value={values.repeatedPassword}
                      id="repeatedPassword"
                      name="repeatedPassword"
                      isValid={true}
                      label="Repeat password"
                      type="password"
                    />

                    <button className="btn btn-dark">Sing In</button>
                  </form>
                )}
              </Formik>
            </div>

            <div className="or-container">
              <span className="line" />
              <span>or</span>
              <span className="line" />
            </div>
            <div className="form-box__btn-group">
              <button className="btn facebook-btn">
                <span className="fab fa-facebook-f" /> Facebook register
              </button>
              <button className="btn google-btn">
                <span className="fab fa-google" /> Google register
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
