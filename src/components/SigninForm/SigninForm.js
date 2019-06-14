import React, { useState } from "react";
import { connect } from "react-redux";
import { store } from "../../store";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import MathQuote from "../MathQuote/MathQuote";
import "./SigninForm.scss";
import { createUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { signInGoogle, singInFacebook } from "../../firebase";

function SigninForm({ createUser, isCreatingAccountValid, message }) {
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
                onSubmit={(values, { setSubmitting, resetForm, setErrors }) => {
                  createUser(values.email, values.password).then(() => {
                    const {
                      authReducer: { isValid, message }
                    } = store.getState();
                    isValid ? resetForm() : setErrors({ email: message });
                  });
                }}
                validationSchema={Yup.object().shape({
                  email: Yup.string()
                    .email()
                    .required(),
                  password: Yup.string()
                    .min(5)
                    .max(12)
                    .required(),
                  repeatedPassword: Yup.string()
                    .oneOf([Yup.ref("password"), null], "Passwords must match")
                    .required(),
                  name: Yup.string()
                    .min(5)
                    .max(12)
                    .required()
                })}
                render={({ errors, touched }) => (
                  <Form>
                    <div className="input-form">
                      <Field
                        className={
                          touched.name && errors.name ? "is-invalid" : ""
                        }
                        id="name"
                        name="name"
                      />
                      <label htmlFor="name">Name</label>
                      {touched.name && errors.name ? (
                        <span className="show-message">{errors.name}</span>
                      ) : (
                        ""
                      )}
                    </div>
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
                    <div className="input-form">
                      <Field
                        className={
                          touched.repeatedPassword && errors.repeatedPassword
                            ? "is-invalid"
                            : ""
                        }
                        id="repeatedPassword"
                        name="repeatedPassword"
                        type="password"
                      />
                      <label htmlFor="repeatedPassword">Repeat password</label>
                      {touched.repeatedPassword && errors.repeatedPassword ? (
                        <span className="show-message">
                          {errors.repeatedPassword}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                    <button type="submit" className="btn btn-dark">
                      Sing In
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
              <button onClick={singInFacebook} className="btn facebook-btn">
                <span className="fab fa-facebook-f" /> Facebook register
              </button>
              <button onClick={signInGoogle} className="btn google-btn">
                <span className="fab fa-google" /> Google register
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    createUser: (email, password) => dispatch(createUser(email, password))
  };
};
const mapStateToProps = state => {
  return {
    isCreatingAccountValid: state.authReducer.isValid,
    message: state.authReducer.message
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SigninForm);

SigninForm.propTypes = {
  isCreatingAccountValid: PropTypes.bool,
  message: PropTypes.string,
  createUser: PropTypes.func
};
