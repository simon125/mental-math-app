import React from "react";
import { Link } from "react-router-dom";
import "../../images/bg.jpg";
import "./Home.scss";

export default function Home() {
  return (
    <div className="page home-container">
      <section className="home-container__content">
        <h1>Mental math GYM</h1>
        <h4>
          Mental math refers to the practice of doing calculations in your head.
          It is often used as a way to calculate an estimate quickly through the
          use of math facts that have been committed to memory, such as
          multiplication, division, or doubles facts.
        </h4>
        <h4>
          People who master the technique of mental math will find that it helps
          them in many situations, in school and everyday life.
        </h4>
        <div className="home-container__btn-box">
          <Link className="btn btn-outline" to="/signin">
            Create free account <span className="fas fa-user-plus fa-lg" />
          </Link>
          <Link className="btn btn-primary" to="/gym">
            Let's try for free! <span className="fas fa-arrow-right" />
          </Link>
        </div>
      </section>
      <div className="bg-layer" />
    </div>
  );
}
