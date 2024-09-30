import "./Services2.css";
import image from "./Vector(3).png";
import image1 from "./startup.png";
import image2 from "./writer 1.png";

export default function AboutHero() {
    return (
        <div className="services-container">
      <div className="service-card">
        <div className="icon-container">
          <img src={image} alt="Facebook Marketing Icon" />
        </div>
        <h3>Facebook Marketing</h3>
        <p>Facebook Marketing is a large, yet powerful marketing platform that helps businesses connect with their audiences. Leverage targeted advertising, including Facebook ads and organic reach, to grow your following and brand awareness.</p>
        <button className="booking-button">Book a Free 30-minute meeting</button>
      </div>

      <div className="service-card">
        <div className="icon-container">
          <img src={image} alt="Google Marketing Icon" />
        </div>
        <h3>Google Marketing</h3>
        <p>Google Ads is a powerful tool to optimize your online marketing, attract leads, and boost conversions through Google searches. Leverage search ads to maximize your ad efficiency and reach new customers.</p>
        <button className="booking-button">Book a Free 30-minute meeting</button>
      </div>

      <div className="service-card">
        <div className="icon-container">
          <img src={image1} alt="SEO Icon" />
        </div>
        <h3>Search Engine Optimization</h3>
        <p>Maximize your visibility on Google with search engine optimization (SEO). Enhance your rankings, drive more traffic to your site, and grow your brand's online presence.</p>
        <button className="booking-button">Book a Free 30-minute meeting</button>
      </div>

      <div className="service-card">
        <div className="icon-container">
          <img src={image2} alt="Web Content Icon" />
        </div>
        <h3>Web Content</h3>
        <p>Need compelling and engaging content for your website? Our team of expert writers crafts content that is designed to capture attention and engage your target audience.</p>
        <button className="booking-button">Book a Free 30-minute meeting</button>
      </div>
    </div>
    );
};