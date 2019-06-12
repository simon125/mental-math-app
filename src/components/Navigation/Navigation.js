import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../../firebase";
import HamburgerMenuButton from "../HamburgerMenuButton/HamburgerMenuButton";
import "./Navigation.scss";

function Navigation({ isLoggedIn }) {
  const [visibility, toggleVisibility] = useState(true);
  return (
    <header>
      <div className="polygon-bg-header">
        <nav>
          <ul>
            <li>
              <Link
                className={visibility ? "link-left active" : "link-left"}
                title="Home"
                to="/"
              >
                <span className="fas fa-home fa-2x" />
              </Link>
            </li>
            <li>
              {isLoggedIn ? (
                <button
                  onClick={logOut}
                  title="Log Out"
                  href=""
                  className={visibility ? "link-left  active" : "link-left"}
                >
                  <span className="fas fa-sign-out-alt fa-2x" />
                </button>
              ) : (
                <Link
                  className={visibility ? "link-left  active" : "link-left"}
                  title="Log In"
                  to="/login"
                >
                  <span className="fas fa-sign-in-alt fa-2x" />
                </Link>
              )}
            </li>
            <li>
              {isLoggedIn ? (
                <button
                  title="Game"
                  href=""
                  className={visibility ? "link-left  active" : "link-left"}
                >
                  <span className="fas fa-gamepad fa-2x" />
                </button>
              ) : (
                <Link
                  className={visibility ? "link-left active" : "link-left"}
                  title="Sign In"
                  to="/signin"
                >
                  <span className="fas fa-user-plus fa-2x" />
                </Link>
              )}
            </li>
            <li className="hamburger-btn">
              <HamburgerMenuButton
                handleClick={() => toggleVisibility(!visibility)}
                state={visibility}
              />
            </li>
            <li>
              <Link
                className={visibility ? "link-right active" : "link-right "}
                title="Profile"
                to="/profile"
              >
                <span className="fas fa-user-alt fa-2x" />
              </Link>
            </li>
            <li>
              <Link
                className={visibility ? "link-right active" : "link-right "}
                title="Math gym"
                to="/gym"
              >
                <span className="fas fa-dumbbell fa-2x" />
              </Link>
            </li>
            <li>
              <Link
                className={visibility ? "link-right active" : "link-right "}
                title="About"
                to="/about"
              >
                <span className="fas fa-info-circle fa-3x" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.authReducer.isLoggedIn
  };
};

export default connect(
  mapStateToProps,
  {}
)(Navigation);
