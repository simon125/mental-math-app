import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import MathQuote from "../MathQuote/MathQuote";
import { logIn } from "../../firebase";
import "./LoginForm.scss";
import PropTypes from "prop-types";

function LoginForm() {
  const [logInCredentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  return (
    <div className="page">
      <section className="signin-container">
        <div className="form-box">
          <div className="signin-container__left">
            <MathQuote />
          </div>
          <div className="signin-container__right">
            <h1>Log In</h1>
            <div className="signin-container__form">
              <Formik
                initialValues={{ ...logInCredentials }}
                onSubmit={(
                  { email, password },
                  { setSubmitting, resetForm, setErrors }
                ) => {
                  logIn(email, password).then(() => {
                    resetForm();
                  });
                }}
                validationSchema={Yup.object().shape({
                  email: Yup.string()
                    .email()
                    .required(),
                  password: Yup.string()
                    .min(5)
                    .max(12)
                    .required()
                })}
                render={({ errors, touched }) => (
                  <Form>
                    <div className="input-form">
                      <Field
                        className={
                          touched.email && errors.email ? "is-invalid" : ""
                        }
                        id="email"
                        name="email"
                      />
                      <label htmlFor="email">Email</label>
                      {touched.email && errors.email ? (
                        <span className="show-message">{errors.email}</span>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="input-form">
                      <Field
                        className={
                          touched.password && errors.password
                            ? "is-invalid"
                            : ""
                        }
                        id="password"
                        name="password"
                        type="password"
                      />
                      <label htmlFor="password">Password</label>
                      {touched.password && errors.password ? (
                        <span className="show-message">{errors.password}</span>
                      ) : (
                        ""
                      )}
                    </div>
                    <button type="submit" className="btn btn-dark">
                      Log In
                    </button>
                  </Form>
                )}
              />
            </div>

            <div className="or-container">
              <span className="line" />
              <span>or</span>
              <span className="line" />
            </div>
            <div className="form-box__btn-group">
              <button
                onClick={() => console.log("")}
                className="btn facebook-btn"
              >
                <span className="fab fa-facebook-f" /> Facebook Login
              </button>
              <button className="btn google-btn">
                <span className="fab fa-google" /> Google Login
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginForm;

// SigninForm.propTypes = {
//   isCreatingAccountValid: PropTypes.bool,
//   message: PropTypes.string,
//   createUser: PropTypes.func
// };
