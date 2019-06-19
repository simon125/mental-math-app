import React from "react";
import "./HamburgerMenuButton.scss";

export default function HamburgerMenuButton({ handleClick, state }) {
  return (
    <button
      onClick={handleClick}
      className={state ? "hamburger" : "hamburger active"}
    />
  );
}
