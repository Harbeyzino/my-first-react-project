import React from "react";
import './Industries2.css';
import image from "./b2b.png"
import image1 from "./saas(1).png"
import image2 from "./e-commerce-solution.png"

const Industrie2 = () => {
  return (
    <div className="industries-section">
      <h2>Our industries & expertise</h2>
      <div className="cards-container09">
        <div className="card09">
          <img src={image} alt="SaaS Icon" />
          <h3>SaaS</h3>
          <p>We help a wide range of SaaS companies growing their lead generation online.</p>
        </div>

        <div className="card09">
          <img src={image1} alt="B2B Icon" />
          <h3>B2B</h3>
          <p>Professional funnel advertising optimized for generating leads for B2B.</p>
        </div>

        <div className="card09">
          <img src={image2} alt="E-Commerce Icon" />
          <h3>E-Commerce</h3>
          <p>Grow your Ecommerce company and let us help attract and convert more customers.</p>
        </div>
      </div>
    </div>
  );
};

export default Industrie2;
