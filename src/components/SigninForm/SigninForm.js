import React, { useState } from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import {
  validatePhraseLength,
  validateEmail,
  validatePasswords
} from "../../utils/validate";
import InputForm from "../InputForm/InputForm";
import MathQuote from "../MathQuote/MathQuote";
import "./SigninForm.scss";
import { createUser } from "../../actions/authActions";

function SigninForm({ createUser }) {
  const [singUpCredentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    repeatedPassword: ""
  });

  const validateSignInForm = ({ name, email, password, repeatedPassword }) => {
    const nameStatus = validatePhraseLength(name);
    const emailStatus = validateEmail(email);
    const passwordsStatus = validatePasswords(password, repeatedPassword);
    return {
      name: nameStatus.message,
      email: emailStatus.message,
      password: passwordsStatus.message,
      repeatedPassword: passwordsStatus.message
    };
  };

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
                onSubmit={(values, { setSubmitting }) => {
                  setCredentials({ ...values });
                  setTimeout(() => setSubmitting(false), 3 * 1000);
                }}
                validate={validateSignInForm}
              >
                {({
                  values,
                  errors,
                  handleChange,
                  handleSubmit,
                  setValues,
                  isValidating,
                  handleBlur,
                  touched
                }) => (
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      if (isValidating) {
                        debugger;
                        handleSubmit();
                        setValues({
                          name: "",
                          email: "",
                          password: "",
                          repeatedPassword: ""
                        });
                      }
                    }}
                  >
                    <InputForm
                      onBlur={handleBlur}
                      handleChange={handleChange}
                      value={values.name}
                      isValid={errors.name && touched.name}
                      errMsg={errors.name}
                      id="name"
                      name="name"
                      label="Name"
                      type="text"
                    />
                    <InputForm
                      onBlur={handleBlur}
                      handleChange={handleChange}
                      value={values.email}
                      id="email"
                      name="email"
                      isValid={errors.email && touched.email}
                      errMsg={errors.email}
                      label="Email"
                      type="text"
                    />
                    <InputForm
                      onBlur={handleBlur}
                      handleChange={handleChange}
                      value={values.password}
                      id="password"
                      name="password"
                      isValid={errors.password && touched.password}
                      errMsg={errors.password}
                      label="Password"
                      type="password"
                    />
                    <InputForm
                      onBlur={handleBlur}
                      handleChange={handleChange}
                      value={values.repeatedPassword}
                      id="repeatedPassword"
                      name="repeatedPassword"
                      errMsg={errors.repeatedPassword}
                      isValid={
                        errors.repeatedPassword && touched.repeatedPassword
                      }
                      label="Repeat password"
                      type="password"
                    />
                    <button type="submit" className="btn btn-dark">
                      Sing In
                    </button>
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
              <button
                onClick={() => console.log(singUpCredentials)}
                className="btn facebook-btn"
              >
                <span className="fab fa-facebook-f" /> Facebook register
              </button>
              <button className="btn google-btn">
                <span className="fab fa-google" /> Google register
              </button>
            </div>
          </div>
        </div>
      </section>
      <button
        onClick={() => {
          console.log(123);
          createUser("simon@ads.pl", "11marzec");
          debugger;
        }}
      >
        create
      </button>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    createUser: (email, password) => dispatch(createUser(email, password))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SigninForm);
