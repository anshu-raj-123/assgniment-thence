import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./SubmissionPage.css";
import icon from "./photos/icon.png";

const SubmissionPage = () => {
    const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (countdown === 0) {
        navigate('/');
      } else {
        setCountdown((prevCount) => prevCount - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, navigate]);

  return (
    <>
      <nav>
        <div className="left5">
          <img src={icon} alt="Icon" />
        </div>
      </nav>
      <div className="submission-page">
        <p className="success-text">Success submitted</p>
        <h2 className="congratulations">Congratulations</h2>
        <p className="success-message">
          Your request has been successfully submitted to us. We will validate
          your information and reach out to you shortly with updates.
        </p>
        <p className="redirect-message">
          Redirecting you to Homepage in {countdown} Seconds
        </p>
      </div>
    </>
  );
};

export default SubmissionPage;
