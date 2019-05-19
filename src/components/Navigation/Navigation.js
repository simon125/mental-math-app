import React from "react";
import { Link } from "react-router-dom";
import HamburgerMenuButton from "../HamburgerMenuButton/HamburgerMenuButton";
import "./Navigation.scss";

export default function Navigation() {
  return (
    <header>
      <div className="polygon-bg-header">
        <nav>
          <ul>
            <li>
              <Link title="Home" to="/">
                <span className="fas fa-home fa-2x" />
              </Link>
            </li>
            <li>
              <Link title="Log In" to="/login">
                <span className="fas fa-sign-in-alt fa-2x" />
              </Link>
            </li>
            <li>
              <Link title="Sign In" to="/signin">
                <span className="fas fa-user-plus fa-2x" />
              </Link>
            </li>
            <li className="hamburger-btn">
              <HamburgerMenuButton />
            </li>
            <li>
              <Link title="Profile" to="/profile">
                <span className="fas fa-user-alt fa-2x" />
              </Link>
            </li>
            <li>
              <Link title="Math gym" to="/gym">
                <span className="fas fa-dumbbell fa-2x" />
              </Link>
            </li>
            <li>
              <Link title="About" to="/about">
                <span className="fas fa-info-circle fa-3x" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
