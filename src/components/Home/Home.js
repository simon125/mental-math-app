import React from "react";
import { Link } from "react-router-dom";
import "../../images/bg.jpg";
import "./Home.scss";

export default function Home() {
  return (
    <div className="page home-container">
      <section className="home-container__content">
        <h1>Mental math GYM</h1>
        <h3>
          Gain your math mind genius, in mental math GYM it would be easy!
        </h3>
        <div className="home-container__btn-box">
          <Link className="btn btn-outline btn-mobile" to="/signin">
            Create free account <span className="fas fa-user-plus fa-lg" />
          </Link>
          <Link className="btn btn-primary btn-mobile-primary" to="/gym">
            Let's try for free! <span className="fas fa-arrow-right" />
          </Link>
        </div>
      </section>
      <div className="bg-layer" />
    </div>
  );
}
