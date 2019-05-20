import React, { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerMenuButton from "../HamburgerMenuButton/HamburgerMenuButton";
import "./Navigation.scss";

export default function Navigation() {
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
              <Link
                className={visibility ? "link-left  active" : "link-left"}
                title="Log In"
                to="/login"
              >
                <span className="fas fa-sign-in-alt fa-2x" />
              </Link>
            </li>
            <li>
              <Link
                className={visibility ? "link-left active" : "link-left"}
                title="Sign In"
                to="/signin"
              >
                <span className="fas fa-user-plus fa-2x" />
              </Link>
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
