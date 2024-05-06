import React, { useState } from "react";
import "./Askquestions.css";

export const Askquestions = () => {
  const [expanded, setExpanded] = useState([]);

  const toggleExpansion = (index) => {
    if (expanded.includes(index)) {
      setExpanded(expanded.filter((item) => item !== index));
    } else {
      setExpanded([...expanded, index]);
    }
  };
  return (
    <>
      <div className="ask-questions">
        <div className="left2">
          <p>What's in your mind</p>
          <h2>Ask Questions</h2>
        </div>
        <div className="right2">
          <div className="faq">
            <div className="question">
              <span>Do you offer freelancers?</span>
              <button className="toggle-btn" onClick={() => toggleExpansion(0)}>
                {expanded.includes(0) ? "-" : "+"}
              </button>
            </div>
            {expanded.includes(0) && (
              <div className="answer">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, non?</p>
              </div>
            )}

            <div className="question">
              <span>
                What’s the guarantee that I will be satisfied with the hired
                talent?
              </span>
              <button className="toggle-btn" onClick={() => toggleExpansion(1)}>
                {expanded.includes(1) ? "-" : "+"}
              </button>
            </div>
            {expanded.includes(1) && (
              <div className="answer">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur officia accusantium voluptate.
                </p>
              </div>
            )}

            <div className="question">
              <h3>Can I hire multiple talents at once?</h3>
              <button className="toggle-btn" onClick={() => toggleExpansion(2)}>
                {expanded.includes(2) ? "-" : "+"}
              </button>
            </div>
            {expanded.includes(2) && (
              <div className="answer">
                <p>
                  Yes, you can hire multiple talents for different projects
                  simultaneously.
                </p>
              </div>
            )}

            <div className="question">
              <h3>Why should I not go to an agency directly?</h3>
              <button className="toggle-btn" onClick={() => toggleExpansion(4)}>
                {expanded.includes(4) ? "-" : "+"}
              </button>
            </div>
            {expanded.includes(4) && (
              <div className="answer">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ex quos dolorem ipsa?
                </p>
              </div>
            )}

            <div className="question">
              <h3>
                Who can help me pick a right skillset and duration for me?
              </h3>
              <button className="toggle-btn" onClick={() => toggleExpansion(5)}>
                {expanded.includes(5) ? "-" : "+"}
              </button>
            </div>
            {expanded.includes(5) && (
              <div className="answer">
                <p>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, esse?
                </p>
              </div>
            )}

          </div>
        </div>
      </div>



      <footer className="footer">
      <div className="left1">
        <p>&copy; Talup 2023. All rights reserved</p>
      </div>
      <div className="right1">
        <a href="#">Terms & Conditions</a>
        <a href="#">Privacy Policy</a>
      </div>
    </footer>
    </>
  );
};
