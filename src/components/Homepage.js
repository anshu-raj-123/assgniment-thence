import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import success from "./photos/success.jpg";
import icon from "./photos/icon.png";
import { Askquestions } from "./Askquestions";

export const Homepage = () => {
  return (
    <div>
      <nav>
        <div className="left">
          
          <img src={icon} alt="Icon" />
        </div>
        <div className="right">
          <Link to="/registration">
            <button className="white-button">Get Projects</button>
          </Link>
          <button className="black-button">Onboard Talent</button>
        </div>
      </nav>

      <div className="success-stories-page">
        <div className="success-stories">
          <p className="title">Success Stories</p>
          <h2 className="subtitle">Every success journey</h2>
          <h2 className="subtitle">we've encountered</h2>
        </div>
        <div className="content">
          <div className="image-container">
            <img src={success} alt="Success" />
            <div className="text-container">
              <span className="image-text">$0.5</span>
              <span className="image-text-Million">MILLION</span>
              <p className="image-text-Million">
                Reduced client expenses by on hiring and employee costs.
              </p>
            </div>

            <div className="text-container1">
              <span className="image-text1">40%</span>
              <p className="image-text-Million1">
                Achieved reduction in project execution time by optimising team
                availability.
              </p>
            </div>

            <div className="text-container2">
              <span className="image-text2">10 DAYS</span>
              <p className="image-text-Million2">Staff Deployment</p>
            </div>
          </div>
          <div className="carousel">
            <div className="carousel-items">
              <div className="item">
                Enhance fortune 50 Company's insights teams research capabilites
              </div>
              <div className="item">Lorem ipsum dolor sit amet.</div>
              <div className="item">ipisicing elit. Temporibus, obcaecati!</div>
            </div>
            <div className="dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="explore-more">
              <button className="arrow-button">Explore More</button>
            </div>
          </div>
        </div>
      </div>
      <Askquestions />
    </div>
  );
};
