import './Input.css'
import React from "react";

const Input = ({ label, type, register, name, required }) => {
  return(
    <div className="form-section">
        <label className="form-label">{label}</label>
        <input className="form-input" type={type} {...register(name, { required })} />
    </div>
  )
};

export default Input;
