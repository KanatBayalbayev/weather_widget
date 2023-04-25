import React, { useState } from "react";
import "./Input.scss";

const Input = ({ onGetCity }) => {
  const [city, setCity] = useState("");

  const handleForm = (event) => {
    event.preventDefault();
    onGetCity(city);
  };
  return (
    <form className="input-group" onSubmit={handleForm}>
      <input
        type="text"
        name="text"
        required
        autoComplete="off"
        className="input"
        onInput={(event) => setCity(event.target.value)}
      />
      <label className="user-label">Enter your city</label>
      <button type="submit" className="shadow__btn">
        Search
      </button>
    </form>
  );
};

export default Input;
