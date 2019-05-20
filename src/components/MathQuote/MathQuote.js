import React from "react";
import "./MathQuote.scss";

export default function MathQuote() {
  return (
    <React.Fragment>
      <span className="fas fa-quote-right fa-3x" />
      <h3>
        42 is the number of little squares forming the left side trail of
        Microsoft's Windows 98 logo.
      </h3>
      <span className="fas fa-sync-alt" />
    </React.Fragment>
  );
}
