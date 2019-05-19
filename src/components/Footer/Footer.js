import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="bg-footer-layer">
        <ul>
          <li>Szymon Oleszek, 2019</li>
          <li>
            <b>Mental math gym</b>
          </li>
          <li>
            <a href="https://www.linkedin.com">
              <span className="fab fa-linkedin fa-lg" />
            </a>
            <a href="https://www.facebook.com">
              <span className="fab fa-facebook-square fa-lg" />
            </a>
            <a href="https://www.github.com">
              <span className="fab fa-github fa-lg" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
