import React, { useState } from "react";
import "./InputForm.scss";

export default function InputForm({
  id = "",
  type = "text",
  label = "",
  isValid = true,
  value = "",
  handleChange = () => "",
  name,
  errMsg = "",
  onBlur
}) {
  return (
    <div className="input-form">
      <input
        value={value}
        autoComplete="off"
        className={isValid ? "" : "is-invalid"}
        onChange={handleChange}
        onBlur={onBlur}
        type={type}
        id={id}
        name={name}
        autoComplete="off"
      />
      <label htmlFor={id}>{label}</label>
      {isValid ? "" : <span className="show-message">{errMsg}!</span>}
    </div>
  );
}
