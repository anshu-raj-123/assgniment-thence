import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RegistrationForm.css";
import icon from "./photos/icon.png";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [emailError, setEmailError] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    setIsButtonDisabled(e.target.value === "" || email === "");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsButtonDisabled(e.target.value === "" || name === "");
    validateEmail(e.target.value); 
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(email);
    setEmailError(isValid ? "" : "Enter a valid email address");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <>
      <nav>
        <div className="left5">
          <img src={icon} alt="Icon" />
        </div>

        <div className="right5">
          <Link to="/">X</Link>
        </div>
      </nav>
      <div className="registration-form">
        <h2>Registration Form</h2>
        <p>Start your success journey here!</p>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
            />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              />
          </div>
              {emailError && <p className="error">{emailError}</p>}
              <Link to='/submission'>
          <button type="submit" disabled={isButtonDisabled}>
            Submit
          </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
