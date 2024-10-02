import React from "react";
import './Industries4.css';
import image from "./image 2.png"

export default function Industries4 () {
  return (
    <div className="guide-container">
      <div className="image-section">
        <img src={image} alt="SaaS Growth Book" />
      </div>
      <div className="text-section">
        <h2>Get a FREE complete editorial guide for social media growth</h2>
        <p>
          Download your guide filled with clear, actionable tips on how your company 
          can create successful organic content on social media. You’ll find useful 
          statistics as well as real-life examples and insights based on our own experiences 
          as a social media agency.
        </p>
        <button className="download-button">Download Now</button>
      </div>
    </div>
  );
};

