import React, { useState } from "react";
import "./InputForm.scss";

export default function InputForm({
  id = "",
  type = "text",
  label = "",
  isValid = true,
  value = "",
  handleChange = () => "",
  name
}) {
  return (
    <div className="input-form">
      <input
        value={value}
        autoComplete="off"
        className={!isValid && "is-invalid"}
        onChange={handleChange}
        value={value}
        type={type}
        id={id}
        name={name}
      />
      <label htmlFor={id}>{label}</label>
      <span className={isValid ? "hide-message" : "show-message"}>
        This field is invalid!
      </span>
    </div>
  );
}
