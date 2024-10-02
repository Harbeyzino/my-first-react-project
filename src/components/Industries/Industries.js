import "./Industries.css";
import image from './web_optimization 1.png';
import image2 from "./Wave(1).png"

export default function Industries () {
    return (
        <div className="wrapper4">
            <div className="content-container">
                <h1>Industries & Expertise </h1>
                <p>A specialist lead generation agency that guides you along the whole road to growth. We help a wide range of B2B, SaaS, and E-commerce clients optimizing and maximizing their digital marketing. We generate unlimited leads for your business using a proven and unique strategy. Along the way, you have a full overview..</p>
            </div>
            <img src={image} className="img1"/>
            <img src={image2} className="wave"/>
        </div>
    );
};